import { Form, Button, Row, Col } from "react-bootstrap";
import "../../styles.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import { v4 as uuidv4 } from "uuid";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";

export default function AssignmentEditor() {
    const navigate = useNavigate();
    const { aid, cid } = useParams();
    const assignments = useSelector(
        (state: any) => state.assignmentsReducer.assignments
    );
    const dispatch = useDispatch();
    const assignment = assignments.find(
        (assignment: any) => assignment._id === aid
    );
    const [title, setTitle] = useState(assignment ? assignment.title : "");
    const [description, setDescription] = useState(
        assignment ? assignment.description : ""
    );
    const [points, setPoints] = useState(assignment ? assignment.points : "");
    const [dueDate, setDueDate] = useState(assignment ? assignment.dueDate : "");
    const [availableFrom, setAvailableFrom] = useState(
        assignment ? assignment.availableDate : ""
    );

    const createNewAssignmentForCourse = async () => {
        if (!cid) return;
        const newAssignment = {
            _id: aid ? aid : uuidv4(),
            title,
            description,
            points,
            dueDate,
            availableDate: availableFrom,
            course: cid,
            modules: [],
        };
        if (aid && assignment) {
            saveAssignment(newAssignment);
        } else {
            const assignment = await coursesClient.createAssignmentForCourse(
                cid,
                newAssignment
            );
            dispatch(addAssignment(assignment));
        }
        navigate(`/Kambaz/Courses/${cid}/Assignments/`);
    };
    const saveAssignment = async (assignment: any) => {
        await assignmentsClient.updateAssignment(assignment);
        dispatch(updateAssignment(assignment));
    };

    return (
        <div id="wd-assignments-editor">
            <Form>
                <Form.Group id="wd-name">
                    <Form.Label>
                        <b>Assignment Name</b>
                    </Form.Label>
                    <Form.Control
                        className="mb-2"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Form.Group>

                <Form.Group id="wd-description">
                    <Form.Label>
                        <b>Description</b>
                    </Form.Label>
                    <Form.Control
                        className="mb-3"
                        as="textarea"
                        rows={3}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </Form.Group>

                <Form.Group as={Row} id="wd-points">
                    <Form.Label column sm={3}>
                        <b> Points</b>
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            className="mb-4"
                            type="number"
                            value={points}
                            onChange={(e) => setPoints(e.target.value)}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} id="wd-group">
                    <Form.Label column sm={3}>
                        <b>Assignment Group</b>
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control as="select">
                            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                        </Form.Control>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} id="wd-display-grade-as">
                    <Form.Label column sm={3}>
                        <b>Display Grade as</b>
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control as="select">
                            <option value="PERCENTAGE">Percentage</option>
                        </Form.Control>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} id="wd-submission-type">
                    <Form.Label column sm={3}>
                        <b>Submission Type</b>
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control as="select">
                            <option value="ONLINE">Online</option>
                        </Form.Control>
                        <br />
                        <b>Online Entry Options</b>
                        <Form.Check type="checkbox" label="Text Entry" id="wd-text-entry" />
                        <Form.Check
                            type="checkbox"
                            label="Website URL"
                            id="wd-website-url"
                        />
                        <Form.Check
                            type="checkbox"
                            label="Media Recordings"
                            id="wd-media-recordings"
                        />
                        <Form.Check
                            type="checkbox"
                            label="Student Annotation"
                            id="wd-student-annotation"
                        />
                        <Form.Check
                            type="checkbox"
                            label="File Uploads"
                            id="wd-file-upload"
                        />
                        <br />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="wd-assign-to">
                    <Form.Label column sm={3}>
                        <b>Assign to</b>
                    </Form.Label>
                    <Col sm={9}>
                        <div className="fake-multiselect">
                            <Button variant="secondary" className="multiselect-tag">
                                Everyone X
                            </Button>
                        </div>

                        <b>Due</b>
                        <Form.Control
                            className="mb-2"
                            type="date"
                            value={dueDate}
                            onChange={(e) => setDueDate(e.target.value)}
                        />

                        <Row>
                            <Col sm={6}>
                                <Form.Label>
                                    <b>Available From</b>
                                </Form.Label>
                                <Form.Control
                                    type="date"
                                    value={availableFrom}
                                    onChange={(e) => setAvailableFrom(e.target.value)}
                                    id="wd-available-from"
                                />
                            </Col>
                            <Col sm={6}>
                                <Form.Label>
                                    <b>Until</b>
                                </Form.Label>
                                <Form.Control
                                    type="date"
                                    value={dueDate}
                                    onChange={(e) => setDueDate(e.target.value)}
                                    id="wd-available-until"
                                />
                            </Col>
                        </Row>
                    </Col>
                </Form.Group>

                <hr />

                <Form.Group>
                    <Row>
                        <Col className="text-end">
                            <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
                                <Button variant="secondary" className="me-2">
                                    Cancel
                                </Button>
                            </Link>
                            <Button variant="danger" onClick={createNewAssignmentForCourse}>
                                Save
                            </Button>
                        </Col>
                    </Row>
                </Form.Group>
            </Form>
        </div>
    );
}