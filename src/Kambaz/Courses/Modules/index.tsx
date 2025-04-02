import { useParams } from "react-router";
import {BsGripVertical} from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons.tsx";
import LessonControlButtons from "./LessonControlButtons.tsx";
import {useEffect, useState} from "react";
import ModulesControls from "./ModulesControls.tsx";
import {FormControl} from "react-bootstrap";
import { setModules, addModule, editModule, updateModule, deleteModule }
    from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import * as coursesClient from "../client";
import * as modulesClient from "./client";

export default function Modules() {
    const { cid } = useParams();
    const [moduleName, setModuleName] = useState("");
    const { modules } = useSelector((state: any) => state.modulesReducer);
    const dispatch = useDispatch();
    const fetchModules = async () => {
        const modules = await coursesClient.findModulesForCourse(cid as string);
        dispatch(setModules(modules));
    };
    useEffect(() => {
        fetchModules();
    }, []);
    const createModuleForCourse = async () => {
        if (!cid) return;
        const newModule = { name: moduleName, course: cid };
        const module = await coursesClient.createModuleForCourse(cid, newModule);
        dispatch(addModule(module));
    };
    const removeModule = async (moduleId: string) => {
        await modulesClient.deleteModule(moduleId);
        dispatch(deleteModule(moduleId));
    };
    const saveModule = async (module: any) => {
        await modulesClient.updateModule(module);
        dispatch(updateModule(module));
    };

    
    return (
        <ul id="wd-modules" className="list-group rounded-0">
            <ModulesControls moduleName={moduleName} setModuleName={setModuleName}
                             addModule={createModuleForCourse} />
            {modules
                .map((module: any) => (
                    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                        <div
                            className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                                <BsGripVertical className="me-2 fs-3 align-self-start"/>
                                {!module.editing && <span className="me-2">{module.name}</span>}
                                {module.editing && (
                                    <FormControl className="w-50 d-inline-block me-2"
                                                 onChange={(e) => dispatch(updateModule({
                                                     ...module,
                                                     name: e.target.value
                                                 }))}
                                                 onKeyDown={(e) => {
                                                     if (e.key === "Enter") {
                                                         saveModule({ ...module, editing: false });
                                                     }
                                                 }}
                                                 defaultValue={module.name}/>
                                )}
                            </div>
                            <ModuleControlButtons moduleId={module._id}
                                                  deleteModule={(moduleId) => removeModule(moduleId)}
                                                  editModule={(moduleId) => dispatch(editModule(moduleId))}/>
                        </div>

                        {module.lessons && (
                            <ul className="wd-lessons list-group rounded-0">
                                {module.lessons.map((lesson: any) => (
                                    <li className="wd-lesson list-group-item p-3 ps-1">
                                        <BsGripVertical className="me-2 fs-3"/> {lesson.name} <LessonControlButtons/>
                                    </li>
                                ))}</ul>)}</li>))}</ul>);
}