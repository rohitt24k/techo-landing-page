import { Mail, MapPin, Phone } from 'lucide-react';
import React from 'react';

const ContactInformation = () => {
  return (
    <div>
      <div className='bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 ring dark:ring-gray-500 ring-gray-50'>
        <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
          Contact Information
        </h2>
        <div className='space-y-6'>
          <div className='flex items-start'>
            <Mail className='w-6 h-6 text-indigo-600 dark:text-indigo-400 mt-1' />
            <div className='ml-4'>
              <p className='text-gray-900 dark:text-white font-medium'>Email</p>
              <a
                href='mailto:contact@technova.com'
                className='text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400'
              >
                contact@technova.com
              </a>
            </div>
          </div>
          <div className='flex items-start'>
            <Phone className='w-6 h-6 text-indigo-600 dark:text-indigo-400 mt-1' />
            <div className='ml-4'>
              <p className='text-gray-900 dark:text-white font-medium'>Phone</p>
              <a
                href='tel:+1234567890'
                className='text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400'
              >
                +1 (234) 567-890
              </a>
            </div>
          </div>
          <div className='flex items-start'>
            <MapPin className='w-6 h-6 text-indigo-600 dark:text-indigo-400 mt-1' />
            <div className='ml-4'>
              <p className='text-gray-900 dark:text-white font-medium'>
                Address
              </p>
              <p className='text-gray-500 dark:text-gray-400'>
                123 Innovation Street
                <br />
                San Francisco, CA 94105
              </p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className='mt-8 h-64 rounded-lg overflow-hidden'>
          <iframe
            title='TechNova Office Location'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0977731876877!2d-122.39568668441547!3d37.78779997975772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807c1f633e3f%3A0x1d57bc2295455fa5!2sFinancial%20District%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1645564565248!5m2!1sen!2sus'
            width='100%'
            height='100%'
            style={{ border: 0 }}
            loading='lazy'
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
