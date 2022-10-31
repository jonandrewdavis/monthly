import { getTransactions } from "./testData"
import { v4 } from 'uuid';

export type PageProps = {
  params?: any;
  children?: React.ReactNode;
};

export type Transaction = {
  Amount: number;
  isActive: boolean;
  uuid: string;
  [key: string]: string | number | boolean;
};

type Count = {
  [key: string]: number;
}

const filterToMonthly = () => {
  const hashMap: Count = {};
  const final: Transaction[] = [];

  getTransactions().forEach((item: Transaction) => {
    const curr = item['Amount'].toString();
    if (!hashMap[curr]) {
      hashMap[curr] = 1;
    } else if (hashMap[curr] === 1 && item.Amount < 0) {
      const temp = item;
      item.uuid = v4();
      item.isActive = true;
      temp.Amount = Math.abs(temp.Amount);
      final.push(temp);
      hashMap[curr] = hashMap[curr] + 1;
    };
  });
  return final

}

export async function fetchTransactions(): Promise<Transaction[]> {
  return filterToMonthly();
}

