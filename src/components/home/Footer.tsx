import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className='bg-gray-50 dark:bg-gray-800 mt-20'>
        <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <p className='text-base text-gray-500 dark:text-gray-400'>
              © {new Date().getFullYear()} TechNova Innovations. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
