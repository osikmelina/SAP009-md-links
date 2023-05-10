import chalk from 'chalk';

function trataErro(erro) {
  throw new Error(chalk.red(erro.code, 'não há arquivo no diretório'));
}

function arquivoInexistente(erro) {
  if (erro.code === 'ENOENT') {
    console.log(chalk.red('arquivo ou diretório não existe'));
  }
}

function arquivoNaoProcessado(erro) {
  console.error(chalk.red('Erro ao processar o arquivo', erro));
}

function manejaErros(erro) {
  if (erro.cause.code === 'ENOTFOUND') {
    return (chalk.bgMagenta(' link não encontrado '));
  }
  return 'ocorreu algum erro';
}

export {
  trataErro,
  arquivoInexistente,
  arquivoNaoProcessado,
  manejaErros,
};
