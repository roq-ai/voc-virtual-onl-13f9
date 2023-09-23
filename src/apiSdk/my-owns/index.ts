import axios from 'axios';
import queryString from 'query-string';
import { MyOwnInterface, MyOwnGetQueryInterface } from 'interfaces/my-own';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getMyOwns = async (query?: MyOwnGetQueryInterface): Promise<PaginatedInterface<MyOwnInterface>> => {
  const response = await axios.get('/api/my-owns', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createMyOwn = async (myOwn: MyOwnInterface) => {
  const response = await axios.post('/api/my-owns', myOwn);
  return response.data;
};

export const updateMyOwnById = async (id: string, myOwn: MyOwnInterface) => {
  const response = await axios.put(`/api/my-owns/${id}`, myOwn);
  return response.data;
};

export const getMyOwnById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/my-owns/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteMyOwnById = async (id: string) => {
  const response = await axios.delete(`/api/my-owns/${id}`);
  return response.data;
};
