import { TextBoxPage } from '../pages/elements/TextBoxPage';
import { elementsItems } from './itemsOfCategories';

export const itemToPageMap = {
  [elementsItems.TEXT_BOX]: TextBoxPage,
  [elementsItems.CHECK_BOX]: TextBoxPage,
  [elementsItems.RADIO_BUTTON]: TextBoxPage,
  [elementsItems.WEB_TABLES]: TextBoxPage,
  [elementsItems.BUTTONS]: TextBoxPage,
  [elementsItems.LINKS]: TextBoxPage,
  [elementsItems.BROKEN_LINKS_IMAGES]: TextBoxPage,
  [elementsItems.UPLOAD_AND_DOWNLOAD]: TextBoxPage,
  [elementsItems.DYNAMIC_PROPERTIES]: TextBoxPage,
} as const;
