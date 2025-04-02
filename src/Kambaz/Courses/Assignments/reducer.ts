import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const initialState = {
    assignments: [],
};
const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        setAssignments: (state, action) => {
            state.assignments = action.payload;
        },
        addAssignment: (state, { payload: assignment }) => {
            const newAssignment: any = {
                _id: uuidv4(),
                title: assignment.title,
                course: assignment.course,
                dueDate: assignment.dueDate,
                availableDate: assignment.availableDate,
                points: assignment.points,
                description: assignment.description,
                modules: assignment.modules,
            };
            console.log("Adding assignment:", newAssignment);

            state.assignments = [...state.assignments, newAssignment] as any;
        },
        deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter(
                (a: any) => a._id !== assignmentId
            );
        },
        updateAssignment: (state, { payload: assignment }) => {
            state.assignments = state.assignments.map((a: any) =>
                a._id === assignment._id ? assignment : a
            ) as any;
            console.log(assignment._id);
            console.log("updating assignment:", assignment);
        },
    },
});
export const {
    addAssignment,
    deleteAssignment,
    updateAssignment,
    setAssignments,
} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;