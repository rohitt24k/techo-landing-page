import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const CTAs = () => {
  return (
    <section className='relative overflow-hidden '>
      <div className='absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 dark:from-indigo-900 dark:to-purple-900'></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80')] opacity-10 bg-cover bg-center"></div>
      <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 relative'>
        <div className='lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center'>
          <div>
            <h2 className='text-3xl font-extrabold tracking-tight text-white sm:text-4xl'>
              Ready to transform your business?
            </h2>
            <p className='mt-4 text-lg text-indigo-200'>
              Join the digital revolution and stay ahead of the competition with
              our innovative solutions.
            </p>
          </div>
          <div className='mt-12 lg:mt-0 place-self-end self-center '>
            <Link
              href='/contact'
              className='inline-flex items-center px-8 py-4 border-2 border-white text-base font-medium rounded-full text-white hover:bg-white hover:text-indigo-700 transition-all duration-200 transform hover:scale-105'
            >
              Get in touch
              <ArrowRight className='ml-2 w-5 h-5' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAs;
