'use client';

import { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { SaveIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { PasswordOptions } from '@/lib/password';
import { passwordSchema, PasswordSchemaType } from '@/schema/pasword.schema';
import { createPasswordAction } from '../_actions/CreatePassword.action';
import OptionTags from './OptionTags';

interface FormSavePasswordProps {
  password: string;
  passwordConfig: PasswordOptions;
}

const FormSavePassword = ({ password, passwordConfig }: FormSavePasswordProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<PasswordSchemaType>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      title: '',
      password,
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: createPasswordAction,
    async onSuccess(data) {
      form.reset();

      toast.success(`Password ${data.title} has been created successfully`);
      setIsOpen(false);
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  function onSubmit(values: PasswordSchemaType) {
    mutate(values);
  }

  useEffect(() => {
    if (isOpen) {
      form.setValue('password', password);
      form.setValue('length', passwordConfig?.length || 12);
      form.setValue('useUppercase', passwordConfig.useUppercase);
      form.setValue('useLowercase', passwordConfig.useLowercase);
      form.setValue('useNumbers', passwordConfig.useNumbers);
      form.setValue('useSymbols', passwordConfig.useSymbols);
    }
  }, [password, passwordConfig, isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button disabled={isPending} variant="outline" className="w-full">
          <SaveIcon />
          Save Password
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl font-bold">
            <SaveIcon /> Save Password
          </DialogTitle>
          <DialogDescription>Save your password to use it later.</DialogDescription>
        </DialogHeader>
        <section className="space-y-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Google, Facebook, etc." {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password:</FormLabel>
                    <FormControl>
                      <Input
                        disabled
                        className="h-12 bg-gray-100 font-mono text-gray-800"
                        {...field}
                        value={password}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className="rounded-xl border border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-100 p-4">
                <h3 className="mb-3 text-sm font-semibold text-blue-800">Password Configuration</h3>
                <div className="space-y-4 text-sm">
                  <p>
                    <span className="font-bold">Length:</span> {passwordConfig.length}
                  </p>
                  <>
                    <span className="font-bold">Options:</span>
                    <OptionTags passwordConfig={passwordConfig} />
                  </>
                </div>
              </div>
            </form>
          </Form>
        </section>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="submit" onClick={form.handleSubmit(onSubmit)}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FormSavePassword;
