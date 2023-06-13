import { useState } from "react"
import { Button, Card, CardBody, FormGroup, Form, Input, InputGroupText, InputGroup, Col } from "reactstrap"

export const LoginElement = props => {
    console.log(props)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [submit, setSubmit] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCallback({
            email: email,
            password: password,
            submit: submit
        })
    }
    return (
        <>
            <Col lg="5" md="7">
                <Card className="bg-secondary shadow border-0">
                    <CardBody className="px-lg-5 py-lg-5">
                        <div className="text-center text-muted mb-4">
                            <small>Sign in with credentials</small>
                        </div>
                        <Form role="form" onSubmit={handleSubmit}>
                            <FormGroup className="mb-3">
                                <InputGroup className="input-group-alternative">
                                    <div className="input-group-append">
                                        <InputGroupText>
                                            <i className="ni ni-email-83" />
                                        </InputGroupText>
                                    </div>
                                    <Input placeholder="Email" type="email" name="email" autoComplete="new-email" value={email} onChange={e => setEmail(e.target.value)} />
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <InputGroup className="input-group-alternative">
                                    <div className="input-group-append">
                                        <InputGroupText>
                                            <i className="ni ni-lock-circle-open" />
                                        </InputGroupText>
                                    </div>
                                    <Input placeholder="Password" type="password" autoComplete="new-password" value={password} onChange={e => setPassword(e.target.value)} />
                                </InputGroup>
                            </FormGroup>
                            <div className="custom-control custom-control-alternative custom-checkbox">
                                <input className="custom-control-input" id=" customCheckLogin" type="checkbox"/>
                                <label className="custom-control-label" htmlFor=" customCheckLogin">
                                    <span className="text-muted">Remember me</span>
                                </label>
                            </div>
                            <div className="text-center">
                                <Button className="my-4 bg-gradient-info text-white border-0" type="submit" onClick={e => setSubmit(true)}>Sign in</Button>
                            </div>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </>
    )
}