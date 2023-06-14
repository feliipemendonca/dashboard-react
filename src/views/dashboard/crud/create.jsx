import { Button, Card, CardBody, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap"
import { DashboadLayout } from "../../../templates/DashboadLayout"
import { CardHeaders } from "../../../components/Cards/Header"

export const CrudCreate = _ => {
    return (
        <DashboadLayout>
            <Container fluid className='mt--5'>
                <Card className='shadow'>
                    <CardHeaders title="Crud Create" /> 
                    <CardBody>
                        <Form>
                            <Row>
                                <Col sm="12">
                                    <FormGroup>
                                        <Label for="title">Title</Label>
                                        <Input name="title" placeholder="Title" />
                                    </FormGroup>
                                </Col>
                                <Col sm="12">
                                    <FormGroup>
                                        <Label for="text">Text</Label>
                                        <Input type="textarea" name="texts" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="d d-flex justify-content-between">
                                    <Button color="danger" onClick={_ => window.history.back()}>Back</Button>
                                    <Button color="info" type="button">Submit</Button>                                   
                                </Col>
                            </Row>
                        </Form>
                    </CardBody>
                </Card>
            </Container>
        </DashboadLayout>
    )
}