import axios from "axios";

const axiosPetition = async (setRows, filter) => {
    axios({
        method: 'post',
        url: 'https://p9i3ym1dk0.execute-api.us-west-2.amazonaws.com/v0/merlin/query/pub/prueba',
        data: {}
    }).then(response => {
        setRows(generateRows(response.data.result, filter));
    });
}

const generateRows = (data, filter) => {
    let rows = [];
    data.map(({ cur_id, cur_nombre, cur_precio, cur_fh_reg, estatus_nombre, estatus_id, categ_nombre, cur_url_imagen }) => {
        if(filter !== ""){
            const re = new RegExp(`^[${filter.normalize("NFD").replace(/[\u0300-\u036f]/g, "")}]{2,}`, "gi");
            if(!cur_nombre.normalize("NFD").replace(/[\u0300-\u036f]/g, "").match(re)){
                return
            }
        }
        rows.push(
            { 
                id: cur_id,
                image: cur_url_imagen,
                col1: cur_id, 
                col2: cur_nombre, 
                col3: cur_precio, 
                col4: cur_fh_reg, 
                col5: estatus_nombre, 
                col6: estatus_id, 
                col7: categ_nombre
            }
        );
    });
    return rows;
}

export default axiosPetition;