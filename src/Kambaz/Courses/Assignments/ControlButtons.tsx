import {IoEllipsisVertical} from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import FacultyRouteProtected from "../../Account/FacultyRouteProtected.tsx";
import {FaTrash} from "react-icons/fa";
import {useState} from "react";
import DeletePopup from "./DeletePopup.tsx";

export default function ControlButtons(
    {assignmentId, assignmentTitle, deleteAssignment}: {
        assignmentId: string; assignmentTitle: string, deleteAssignment: (assignmentId: string) => void;
    }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleDelete = () => {
        deleteAssignment(assignmentId);
    };
    return (
        <FacultyRouteProtected studentAccess={<></>}>
            <div className="float-end">
                <FaTrash className="text-danger me-2 mb-1" onClick={handleShow}/>
                <GreenCheckmark/>
                <IoEllipsisVertical className="fs-4"/>

                <DeletePopup
                    show={show}
                    handleClose={handleClose}
                    assignmentTitle={assignmentTitle}
                    confirmDelete={handleDelete}
                />
            </div>
        </FacultyRouteProtected>);
}