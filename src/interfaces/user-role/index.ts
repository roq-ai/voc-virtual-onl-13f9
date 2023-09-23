import { UserInterface } from 'interfaces/user';
import { RoleInterface } from 'interfaces/role';
import { GetQueryInterface } from 'interfaces';

export interface UserRoleInterface {
  id?: string;
  user_id: string;
  role_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  role?: RoleInterface;
  _count?: {};
}

export interface UserRoleGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  role_id?: string;
}
