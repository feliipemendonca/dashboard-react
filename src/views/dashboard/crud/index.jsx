import { Card, Container } from "reactstrap"
import { DashboadLayout } from "../../../templates/DashboadLayout"
import { CardHeaders } from "../../../components/Cards/Header"

export const Crud= _ => {
    return (
        <DashboadLayout>
            <Container fluid className='mt--5'>
                <Card className='shadow'>
                    <CardHeaders title="Crud" titleButton="Adicionar" link="/dashboard/crud/create" />
                </Card>
            </Container>
        </DashboadLayout>
    )
}