import { Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import {FaSearch} from "react-icons/fa";

export default function Controls() {
    return (
        <div className="d-flex justify-content-between align-items-center">
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
                <Button variant="secondary" size="lg" className="me-2" id="wd-add-group-btn">
                    <FaPlus className="position-relative me-2" style={{bottom: "1px"}}/>
                    Group
                </Button>
                <Button variant="danger" size="lg" className="me-1" id="wd-add-module-btn">
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Assignment
                </Button>
            </div>
        </div>
    );
}
