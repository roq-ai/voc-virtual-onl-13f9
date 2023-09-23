import { ChatLogInterface } from 'interfaces/chat-log';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ChatInterface {
  id?: string;
  user_id: string;
  message: string;
  created_at?: any;
  updated_at?: any;
  chat_log?: ChatLogInterface[];
  user?: UserInterface;
  _count?: {
    chat_log?: number;
  };
}

export interface ChatGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  message?: string;
}
