import { fetchData, newRegister, updateRegister, deleteRegister, sentToReviewRegister } from './actions.js'

const tableActionReducer = (state, action) => {
    switch(action.type){
        case "FETCH_DATA":
            return fetchData(action.payload);
        case "NEW_REGISTER":
            return newRegister(state, action.payload);
        case "UPDATE_REGISTER":
            return updateRegister(state, action.payload, action.update_field_id);
        case "DELETE_REGISTER":
            return deleteRegister(state, action.update_field_id);
        case "SEND_TO_REVIEW":
            return sentToReviewRegister(state, action.update_field_id);
        default:
            return state;
    }
}

export default tableActionReducer;