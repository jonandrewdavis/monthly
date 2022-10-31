import styles from './page.module.css'

import { use } from 'react';
import { Transaction, fetchTransactions } from '../lib/getCategories';
import Table from './table';
import LoadButton from './loadButton';

const fetchLocal = async (): Promise<Transaction[] | undefined> => {
  return await fetchTransactions()
};

export default function Page() {
  const serverTransactions = use(fetchLocal());

  if (!serverTransactions) return null;

  return (
    <div className="max-w-4xl mx-auto">
      <div className='flex justify-between'>
        <header className='p-8 pl-0'>
          <h1 className="text-white text-3xl" >monthly</h1>
        </header>
        <div className='self-center'>
          <LoadButton />
        </div>
      </div>
      <Table serverTransactions={serverTransactions} />
    </div>
  )
}
