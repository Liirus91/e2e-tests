export const textBoxSelectors: Record<
  TextBoxFieldName,
  { input: string; output: string }
> = {
  fullName: {
    input: '#userName',
    output: '#name',
  },
  email: {
    input: '#userEmail',
    output: '#email',
  },
  currentAddress: {
    input: '#currentAddress',
    output: '#output #currentAddress',
  },
  permanentAddress: {
    input: '#permanentAddress',
    output: '#output #permanentAddress',
  },
};

export const textBoxFields = {
  fullName: 'fullName',
  email: 'email',
  currentAddress: 'currentAddress',
  permanentAddress: 'permanentAddress',
} as const;

export type TextBoxFieldName = keyof typeof textBoxFields;
