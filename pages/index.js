import { Box, Button, ButtonGroup, Card, TextField, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import copy from 'copy-to-clipboard'

export default function Home() {
  const [message, setMessage] = useState("")
  const [messageId, setMessageId] = useState("")
  const [noteSent, setNoteSent] = useState(false)
  const [copyText, setCopyText] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const body = { message }
    try {
      const response = await fetch('/api/Message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
      const id = await response.json()
      if (response.status !== 200) {
        console.log('something went wrong')
        //set an error banner here
      } else {
        resetForm()
        console.log('form submitted')
        //set a success banner here
        setMessageId(id)
        setNoteSent(true)
      }
      //check response, if success is false, dont take them to success page
    } catch (error) {
      console.log('there was an error submitting', error)
    }
  }

  const copyToClipboard = (id) => {
    const fullUrl = `www.notez.gg/${id}`
    setCopyText(fullUrl)
    copy(copyText)
  }

  const resetForm = () => {
    setMessage("")
  }

  return (
    <div>
      <Box
        component="form"
        sx={{
          marginTop: 1,
          transition: 'all 0.5s ease',
          // ":hover": {
            // backgroundColor: "rgba(145, 92, 182, 1)",
            // boxShadow: `0 5px 15px ${primary.main}`,
          // }
        }}
        noValidate
        autoComplete="off"
        action="#"
        method="POST"
        onSubmit={(e) => handleSubmit(e)}
      >
        <Card
          variant="outlined" sx={{
            padding: 2
          }}>
          <TextField
            type="text"
            name="message"
            id="outlined-basic"
            fullWidth
            multiline
            minRows={8}
            label="Message"
            variant="outlined"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            sx={{
              marginBottom: 2,
            }}
          />
          <Button disableRipple="true" variant="outlined" type="submit">
            Create Note
          </Button>
          {noteSent &&
            <Box>
              <p>Note created!</p>
              <ButtonGroup variant="outlined" aria-label="outlined primary button group">
                <Button disableRipple="true">
                  <Link href={`/${messageId}`}>
                    {`www.notez.gg/${messageId}`}
                  </Link>
                </Button>
                <Button onClick={() => copyToClipboard(messageId)}>
                  <ContentCopyIcon />
                </Button>
              </ButtonGroup>
            </Box>
          }
        </Card>
      </Box>
    </div>
  )
}
