import React, { useState } from 'react'
import check from '../../assets/check.svg'
import cross from '../../assets/cross.svg'
import handleSubmit from './hooks/submitForm'
import './ModalForm.css'

const ModalForm = ({ formType, setModal, dispatch, fieldId }) => {

  return (
    <form onSubmit={ (event) => { handleSubmit(event, setModal, formType, dispatch, fieldId) } }>
        { 
            formType === "UPDATE_REGISTER" || formType === "NEW_REGISTER" ? 
            <div className="form-content">
                <b>{ formType }</b>
                <p>Please, fill all fields</p>
                <label htmlFor="cur_url_imagen">Image URL</label>
                <input type="text" id="cur_url_imagen" name="cur_url_imagen" className="form-input" required={ true } />
                <label htmlFor="cur_id">ID</label>
                <input type="text" id="cur_id" name="cur_id" className="form-input" required={ true } />
                <label htmlFor="cur_nombre">Name</label>
                <input type="text" id="cur_nombre" name="cur_nombre" className="form-input" maxlength="150" required={ true } />
                <label htmlFor="cur_precio">Price</label>
                <input type="number" id="cur_precio" name="cur_precio" className="form-input" min="0" required={ true } />
                <label htmlFor="cur_fh_reg">Register Date</label>
                <input type="date" id="cur_fh_reg" name="cur_fh_reg" className="form-input" required={ true } />
                <label htmlFor="estatus_nombre">Status</label>
                <select id="estatus_nombre" name="estatus_nombre" className="form-input" required={ true }>
                    <option value="5-En revisión">En revisión</option>
                    <option value="6-Autorizado y publicado">Autorizado y publicado</option>
                    <option value="7-Eliminado">Eliminado</option>
                    <option value="8-En elaboración">En elaboración</option>
                </select>
                <label htmlFor="categ_nombre">Category</label>
                <select id="categ_nombre" name="categ_nombre" className="form-input" required={ true }>
                    <option value="Bases de datos">Bases de datos</option>
                    <option value="Cultura">Cultura</option>
                    <option value="Deportes">Deportes</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Tecnología">Tecnología</option>
                </select>
                <div className="buttons">
                    <input type="image" src={ check } alt="Confirm" id="confirm" className="action-button" title="Confirm Operation" />
                    <input type="image" src={ cross } onClick={ () => { setModal(false) } } alt="Cancel" id="cancel" className="action-button" title="Cancel Operation" />
                </div>
            </div>
            :
            <>
                <b>{ formType }</b>
                <div className="buttons">
                    <input type="image" src={ check } alt="Confirm" id="confirm" className="action-button" title="Confirm Operation" />
                    <input type="image" src={ cross } alt="Cancel" onClick={ () => { setModal(false) } } id="cancel" className="action-button" title="Cancel Operation" />
                </div>
            </>
        }
    </form>
  )
}

export default ModalForm