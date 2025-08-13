'use client';

import React from 'react';

import { Badge } from '@/components/ui/badge';
import { PasswordOptions } from '@/lib/password';

interface OptionTagsProps {
  passwordConfig: PasswordOptions;
}

const OptionTags = ({ passwordConfig }: OptionTagsProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {[
        {
          condition: passwordConfig.useUppercase,
          label: 'Uppercase',
        },
        {
          condition: passwordConfig.useLowercase,
          label: 'Lowercase',
        },
        {
          condition: passwordConfig.useNumbers,
          label: 'Numbers',
        },
        {
          condition: passwordConfig.useSymbols,
          label: 'Symbols',
        },
      ]
        .filter((item) => item.condition)
        .map((item, index) => (
          <Badge key={index}>{item.label}</Badge>
        ))}
    </div>
  );
};

export default OptionTags;
