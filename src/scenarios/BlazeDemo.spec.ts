import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import ComprarVooPage from '../support/pages/ComprarVooPage';

test.describe('Blaze Demo', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let comprarVooPage: ComprarVooPage;
  let BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.blazeDemo')
    .retrieveData();

  if (process.env.QA) {
    BASE_URL = TheConfig.fromFile(CONFIG)
      .andPath('application.blazeDemo')
      .retrieveData();
  }

  test.beforeEach(async ({ page }) => {
    comprarVooPage = new ComprarVooPage(page);
    await page.goto(BASE_URL);
  });

  test('Validação de compra de passagem de voo', async () => {
    await comprarVooPage.comprarVoo();
  });
});
