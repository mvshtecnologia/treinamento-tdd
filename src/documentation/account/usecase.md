# HISTÓRIA DA CONTA NORMAL

- <b>PARA</b> que um usuário possa transferir um valor de sua conta
- <b>SENDO</b> um usuário com a conta ativa
- <b>PODE</b> transferir ou receber valores

## CENÁRIO DEPÓSITO NORMAL
- <b>DADO</b> que estou na minha (que o usuário) conta bancária
- <b>E</b> eu tenho o valor de 1000 reais na conta
- <b>E</b> eu preciso transferir um valor de 200 reais para outra conta
- <b>QUANDO</b> o depósito for realizado
- <b>ENTÃO</b> é retirado 200 reais da minha conta bancária
- <b>E</b> o meu saldo ficará com 800 reais
- <b>ENTÃO</b> o valor de 200 reais deve ser acrescentado na conta que realizei o depósito

## CENÁRIO SAQUE NORMAL
- <b>DADO</b> que estou na minha (que o usuário) conta bancária
- <b>E</b> eu tenho o valor de 1000 reais na conta
- <b>E</b> eu preciso sacar um valor de 200 reais
- <b>QUANDO</b> o saque for realizado
- <b>ENTÃO</b> é debitado 200 reais da minha conta bancária
- <b>E</b> é acrescentado um valor de 200 na outra conta
- <b>ENTÃO</b> o meu saldo ficará com 800 reais


# HISTÓRIA DA CONTA COM TAXA

- <b>PARA</b> que um usuário possa transferir um valor de sua conta
- <b>SENDO</b> um usuário com a conta ativa
- <b>PODE</b> transferir ou receber valores com adicional de taxas

## CENÁRIO DEPÓSITO COM TAXA
- <b>DADO</b> que estou na minha (que o usuário) conta bancária
- <b>E</b> eu tenho o valor de 1000 reais na conta
- <b>E</b> eu preciso transferir um valor de 200 reais para outra conta
- <b>QUANDO</b> o depósito for realizado
- <b>ENTÃO</b> é retirado 200 reais da minha conta bancária
- <b>E</b> tambem é debitado uma taxa de 5%
- <b>E</b> o meu saldo ficará com 790 reais
- <b>ENTAO</b> o valor de 200 reais deve ser acrescentado na conta que realizei o depósito

## CENÁRIO SAQUE TAXA
- <b>DADO</b> que estou na minha (que o usuário) conta bancária
- <b>E</b> eu tenho o valor de 1000 reais na conta
- <b>E</b> eu preciso sacar um valor de 200 reais
- <b>QUANDO</b> o saque for realizado
- <b>ENTÃO</b> é debitado 200 reais da minha conta bancária
- <b>E</b> é descontado 1% do valor do saque
- <b>ENTÃO</b> o meu saldo ficará com 798 reais

## CENÁRIO TRANSFERÊNCIA INTERNACIONAL COM TAXA (EXERCÍCIO)
- <b>DADO</b> que estou na minha conta bancária
- <b>E</b> eu tenho o valor de 2000 reais na conta
- <b>E</b> eu preciso transferir um valor de 1000 reais para outra conta
- <b>QUANDO</b> o depósito for realizado
- <b>ENTÃO</b> é retirado 1000 reais da minha conta bancária
- <b>E</b> tambem é debitado uma taxa de 5%
- <b>E</b> tambem é debitado um valor fixo de 1.75
- <b>E</b> o meu saldo ficará com 948.25 reais
- <b>ENTAO</b> o valor de 200 reais deve ser acrescentado na conta que realizei o depósito

