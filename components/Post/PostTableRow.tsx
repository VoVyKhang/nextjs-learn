'use client';

import { IPost } from '@/types/Posts';

export default function PostTableRow(post: { post: IPost }) {
  return (
    <>
      <tr>
        <td className="border border-slate-300 p-2 pl-4">{post.post.userId}</td>
        <td className="border border-slate-300 p-2 pl-4">{post.post.title}</td>
        <td className="border border-slate-300 p-2 pl-4">{post.post.body}</td>
      </tr>
    </>
  );
}
