import { getLatestId } from "../../components/DataTable/hooks/getData"

const fetchData = (payload) => {
    return payload;
}

const newRegister = (state, payload) => {
    const newState = [...state];
    let latestId = getLatestId(state)
    payload.id = latestId + 1;
    payload.cur_id = latestId + 1;
    newState.push(payload);
    return newState;
}

const updateRegister = (state, payload, update_field_id) => {
    let pos = 0;
    const newState = [...state];
    newState.map((register) => {
        if(register.cur_id === update_field_id){
            newState[pos] = payload;
            //newState[pos].id = payload.cur_id;
        }
        pos++;
    });
    return newState;
}

const deleteRegister = (state, update_field_id) => {
    const newState = [];
    let pos = 0;
    state.map((register) => {
        if(register.cur_id === update_field_id) return;
        newState.push(register);
        pos++;
    });
    return newState;
}

const sentToReviewRegister = (state, update_field_id) => {
    let pos = 0;
    const newState = [...state];
    newState.map((register) => {
        if(register.cur_id === update_field_id){
            newState[pos].estatus_id = 5;
            newState[pos].estatus_nombre = "En revisión";
        }
        pos++;
    });
    return newState;
}

export { fetchData, newRegister, updateRegister, deleteRegister, sentToReviewRegister }