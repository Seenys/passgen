'use client';

import React, { useEffect, useState } from 'react';
import { ArrowUp01, CaseLower, CaseUpper, CopyIcon, Hash } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { generatePassword, PasswordOptions } from '@/lib/password';
import PasswordDisplay from './PasswordDisplay';

const formOptions = [
  {
    label: 'Uppercase Letters',
    value: 'includeUppercase',
    icon: <CaseUpper />,
    description: 'Include uppercase letters (A - Z)',
  },
  {
    label: 'Lowercase Letters',
    value: 'includeLowercase',
    icon: <CaseLower />,
    description: 'Include lowercase letters (a - z)',
  },
  {
    label: 'Numbers',
    value: 'includeNumbers',
    icon: <ArrowUp01 />,
    description: 'Include numbers (0 - 9)',
  },
  {
    label: 'Symbols',
    value: 'includeSymbols',
    icon: <Hash />,
    description: 'Include symbols (!, @, #, $, etc.)',
  },
] as const;

const FormCreatePassword = () => {
  const [options, setOptions] = useState<PasswordOptions>({});

  const form = useForm<PasswordOptions>({
    defaultValues: {
      length: 12,
      includeUppercase: true,
      includeLowercase: true,
      includeNumbers: true,
      includeSymbols: true,
    },
  });

  const handlerSubmit = () => {
    const newOptions = form.getValues();
    setOptions({ ...newOptions });
  };

  return (
    <div className="mx-auto max-w-2xl space-y-6 p-6">
      <header className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-gray-700">Password Generator</h1>
        <p className="text-gray-500">Generate strong and secure passwords with ease.</p>
      </header>
      <PasswordDisplay options={options} />
      <Card>
        <CardContent>
          <h2 className="mb-4 text-xl font-semibold text-gray-800">Password Configuration</h2>

          <Form {...form}>
            <form className="space-y-6" onSubmit={form.handleSubmit(handlerSubmit)}>
              <FormField
                name="length"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">
                      Password Length
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="number"
                        className="h-12 text-center text-lg font-semibold"
                        min={4}
                        max={120}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-gray-800">Set your password options</h3>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {formOptions.map(({ value, icon, description }) => (
                    <FormField
                      key={value}
                      name={value}
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700">
                            <FormControl>
                              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                            <span className="text-xl">{icon}</span>
                            <div>
                              <p className="text-sm text-gray-500">{description}</p>
                            </div>
                          </FormLabel>
                        </FormItem>
                      )}
                    />
                  ))}
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default FormCreatePassword;
