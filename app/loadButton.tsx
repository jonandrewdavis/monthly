'use client';
import Image from 'next/image'
import Import from '/public/import.svg'

async function update(id: number, completed: boolean, refresh: () => void) {
  await fetch(`https://api.example.com/todo/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ completed }),
  });

  // Refresh the current route and fetch new data from the server
  refresh();
}


export default () => {
  return (<button className="bg-blue-500 hover:bg-blue-700 text-white flex align-middle font-bold py-2 px-4 rounded">
    <Image src={Import} alt='import' width={16} height={16} className='inline mr-2' /> Import</button>)
}

