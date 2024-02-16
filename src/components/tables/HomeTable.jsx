import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID',type: 'number', width: 10 },
  {field: 'User',headerName: 'User',type: 'number',width: 150},
  { field: 'Project', headerName: 'Project',type: 'number', width: 150 },
  { field: 'Task', headerName: 'Task',type: 'number', width: 150 },
  { field: 'Created', headerName: 'Created At',type: 'number', width: 150 }
];

const rows = [
  { id: 1, User: 21, Project: 'Jon', Task: 35,Created:'1997'},
  { id: 2, User: 2121, Project: 'Jon', Task: 35,Created:'1997' },
  { id: 3, User: 21, Project: 'JonJonJonJonJonJonJonJonJonJon', Task: 35,Created:'1997' },
  { id: 4, User: 21, Project: 'Jon', Task: 35,Created:'1997' },
  { id: 5, User: 26, Project: 'Jon', Task: 35,Created:'1997' },
  { id: 6, User: 43, Project: 'Jon', Task: 35,Created:'1997' },
  { id: 7, User: 43, Project: 'Jon', Task: 35,Created:'1997' },
  { id: 8, User: 32, Project: 'Jon', Task: 35,Created:'1997' },
  { id: 9, User: 12, Project: 'Jon', Task: 35,Created:'1997' },
 
];

export default function DataTable() {
  return (
    <div className='table'>
      <div style={{ height: '100%', width: '50%',marginTop:'1.5%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10,15,20,25,30,35,40,45,50]}
          checkboxSelection
        />
      </div>
      <div style={{ height: '100%', width: '50%',marginTop:'1.5%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10,15,20,25,30,35,40,45,50]}
          checkboxSelection
        />
      </div>
    </div>
  );
}
