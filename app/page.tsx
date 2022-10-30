import Image from 'next/image'
import styles from './page.module.css'

import { use } from 'react';
import { fetchTransactions } from '../lib/getCategories';

const tablehead = [
  "Post Date",
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
    <div>
      <div className="max-w-4xl mx-auto">
        <header className='p-8'>
          <h1 className="text-white text-3xl" >monthly 2</h1>
        </header>
        <div className="flex flex-col">
          <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden ">
                <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                  <thead className="bg-gray-100 dark:bg-gray-700">
                    <tr>
                      {tablehead.map(head => (
                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                          {head}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                    {transactionsData.map((transaction: Transaction) => (
                      <tr className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                        {tablehead.map((column: string) => <td className="py-4 px-6 text-white">{transaction[column]}</td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
