import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ProtectedRoute from "./Account/ProtectedRoute";
import { useSelector } from "react-redux";
import * as courseClient from "./Courses/client";
import Session from "./Account/Session";
import * as userClient from "./Account/client";

export default function Kambaz() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const [courses, setCourses] = useState<any[]>([]);
    const [course, setCourse] = useState<any>([
        {
            _id: uuidv4(),
            name: "New Course",
            number: "New Number",
            startDate: "2023-09-10",
            endDate: "2023-12-15",
            image: "/images/cat1.jpg",
            description: "New Description",
        },
    ]);

    const [enrolling, setEnrolling] = useState<boolean>(false);
    // Update your findCoursesForUser function
    const findCoursesForUser = async () => {
        try {
            // Check if currentUser exists before trying to access its properties
            if (!currentUser) {
                console.log("No user is logged in");
                setCourses([]);  // Set empty courses array
                return;
            }

            console.log("USER ID IS: " + currentUser._id);
            const courses = await userClient.findCoursesForUser(currentUser._id);
            setCourses(courses);
        } catch (error) {
            console.error(error);
            setCourses([]); // Set empty courses array on error
        }
    };

// Similarly update your fetchCourses function
    const fetchCourses = async () => {
        try {
            // Check if currentUser exists
            if (!currentUser) {
                console.log("No user is logged in");
                setCourses([]);
                return;
            }

            const allCourses = await courseClient.fetchAllCourses();
            const enrolledCourses = await userClient.findCoursesForUser(
                currentUser._id
            );

            // Map through all courses and mark those the user is enrolled in
            const courses = allCourses.map((course: any) => {
                if (enrolledCourses.find((c: any) => c._id === course._id)) {
                    return { ...course, enrolled: true };
                } else {
                    return course;
                }
            });

            setCourses(courses);
        } catch (error) {
            console.error(error);
            setCourses([]);
        }
    };

// Update your useEffect to only run when currentUser is available
    useEffect(() => {
        // Only run if currentUser exists
        if (currentUser) {
            if (enrolling) {
                fetchCourses();
            } else {
                findCoursesForUser();
            }
        }
    }, [currentUser, enrolling]);

    const addNewCourse = async () => {
        const newCourse = await courseClient.createCourse(course);
        setCourses([...courses, newCourse]);
    };
    const deleteCourse = async (courseId: string) => {
        const status = await courseClient.deleteCourse(courseId);
        console.log(status)
        setCourses(courses.filter((course) => course._id !== courseId));
    };
    const updateThisCourse = async () => {
        await courseClient.updateCourse(course);
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
    };

    const updateEnrollment = async (courseId: string, enrolled: boolean) => {
        if (enrolled) {
            await userClient.enrollIntoCourse(currentUser._id, courseId);
        } else {
            await userClient.unenrollFromCourse(currentUser._id, courseId);
        }
        setCourses(
            courses.map((course) => {
                if (course._id === courseId) {
                    return { ...course, enrolled: enrolled };
                } else {
                    return course;
                }
            })
        );
    };


    return (
        <Session>
            <div id="wd-kambaz">
                <KambazNavigation />
                <div className="wd-main-content-offset p-3">
                    <Routes>
                        <Route path="/" element={<Navigate to="Account" />} />
                        <Route path="/Account/*" element={<Account />} />
                        <Route
                            path="/Dashboard"
                            element={
                                <ProtectedRoute>
                                    <Dashboard
                                        courses={courses}
                                        course={course}
                                        setCourse={setCourse}
                                        addNewCourse={addNewCourse}
                                        deleteCourse={deleteCourse}
                                        updateCourse={updateThisCourse}
                                        enrolling={enrolling} 
                                        setEnrolling={setEnrolling}
                                        updateEnrollment={updateEnrollment}/>
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/Courses/:cid/*"
                            element={
                                <ProtectedRoute>
                                    <Courses courses={courses} />
                                </ProtectedRoute>
                            }
                        />
                        <Route path="/Calendar" element={<h1>Calendar</h1>} />
                        <Route path="/Inbox" element={<h1>Inbox</h1>} />
                    </Routes>
                </div>
            </div>
        </Session>
    );
}