import { React, useState, useEffect } from 'react'
import './ActionsTable.css'
import editSvg from '../../assets/edit.svg'
import deleteSvg from '../../assets/rubbish-delete.svg'
import submitSvg from '../../assets/arrow-next.svg'
import ModalDialog from '../ModalDialog/ModalDialog'

const ActionsTable = ({ dispatch }) => {
    const [modal, setModal] = useState(false);
    const [formType, setFormType] = useState("");

    const callModalHandler = (event) => {
      setFormType(event.target.value);
      setModal(true);
    }

  return (
    <>
        <ModalDialog setModal={ setModal } status={ modal } formType={ formType }/>
        <div className="action-pad">
            <input type="image" src={ editSvg } onClick={ (event) => { callModalHandler(event) }} alt="Edit" title="Edit" className="action-input" name="updateRegister" id="updateRegister" value="COURSE_PROPS_FORM" />
            <input type="image" src={ deleteSvg } onClick={ (event) => { callModalHandler(event) }} alt="Delete" title="Delete" className="action-input" name="submitReview" id="submitReview" value="CONFIRMATION_FORM" />
            <input type="image" src={ submitSvg } onClick={ (event) => { callModalHandler(event) }} alt="Submit to review" title="Submit to review" className="action-input" name="deleteRegister" id="deleteRegister" value="CONFIRMATION_FORM" />
        </div>
    </>
  )
}

export default ActionsTable