import {Link} from "react-router-dom";
import {Button, Card, FormControl} from "react-bootstrap";
import FacultyRouteProtected from "./Account/FacultyRouteProtected.tsx";
import StudentRouteProtected from "./Account/StudentRouteProtected.tsx";

export default function Dashboard({
                                      courses = [],
                                      enrolling,
                                      setEnrolling,
                                      addNewCourse,
                                      deleteCourse,
                                      updateCourse,
                                      updateEnrollment,
                                      course,
                                      setCourse
                                  }: {
    courses: any[];
    enrolling: boolean;
    setEnrolling: (enrolling: boolean) => void;
    addNewCourse: () => void;
    deleteCourse: (course: any) => void;
    updateCourse: () => void;
    updateEnrollment: (courseId: string, enrolled: boolean) => void;
    course: any;
    setCourse: (course: any) => void;
}) {
    const safeCourses = Array.isArray(courses) ? courses : [];

    return (
        <div className="p-4" id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr/>
            <FacultyRouteProtected studentAccess={<></>}>
                <h5>New Course
                    <button className="btn btn-primary float-end"
                            id="wd-add-new-course-click"
                            onClick={addNewCourse}> Add </button>
                    <button className="btn btn-warning float-end me-2"
                            onClick={updateCourse} id="wd-update-course-click">
                        Update
                    </button>
                </h5>
                <br/>
                <FormControl value={course.name} className="mb-2"
                             onChange={(e) => setCourse({...course, name: e.target.value})}/>
                <FormControl value={course.description}
                             onChange={(e) => setCourse({...course, description: e.target.value})}/>
                <hr/>
            </FacultyRouteProtected>
            <div className="d-flex justify-content-between align-items-center">
                <h2 id="wd-dashboard-published">Published Courses ({safeCourses.length})</h2>
                <StudentRouteProtected facultyAccess={<></>}>
                <button onClick={() => setEnrolling(!enrolling)} className="float-end btn btn-primary">
                        {enrolling ? "My Courses" : "All Courses"}
                    </button>
                </StudentRouteProtected>
            </div>
            <hr/>
            <div className="row" id="wd-dashboard-courses">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {safeCourses.map((course: any) =>
                        course && course._id ? (
                            <div key={course._id} className="col" style={{width: "300px"}}>
                                <div className="card">
                                    <Card>
                                        <Link to={`/Kambaz/Courses/${course._id}/Home`}
                                              className="wd-dashboard-course-link text-decoration-none text-dark">
                                            <Card.Img src="/images/react.svg" variant="top" width="100%"
                                                      height={160}/>
                                            <Card.Body className="card-body">
                                                <Card.Title
                                                    className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                                    {course.name} </Card.Title>
                                                <Card.Text className="wd-dashboard-course-description overflow-hidden"
                                                           style={{height: "100px"}}>
                                                    {course.description} </Card.Text>
                                                <Button variant="primary"> Go </Button>

                                                <FacultyRouteProtected studentAccess={<></>}>
                                                    <button onClick={(event) => {
                                                        event.preventDefault();
                                                        deleteCourse(course._id);
                                                    }} className="btn btn-danger float-end"
                                                            id="wd-delete-course-click">
                                                        Delete
                                                    </button>
                                                    <button id="wd-edit-course-click"
                                                            onClick={(event) => {
                                                                event.preventDefault();
                                                                setCourse(course);
                                                            }}
                                                            className="btn btn-warning me-2 float-end">
                                                        Edit
                                                    </button>
                                                </FacultyRouteProtected>

                                                <StudentRouteProtected facultyAccess={<></>}>
                                                    {enrolling && (
                                                        <button
                                                            onClick={(event) => {
                                                                event.preventDefault();
                                                                updateEnrollment(course._id, !course.enrolled);
                                                            }}
                                                            className={`btn ${course.enrolled ? "btn-danger" : "btn-success"} float-end`}>
                                                            {course.enrolled ? "Unenroll" : "Enroll"}
                                                        </button>
                                                    )}
                                                </StudentRouteProtected>
                                            </Card.Body>
                                        </Link>
                                    </Card>
                                </div>
                            </div>
                        ) : null)}
                </div>
            </div>
        </div>
    );
}


