import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <section className='relative bg-gradient-to-br from-indigo-600 to-purple-700 dark:from-indigo-900 dark:to-purple-900'>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80')] opacity-10 bg-cover bg-center"></div>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative'>
        <div className='text-center'>
          <h1 className='text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl'>
            <span className='block animate-fade-in-up'>
              Innovate. Transform.
            </span>
            <span className='block text-indigo-200 mt-2'>Lead the Future.</span>
          </h1>
          <p className='mt-6 max-w-md mx-auto text-base text-indigo-100 sm:text-lg md:mt-8 md:text-xl md:max-w-3xl'>
            Empowering businesses with cutting-edge technology solutions that
            drive growth and innovation.
          </p>
          <div className='mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-10'>
            <Link
              href='/services'
              className='inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-indigo-500 hover:bg-indigo-600 md:text-lg transition-all duration-200 transform hover:scale-105'
            >
              Get Started
              <ArrowRight className='ml-2 w-5 h-5' />
            </Link>
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 w-full h-20 bg-gradient-to-t from-white dark:from-gray-900'></div>
    </section>
  );
};

export default Hero;
