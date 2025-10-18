export const Categories = {
  ELEMENTS: 'Elements',
  FORMS: 'Forms',
  ALERTS: 'Alerts, Frame & Windows',
  WIDGETS: 'Widgets',
  INTERACTIONS: 'Interactions',
  BOOKS_API: 'Book Store Application',
} as const;

export type CategoryName = (typeof Categories)[keyof typeof Categories];
