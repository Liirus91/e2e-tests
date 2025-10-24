export const ElementsSubmenu = {
  TEXT_BOX: 'Text Box',
  CHECK_BOX: 'Check Box',
  RADIO_BUTTON: 'Radio Button',
  WEB_TABLES: 'Web Tables',
  BUTTONS: 'Buttons',
  LINKS: 'Links',
  BROKEN_LINKS: 'Broken Links - Images',
  UPLOAD_DOWNLOAD: 'Upload and Download',
  DYNAMIC_PROPERTIES: 'Dynamic Properties',
} as const;

export type ElementSubmenuName =
  (typeof ElementsSubmenu)[keyof typeof ElementsSubmenu];
