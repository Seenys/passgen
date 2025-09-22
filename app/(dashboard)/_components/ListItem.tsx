import React from 'react';
import { CopyIcon } from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PasswordOptions } from '@/lib/password';
import OptionTags from './OptionTags';

const ListItem = ({ password }: any) => {
  const handlerCopyPassword = (password: string) => {
    navigator.clipboard.writeText(password);
    toast.success('Password copied to clipboard');
  };

  const options = password as PasswordOptions;

  console.log(password);
  return (
    <Card key={password.id}>
      <CardContent className="flex items-center justify-between gap-4 p-4">
        <section>
          <p className="text-lg font-bold">Tittle: {password.title}</p>
          <p className="my-2 text-sm text-gray-500">length:{password.length}</p>
          <OptionTags passwordConfig={options} />
        </section>
        <section className="flex flex-col space-y-2">
          <Button
            className="cursor-pointer"
            onClick={() => handlerCopyPassword(password.decryptedPassword)}
          >
            <CopyIcon />
            Copy
          </Button>
        </section>
      </CardContent>
    </Card>
  );
};

export default ListItem;
