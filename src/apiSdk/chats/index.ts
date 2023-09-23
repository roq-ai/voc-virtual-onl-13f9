import axios from 'axios';
import queryString from 'query-string';
import { ChatInterface, ChatGetQueryInterface } from 'interfaces/chat';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getChats = async (query?: ChatGetQueryInterface): Promise<PaginatedInterface<ChatInterface>> => {
  const response = await axios.get('/api/chats', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createChat = async (chat: ChatInterface) => {
  const response = await axios.post('/api/chats', chat);
  return response.data;
};

export const updateChatById = async (id: string, chat: ChatInterface) => {
  const response = await axios.put(`/api/chats/${id}`, chat);
  return response.data;
};

export const getChatById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/chats/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteChatById = async (id: string) => {
  const response = await axios.delete(`/api/chats/${id}`);
  return response.data;
};
