'use client';

import React, { useEffect, useState } from 'react';
import { CopyIcon } from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { generatePassword } from '@/lib/password';

const FormCreatePassword = () => {
  const [password, setPassword] = useState('');

  useEffect(() => {
    const generate = generatePassword();
    setPassword(generate);
  }, []);

  const handlerCopyPassword = () => {
    navigator.clipboard
      .writeText(password)
      .then(() => {
        toast.success('Password copied to clipboard');
      })
      .catch(() => {
        toast.error('Failed to copy password');
      });
  };

  return (
    <div className="mx-auto max-w-2xl space-y-6 p-6">
      <header className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-gray-700">Password Generator</h1>
        <p className="text-gray-500">Generate strong and secure passwords with ease.</p>
      </header>
      <Card className="bg-gradient-to-r from-gray-900 to-gray-800">
        <CardContent className="flex items-center justify-between gap-4">
          <div className="mid-w-0 flex-1">
            <p className="mb-1 text-sm text-slate-400">Password Generated:</p>
            <p className="font-mono text-xl leading-relaxed break-all text-green-400">{password}</p>
          </div>
          <Button
            onClick={handlerCopyPassword}
            className="shrink-0 cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-white transition-all duration-200 hover:scale-105 hover:bg-blue-700"
          >
            <CopyIcon />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default FormCreatePassword;
