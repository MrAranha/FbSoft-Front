import { Box, Button, Modal, Stack, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as React from 'react';
import * as yup from 'yup';
import { editCarro } from './requests';
import { useEffect } from 'react';
import { useState } from 'react';
import { getCarroByIDs } from './crud';

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

export const EditCarroForm = ({
  open,
  setOpen,
  sendNotification,
  setLoading,
  setCarros,
  CarroID,
  setCarroID,
}) => {
  const [Carro, setCarro] = useState({});
  useEffect(() => {
    if (CarroID)
      getCarroByIDs(CarroID, sendNotification)
        .then((data) => {
          setCarro(data.data);
        })
        .catch((error) => {
          sendNotification({ msg: error.title || error, variant: 'error' });
        });
  }, [CarroID]);
  return (
    <EditCarroModal
      open={open}
      setOpen={setOpen}
      sendNotification={sendNotification}
      setLoading={setLoading}
      setCarros={setCarros}
      Carro={Carro}
      setCarroID={setCarroID}
      setCarro={setCarro}
    />
  );
};

export const EditCarroModal = ({
  open,
  setOpen,
  sendNotification,
  setLoading,
  setCarros,
  Carro,
  setCarroID,
  setCarro,
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
      ...Carro,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      editCarro(values, setLoading, sendNotification, handleClose, setCarros);
    },
  });

  const handleClose = (event, reason) => {
    if (reason && reason === 'backdropClick') return;
    formik.resetForm();
    setOpen(false);
    setCarroID('');
    setCarro();
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
              name="email"
              inputProps={{ maxLength: 255 }}
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
            inputProps={{ maxLength: 255 }}
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
