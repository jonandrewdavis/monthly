// import Image from 'next/image'
import styles from './page.module.css'

import { use } from 'react';
import { Transaction, fetchTransactions } from '../lib/getCategories';
import Table from './table';

const fetchLocal = async (): Promise<Transaction[] | undefined> => {
  return await fetchTransactions()
};

//
export default function Page() {
  const serverTransactions = use(fetchLocal());

  if (!serverTransactions) return null;


  return (
    <div className="max-w-4xl mx-auto">
      <header className='p-8'>
        <h1 className="text-white text-3xl" >monthly</h1>
      </header>
      <Table serverTransactions={serverTransactions} />
    </div>
  )
}
