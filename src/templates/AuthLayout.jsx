import React, { useEffect } from "react"
import { Container, Row } from "reactstrap"

export const AuthLayout = ({children}) => {

    useEffect(() => {
        document.body.classList.add('bg-gradient-info')
        return () => {
            document.body.classList.add('bg-gradient-info')
        }
    }, [])

    return(
        <main className="main-content">
            <div className="header bg-gradient-info py-7 py-lg-8">
                <Container className="mt--5 pb-5">
                    <Row className="justify-content-center flex-column align-items-center">
                        {children}
                    </Row>
                </Container>
            </div>
        </main>
    )
}