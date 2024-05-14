import { createEmpresas, deleteEmpresas, editEmpresas, getEmpresas } from './crud';

export const searchEmpresas = (queries, setLoading, setEmpresas, sendNotification) => {
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
      sendNotification({ msg: error.title || error.slice(0, 700), variant: 'error' });
      setLoading(false);
    });
};

export const createEmpresa = (Empresa, setLoading, sendNotification, handleClose, setEmpresas) => {
  setLoading(true);
  createEmpresas(Empresa)
    .then((data) => {
      getEmpresas({ id: data.data }).then((data) => {
        if (data.data) {
          setEmpresas(data.data);
        } else {
          setEmpresas([]);
        }
        setLoading(false);
      });
      setLoading(false);
      handleClose();
    })
    .catch((error) => {
      sendNotification({ msg: error.title || error.slice(0, 700), variant: 'error' });
      setLoading(false);
    });
};

export const deleteEmpresa = (Empresa, setLoading, sendNotification, handleClose, setEmpresas) => {
  setLoading(true);
  deleteEmpresas(Empresa)
    .then((data) => {
      getEmpresas().then((data) => {
        if (data.data) {
          setEmpresas(data.data);
        } else {
          setEmpresas([]);
        }
        setLoading(false);
      });
      setLoading(false);
      handleClose();
    })
    .catch((error) => {
      sendNotification({ msg: error.title || error.slice(0, 700), variant: 'error' });
      setLoading(false);
    });
};

export const editEmpresa = (Empresa, setLoading, sendNotification, handleClose, setEmpresas) => {
  setLoading(true);
  editEmpresas(Empresa)
    .then((data) => {
      getEmpresas({ id: Empresa.id }).then((data) => {
        if (data.data) {
          setEmpresas(data.data);
        } else {
          setEmpresas([]);
        }
        setLoading(false);
      });
      setLoading(false);
      handleClose();
    })
    .catch((error) => {
      sendNotification({ msg: error.title || error.slice(0, 700), variant: 'error' });
      setLoading(false);
    });
};
