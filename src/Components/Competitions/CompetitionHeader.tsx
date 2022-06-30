import {Col, Container, Row} from "react-bootstrap";



const CompetitionHeader = () =>{

    return (
        <>
            <Container>
                <Row  className="justify-content-md-center">
                    <Col id="CompetitionName">
                        <h1> NAZWA ZAWODÓW</h1>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mt-5">
                    <Col id="Date" className="competitionDetails" md={3}>
                            <h2> 10.02.2020</h2>
                    </Col>
                    <Col id="City" className="competitionDetails" md={{ span: 3, offset: 2 }}>
                        <h2> Kraków, Polska</h2>
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default CompetitionHeader;