import './ModalDialog.css'
import { React } from 'react'
import Modal from '@mui/material/Modal'
import ModalForm from '../ModalForm/ModalForm'

const ModalDialog = ({ setModal, status, formType, dispatch, rowData }) => {

    return (
        <Modal open={ status } onClose={ () => { setModal(false) } }>
            <div className="modal">
                <ModalForm formType={ formType } setModal={ setModal } dispatch={ dispatch } rowData={ rowData }/>
            </div>
        </Modal>
    );
}

export default ModalDialog;