import Controls from "./Controls.tsx";
import {ListGroup} from "react-bootstrap";
import {BsGripVertical} from "react-icons/bs";
import ModuleControlButtons from "../Modules/ModuleControlButtons.tsx";
import LessonControlButtons from "../Modules/LessonControlButtons.tsx";
import AssignmentIcons from "./AssignmentIcons.tsx";
import {Link, useParams} from "react-router-dom";
import * as db from "../../Database";

export default function Assignments() {
    const { cid } = useParams();
    const assignments = db.assignments.filter(
        (assignment) => assignment.course === cid
    );

    return (
        <div id="wd-assignment-view">
            <Controls/>
            <div className="mt-5">
                <ListGroup className="rounded-0" id="wd-modules">
                    <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                        <div
                            className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <BsGripVertical className="me-2 fs-3"/>
                                <span>ASSIGNMENTS</span>
                            </div>
                            <ModuleControlButtons/>
                        </div>

                        <ListGroup className="wd-lessons rounded-0">
                            {assignments.map((assignment) => (
                                <ListGroup.Item
                                    className="wd-lesson p-3 ps-1"
                                    as={Link}
                                    to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}>
                                    <div>
                                        <AssignmentIcons/>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div>
                                                <a href={`#/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                                                   className="wd-assignment-link"
                                                   style={{
                                                       fontSize: '20px',
                                                       fontWeight: '500',
                                                       textDecoration: 'none',
                                                       color: 'black'
                                                   }}>
                                                    {assignment.title}
                                                </a>
                                                <div className="fs-6">
                                                    <span className="text-danger">Multiple Modules</span> |
                                                    <strong> Not available until</strong> {assignment.available} |
                                                    <strong> Due</strong> {assignment.due} | {assignment.points} pts
                                                </div>
                                            </div>
                                            <LessonControlButtons/>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                            ))}

                        </ListGroup>
                    </ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    );
}