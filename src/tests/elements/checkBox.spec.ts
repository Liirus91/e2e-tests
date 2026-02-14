import { Page } from 'puppeteer';
import { closeBrowser, newPage } from '../../utils/browser';
import { CheckBoxPage } from '../../pages/elements/CheckBoxPage';
import { textBoxFields } from '../../data/submenus/elements/textBoxFields';
import { checkBoxNames } from '../../data/submenus/elements/checkBoxNames';

let page: Page;
let checkBoxPage: CheckBoxPage;

beforeAll(async () => {
  page = await newPage();
});

beforeEach(async () => {
  checkBoxPage = new CheckBoxPage(page);
  await checkBoxPage.goto();
});

afterAll(async () => {
  await page.close();
  await closeBrowser();
});

describe('Check box page tests', () => {
  test('Expand all branches by one button', async () => {
    await checkBoxPage.expandAllNodes();

    expect(
      await checkBoxPage.areBranchesExpanded([
        checkBoxNames.HOME,
        checkBoxNames.DESKTOP,
        checkBoxNames.DOCUMENTS,
        checkBoxNames.WORKSPACE,
        checkBoxNames.OFFICE,
        checkBoxNames.DOWNLOADS,
      ]),
    ).toBeTruthy();
  });

  test('Collapse all branches by one button', async () => {
    await checkBoxPage.expandAllNodes();
    await checkBoxPage.collapseAllNodes();

    expect(
      await checkBoxPage.areBranchesExpanded([checkBoxNames.HOME]),
    ).toBeFalsy();
  });

  test('Expand specific branch', async () => {
    await checkBoxPage.expandBranch(checkBoxNames.HOME);

    expect(
      await checkBoxPage.isBranchExpanded(checkBoxNames.HOME),
    ).toBeTruthy();
    expect(
      await checkBoxPage.isBranchExpanded(checkBoxNames.DESKTOP),
    ).toBeFalsy();
  });

  test('Collapse specific branch', async () => {
    await checkBoxPage.expandAllNodes();
    await checkBoxPage.collapseBranch(checkBoxNames.DESKTOP);

    expect(
      await checkBoxPage.isBranchExpanded(checkBoxNames.DESKTOP),
    ).toBeFalsy();
    expect(
      await checkBoxPage.isBranchExpanded(checkBoxNames.HOME),
    ).toBeTruthy();
  });

  test('Check main checkbox', async () => {
    await checkBoxPage.toggleCheckbox(checkBoxNames.HOME);

    expect(
      await checkBoxPage.isCheckboxChecked(checkBoxNames.HOME),
    ).toBeTruthy();
    expect(await checkBoxPage.getSelectedResults()).toEqual(
      expect.arrayContaining([
        checkBoxNames.HOME,
        checkBoxNames.DESKTOP,
        checkBoxNames.NOTES,
        checkBoxNames.COMMANDS,
      ]),
    );
  });

  test('Uncheck main checkbox', async () => {
    await checkBoxPage.toggleCheckbox(checkBoxNames.HOME);

    expect(
      await checkBoxPage.isCheckboxChecked(checkBoxNames.HOME),
    ).toBeFalsy();
    expect(await checkBoxPage.getSelectedResults()).toEqual([]);
  });

  test('Check specific checkbox in the middle of the branch', async () => {
    await checkBoxPage.expandAllNodes();
    await checkBoxPage.toggleCheckbox(checkBoxNames.DESKTOP);

    expect(
      await checkBoxPage.isCheckboxChecked(checkBoxNames.NOTES),
    ).toBeTruthy();
    expect(await checkBoxPage.getSelectedResults()).toEqual(
      expect.arrayContaining([
        checkBoxNames.DESKTOP,
        checkBoxNames.NOTES,
        checkBoxNames.COMMANDS,
      ]),
    );
  });

  test('Uncheck specific checkbox in the middle of the branch', async () => {
    await checkBoxPage.expandAllNodes();
    await checkBoxPage.toggleCheckbox(checkBoxNames.DESKTOP);
    await checkBoxPage.toggleCheckbox(checkBoxNames.NOTES);

    expect(
      await checkBoxPage.isCheckboxChecked(checkBoxNames.NOTES),
    ).toBeFalsy();
    expect(await checkBoxPage.getSelectedResults()).toEqual(
      expect.arrayContaining([checkBoxNames.COMMANDS]),
    );
  });

  test('Check specific checkbox at the end of the branch', async () => {
    await checkBoxPage.expandAllNodes();
    await checkBoxPage.toggleCheckbox(checkBoxNames.COMMANDS);

    expect(
      await checkBoxPage.isCheckboxChecked(checkBoxNames.COMMANDS),
    ).toBeTruthy();
    expect(await checkBoxPage.getSelectedResults()).toEqual(
      expect.arrayContaining([checkBoxNames.COMMANDS]),
    );
  });

  test('Uncheck specific checkbox at the end of the branch', async () => {
    await checkBoxPage.expandAllNodes();
    await checkBoxPage.toggleCheckbox(checkBoxNames.COMMANDS);

    expect(
      await checkBoxPage.isCheckboxChecked(checkBoxNames.COMMANDS),
    ).toBeFalsy();
    expect(await checkBoxPage.getSelectedResults()).toEqual([]);
  });
});
