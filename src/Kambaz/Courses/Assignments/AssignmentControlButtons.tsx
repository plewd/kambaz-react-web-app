import {IoEllipsisVertical} from "react-icons/io5";
import FacultyRouteProtected from "../../Account/FacultyRouteProtected.tsx";
import GreenCheckmark from "../Modules/GreenCheckmark.tsx";

export default function AssignmentControlButtons() {
    return (
        <FacultyRouteProtected>
            <div className="d-flex justify-content-end align-items-center">
                <div className="float-end">
                    <GreenCheckmark/>
                    <IoEllipsisVertical className="fs-4"/>
                </div>
            </div>
        </FacultyRouteProtected>
    );
}