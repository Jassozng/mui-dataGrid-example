const handleSubmit = (event, setModal, formType, dispatch, fieldId) => {
    event.preventDefault();
    let action = {
        "type": formType,
        "update_field_id": fieldId,
        "payload": {
            "id": fieldId,
            "cur_url_imagen": "",
            "cur_id": fieldId, 
            "cur_nombre": "", 
            "cur_precio": 0, 
            "cur_fh_reg": "", 
            "estatus_nombre": "", 
            "estatus_id": "", 
            "categ_nombre": ""
        }
    }

    if(formType === "UPDATE_REGISTER" || formType === "NEW_REGISTER"){
        for(let formInput in event.target){
            //Form sends a lot of keys in event obj, here we filter for only number keys that have the form input values
            const numberRegex = new RegExp(/^\d/);
            if(!formInput.match(numberRegex)) break;
    
            action.payload[event.target[formInput].id] = event.target[formInput].value;
            action.payload["estatus_id"] = event.target["estatus_nombre"].value.split("-")[0];
            action.payload["estatus_nombre"] = event.target["estatus_nombre"].value.split("-")[1];
        }
    }
    try{
        //Dispatch action to reducer
        dispatch(action);
    }finally{
        //Close the ModalDialog
        setModal(false);
    }
}

export default handleSubmit;