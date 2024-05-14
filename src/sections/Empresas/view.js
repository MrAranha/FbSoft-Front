'use client';

import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { useSettingsContext } from 'src/components/settings';
import { DeleteEmpresaModal } from './DeleteEmpresaModal';
import { EmpresasTable } from './EmpresasTable';
import { NewEmpresaModal } from './NewEmpresaModal';
import { EmpresasFilter } from './EmpresasFilter';
import { EmpresasHeader } from './EmpresasHeader';
import { EditEmpresaForm } from './EditEmpresaForm';
import { useEffect, useState } from 'react';
import useNotification from 'src/theme/overrides/components/AlertMessage';
import { SnackbarProvider } from 'notistack';
import { getEmpresas } from './crud';
import { searchEmpresas } from './requests';
import { Tab, Tabs } from '@mui/material';

// ----------------------------------------------------------------------

export default function EmpresasView() {
  const settings = useSettingsContext();
  const [openNewModal, setOpenNewModal] = useState(false);
  const handleOpenNewModal = () => {
    setOpenNewModal(true);
  };
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditUserModal, setOpenEditUserModal] = useState(false);
  const [empresaID, setEmpresaID] = useState('');
  const [msg, sendNotification] = useNotification();
  const [empresas, setEmpresas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [queries, setQueries] = useState({
    Nome: '',
    Email: '',
    Empresa: '',
  });
  useEffect(() => {
    setLoading(true);
    getEmpresas(queries)
      .then((data) => {
        if (data.data) {
          setEmpresas(data.data);
        } else {
          setEmpresas([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        sendNotification({ msg: error.title || error, variant: 'error' });
        setLoading(false);
      });
  }, []);

  const getEmpresasFilter = () => {
    searchEmpresas(queries, setLoading, setEmpresas, sendNotification);
  };

  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tabValue} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Item One" />
          <Tab label="Item Two" />
        </Tabs>
      </Box>
      <SnackbarProvider />
      <CustomTabPanel value={tabValue} index={0}>
        <EmpresasHeader getUsers={getEmpresasFilter} handleOpenNewModal={handleOpenNewModal} />
        <NewEmpresaModal
          open={openNewModal}
          setOpen={setOpenNewModal}
          sendNotification={sendNotification}
          setLoading={setLoading}
          setEmpresas={setEmpresas}
        />
        <EmpresasFilter queries={queries} setQueries={setQueries} />
        <EmpresasTable
          rows={empresas}
          loading={loading}
          setOpenEditModal={setOpenEditUserModal}
          setOpenDeleteModal={setOpenDeleteModal}
          setEmpresaID={setEmpresaID}
        />
        <DeleteEmpresaModal
          open={openDeleteModal}
          setOpen={setOpenDeleteModal}
          sendNotification={sendNotification}
          setLoading={setLoading}
          setEmpresas={setEmpresas}
          empresaID={empresaID}
          setEmpresaID={setEmpresaID}
        />
        <EditEmpresaForm
          open={openEditUserModal}
          setOpen={setOpenEditUserModal}
          sendNotification={sendNotification}
          setLoading={setLoading}
          setEmpresas={setEmpresas}
          empresaID={empresaID}
          setEmpresaID={setEmpresaID}
        />
      </CustomTabPanel>

      <CustomTabPanel value={tabValue} index={1}>
        Item Two
      </CustomTabPanel>
    </Container>
  );
}
