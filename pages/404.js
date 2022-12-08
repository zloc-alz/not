import { Box, Button, Card } from "@mui/material"
import Link from "next/link"

const NotFound = () => {
    return (
        <>
            <Box sx={{
                margin: 1,
            }}>
                <Card variant="outlined" sx={{
                    padding: 2,
                }}>
                    <p>No note found that matches the ID.</p>
                    <Link href="/">
                        <Button variant="outlined">Create a note</Button>
                    </Link>
                </Card>
            </Box>
        </>
    )
}

export default NotFound