import React from 'react';
import { Code, Cloud, Brain, ChevronRight } from 'lucide-react';
import ServicesCard from './ServicesCard';
import Link from 'next/link';

const services = [
  {
    icon: <Cloud className='w-6 h-6' />,
    title: 'Cloud Solutions',
    description:
      'Scalable cloud infrastructure and deployment solutions for your business.',
  },
  {
    icon: <Code className='w-6 h-6' />,
    title: 'Web Development',
    description:
      'Building modern, responsive web applications with cutting-edge technologies.',
  },
  {
    icon: <Brain className='w-6 h-6' />,
    title: 'AI/ML Services',
    description:
      'Intelligent solutions powered by advanced machine learning algorithms.',
  },
];

const Services = () => {
  return (
    <section className='py-24 bg-gradient-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl'>
            Our Services
          </h2>
          <p className='mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400'>
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        <div className='mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 items-center '>
          {services.map((service, index) => (
            <ServicesCard {...service} key={index} />
          ))}
        </div>

        <div className='mt-16 text-center'>
          <Link
            href='/services'
            className='inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 font-medium'
          >
            View all services
            <ChevronRight className='ml-2 w-5 h-5 animate-bounce-x' />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
