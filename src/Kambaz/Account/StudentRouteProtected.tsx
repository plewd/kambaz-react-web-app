import { useSelector } from "react-redux";
export default function StudentRouteProtected({
                                             facultyAccess,
                                             children,
                                         }: {
    facultyAccess: any;
    children: any;
}) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    if (currentUser.role == "STUDENT") {
        return children;
    } else {
        return facultyAccess;
    }
}