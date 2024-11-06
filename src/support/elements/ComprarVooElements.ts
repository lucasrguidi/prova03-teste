import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class ComprarVooElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getCampoOrigem(): Locator {
    return this.page.locator('select[name="fromPort"]');
  }

  getCampoDestino(): Locator {
    return this.page.locator('select[name="toPort"]');
  }

  getBotaoBuscarVoos(): Locator {
    return this.page.locator('input[type="submit"]');
  }

  getBotaoEscolherVoo(): Locator {
    return this.page.locator(
      'input[type="submit"][value="Choose This Flight"]'
    );
  }

  getCampoNome(): Locator {
    return this.page.locator('input[name="inputName"]');
  }

  getCampoEndereco(): Locator {
    return this.page.locator('input[name="address"]');
  }

  getCampoCidade(): Locator {
    return this.page.locator('input[name="city"]');
  }

  getCampoEstado(): Locator {
    return this.page.locator('input[name="state"]');
  }

  getCampoCodigoPostal(): Locator {
    return this.page.locator('input[name="zipCode"]');
  }

  getCampoNumeroCartao(): Locator {
    return this.page.locator('input[name="creditCardNumber"]');
  }

  getCampoMesValidade(): Locator {
    return this.page.locator('input[name="creditCardMonth"]');
  }

  getCampoAnoValidade(): Locator {
    return this.page.locator('input[name="creditCardYear"]');
  }

  getCampoNomeCartao(): Locator {
    return this.page.locator('input[name="nameOnCard"]');
  }

  getCampoLembrarMe(): Locator {
    return this.page.locator('input[name="rememberMe"]');
  }

  getBotaoComprarVoo(): Locator {
    return this.page.locator('input[type="submit"][value="Purchase Flight"]');
  }

  getMensagemConfirmacao(): Locator {
    return this.page.locator('h1');
  }
}
