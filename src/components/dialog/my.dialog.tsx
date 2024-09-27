import { Button, Modal } from 'react-bootstrap';

import './my.dialog.css';

type MyDialogProps = {
    title: string,
    children: JSX.Element | string,
    dialogFooter?: JSX.Element,
    onClose: () => void,
    isVisible: boolean
}

const MyDialog = ({ title, children, onClose, isVisible, dialogFooter }: MyDialogProps) => {
    if (!isVisible) {
        return <></>;
    }

    return <Modal className='my-dialog' show={isVisible} onHide={onClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {children}
        </Modal.Body>
        <Modal.Footer>
            {dialogFooter == null &&
                <>
                    <Button variant="secondary" onClick={onClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => alert('Primary action')}>
                        Confirm
                    </Button>
                </>
            }
            {dialogFooter != null && dialogFooter}
        </Modal.Footer>
    </Modal>;
};

export default MyDialog;