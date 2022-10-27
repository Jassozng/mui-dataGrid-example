import axios from "axios"
import Avatar from "@mui/material/Avatar"
import ActionsTable from '../../ActionsTable/ActionsTable'

export let latestId = 0;

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
            const re = new RegExp(`${filter.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()}`, "gm");
            if(!cur_nombre.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().match(re)) return
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
        if(cur_id > latestId) latestId = cur_id;
    });
    return rows;
}

const generateColumns = (dispatch) => {

    return [
        { field: 'cur_url_imagen', headerName: 'Image', renderCell: (avatarSrc) => { return ( <><Avatar src={ avatarSrc.formattedValue } /></> ); }, width: 150 },
        { field: 'cur_id', headerName: 'ID', width: 150 },
        { field: 'cur_nombre', headerName: 'Name', width: 150 },
        { field: 'cur_precio', headerName: 'Price', width: 150 },
        { field: 'cur_fh_reg', headerName: 'Register Date', width: 150 },
        { field: 'estatus_nombre', headerName: 'Status', width: 150 },
        { field: 'estatus_id', headerName: 'Status ID', width: 150 },
        { field: 'categ_nombre', headerName: 'Category', width: 150 },
        { field: 'actions', headerName: 'Actions', renderCell: (params) => { return ( <ActionsTable dispatch={ dispatch } rowData = { params.row } /> ); }, width: 150 }
      ];
}

const searchByProp = ({ data, prop, propValue }) => {
    data.map((row) => {
        if(row[prop] !== propValue) return
        return row[prop];
    });
}

export { axiosPetition, searchByProp, generateColumns };