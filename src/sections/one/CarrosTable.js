import { DataGrid, GridActionsCellItem, GridDeleteIcon } from '@mui/x-data-grid';
import React, { useState } from 'react';
import { LoadingScreen } from 'src/components/loading-screen';
import Iconify from 'src/components/iconify';

export const CarrosTable = ({
  rows,
  loading,
  setOpenDeleteModal,
  setCarroID,
  setOpenEditModal,
}) => {
  const [pageSize, setPageSize] = useState(20);
  const columns = [
    {
      field: 'actions',
      type: 'actions',
      width: 120,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<Iconify width={24} icon={'mdi:pencil'} />}
          onClick={() => {
            setCarroID(params.row['id']);
            setOpenEditModal(true);
          }}
          label="Editar"
        />,
        <GridActionsCellItem
          onClick={() => {
            setCarroID(params.row['id']);
            setOpenDeleteModal(true);
          }}
          icon={<GridDeleteIcon />}
          label="Deletar"
        />,
      ],
    },
    { field: 'nome', headerName: 'Nome', width: 500 },
    { field: 'marca', headerName: 'Marca', width: 500 },
    { field: 'ano', headerName: 'Ano', width: 500 },
    { field: 'quantidade', headerName: 'Quantidade', width: 500 },
  ];

  return (
    <div
      style={{
        height: '500px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px',
      }}
    >
      {loading ? (
        // Show a loading spinner or component when data is being fetched
        <LoadingScreen />
      ) : (
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={pageSize}
          rowsPerPageOptions={[10, 20, 50, 100]}
          disableSelectionOnClick
          pagination
          paginationMode="client"
          onPageChange={(e) => {
            handlePageChange(e);
          }}
        />
      )}
    </div>
  );
};
