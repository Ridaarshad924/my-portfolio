import { Container } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <>
            <Container maxWidth={false} style={{ marginTop: "1rem", padding: "1rem", backgroundColor: "black", position: "fixed", bottom: "0" }}>
                <hr style={{width: "100%", backgroundColor: "rgba(218, 165, 32, 1)", height: "2px", border: "none", margin: "0" }} />
                <p style={{ textAlign: "center", paddingTop: "1rem", fontWeight: "bold" }}>© RidaArshad. All Rights Reserved. Designed by Rida Arshad.</p>
            </Container>
        </>
    )
}

export default Footer
