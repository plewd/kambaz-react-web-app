import { Link } from "react-router-dom";
import {Button, Card, Col, Row} from "react-bootstrap";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr/>
            <h2 id="wd-dashboard-published">Published Courses (7)</h2>
            <hr/>
            <div id="wd-dashboard-courses">
                <Row xs={1} md={5} className="g-4">
                    <Col className="wd-dashboard-course" style={{width: "300px"}}>
                        <Card>
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                  to="/Kambaz/Courses/1234/Home">
                                <Card.Img variant="top" src="/images/react.svg" width="100%" height={160}/>
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS1234 React JS</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">Full Stack software
                                        developer</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{width: "300px"}}>
                        <Card>
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                  to="/Kambaz/Courses/1234/Home">
                                <Card.Img variant="top" src="/images/webdev.png" width="100%" height={160}/>
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS4550 Web Development</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">Full Stack software
                                        developer</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{width: "300px"}}>
                        <Card>
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                  to="/Kambaz/Courses/1234/Home">
                                <Card.Img variant="top" src="/images/database.jpg" width="100%" height={160}/>
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS3200 Introduction to Databases</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">Backend developer</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{width: "300px"}}>
                        <Card>
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                  to="/Kambaz/Courses/1234/Home">
                                <Card.Img variant="top" src="/images/computersystems.png" width="100%" height={160}/>
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS3650 Computer Systems</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">Computer Systems developer</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{width: "300px"}}>
                        <Card>
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                  to="/Kambaz/Courses/1234/Home">
                                <Card.Img variant="top" src="/images/algo.jpeg" width="100%" height={160}/>
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS3000 Algorithms & Data</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">Technical Interview Pro</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{width: "300px"}}>
                        <Card>
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                  to="/Kambaz/Courses/1234/Home">
                                <Card.Img variant="top" src="/images/improv.jpg" width="100%" height={160}/>
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">THTR1125 Improvisation</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">Actor</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{width: "300px"}}>
                        <Card>
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                  to="/Kambaz/Courses/1234/Home">
                                <Card.Img variant="top" src="/images/northeastern.jpg" width="100%" height={160}/>
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">COOP3945 Co-op Work Experience</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">Intern</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>

    );
}
