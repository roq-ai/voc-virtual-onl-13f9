interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Administrator', 'Developer'],
  tenantName: 'My Own',
  applicationName: 'VOC (Virtual Online Chatbot)',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage users', 'Manage own data', 'Manage roles', 'Manage chat and chat logs'],
  getQuoteUrl: 'https://app.roq.ai/proposal/36f41fbf-3cb6-47f3-a264-f270bf7d3207',
};
