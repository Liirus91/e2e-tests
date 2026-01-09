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
      ])
    ).toBeTruthy();
  });

  test('Collapse all branches by one button', async () => {
    await checkBoxPage.expandAllNodes();
    await checkBoxPage.collapseAllNodes();

    expect(
      await checkBoxPage.areBranchesExpanded([checkBoxNames.HOME])
    ).toBeFalsy();
  });

  test('Expand specific branch', async () => {
    await checkBoxPage.expandBranch(checkBoxNames.HOME);

    expect(
      await checkBoxPage.isBranchExpanded(checkBoxNames.HOME)
    ).toBeTruthy();
    expect(
      await checkBoxPage.isBranchExpanded(checkBoxNames.DESKTOP)
    ).toBeFalsy();
  });

  test('Collapse specific branch', async () => {
    await checkBoxPage.expandAllNodes();
    await checkBoxPage.collapseBranch(checkBoxNames.DESKTOP);

    expect(
      await checkBoxPage.isBranchExpanded(checkBoxNames.DESKTOP)
    ).toBeFalsy();
    expect(
      await checkBoxPage.isBranchExpanded(checkBoxNames.HOME)
    ).toBeTruthy();
  });
});
