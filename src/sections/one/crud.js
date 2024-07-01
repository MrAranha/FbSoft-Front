import axios from 'src/utils/axios';

export function getCarros(queries) {
  const response = axios.get('/api/Carros/search', { params: queries });
  return response;
}

export function deleteCarros(user) {
  const response = axios.delete('/api/Carros/delete', { params: { Id: user } });
  return response;
}

export function createCarros(user) {
  const response = axios({
    method: 'post',
    url: '/api/Carros/save',
    data: user,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response;
}

export function getUserByIDs(userID) {
  const response = axios.get('/api/Carros/getById', { params: { Id: userID } });
  return response;
}

export function editCarros(user) {
  const response = axios({
    method: 'put',
    url: '/api/Carros/edit',
    data: user,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response;
}
