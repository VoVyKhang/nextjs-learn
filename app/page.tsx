import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex items-center space-x-5">
        <Link
          href="/posts"
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Client Page
        </Link>
        <Link
          href="/users"
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Server Page
        </Link>
      </div>
    </div>
  );
}
