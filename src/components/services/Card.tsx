import { Check } from 'lucide-react';
import React from 'react';

interface ICardProps {
  icon: React.JSX.Element;
  title: string;
  description: string;
  features: string[];
}

const Card = (props: ICardProps) => {
  const { description, features, icon, title } = props;
  return (
    <div className='relative group bg-white dark:bg-gray-800 p-10 rounded-xl shadow-lg hover:shadow-xl hover:ring hover:dark:ring-gray-500 hover:ring-gray-100 transition duration-300'>
      <div className='w-16 h-16 rounded-xl bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6'>
        {icon}
      </div>
      <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
        {title}
      </h3>
      <p className='text-gray-500 dark:text-gray-400 mb-6'>{description}</p>
      <ul className='space-y-3'>
        {features.map((feature, featureIndex) => (
          <li
            key={featureIndex}
            className='flex items-center text-gray-600 dark:text-gray-300'
          >
            <Check className=' text-indigo-600 mr-2 ' />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
