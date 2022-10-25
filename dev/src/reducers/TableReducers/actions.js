const newRegister = (state, payload) => {
    return { ...state, payload };
}

const updateRegister = (state, payload) => {
    let pos = 0;
    const newState = {...state};
    newState.map((register) => {
        if(register.cur_id === payload.cur_id) {
            newState[pos] = payload;
        }
        pos++;
    });
    return newState;
}

const deleteRegister = (state, payload) => {
    const newState = {...state};
    let pos = 0;
    newState.map((register) => {
        if(register.cur_id === payload.cur_id) {
            delete newState[pos];
        }
        pos++;
    });
    return newState;
}

const sentToReviewRegister = (state, payload) => {
    console.lof("ss");
}

export { newRegister, updateRegister, deleteRegister, sentToReviewRegister }