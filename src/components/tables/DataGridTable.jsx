import React from 'react'
import { DataGrid } from '@mui/x-data-grid';

export default function DataGridTable(props) {
  return (
    <div style={{ height: '100%', width: '50%',marginTop:'1.5%' }}>
        <DataGrid
          rows={props.rows}
          columns={props.columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10,15,20,25,30,35,40,45,50]}
          checkboxSelection
        />
      </div>
  )
}
