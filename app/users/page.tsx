import UserTableHead from '@/components/User/UserTableHead';
import UserTableRow from '@/components/User/UserTableRow';
import { IUser } from '@/types/User';

const Users = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'GET',
  });

  const data: IUser[] = await res.json();

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="w-full">
        <table className="w-full border-collapse border border-slate-400 text-left">
          <UserTableHead />
          <tbody>
            {data.map((user) => (
              <UserTableRow key={user.id} user={user} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
