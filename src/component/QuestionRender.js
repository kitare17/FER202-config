import { Question } from './question';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
const QuestionRender = () => {
    const questionData = Question
    return (
        <div>
            <Container>
                <Row>
                    {questionData.map((question) => {

                        return (
                            <Col md={6}  className='d-flex justify-content-center mt-2 mb-2' >
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>{question.text}</Card.Title>
                                        <Card.Text>
                                            {question.options.map((choice)=>{
                                                return(
                                                    <p>{choice}</p>
                                                )
                                            })}
                                        </Card.Text>
                                        <Link variant="primary" to={`question/${question.id}`} className='btn btn-primary'>Detail</Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}
export default QuestionRender