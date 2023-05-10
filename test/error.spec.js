/* eslint-disable no-undef */
import chalk from 'chalk';
import {
  trataErro,
  arquivoInexistente,
  arquivoNaoProcessado,
  manejaErros,
} from '../src/error';

describe('trataErro', () => {
  it('deve lançar um erro com a mensagem correta', () => {
    const erro = { code: 'ENOENT' };
    expect(() => trataErro(erro)).toThrowError(new Error(`${chalk.red(erro.code, 'não há arquivo no diretório')}`));
  });
});

describe('arquivoInexistente', () => {
  it('deve imprimir a mensagem de erro para um erro ENOENT', () => {
    const erro = { code: 'ENOENT' };
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    arquivoInexistente(erro);
    expect(consoleSpy).toHaveBeenCalledWith(chalk.red('arquivo ou diretório não existe'));
  });
});

describe('arquivoNaoProcessado', () => {
  it('deve chamar console.error com a mensagem de erro', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    const erro = new Error('mensagem de erro');
    arquivoNaoProcessado(erro);

    expect(consoleSpy).toHaveBeenCalledWith(chalk.red('Erro ao processar o arquivo', erro));

    consoleSpy.mockRestore();
  });
});

describe('manejaErros()', () => {
  test('deve retornar a mensagem de erro correta para ENOTFOUND', () => {
    const erro = {
      cause: {
        code: 'ENOTFOUND',
      },
    };
    const resultado = manejaErros(erro);
    expect(resultado).toBe(chalk.bgMagenta(' link não encontrado '));
  });
});
