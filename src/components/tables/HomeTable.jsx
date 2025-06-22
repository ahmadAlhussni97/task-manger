import * as React from 'react';
import  DataGridTable  from './DataGridTable';

const columns = [
  { field: 'id', headerName: 'ID',type: 'number', width: 10 },
  {field: 'User',headerName: 'User',type: 'number',width: 150},
  { field: 'Task', headerName: 'Task',type: 'number', width: 150 },
  { field: 'Created', headerName: 'Created At',type: 'number', width: 150 }
];

const rows = [
  { id: 1, User: 21,  Task: 35,Created:'1997'},
  { id: 2, User: 2121,  Task: 35,Created:'1997' },
  { id: 3, User: 21, Project: 'JonJonJonJonJonJonJonJonJonJon', Task: 35,Created:'1997' },
  { id: 4, User: 21,  Task: 35,Created:'1997' },
  { id: 5, User: 26,  Task: 35,Created:'1997' },
  { id: 6, User: 43,  Task: 35,Created:'1997' },
  { id: 7, User: 43,  Task: 35,Created:'1997' },
  { id: 8, User: 32,  Task: 35,Created:'1997' },
  { id: 9, User: 12,  Task: 35,Created:'1997' },
 
];

export default function HomeTable() {
  return (
    <div className='home-table'>
       <DataGridTable columns={columns} rows={rows} />
       <DataGridTable columns={columns} rows={rows} />
    </div>
  );
}
