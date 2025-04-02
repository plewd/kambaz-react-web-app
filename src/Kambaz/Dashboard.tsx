import { Button, Card, Col, FormControl, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import FacultyRouteProtected from "./Account/FacultyRouteProtected";
import { useEffect, useState } from "react";
import StudentRouteProtected from "./Account/StudentRouteProtected";
import { setEnrollments } from "./Courses/reducer";
import * as coursesClient from "./Courses/client";
import * as userClient from "./Account/client";

export default function Dashboard({
                                      courses,
                                      course,
                                      setCourse,
                                      addNewCourse,
                                      deleteCourse,
                                      updateCourse,
                                  }: {
    courses: any;
    course: any;
    setCourse: (course: any) => void;
    addNewCourse: () => void;
    deleteCourse: (course: any) => void;
    updateCourse: () => void;
}) {
    const navigate = useNavigate();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const [allCourses, setAllCourses] = useState<any[]>([]);
    const [showAllCourses, setShowAllCourses] = useState(false);

    const fetchCourses = async () => {
        try {
            const allCourses = await coursesClient.fetchAllCourses();
            console.log("Fetched Courses:", allCourses);
            console.log("Courses:", courses);
            setAllCourses(allCourses);
            courses = await userClient.findMyCourses();
        } catch (error) {
            console.error("Error fetching courses:", error);
        }
    };
    const handleAddUser = async (courseId: string) => {
        try {
            await coursesClient.addUserToCourse(courseId, currentUser._id);
            const updatedEnrollments = await coursesClient.findEnrollmentsForCourse(
                courseId
            );
            setEnrollments(updatedEnrollments || []);
            window.location.reload();
            alert("User added");
        } catch (error) {
            console.error("Error adding user to course:", error);
            alert("Failed to add user. Please try again.");
        }
    };
    const handleDeleteUser = async (courseId: string) => {
        try {
            await coursesClient.deleteUserFromCourse(courseId, currentUser._id);
            courses = await userClient.findMyCourses();
            window.location.reload();
            alert("User unenrolled successfully!");
        } catch (error) {
            console.error("Error deleting user from course:", error);
            alert("Failed to delete user. Please try again.");
        }
    };

    useEffect(() => {
        fetchCourses();
    }, []);

    return (
        <div id="wd-dashboard">
            <div className="d-flex justify-content-between align-items-center w-100">
                <h1 id="wd-dashboard-title">Dashboard</h1>
                <StudentRouteProtected facultyAccess={<></>}>
                    <button
                        className="btn btn-primary float-end"
                        onClick={() => setShowAllCourses(!showAllCourses)}
                    >
                        Enrollments
                    </button>
                </StudentRouteProtected>
            </div>
            <hr />
            <FacultyRouteProtected studentAccess={<></>}>
                <h5>
                    New Course
                    <button
                        className="btn btn-primary float-end"
                        id="wd-add-new-course-click"
                        onClick={addNewCourse}
                    >
                        Add
                    </button>
                    <button
                        className="btn btn-warning float-end me-2"
                        onClick={updateCourse}
                        id="wd-update-course-click"
                    >
                        Update
                    </button>
                </h5>
                <br />
                <FormControl
                    value={course.name}
                    className="mb-2"
                    onChange={(e) => setCourse({ ...course, name: e.target.value })}
                />
                <FormControl
                    value={course.description}
                    onChange={(e) =>
                        setCourse({ ...course, description: e.target.value })
                    }
                />
                <hr />
            </FacultyRouteProtected>
            <h2 id="wd-dashboard-published">
                Published Courses ({(showAllCourses ? allCourses : courses).length})
            </h2>
            <hr />
            <div id="wd-dashboard-courses">
                <Row xs={1} md={5} className="g-4">
                    {(showAllCourses ? allCourses : courses).map(
                        (course: any) => (
                            <Col
                                className="wd-dashboard-course"
                                style={{ width: "300px" }}
                                key={course._id}
                            >
                                <Card>
                                    <Card.Img
                                        src={`/images/react.svg`}
                                        variant="top"
                                        width="100%"
                                        height={160}
                                    />
                                    <Card.Body className="card-body">
                                        <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                            {course.name}{" "}
                                        </Card.Title>
                                        <Card.Text
                                            className="wd-dashboard-course-description overflow-hidden"
                                            style={{ height: "100px" }}
                                        >
                                            {course.description}{" "}
                                        </Card.Text>
                                        <FacultyRouteProtected studentAccess={<></>}>
                                            <Button
                                                onClick={() =>
                                                    navigate(`/Kambaz/Courses/${course._id}/Home`)
                                                }
                                                variant="primary"
                                            >
                                                Go
                                            </Button>
                                            <button
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    deleteCourse(course._id);
                                                }}
                                                className="btn btn-danger float-end"
                                                id="wd-delete-course-click"
                                            >
                                                Delete
                                            </button>
                                            <button
                                                id="wd-edit-course-click"
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    setCourse(course);
                                                }}
                                                className="btn btn-warning me-2 float-end"
                                            >
                                                Edit
                                            </button>
                                        </FacultyRouteProtected>
                                        <StudentRouteProtected facultyAccess={<></>}>
                                            {courses.some(
                                                (enrolledCourse: any) =>
                                                    enrolledCourse._id === course._id
                                            ) ? (
                                                <div>
                                                    <Button
                                                        onClick={() =>
                                                            navigate(`/Kambaz/Courses/${course._id}/Home`)
                                                        }
                                                        variant="primary"
                                                    >
                                                        Go
                                                    </Button>
                                                    <button
                                                        onClick={() => handleDeleteUser(course._id)}
                                                        className="btn btn-danger float-end">
                                                        Unenroll
                                                    </button>
                                                </div>
                                            ) : (
                                                <div>
                                                    <Button
                                                        onClick={() =>
                                                            navigate(`/Kambaz/Courses/${course._id}/Home`)
                                                        }
                                                        variant="primary">
                                                        Go
                                                    </Button>
                                                    <button
                                                        onClick={() => {handleAddUser(course._id);}}
                                                        className="btn btn-success float-end">
                                                        Enroll
                                                    </button>
                                                </div>
                                            )}
                                        </StudentRouteProtected>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    )}
                </Row>
            </div>
        </div>
    );
}