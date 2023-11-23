import React, { FC, ReactElement } from 'react';
import ReactDOM from 'react-dom';
import CloseIcon from '@mui/icons-material/Close';

import './modal.scss';

export interface ModalProps {
    title: string
    isShowing: boolean
    hide: Function
    children: ReactElement
}

const Modal: FC<ModalProps> = ({ isShowing, title, hide, children, ...restProps }) => {
    const backgroundHandleClick = (event: any) => {
        if(event.target !== event.currentTarget){
            event.stopPropagation();
        }
        else {
            hide();
        }
    }

    return isShowing
    ? ReactDOM.createPortal(
        <React.Fragment {...restProps}>
            <div className='modalBackground' onClick={backgroundHandleClick}>
                <div className='modalContainer'>
                    <button className="close" onClick={() => hide()}>
                        <CloseIcon />
                    </button>
                    <h1>{title}</h1>
                    {children}
                </div>
            </div>
        </React.Fragment>, document.body
    )
    : null
}

export default Modal