'use client';

import { useQuery } from '@tanstack/react-query';

import { GetPasswordsAction } from '../_actions/GetPasswords.action';
import ListItem from './ListItem';

const PasswordList = () => {
  const { data, error, isPending } = useQuery({
    queryKey: ['passwords'],
    queryFn: GetPasswordsAction,
  });

  if (isPending) return <div className="text-center text-gray-500">Loading Passwords...</div>;
  if (error) return <div className="text-center text-red-500">Error loading passwords</div>;

  return (
    <div className="mx-auto max-w-2xl space-y-6 p-6">
      <section className="space-y-1 text-center">
        <h2 className="text-2xl font-bold text-gray-700">Saved Passwords</h2>
        <p className="text-sm text-gray-500">Manage and view your saved passwords securely.</p>
      </section>

      <section className="space-y-4">
        {data.map((password) => (
          <ListItem key={password.id} password={password} />
        ))}
      </section>
    </div>
  );
};

export default PasswordList;
