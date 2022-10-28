import { use } from 'react';
import { fetchTransactions } from '@/lib/getCategories';

const tablehead = [
  "Transaction Date", "Post Date",
  "Description", "Category", "Type", "Amount"
]

type Transaction = {
  [key: string]: string | number;
};

const fetchLocal = async (): Promise<Transaction[] | undefined> => {

  return await fetchTransactions();
};

export default function Page() {
  const transactionsData = use(fetchLocal());
  if (!transactionsData) return null;
  return (
    <div className="space-y-6 dark">
      <header>
        <h1 className="w-screen text-zinc-500 text-7xl" >2: UPDATE Monthly</h1>
      </header>
      <div className="w-screen p12  flex-1">
        <table className="table-auto text-sm text-left text-zinc-400">
          <thead className="text-xs text-gray-700 uppercase">
            <tr>
              {tablehead.map(head => <th className="text-zinc-500 text-s">{head}</th>)}
            </tr>
          </thead>
          <tbody>
            {transactionsData.map((transaction: Transaction) => (
              <tr className="border-gray">
                {tablehead.map((column: string) => <td className="py-4 px-6 text-white">{transaction[column]}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
