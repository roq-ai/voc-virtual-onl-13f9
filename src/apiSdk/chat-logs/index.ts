import axios from 'axios';
import queryString from 'query-string';
import { ChatLogInterface, ChatLogGetQueryInterface } from 'interfaces/chat-log';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getChatLogs = async (query?: ChatLogGetQueryInterface): Promise<PaginatedInterface<ChatLogInterface>> => {
  const response = await axios.get('/api/chat-logs', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createChatLog = async (chatLog: ChatLogInterface) => {
  const response = await axios.post('/api/chat-logs', chatLog);
  return response.data;
};

export const updateChatLogById = async (id: string, chatLog: ChatLogInterface) => {
  const response = await axios.put(`/api/chat-logs/${id}`, chatLog);
  return response.data;
};

export const getChatLogById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/chat-logs/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteChatLogById = async (id: string) => {
  const response = await axios.delete(`/api/chat-logs/${id}`);
  return response.data;
};
