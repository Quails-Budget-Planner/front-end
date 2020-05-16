export interface IBudget {
  username: string;
  name: string;
  loc: string;
  salary: number;
  additional_income: number;
  gambling_winnings: number;
  estimated_tax: number;
  other_deductions: number;
  housing: {
    rent_or_mortgage: number;
    utilities: number;
  };
  food: {
    groceries: number;
    restaurants: number;
    social: number;
  };
  medical: {
    insurance: number;
    expenses: number;
  };
  transportation: {
    car_payment: number;
    insurance: number;
    gas: number;
    misc: number;
    public_transit: number;
    ride_share: number;
  };
  other_necessary: {
    childcare: number;
    other_dependents: number;
    cellphone: number;
    internet: number;
    debt_payments: number;
  };
  personal_expenses: {
    fitness: number;
    clothing: number;
    electronics: number;
    entertainment: number;
    hygiene: number;
    travel: number;
    misc: number;
  };
  savings: {
    retirement: number;
    general: number;
    investments: number;
    misc: number;
  };
}

export const emptyBudget = {
  username: '',
  name: '',
  loc: '',
  salary: 0,
  additional_income: 0,
  gambling_winnings: 0,
  estimated_tax: 25,
  other_deductions: 17,
  housing: {
    rent_or_mortgage: 0,
    utilities: 0,
  },
  food: {
    groceries: 0,
    restaurants: 0,
    social: 0,
  },
  medical: {
    insurance: 0,
    expenses: 0,
  },
  transportation: {
    car_payment: 0,
    insurance: 0,
    gas: 0,
    misc: 0,
    public_transit: 0,
    ride_share: 0,
  },
  other_necessary: {
    childcare: 0,
    other_dependents: 0,
    cellphone: 0,
    internet: 0,
    debt_payments: 0,
  },
  personal_expenses: {
    fitness: 0,
    clothing: 0,
    electronics: 0,
    entertainment: 0,
    hygiene: 0,
    travel: 0,
    misc: 0,
  },
  savings: {
    retirement: 0,
    general: 0,
    investments: 0,
    misc: 0,
  },
};
