'use client';

import { useState } from 'react';
import { v4 } from 'uuid';

import { Transaction } from '../lib/getCategories';
const tablehead = [
  "Post Date",
  "Description", "Category", "Type", "Amount"
]

const getMonthlyTotal = (transactionsData: Transaction[]) => {
  return transactionsData.reduce((a, b) => b.isActive ? a + b.Amount : a, 0)
}

type TableProps = {
  serverTransactions: Transaction[];
}

const Table: React.FC<TableProps> = ({ serverTransactions }) => {

  const transactionsMap = new Map<string, Transaction>();
  serverTransactions.map(j => transactionsMap.set(j.uuid, j))

  const [transactionsData, setData] = useState(serverTransactions);

  // serverTransactions.filter((item) => item.isActive)
  const handleCheck = (event: any) => {

    const currId = event.target.getAttribute("data-id")
    const currTransaction = transactionsMap.get(currId);
    if (currTransaction) {
      currTransaction.isActive = !currTransaction.isActive
      transactionsMap.set(currId, currTransaction)
      setData(Array.from(transactionsMap.values()))
    }
  }

  return (
    <div className="flex flex-row win-w-full gap-4">
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden ">
            <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th className="p-4">
                    <div className="flex items-center">
                      <input checked={true} readOnly id="checkbox-all" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label htmlFor="checkbox-all" className="sr-only">checkbox</label>
                    </div>
                  </th>
                  {tablehead.map(head => (
                    <th key={v4()} className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                {transactionsData.map(transaction => (
                  <tr key={transaction.uuid} className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                    <td className="p-4 w-4">
                      <div className="flex items-center">
                        <input onChange={handleCheck} checked={transaction.isActive} data-id={transaction.uuid} id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="checkbox-table-1" className="sr-only">checkbox</label>
                      </div>
                    </td>
                    {tablehead.map((column: string) => <td key={v4()} className="py-4 px-6 text-white">{transaction[column]}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 dark:bg-gray-700 max-h-32 rounded-lg">
        <h3>monthly: {getMonthlyTotal(transactionsData)} </h3>
        <h5>yearly: {getMonthlyTotal(transactionsData) * 12} </h5>
      </div>

    </div>
  );
}

export default Table;
