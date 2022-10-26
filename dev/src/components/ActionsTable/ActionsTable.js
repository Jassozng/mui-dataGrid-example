import { React, useState } from 'react'
import './ActionsTable.css'
import editSvg from '../../assets/edit.svg'
import deleteSvg from '../../assets/rubbish-delete.svg'
import submitSvg from '../../assets/arrow-next.svg'
import ModalDialog from '../ModalDialog/ModalDialog'

const ActionsTable = ({ dispatch, fieldId }) => {
    const [modal, setModal] = useState(false);
    const [formType, setFormType] = useState("");

    const callModalHandler = (event) => {
      setFormType(event.target.value);
      setModal(true);
    }

  return (
    <>
        <ModalDialog setModal={ setModal } status={ modal } formType={ formType } dispatch={ dispatch } fieldId={ fieldId }/>
        <div className="action-pad">
            <input type="image" src={ editSvg } onClick={ (event) => { callModalHandler(event) }} alt="Edit" title="Edit" className="action-input" name="updateRegister" id={ fieldId } value="UPDATE_REGISTER" />
            <input type="image" src={ deleteSvg } onClick={ (event) => { callModalHandler(event) }} alt="Delete" title="Delete" className="action-input" name="submitReview" id={ fieldId } value="DELETE_REGISTER" />
            <input type="image" src={ submitSvg } onClick={ (event) => { callModalHandler(event) }} alt="Submit to review" title="Submit to review" className="action-input" name="deleteRegister" id={ fieldId } value="SEND_TO_REVIEW" />
        </div>
    </>
  )
}

export default ActionsTable