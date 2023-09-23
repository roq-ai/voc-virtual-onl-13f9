const mapping: Record<string, string> = {
  chats: 'chat',
  'chat-logs': 'chat_log',
  'my-owns': 'my_own',
  roles: 'role',
  users: 'user',
  'user-roles': 'user_role',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
