import axios from "axios";

const axiosPetition = async (dispatch, filter) => {
    axios({
        method: 'post',
        url: 'https://p9i3ym1dk0.execute-api.us-west-2.amazonaws.com/v0/merlin/query/pub/prueba',
        data: {}
    }).then(response => {
        const data = generateRows(response.data.result, filter);
        dispatch({"type": "FETCH_DATA", "payload": data });
    });
}

const generateRows = (data, filter) => {
    let rows = [];
    data.map(({ cur_id, cur_nombre, cur_precio, cur_fh_reg, estatus_nombre, estatus_id, categ_nombre, cur_url_imagen }) => {
        if(filter !== ""){
            const re = new RegExp(`^[${filter.normalize("NFD").replace(/[\u0300-\u036f]/g, "")}]{2,}`, "gi");
            if(!cur_nombre.normalize("NFD").replace(/[\u0300-\u036f]/g, "").match(re)) return   
        }
        rows.push(
            { 
                id: cur_id,
                cur_url_imagen: cur_url_imagen,
                cur_id: cur_id, 
                cur_nombre: cur_nombre, 
                cur_precio: cur_precio, 
                cur_fh_reg: cur_fh_reg, 
                estatus_nombre: estatus_nombre, 
                estatus_id: estatus_id, 
                categ_nombre: categ_nombre
            }
        );
    });
    return rows;
}

export default axiosPetition;