'use client';

import React from 'react';
import { Field } from 'formik';

export interface InputFieldProps {
  label?: string;
  id?: string;
}

export default function InputField({ label, id, ...rest }: InputFieldProps) {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="mb-2 text-base color-gray-900">
          {label}
        </label>
      )}
      <Field
        id={id}
        {...rest}
        className="p-3 h-11 text-sm rounded border border-gray-300 shadow color-gray-500"
      />
    </div>
  );
}
