import axios from 'src/utils/axios';

export function getEmpresas(queries) {
  const response = axios.get('/api/Empresas/search', { params: queries });
  return response;
}

export function deleteEmpresas(user) {
  const response = axios.delete('/api/Empresas/delete', { params: { UserID: user } });
  return response;
}

export function createEmpresas(user) {
  const response = axios({
    method: 'post',
    url: '/api/Empresas/save',
    data: user,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response;
}

export function getEmpresaByIDs(userID) {
  const response = axios.get('/api/Empresas/getById', { params: { UserID: userID } });
  return response;
}

export function editEmpresas(user) {
  const response = axios({
    method: 'put',
    url: '/api/Empresas/edit',
    data: user,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response;
}
