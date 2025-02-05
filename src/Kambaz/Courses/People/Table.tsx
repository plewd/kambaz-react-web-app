import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
export default function PeopleTable() {
    return (
        <div id="wd-people-table">
            <Table striped>
                <thead>
                <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
                </thead>
                <tbody>
                <tr>
                    <td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary"/>
                        <span className="wd-first-name">Tony</span>{" "}
                        <span className="wd-last-name">Stark</span></td>
                    <td className="wd-login-id">001234561S</td>
                    <td className="wd-section">S101</td>
                    <td className="wd-role">STUDENT</td>
                    <td className="wd-last-activity">2020-10-01</td>
                    <td className="wd-total-activity">10:21:32</td>
                </tr>
                <tr>
                    <td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary"/>
                        <span className="wd-first-name">Jeff</span>{" "}
                        <span className="wd-last-name">The Shark</span></td>
                    <td className="wd-login-id">0123745JTS</td>
                    <td className="wd-section">S101</td>
                    <td className="wd-role">STUDENT</td>
                    <td className="wd-last-activity">2020-11-09</td>
                    <td className="wd-total-activity">6:25:45</td>
                </tr>
                <tr>
                    <td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary"/>
                        <span className="wd-first-name">Jack</span>{" "}
                        <span className="wd-last-name">Black</span></td>
                    <td className="wd-login-id">5223745JB</td>
                    <td className="wd-section">S101</td>
                    <td className="wd-role">TEACHER</td>
                    <td className="wd-last-activity">2021-08-09</td>
                    <td className="wd-total-activity">5:23:45</td>
                </tr>
                <tr>
                    <td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary"/>
                        <span className="wd-first-name">Steve</span>{" "}
                        <span className="wd-last-name">Rogers</span></td>
                    <td className="wd-login-id">01237745SR</td>
                    <td className="wd-section">S101</td>
                    <td className="wd-role">STUDENT</td>
                    <td className="wd-last-activity">2020-08-02</td>
                    <td className="wd-total-activity">9:26:41</td>
                </tr>
                </tbody>
            </Table>
        </div>);
}