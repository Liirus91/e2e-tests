import { Categories } from './categories';

export const categoryItems = {
  [Categories.ELEMENTS]: [
    'Text Box',
    'Check Box',
    'Radio Button',
    'Web Tables',
    'Buttons',
    'Links',
    'Broken Links - Images',
    'Upload and Download',
    'Dynamic Properties',
  ],
  [Categories.FORMS]: ['Practice Form'],
  [Categories.ALERTS]: [
    'Browser Windows',
    'Alerts',
    'Frames',
    'Nested Frames',
    'Modal Dialogs',
  ],
  [Categories.WIDGETS]: [
    'Accordian',
    'Auto Complete',
    'Date Picker',
    'Slider',
    'Progress Bar',
    'Tabs',
    'Tool Tips',
    'Menu',
    'Select Menu',
  ],
  [Categories.INTERACTIONS]: [
    'Sortable',
    'Selectable',
    'Resizable',
    'Droppable',
    'Dragabble',
  ],
  [Categories.BOOKS_API]: ['Book Store'],
} as const;

export type CategoryItem =
  (typeof categoryItems)[keyof typeof categoryItems][number];
