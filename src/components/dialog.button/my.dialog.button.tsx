import { Button } from 'react-bootstrap';

import './my.dialog.button.css';
import { useEffect, useRef, useState } from 'react';
import MyDialog from '../dialog/my.dialog';

type MyDialogButtonProps = {
    dialogTitle: string,
    dialogContent: JSX.Element | string,
    dialogFooter?: JSX.Element,
    children: JSX.Element | string,
}

const MyDialogButton = (props: MyDialogButtonProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (buttonRef.current == null) return;

        buttonRef.current.focus();
    }, [isVisible]);

    function onClickOpen() {
        setIsVisible(true);
    }

    function onClose() {
        setIsVisible(false);
    }

    return <>
        <Button className='my-dialog-button' ref={buttonRef} variant="secondary" onClick={onClickOpen}>
            {props.children}
        </Button>
        <MyDialog isVisible={isVisible} onClose={onClose} title={props.dialogTitle} dialogFooter={props.dialogFooter}>
            {props.dialogContent}
        </MyDialog>
    </>
};

export default MyDialogButton;