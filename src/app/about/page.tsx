import Testimonials from '@/components/home/Testimonials';
import Image from 'next/image';
import React from 'react';

const team = [
  {
    name: 'Sarah Chen',
    role: 'CEO & Founder',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    bio: 'Former Google engineer with 15+ years of experience in tech leadership.',
  },
  {
    name: 'Marcus Rodriguez',
    role: 'CTO',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    bio: 'Expert in cloud architecture and AI implementation with a PhD in Computer Science.',
  },
  {
    name: 'Emma Watson',
    role: 'Head of Design',
    image:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    bio: 'Award-winning UX designer with a passion for creating intuitive digital experiences.',
  },
  {
    name: 'David Kim',
    role: 'Lead Developer',
    image:
      'https://images.unsplash.com/photo-1542178243-bc20204b769f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    bio: 'Full-stack developer specializing in scalable enterprise solutions.',
  },
];

const page = () => {
  return (
    <div className='py-20'>
      <div className=''>
        <div className='text-center mb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl'>
            About TechNova
          </h1>
          <p className='mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400'>
            Driving digital transformation through innovative solutions
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 '>
          <div className='bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl hover:ring hover:dark:ring-gray-500 hover:ring-gray-100'>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
              Our Vision
            </h2>
            <p className='text-gray-600 dark:text-gray-300'>
              To be the global leader in innovative technology solutions,
              empowering businesses to thrive in the digital age through
              cutting-edge solutions and exceptional service.
            </p>
          </div>
          <div className='bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl hover:ring hover:dark:ring-gray-500 hover:ring-gray-100'>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
              Our Mission
            </h2>
            <p className='text-gray-600 dark:text-gray-300'>
              To deliver transformative technology solutions that drive business
              growth, enhance operational efficiency, and create lasting value
              for our clients through innovation and excellence.
            </p>
          </div>
        </div>

        <div className=' w-full '>
          <Testimonials />
        </div>

        <div className='mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-gray-900 dark:text-white text-center mb-12'>
            Meet Our Team
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            {team.map((member, index) => (
              <div
                key={index}
                className='bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2'
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className='w-full h-64 object-cover'
                />
                <div className='p-6'>
                  <h3 className='text-xl font-bold text-gray-900 dark:text-white'>
                    {member.name}
                  </h3>
                  <p className='text-indigo-600 dark:text-indigo-400 mb-2'>
                    {member.role}
                  </p>
                  <p className='text-gray-600 dark:text-gray-300 text-sm'>
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
