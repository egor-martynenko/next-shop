'use client';

import React from 'react';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';

interface Props {
  onChange?: (value?: string) => void;
}

export const AddressInput: React.FC<Props> = ({ onChange }) => {
  return (
    <AddressSuggestions
      token="2ca423b1fb46622df130c025b6b88845159d8a2e"
      onChange={(data) => onChange?.(data?.value)}
    />
  );
};