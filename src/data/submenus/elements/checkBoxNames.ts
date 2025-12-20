export const checkBoxNames = {
  HOME: 'Home',
  DESKTOP: 'Desktop',
  NOTES: 'Notes',
  COMMANDS: 'Commands',
  DOCUMENTS: 'Documents',
  WORKSPACE: 'WorkSpace',
  OFFICE: 'Office',
  DOWNLOADS: 'Downloads',
  WORD_FILE: 'Word File.doc',
  EXCEL_FILE: 'Excel File.doc',
} as const;

export type CheckBoxName = (typeof checkBoxNames)[keyof typeof checkBoxNames];
