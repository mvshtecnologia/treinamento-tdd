
type AccountPorperties = {
  owner: string,
  balance: number
}

type TransferProps = {
  accountDestination: Account,
  amount: number
}
export class Account {

  constructor(public readonly props: AccountPorperties){}

  get owner() {
    return this.props.owner;
  }

  get balance() {
    return this.props.balance;
  }

  private deposit(amount: number){
    this.props.balance += amount;
  }
  private debit(value: number){
    this.props.balance -= value;
  }

  withdraw(value: number){
    this.debit(value);
  }

  withdrawTax(value: number){
    const tax = value * 0.01;
    this.debit(value + tax);
  }

  transfer(dataAccount: TransferProps){
    const { accountDestination, amount} = dataAccount;
    this.debit(amount);
    accountDestination.deposit(amount);
  }
  transferTax(dataAccount: TransferProps){
    const { accountDestination, amount} = dataAccount;
    const tax = amount * 0.05;
    this.debit(amount + tax);
    accountDestination.deposit(amount);
  }
}