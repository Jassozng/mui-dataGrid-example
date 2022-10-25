import { newRegister, updateRegister, deleteRegister, sentToReviewRegister } from './actions.js'

const tableActionReducer = (state, action) => {
    const posibleActions = 
    {
        "NEW_REGISTER": () => { newRegister(state, action.payload) },
        "UPDATE_REGISTER": () => { updateRegister(state, action.payload) },
        "DELETE_REGISTER": () => { deleteRegister(state, action.payload) },
        "SEND_TO_REVIEW": () => { sentToReviewRegister(state, action.payload) }
    }

    return posibleActions[action.type]
}

export default tableActionReducer;