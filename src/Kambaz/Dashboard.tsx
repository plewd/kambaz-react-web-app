import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <div className="wd-dashboard-course">
                        <Link to="/Kambaz/Courses/1234/Home"
                              className="wd-dashboard-course-link">
                            <img src="/images/react.svg" alt="react icon" width={200}/>
                            <div>
                                <h5> CS1234 React JS </h5>
                                <p className="wd-dashboard-course-title">
                                    Full Stack software developer </p>
                                <button> Go</button>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/CS4550/Home"
                          className="wd-dashboard-course-link">
                        <img src="/images/webdev.png" alt="web dev icon" width={200}/>
                        <div>
                            <h5> CS4550 Web Development </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer </p>
                            <button> Go</button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <div className="wd-dashboard-course">
                        <Link to="/Kambaz/Courses/CS3200/Home"
                              className="wd-dashboard-course-link">
                            <img src="/images/database.jpg" alt="database icon" width={200}/>
                            <div>
                                <h5> CS3200 Introduction to Databases </h5>
                                <p className="wd-dashboard-course-title">
                                    Backend database developer </p>
                                <button> Go</button>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="wd-dashboard-course">
                    <div className="wd-dashboard-course">
                        <Link to="/Kambaz/Courses/CS3650/Home"
                              className="wd-dashboard-course-link">
                            <img src="/images/computersystems.png" alt="computer systems icon" width={200}/>
                            <div>
                                <h5> CS3650 Computer Systems </h5>
                                <p className="wd-dashboard-course-title">
                                    Computer Systems developer </p>
                                <button> Go</button>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="wd-dashboard-course">
                    <div className="wd-dashboard-course">
                        <Link to="/Kambaz/Courses/CS3000/Home"
                              className="wd-dashboard-course-link">
                            <img src="/images/algo.jpeg" alt="algorithms icon" width={200}/>
                            <div>
                                <h5> CS3000 Algorithms & Data </h5>
                                <p className="wd-dashboard-course-title">
                                    Algorithm Pro </p>
                                <button> Go</button>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="wd-dashboard-course">
                    <div className="wd-dashboard-course">
                        <Link to="/Kambaz/Courses/THTR1125/Home"
                              className="wd-dashboard-course-link">
                            <img src="/images/improv.jpg" alt="improv photo" width={200}/>
                            <div>
                                <h5> THTR1125 Improvisation </h5>
                                <p className="wd-dashboard-course-title">
                                    Actor </p>
                                <button> Go</button>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="wd-dashboard-course">
                    <div className="wd-dashboard-course">
                        <Link to="/Kambaz/Courses/COOP3945/Home"
                              className="wd-dashboard-course-link">
                            <img src="/images/northeastern.jpg" alt="northeastern icon" width={200}/>
                            <div>
                                <h5> COOP3945 Co-op Work Experience </h5>
                                <p className="wd-dashboard-course-title">
                                    Intern </p>
                                <button> Go</button>
                            </div>
                        </Link>
                    </div>
                </div>


            </div>
        </div>
    );
}
