require('dotenv').config()
const chalk = require('chalk')
const axios = require('axios')

const myBeverage = {
  delicious: true,
  sour: false,
};

afterAll(() => {
  console.log(chalk.green("Executa uma função após a conclusão de todos os testes, terminou todos os testes"))
});

afterEach(() => {
  console.log(chalk.red(`Executa uma função após a conclusão de cada um dos testes, durante todos os testes`))
});

beforeAll(() => {
  console.log(chalk.blue("Executa uma função antes da execução de qualquer um dos testes, Executa uma função antes da execução"))
});

//bloco
describe('testando json', () => {
  test('verificando se true o delicious ', () => {
    expect(myBeverage.delicious).toBeTruthy();
  });

  test('verificando se false o sour', () => {
    expect(myBeverage.sour).toBeFalsy();
  });

})

//bloco
describe('calculadora', () => {
  test('soma', () => {
    expect(2 + 1).toBe(3);
  });
});

//bloco
describe('resquest', () => {
  test('get', async () => {
    const { codeStatus } = (await axios.get(`http://localhost:${process.env.port}/todos`)).data
    console.log(codeStatus)
    expect(codeStatus).toEqual(200);
  });
});