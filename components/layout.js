import Navbar from './navbar'
import Footer from './footer'
import { Container } from '@mui/material'

export default function Layout({ children }) {
    return (
        <>
            {/* <Navbar /> */}
            <main>
                <Container
                    maxWidth="md"
                    sx={{
                        // border: '1px solid red',
                        // borderRadius: '5px',
                    }}>
                    {children}
                </Container>
            </main>
            {/* <Footer /> */}
        </>
    )
}