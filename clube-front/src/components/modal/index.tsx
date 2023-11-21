import { createPortal } from "react-dom";
import { ReactNode } from 'react';
import { Button } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

import "./modal.scss";

type ModalProps = {
    show: boolean,
    close: Function,
    title: string,
    children: ReactNode
}

const Modal = ({ show, close, title, children }: ModalProps) => {
    return createPortal(
        <>
            <div
                className={`modalContainer ${show ? "show" : ""} `}
                onClick={() => close()}
            >
                <div className="modal" onClick={(e) => e.stopPropagation()}>
                    <button className="close" onClick={() => close()}>
                        <CloseIcon />
                    </button>
                    <header className="modal_header">
                        <h2 className="modal_header-title">{title}</h2>
                    </header>
                    <main className="modal_content">{children}</main>
                    <footer className="modal_footer">
                        <Button variant="contained" color="success">
                            Enviar
                        </Button>
                        <Button variant="contained" onClick={() => close()}>Cancelar</Button>
                    </footer>
                </div>
            </div>
        </>,
        document.body
    );
};

export default Modal;