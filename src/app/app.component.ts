import { Component } from '@angular/core';
import { loadStdlib } from '@reach-sh/stdlib';

/**
 * This application will allow a user
 * to connect to a throwaway test wallet
 * and then deposit test funds in that wallet
 */

// instantiate reach for the coin algo
const reach: any = loadStdlib('ALGO');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  account: any;
  balance: any;
  fundAmount: any = 0;
  walletConnected!: boolean;

  async connectWallet(): Promise<void> {
    console.log('Wallet connected');
    this.walletConnected = true;
    try {
      await this.getAccount();
      await this.getBalance();
    } catch (error) {
      console.error(error);
      this.walletConnected = false;
    }
  }
  /**
   * getAccount will use the reach.createAccount function
   * to create a test account and assign the account object
   * to the local variable account
   */
  async getAccount(): Promise<void> {
    this.account = await reach.createAccount();
    console.log('[account]: ', this.account);
  }
  /**
   * getBalance hold the output of reach.BalanceOf and then
   * parse it to algos and assign the result in the porperty 'balance'
   */
  async getBalance(): Promise<void> {
    const rawBalance = await reach.balanceOf(this.account); // balance in microalgos
    this.balance = reach.formatCurrency(rawBalance, 4); // to algos
    console.log('[balance]: ', this.balance);
  }
  /**
   * first it will call the reach.fundFromFaucet on the account object and the
   * fund amount variable (translated back into microAlgos with reach.parseCurrency);
   * then, it will call the getBalance function to showcase the updated balance.
   */
  async fundWallet(): Promise<void> {
    await reach.fundFromFaucet(
      this.account,
      reach.parseCurrency(this.fundAmount)
    );
    await this.getBalance();
  }
}
