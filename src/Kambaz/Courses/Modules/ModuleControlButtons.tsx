import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import {BsPlus} from "react-icons/bs";
export default function ModuleControlButtons() {
    return (
        <div className="d-flex justify-content-end align-items-center">
            {/* Right-aligned Div with Text */}
            <div className="border rounded me-3 p-1">
                40% of Total
            </div>
            {/* Icons */}
            <div className="float-end">
                <GreenCheckmark/>
                <BsPlus/>
                <IoEllipsisVertical className="fs-4"/>
            </div>
        </div>
    );
}