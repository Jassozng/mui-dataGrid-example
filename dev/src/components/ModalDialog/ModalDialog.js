import { React } from 'react'
import Modal from '@mui/material/Modal';
import ModalForm from '../ModalForm/ModalForm';
import './ModalDialog.css'

const ModalDialog = ({ setModal, status, formType }) => {

    return (
        <Modal open={ status } onClose={ () => { setModal(false) } }>
            <div className="modal">
                <ModalForm formType={ formType }/>
            </div>
        </Modal>
    );
}

export default ModalDialog;