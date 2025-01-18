import React from 'react';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = (props: IInputProps) => {
  const { className = '', ...rest } = props;
  return (
    <input
      className={` p-3 ring-2 dark:ring-gray-500 ring-gray-50 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${className}`}
      {...rest}
    />
  );
};

export default Input;
