import { Box, Button, Modal, Stack, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as React from 'react';
import * as yup from 'yup';
import { editUser } from './requests';
import { useEffect } from 'react';
import { useState } from 'react';
import { getEmpresaByIDs } from './crud';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const EditEmpresaForm = ({
  open,
  setOpen,
  sendNotification,
  setLoading,
  setEmpresas,
  empresaID,
  setEmpresaID,
}) => {
  const [user, setEmpresa] = useState({});
  useEffect(() => {
    if (empresaID)
      getEmpresaByIDs(empresaID, sendNotification)
        .then((data) => {
          setEmpresas(data.data);
        })
        .catch((error) => {
          sendNotification({ msg: error.title || error, variant: 'error' });
        });
  }, [empresaID]);
  return (
    <EditEmpresaModal
      open={open}
      setOpen={setOpen}
      sendNotification={sendNotification}
      setLoading={setLoading}
      setEmpresas={setEmpresas}
      user={user}
      setEmpresaID={setEmpresaID}
      setEmpresa={setEmpresa}
    />
  );
};

export const EditEmpresaModal = ({
  open,
  setOpen,
  sendNotification,
  setLoading,
  setEmpresas,
  user,
  setEmpresaID,
  setEmpresa,
}) => {
  const validationSchema = yup.object({
    name: yup.string('Insira o nome').required('Nome é obrigatório'),
    email: yup
      .string('Insira o e-mail')
      .email('Formato de email não é válido')
      .required('email é obrigatório'),
  });
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      ...user,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      editEmpresa(values, setLoading, sendNotification, handleClose, setEmpresas);
    },
  });

  const handleClose = (event, reason) => {
    if (reason && reason === 'backdropClick') return;
    formik.resetForm();
    setOpen(false);
    setEmpresaID('');
    setEmpresa();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="keep-mounted-modal-title" variant="h4" component="h2" paddingBottom={1}>
          Novo Usuário
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Stack direction="row" spacing={1} paddingTop={3}>
            <TextField
              fullWidth
              id="email"
              inputProps={{ maxLength: 255 }}
              name="email"
              label="E-mail"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              fullWidth
              id="name"
              name="name"
              inputProps={{ maxLength: 255 }}
              label="Nome"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Stack>
          <Stack
            paddingTop={3}
            direction="row"
            spacing={1}
            justifyContent="flex-end"
            alignItems="flex-start"
          >
            <Button color="secondary" variant="contained" onClick={handleClose}>
              Fechar
            </Button>
            <Button color="secondary" variant="contained" type="submit">
              Salvar
            </Button>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
};
