import { demos } from '@/lib/demos';
import Link from 'next/link';

const tablehead = [
"Transaction Date","Post Date",
"Description","Category","Type","Amount","Memo"
]

export default function Page() {
  return (
    <div className="bg-black space-y-6">
      <header>
        <h1 className="w-screen text-zinc-500 text-3xl" >Monthly</h1>
      </header>
      <div className="w-screen p12  flex-1">
        <table className="table-auto">
        <thead>
        <tr>
          {tablehead.map(head => <th className="text-zinc-500 text-s">{head}</th>)}

        </tr>
        </thead>
         <tbody> 
          <tr>
          {tablehead.map(head => <td className="text-zinc-500 text-xl">{head}</td>)}</tr>
</tbody>
        </table>
      </div>
    </div>
    );
}
