import Session from "./Account/Session.tsx";
import { Routes, Route, Navigate }
    from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import ProtectedRoute from "./Account/ProtectedRoute.tsx";
import * as client from "./Courses/client";
import * as userClient from "./Account/client";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import { v4 as uuidv4 } from "uuid";


export default function Kambaz() {
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
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const addNewCourse = async () => {
        const newCourse = await userClient.createCourse(course);
        setCourses([ ...courses, newCourse ]);
    };

    const fetchCourses = async () => {
        try {
            const courses = await userClient.findMyCourses();
            console.log(courses);
            setCourses(courses);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        fetchCourses();
    }, [currentUser]);

    return (
        <Session>
            <div id="wd-kambaz">
                <KambazNavigation />
                <div className="wd-main-content-offset p-3">
                    <Routes>
                        <Route path="/" element={<Navigate to="Account" />} />
                        <Route path="/Account/*" element={<Account />} />
                        <Route path="/Dashboard" element={
                            <ProtectedRoute>
                                <Dashboard/>
                            </ProtectedRoute>
                        } />
                        <Route path="Courses/:cid/*" element={
                            <ProtectedRoute>
                                <Courses/>
                            </ProtectedRoute>
                        } />
                        <Route path="/Calendar" element={<h1>Calendar</h1>} />
                        <Route path="/Inbox" element={<h1>Inbox</h1>} />
                    </Routes>
                </div>
            </div>
        </Session>
    );
}
