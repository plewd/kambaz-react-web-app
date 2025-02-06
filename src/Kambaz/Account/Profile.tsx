import { Link } from "react-router-dom";
import { Form, FormControl, InputGroup } from "react-bootstrap";

export default function Profile() {
    return (
        <div id="wd-profile-screen">
            <h1>Profile</h1>
            <Form.Control placeholder="username" className="wd-username mb-2" />
            <Form.Control placeholder="password" type="password" className="wd-password mb-2" />
            <Form.Control defaultValue="Alice" placeholder="First Name" id="wd-firstname" className="mb-2" />
            <Form.Control defaultValue="Wonderland" placeholder="Last Name" id="wd-lastname" className="mb-2" />
            <InputGroup className="mb-2">
                <FormControl type="date" placeholder="mm/dd/yyyy" />
            </InputGroup>
            <Form.Control defaultValue="alice@wonderland.com" type="email" id="wd-email" className="mb-2" />
            <Form.Control as="select" defaultValue="USER" id="wd-role" className="mb-2">
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
            </Form.Control><br/>
            <Link to="/Kambaz/Account/Signin" className="btn btn-danger w-100 mb-2">Sign out</Link>
        </div>
    );
}
