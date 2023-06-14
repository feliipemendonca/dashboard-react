import { CardHeader, Row, Button } from "reactstrap"

export const CardHeaders = props => {
    console.log(props)
    return (
        <CardHeader className="border-0">
            <Row className="align-items-center">
                <div className="col">
                    <h3 className="mb-0">{props.title}</h3>
                </div>
                {props.link && (
                    <div className="col text-right">
                        <Button color="primary" href={props.link} size="sm">
                            {props.titleButton}
                        </Button>
                    </div>
                )}
            </Row>
        </CardHeader>
    )
}