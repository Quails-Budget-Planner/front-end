import { Component } from '@angular/core';

export interface Tile {
  imageURL: string;
  cols: number;
  rows: number;
  header: string;
  text: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  tiles: Tile[] = [
    {
      header: `Hello Lambda student! Need help budgeting now that you're making that sweet sweet coin?`,
      text: '',
      cols: 3,
      rows: 2,
      imageURL: 'assets/images/undraw_Savings_dwkw.png',
    },
    {
      header: '',
      text: '',
      cols: 1,
      rows: 1,
      imageURL: 'assets/images/undraw_credit_card_payment_12va.png',
    },
    {
      header: '',
      text: `Making that sweet dev money but not sure where it's all going?`,
      cols: 2,
      rows: 1,
      imageURL: '',
    },
    {
      header: '',
      text:
        'Wanna see your net worth grow rather than disappear into the ISA abyss?',
      cols: 2,
      rows: 1,
      imageURL: '',
    },
    {
      header: '',
      text: '',
      cols: 1,
      rows: 1,
      imageURL: 'assets/images/undraw_investment_data_yfvt.png',
    },
    {
      header: '',
      text: '',
      cols: 1,
      rows: 1,
      imageURL: 'assets/images/undraw_wallet_aym5.png',
    },
    {
      header: '',
      text:
        'Sign up for Budget Planner today, plan your budget, and watch your moneys pile up!',
      cols: 2,
      rows: 1,
      imageURL: '',
    },
  ];
  newTiles = [
    {
      text: `Hello Lambda student! Need help budgeting now that you're making that sweet sweet coin?`,
      imageURL: 'assets/images/undraw_Savings_dwkw.png',
    },
    {
      text: "Making that sweet dev money but not sure where it's all going?",
      imageURL: 'assets/images/undraw_credit_card_payment_12va.png',
    },
    {
      header: '',
      text:
        'Wanna see your net worth grow rather than disappear into the ISA abyss?',
      cols: 2,
      rows: 1,
      imageURL: 'assets/images/undraw_investment_data_yfvt.png',
    },
    {
      header: '',
      text:
        'Sign up for Budget Planner today, plan your budget, and watch your moneys pile up!',
      cols: 2,
      rows: 1,
      imageURL: 'assets/images/undraw_wallet_aym5.png',
    },
  ]
}
