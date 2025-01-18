import React, { JSX } from 'react';

interface IServicesCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const ServicesCard = (props: IServicesCardProps) => {
  const { title, icon, description } = props;
  return (
    <div className='relative group'>
      <div className='absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl opacity-25 group-hover:opacity-50 transition duration-300'></div>
      <div className='relative bg-white dark:bg-gray-800 p-8 rounded-2xl transition-all duration-300 transform group-hover:-translate-y-1'>
        <div className='w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white mb-6 transform transition-transform group-hover:rotate-6'>
          {icon}
        </div>
        <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
          {title}
        </h3>
        <p className='text-gray-500 dark:text-gray-400'>{description}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
