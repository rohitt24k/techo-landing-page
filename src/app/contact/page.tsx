'use client';

import ContactForm from '@/components/contact/ContactForm';
import ContactInformation from '@/components/contact/ContactInformation';
import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  return (
    <div className='py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-20'>
          <h1 className='text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl'>
            Contact Us
          </h1>
          <p className='mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400'>
            Get in touch with our team to discuss your next project
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          <ContactInformation />

          <ContactForm formData={formData} setFormData={setFormData} />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
