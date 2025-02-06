import Controls from "./Controls.tsx";
import {ListGroup} from "react-bootstrap";
import {BsGripVertical} from "react-icons/bs";
import ModuleControlButtons from "../Modules/ModuleControlButtons.tsx";
import LessonControlButtons from "../Modules/LessonControlButtons.tsx";
import AssignmentIcons from "./AssignmentIcons.tsx";

export default function Assignments() {
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
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                <div>
                                    <AssignmentIcons/>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <a href="#/Kambaz/Courses/1234/Assignments/123"
                                               className="wd-assignment-link"
                                               style={{
                                                   fontSize: '20px',
                                                   fontWeight: '500',
                                                   textDecoration: 'none',
                                                   color: 'black'
                                               }}>
                                                A1
                                            </a>
                                            <div className="fs-6">
                                                <span className="text-danger">Multiple Modules</span> |
                                                <strong> Not available until</strong> February 17 at 12:00am |
                                                <strong> Due</strong> February 24  at 11:59pm | 100 pts
                                            </div>
                                        </div>
                                        <LessonControlButtons/>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                <div>
                                    <AssignmentIcons/>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <a href="#/Kambaz/Courses/1234/Assignments/123"
                                               className="wd-assignment-link"
                                               style={{
                                                   fontSize: '20px',
                                                   fontWeight: '500',
                                                   textDecoration: 'none',
                                                   color: 'black'
                                               }}>
                                                A2
                                            </a>
                                            <div className="fs-6">
                                                <span className="text-danger">Multiple Modules</span> |
                                                <strong> Not available until</strong> March 8 at 12:00am |
                                                <strong> Due</strong> March 15 at 11:59pm | 100 pts
                                            </div>
                                        </div>
                                        <LessonControlButtons/>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                <div>
                                    <AssignmentIcons/>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <a href="#/Kambaz/Courses/1234/Assignments/123"
                                               className="wd-assignment-link"
                                               style={{
                                                   fontSize: '20px',
                                                   fontWeight: '500',
                                                   textDecoration: 'none',
                                                   color: 'black'
                                               }}>
                                                A3
                                            </a>
                                            <div className="fs-6">
                                                <span className="text-danger">Multiple Modules</span> |
                                                <strong> Not available until</strong> April 12 at 12:00am |
                                                <strong> Due</strong> April 19 at 11:59pm | 100 pts
                                            </div>
                                        </div>
                                        <LessonControlButtons/>
                                    </div>
                                </div>
                            </ListGroup.Item>
                        </ListGroup>
                    </ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    );
}