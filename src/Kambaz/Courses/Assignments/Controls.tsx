import {Button} from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import {FaSearch} from "react-icons/fa";
import FacultyRouteProtected from "../../Account/FacultyRouteProtected.tsx";
import {useNavigate, useParams} from "react-router-dom";

export default function Controls() {
    const navigate = useNavigate();
    const {cid} = useParams();

    return (
        <div className="d-flex justify-content-between align-items-center">
            <FacultyRouteProtected studentAccess={<></>}>
                <div className="input-group rounded" style={{maxWidth: "300px"}}>
                <span className="input-group-text border-0 bg-light">
                    <FaSearch/>
                </span>
                    <input
                        type="search"
                        className="form-control rounded"
                        placeholder="Search..."
                        aria-label="Search..."
                    />
                </div>

                <div className="text-nowrap">
                    <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-module-btn"
                            onClick={() => navigate(`/Kambaz/Courses/${cid}/Assignments/new`)}>
                        <FaPlus className="position-relative me-2" style={{bottom: "1px"}}/>
                        Assignment
                    </Button>
                    <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-view-progress">
                        <FaPlus className="position-relative me-2" style={{bottom: "1px"}}/>
                        Group
                    </Button>
                </div>
            </FacultyRouteProtected>
        </div>
    );
}