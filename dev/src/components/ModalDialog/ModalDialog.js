import { React } from 'react'
import Modal from '@mui/material/Modal';
import ModalForm from '../ModalForm/ModalForm';
import './ModalDialog.css'

const ModalDialog = ({ setModal, status, formType, dispatch, fieldId }) => {

    return (
        <Modal open={ status } onClose={ () => { setModal(false) } }>
            <div className="modal">
                <ModalForm formType={ formType } setModal={ setModal } dispatch={ dispatch } fieldId={ fieldId }/>
            </div>
        </Modal>
    );
}

export default ModalDialog;