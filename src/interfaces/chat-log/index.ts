import { ChatInterface } from 'interfaces/chat';
import { GetQueryInterface } from 'interfaces';

export interface ChatLogInterface {
  id?: string;
  chat_id: string;
  log_message: string;
  created_at?: any;
  updated_at?: any;

  chat?: ChatInterface;
  _count?: {};
}

export interface ChatLogGetQueryInterface extends GetQueryInterface {
  id?: string;
  chat_id?: string;
  log_message?: string;
}
