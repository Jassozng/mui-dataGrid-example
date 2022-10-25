import React from 'react'
import './ModalForm.css'

const ModalForm = ({ formType }) => {
  return (
    <form>
        { 
            formType === "COURSE_PROPS_FORM" ? 
            <>
                <h1>Actions to realize</h1>
                <label htmlFor="imageUrl">Image URL</label>
                <input type="text" id="imageUrl" name="imageUrl" className="form-input" required={ true } />
                <label htmlFor="id">ID</label>
                <input type="text" id="id" name="id" className="form-input" required={ true } />
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" className="form-input" required={ true } />
                <label htmlFor="price">Price</label>
                <input type="number" id="price" name="price" className="form-input" required={ true } />
                <label htmlFor="registerDate">Register Date</label>
                <input type="date" id="registerDate" name="registerDate" className="form-input" required={ true } />
                <label htmlFor="status">Status</label>
                <select name="status" className="form-input" required={ true }>
                    <option value="5 En revisión">En revisión</option>
                    <option value="6 Autorizado y publicado">Autorizado y publicado</option>
                    <option value="7 Eliminado">Eliminado</option>
                    <option value="8 En elaboración">En elaboración</option>
                </select>
                <label htmlFor="category">Category</label>
                <select name="category" className="form-input" required={ true }>
                    <option value="Bases de datos">Bases de datos</option>
                    <option value="Cultura">Cultura</option>
                    <option value="Deportes">Deportes</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Tecnología">Tecnología</option>
                </select>
                <input type="button" id="confirm" className="confirm-button" value="Confirm Operation" />
                <input type="button" id="cancel" className="cancel-button" value="Cancel Operation" />
            </>
            :
            <>
                <h1>Actions to realize</h1>
                <input type="button" id="confirm" className="confirm-button" value="Confirm Operation" />
                <input type="button" id="cancel" className="cancel-button" value="Cancel Operation" />
            </>
        }
    </form>
  )
}

export default ModalForm