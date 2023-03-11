import { Account } from "./account";

describe('ACCOUNT UNIT TEST', () => {

  describe('DEPOSIT ACCOUNT NORMAL UNIT TEST ', () => {
    it(`DADO que estou na minha conta bancária
        E eu tenho o valor de 1000 reais na conta
        E eu preciso transferir um valor de 200 reais para outra conta
        QUANDO o depósito for realizado
        ENTÃO é retirado 200 reais da minha conta bancária
        E o meu saldo ficará com 800 reais
        ENTÃO o valor de 200 reais deve ser acrescentado na conta que realizei o depósito`, () => {

      const originProps = {
        owner: 'Caio Aguiar',
        balance: 1000
      }
      const destinationProps = {
        owner: 'Marcos Lima',
        balance: 45000
      }
      const origin = new Account(originProps);
      const destination = new Account(destinationProps);

      origin.transfer({
        accountDestination: destination,
        amount: 200
      });

      expect(origin.balance).toBe(800);
      expect(origin.owner).toBe('Caio Aguiar');

      expect(destination.balance).toBe(45200);
      expect(destination.owner).toBe('Marcos Lima');
    });

  });

  describe('DEBIT ACCOUNT NORMAL UNIT TEST ', () => {
    it(`DADO que estou na minha (que o usuário) conta bancária
        E eu tenho o valor de 1000 reais na conta
        E eu preciso sacar um valor de 200 reais
        QUANDO o saque for realizado
        ENTÃO é debitado 200 reais da minha conta bancária
        E é acrescentado um valor de 200 na outra conta
        ENTÃO o meu saldo ficará com 800 reais`, () => {

      const originProps = {
        owner: 'Caio Aguiar',
        balance: 1000
      }
  
      const origin = new Account(originProps);
    
      origin.withdraw(200);

      expect(origin.balance).toBe(800);
      expect(origin.owner).toBe('Caio Aguiar');

    });
  });

  describe('DEPOSIT ACCOUNT TAX UNIT TEST ', () => {
    it(`DADO que estou na minha (que o usuário) conta bancária
        E eu tenho o valor de 1000 reais na conta
        E eu preciso transferir um valor de 200 reais para outra conta
        QUANDO o depósito for realizado
        ENTÃO é retirado 200 reais da minha conta bancária
        E tambem é debitado uma taxa de 5%
        E o meu saldo ficará com 790 reais
        ENTAO o valor de 200 reais deve ser acrescentado na conta que realizei o depósito`, () => {
      const originProps = {
        owner: 'Caio Aguiar',
        balance: 1000
      }
      const destinationProps = {
        owner: 'Adilson',
        balance: 20000
      }
      const origin = new Account(originProps);
      const destination = new Account(destinationProps);

      origin.transferTax({
        accountDestination: destination,
        amount: 200
      });

      expect(origin.owner).toBe('Caio Aguiar');
      expect(origin.balance).toBe(790);

      expect(destination.owner).toBe('Adilson');
      expect(destination.balance).toBe(20200);

    });

  });

  describe('DEBIT ACCOUNT TAX UNIT TEST ', () => {
    it(`DADO que estou na minha (que o usuário) conta bancária
        E eu tenho o valor de 1000 reais na conta
        E eu preciso sacar um valor de 200 reais
        QUANDO o saque for realizado
        ENTÃO é debitado 200 reais da minha conta bancária
        E é descontado 1% do valor do saque
        ENTÃO o meu saldo ficará com 798 reais`, () => {

          const originProps = {
            owner: 'Caio Aguiar',
            balance: 1000
          }
          const origin = new Account(originProps);
          origin.withdrawTax(200);

          expect(origin.owner).toBe('Caio Aguiar');
          expect(origin.balance).toBe(798);
    });

  });


})