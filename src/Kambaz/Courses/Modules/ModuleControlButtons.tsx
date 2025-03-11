import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import {BsPlus} from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import FacultyProtected from "../../Account/FacultyProtected";

export default function ModuleControlButtons(
    { moduleId, deleteModule, editModule }:
        { moduleId: string; deleteModule: (moduleId: string) => void; editModule: (moduleId: string) => void }) {
    return (
        <FacultyProtected>
            <div className="d-flex justify-content-end align-items-center">
                {/* Right-aligned Div with Text */}
                <div className="border rounded me-3 p-1">
                    40% of Total
                </div>
                {/* Icons */}
                <div className="float-end">
                    <FaPencil onClick={() => editModule(moduleId)} className="text-primary me-2" />
                    <FaTrash className="text-danger me-2" onClick={() => deleteModule(moduleId)}/>
                    <GreenCheckmark/>
                    <BsPlus size={30}/>
                    <IoEllipsisVertical className="fs-4"/>
                </div>
            </div>
        </FacultyProtected>
    );
}