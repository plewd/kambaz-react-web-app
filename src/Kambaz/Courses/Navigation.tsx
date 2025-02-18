import { Link, useParams, useLocation } from "react-router-dom";

const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

export default function CourseNavigation() {
    const { cid } = useParams();
    const location = useLocation();

    return (
        <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
            {links.map((link) => {
                const linkPath = `/Kambaz/Courses/${cid}/${link}`;
                const isActive = location.pathname === linkPath;

                return (
                    <Link
                        to={linkPath}
                        id={`wd-course-${link.toLowerCase()}-link`}
                        className={`list-group-item ${isActive ? 'active' : 'text-danger'} border border-0`}>
                        {link}
                    </Link>
                );
            })}
        </div>
    );
}
