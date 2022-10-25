import { React, useState, useReducer } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import axiosPetition from "./hooks/getData.js";
import ActionsTable from '../ActionsTable/ActionsTable';
import tableReducers from '../../reducers/TableReducers/tableReducers.js'
import "./DataTable.css"

const DataTable = () => {
  const [rows, setRows] = useState([]);
  const [search, setSearch] = useState("");
  const [state, dispatch] = useReducer(tableReducers, rows);
  
  if(rows.length === 0 && search === ""){
    axiosPetition(setRows, "");
  }

  const columns = [
    { field: 'image', headerName: 'Image', renderCell: (avatarSrc) => { return ( <><Avatar src={ avatarSrc.formattedValue } /></> ); }, width: 150 },
    { field: 'col1', headerName: 'ID', width: 150 },
    { field: 'col2', headerName: 'Name', width: 150 },
    { field: 'col3', headerName: 'Price', width: 150 },
    { field: 'col4', headerName: 'Register Date', width: 150 },
    { field: 'col5', headerName: 'Status', width: 150 },
    { field: 'col6', headerName: 'Status ID', width: 150 },
    { field: 'col7', headerName: 'Category', width: 150 },
    { field: 'actions', headerName: 'Actions', renderCell: () => { return ( <ActionsTable dispatch={ dispatch } /> ); }, width: 150 }
  ];

  return (
    <div className="dataGrid">
      <TextField
        id="search-bar"
        className="textField"
        onInput={(e) => {
          setSearch(e.target.value);
          axiosPetition(setRows, e.target.value);
        }}
        label="Search by name 🔎"
        variant="outlined"
        placeholder="Search..."
        size="small"
      />
      <DataGrid rows={ rows } columns={ columns } getRowClassName={(params) => params.id % 2 === 0 ? 'even' : 'odd' } />
    </div>
  )
}

export default DataTable