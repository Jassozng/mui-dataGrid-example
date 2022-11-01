import "./DataTable.css"
import add from '../../assets/add-plus.svg'
import { DataGrid } from '@mui/x-data-grid'
import TextField from "@mui/material/TextField"
import { React, useState, useReducer } from 'react'
import ModalDialog from '../ModalDialog/ModalDialog.js'
import { axiosPetition, generateColumns, generateRows } from "./hooks/getData.js"
import tableReducers from '../../reducers/TableReducers/tableReducers.js'

const DataTable = () => {
  const [state, dispatch] = useReducer(tableReducers, []);
  const [searchState, setSearchState] = useState([]);
  const [modal, setModal] = useState(false);
  let columns = generateColumns(dispatch);

  if(state.length === 0) axiosPetition(dispatch);

  return (
    <div className="dataGrid">
      <ModalDialog setModal={ setModal } status={ modal } formType="NEW_REGISTER" dispatch={ dispatch } fieldId={ state.length + 1 }/>
      <div className="top-table-bar">
        <TextField
          id="search-bar"
          className="textField"
          onInput={(e) => {
            e.target.value !== "" ? setSearchState(generateRows(state, e.target.value)) : setSearchState([]);
          }}
          label="Search by name 🔎"
          variant="outlined"
          placeholder="Search..."
          size="small"
        />
        <input type="image" src={ add } alt="New Register" className="action-button" title="New Register" onClick={ () => { setModal(true) } } />
      </div>
      <DataGrid rows={ searchState.length === 0 ? state : searchState } columns={ columns } getRowClassName={(params) => params.id % 2 === 0 ? 'even' : 'odd' } />
    </div>
  );
};

export default DataTable