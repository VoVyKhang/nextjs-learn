'use client';

export default function PostTableHead() {
  return (
    <>
      <thead>
        <tr className="border border-slate-300">
          <th className="border border-slate-300 p-4 w-28">User ID</th>
          <th className="border border-slate-300 p-4">Title</th>
          <th className="border border-slate-300 p-4">Body</th>
        </tr>
      </thead>
    </>
  );
}
