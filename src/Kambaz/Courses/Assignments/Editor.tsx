import { Button, Form, FormControl, FormGroup, FormLabel, FormSelect, InputGroup } from "react-bootstrap";
import {useParams} from "react-router-dom";
import * as db from "../../Database";

export default function AssignmentEditor() {
    const {aid} = useParams();
    const { cid } = useParams();
    const assignment = db.assignments.find(
        (assignment) => assignment._id === aid && assignment.course === cid
    );

    return (
        <div>
            <FormGroup className="mb-3">
                <FormLabel>ASSIGNMENT NAME</FormLabel>
                <FormControl placeholder={assignment?.title}/>
            </FormGroup>

            <FormGroup className="mb-3">
                <FormLabel>Assignment Instructions</FormLabel>
                <FormControl
                    as="textarea"
                    style={{height: "250px"}}
                    rows={5}
                    placeholder={assignment?.description}
                />
            </FormGroup>

            <FormGroup className="mb-3 d-flex align-items-center">
                <div className="wd-grid-col-third-page text-end pe-2">
                    Points
                </div>
                <div className="wd-grid-col-two-thirds-page">
                    <FormControl type="number" placeholder={assignment?.points.toString()}/>
                </div>
            </FormGroup>

            <FormGroup className="mb-3 d-flex align-items-center">
                <div className="wd-grid-col-third-page text-end pe-2">
                    Assignment Group
                </div>
                <div className="wd-grid-col-two-thirds-page">
                    <FormSelect>
                        <option value="1">ASSIGNMENTS</option>
                    </FormSelect>
                </div>
            </FormGroup>

            <FormGroup className="mb-3 d-flex align-items-center">
                <div className="wd-grid-col-third-page text-end pe-2">
                    Display Grade as
                </div>
                <div className="wd-grid-col-two-thirds-page">
                    <FormSelect>
                        <option value="1">Percentage</option>
                    </FormSelect>
                </div>
            </FormGroup>

            <FormGroup className="mb-3 d-flex">
                <div className="wd-grid-col-third-page text-end pe-2">
                    Submission Type
                </div>
                <div className="wd-grid-col-two-thirds-page">
                    <div className="wireframe p-3">
                        <FormSelect>
                            <option value="1">Online</option>
                        </FormSelect>
                        <div className="p-2 mt-3">
                            <strong>Online Entry Options</strong>
                            <div className="mt-2">
                                <Form.Check label="Text Entry"/>
                                <Form.Check label="Website URL"/>
                                <Form.Check label="Media Recordings"/>
                                <Form.Check label="Student Annotation"/>
                                <Form.Check label="File Uploads"/>
                            </div>
                        </div>
                    </div>
                </div>
            </FormGroup>

            <FormGroup className="mb-3 d-flex">
                <div className="wd-grid-col-third-page text-end pe-2">
                    Assign
                </div>
                <div className="wireframe wd-grid-col-two-thirds-page">
                    <div className="p-3">
                        <FormGroup>
                            <Form.Label><strong>Assign to</strong></Form.Label>
                            <FormControl placeholder="Everyone"/>
                        </FormGroup>

                        <FormGroup>
                            <Form.Label>Due</Form.Label>
                            <InputGroup>
                                <FormControl type="date"/>
                            </InputGroup>
                        </FormGroup>

                        <div className="wd-grid-col-half-page pe-2">
                            <FormGroup>
                                <Form.Label>Available from</Form.Label>
                                <InputGroup>
                                    <FormControl type="date"/>
                                </InputGroup>
                            </FormGroup>
                        </div>

                        <div className="wd-grid-col-half-page pe-2">
                            <FormGroup>
                                <Form.Label>Until</Form.Label>
                                <InputGroup>
                                    <FormControl type="date"/>
                                </InputGroup>
                            </FormGroup>
                        </div>
                    </div>
                </div>
            </FormGroup>
            
            <hr/>

            <div className="text-nowrap">
                <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-module-btn">
                    Save
                </Button>
                <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-view-progress">
                    Cancel
                </Button>
            </div>
        </div>
    );
}
