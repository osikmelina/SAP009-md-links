/* eslint-disable no-undef */
import chalk from 'chalk';
import {
  extraiLinks,
  checkStatus,
  listaValidada,
} from '../src/validate-stats.js';

describe('extraiLinks', () => {
  it('Deve retornar um array com os links extraídos do objeto', () => {
    const arrayLinks = [
      { href: 'https://www.google.com' },
      { href: 'https://www.trello.com' },
      { href: 'https://www.canva.com' },
    ];

    const linksExtraidos = extraiLinks(arrayLinks);

    expect(linksExtraidos).toEqual([
      'https://www.google.com',
      'https://www.trello.com',
      'https://www.canva.com',
    ]);
  });
});

describe('checkStatus', () => {
  it('deve ser uma função', () => {
    expect(typeof checkStatus).toBe('function');
  });

  it('deve retornar um array com o status da URL', async () => {
    const listaURLs = ['https://www.google.com', 'https://www.canva.com'];
    const expectedOutput = [
      `${chalk.bgBlue(' 200 | OK ')}`,
      `${chalk.bgBlue(' 200 | OK ')}`,
    ];
    const result = await checkStatus(listaURLs);
    expect(result).toEqual(expectedOutput);
  });
});

describe('listaValidada', () => {
  it('deve retornar uma lista de objetos com os códigos de status HTTP', async () => {
    const listaDeLinks = [
      { url: 'https://www.google.com', nome: 'Google' },
      { href: 'https://www.trello.com', nome: 'Trello' },
      { href: 'https://www.twitter.com', nome: 'Twitter' }];

    const listaEsperada = [
      { url: 'https://www.google.com', nome: 'Google', status: 'ocorreu algum erro' },
      { href: 'https://www.trello.com', nome: 'Trello', status: chalk.bgBlue(` ${200} | OK `) },
      { href: 'https://www.twitter.com', nome: 'Twitter', status: 'ocorreu algum erro' }];

    const listaObtida = await listaValidada(listaDeLinks);
    expect(listaObtida).toEqual(listaEsperada);
  });
});
