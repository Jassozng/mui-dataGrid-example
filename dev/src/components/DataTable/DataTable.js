import { React, useState, useReducer } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import axiosPetition from "./hooks/getData.js";
import ActionsTable from '../ActionsTable/ActionsTable';
import tableReducers from '../../reducers/TableReducers/tableReducers.js'
import add from '../../assets/add-plus.svg'
import ModalDialog from '../ModalDialog/ModalDialog.js';
import "./DataTable.css"

const DataTable = () => {
  let initialRowState = [];
  const [state, dispatch] = useReducer(tableReducers, initialRowState);
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);
  if(initialRowState.length === 0 && search === "" && state.length === 0){
    axiosPetition(dispatch, "");
  }

  const columns = [
    { field: 'cur_url_imagen', headerName: 'Image', renderCell: (avatarSrc) => { return ( <><Avatar src={ avatarSrc.formattedValue } /></> ); }, width: 150 },
    { field: 'cur_id', headerName: 'ID', width: 150 },
    { field: 'cur_nombre', headerName: 'Name', width: 150 },
    { field: 'cur_precio', headerName: 'Price', width: 150 },
    { field: 'cur_fh_reg', headerName: 'Register Date', width: 150 },
    { field: 'estatus_nombre', headerName: 'Status', width: 150 },
    { field: 'estatus_id', headerName: 'Status ID', width: 150 },
    { field: 'categ_nombre', headerName: 'Category', width: 150 },
    { field: 'actions', headerName: 'Actions', renderCell: (params) => { return ( <ActionsTable dispatch={ dispatch } fieldId={ params.id } /> ); }, width: 150 }
  ];

  return (
    <div className="dataGrid">
      <ModalDialog setModal={ setModal } status={ modal } formType="NEW_REGISTER" dispatch={ dispatch } fieldId={ state.length + 1 }/>
      <div className="top-table-bar">
        <TextField
          id="search-bar"
          className="textField"
          onInput={(e) => {
            setSearch(e.target.value);
            axiosPetition(dispatch, e.target.value);
          }}
          label="Search by name 🔎"
          variant="outlined"
          placeholder="Search..."
          size="small"
        />
        <input type="image" src={ add } alt="New Register" className="action-button" title="New Register" onClick={ (event) => { setModal(true) } } />
      </div>
      <DataGrid rows={ state } columns={ columns } getRowClassName={(params) => params.id % 2 === 0 ? 'even' : 'odd' } />
    </div>
  )
}

export default DataTable