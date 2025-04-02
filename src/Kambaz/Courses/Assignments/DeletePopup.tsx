import {Button, Modal} from "react-bootstrap";

export default function DeletePopup({show, handleClose, assignmentId, confirmDelete}: {
    show: boolean;
    handleClose: () => void;
    assignmentId: string;
    confirmDelete: (assignmentId: string) => void;
}) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete Assignment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure you want to remove this assignment?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}> Cancel </Button>
                <Button variant="danger"
                        onClick={() => {
                            confirmDelete(assignmentId);
                            handleClose();
                        }}> Delete </Button>
            </Modal.Footer>
        </Modal>
    );
}