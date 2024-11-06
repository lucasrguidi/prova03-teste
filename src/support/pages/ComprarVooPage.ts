import { Page, expect } from '@playwright/test';
import BasePage from './BasePage';
import ComprarVooElements from '../elements/ComprarVooElements';

export default class ComprarVooPage extends BasePage {
  readonly comprarVooElements: ComprarVooElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.comprarVooElements = new ComprarVooElements(page);
  }

  async comprarVoo(): Promise<void> {
    await this.comprarVooElements.getCampoOrigem().selectOption('Paris');

    await this.comprarVooElements.getCampoDestino().selectOption('London');

    await this.comprarVooElements.getBotaoBuscarVoos().click();

    await this.comprarVooElements.getBotaoEscolherVoo().first().click();

    await this.comprarVooElements.getCampoNome().fill('Lucas Guidi');
    await this.comprarVooElements.getCampoEndereco().fill('Rua Criciúma 450');
    await this.comprarVooElements.getCampoCidade().fill('Criciúma');
    await this.comprarVooElements.getCampoEstado().fill('SC');
    await this.comprarVooElements.getCampoCodigoPostal().fill('88801465');
    await this.comprarVooElements
      .getCampoNumeroCartao()
      .fill('1111222233334444');
    await this.comprarVooElements.getCampoMesValidade().fill('08');
    await this.comprarVooElements.getCampoAnoValidade().fill('2026');
    await this.comprarVooElements.getCampoNomeCartao().fill('Lucas Guidi');

    await this.comprarVooElements.getBotaoComprarVoo().click();

    const mensagemConfirmacao = await this.comprarVooElements
      .getMensagemConfirmacao()
      .textContent();
    expect(mensagemConfirmacao).toContain('Thank you for your purchase today!');
  }
}
