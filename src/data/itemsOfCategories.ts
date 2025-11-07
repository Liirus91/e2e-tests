export const elementsItems = {
  TEXT_BOX: 'Text Box',
  CHECK_BOX: 'Check Box',
  RADIO_BUTTON: 'Radio Button',
  WEB_TABLES: 'Web Tables',
  BUTTONS: 'Buttons',
  LINKS: 'Links',
  BROKEN_LINKS_IMAGES: 'Broken Links - Images',
  UPLOAD_AND_DOWNLOAD: 'Upload and Download',
  DYNAMIC_PROPERTIES: 'Dynamic Properties',
} as const;

export type ElementsItemName =
  (typeof elementsItems)[keyof typeof elementsItems];
