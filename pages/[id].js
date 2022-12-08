import { Badge, Box, Button, Card, Divider } from "@mui/material";
import { PrismaClient } from '@prisma/client'
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import VpnKeyIcon from '@mui/icons-material/VpnKey';

export default function Note({ message }) {
    const router = useRouter()
    const { id } = router.query


    const [note, setNote] = useState("")
    const [revealed, setRevealed] = useState(false)
    const handleDelete = async (id) => {
        revealed ?
            setRevealed(false) :
            setRevealed(true)
        setNote(message)
        console.log(id);

        try {
            const deleteResponse = await fetch(`/api/note/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                },
                method: 'DELETE'
            })
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <>
            <div>
                <Box
                    sx={{
                        margin: 1,
                    }}
                    elevation="24"
                >
                    <Card
                        variant="outlined"
                        sx={{
                            padding: 2,
                            display: "flex",
                            gap: 3
                        }}
                    >
                        <Badge
                            color={revealed ? "success" : "secondary"}
                            variant="dot">
                            <VpnKeyIcon />
                        </Badge>
                        {id}
                        <Divider orientation="vertical" flexItem />
                        {revealed === false &&
                            <Button
                                variant="outlined"
                                onClick={() => handleDelete(id)}
                            >
                                Read and delete this note?
                            </Button>
                        }
                        {revealed &&
                            <Box sx={{
                                gap: 1,
                                display: 'flex',
                            }}>
                                <Box>

                                    <Card variant="outlined" sx={{
                                        padding: 2,
                                        marginBottom: 2,
                                    }}
                                    >
                                        <p>{note}</p>
                                    </Card>
                                    <Link href="/">
                                        <Button variant="outlined">Create a new note</Button>
                                    </Link>
                                </Box>
                            </Box>

                        }
                    </Card>
                </Box>
            </div>
        </>
    )
}

export async function getServerSideProps({ params }) {
    const prisma = new PrismaClient
    const message = await prisma.message.findUnique({
        where: {
            id: params.id
        }
    })

    if (!message) {
        return {
            notFound: true,
        }

    }
    return {
        props: { message: message.message },
    }

}