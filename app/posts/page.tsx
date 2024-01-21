'use client';

import PostTableHead from '@/components/Post/PostTableHead';
import PostTableRow from '@/components/Post/PostTableRow';
import { IPost } from '@/types/Posts';
import { useState } from 'react';

export default function PostsPage() {
  const [posts, setPosts] = useState<IPost[]>([]);

  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => setPosts(data));

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="w-full">
        <table className="w-full border-collapse border border-slate-400 text-left">
          <PostTableHead />
          <tbody>
            {posts.map((post) => (
              <PostTableRow key={post.id} post={post} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
