import React from 'react';
import { Code, Cloud, Brain, Database, Shield, Smartphone } from 'lucide-react';
import Card from '@/components/services/Card';

const services = [
  {
    icon: <Code className='w-8 h-8' />,
    title: 'Web Development',
    description:
      'Custom web applications built with modern frameworks and best practices.',
    features: ['React & Next.js', 'Progressive Web Apps', 'Responsive Design'],
  },
  {
    icon: <Cloud className='w-8 h-8' />,
    title: 'Cloud Solutions',
    description:
      'Scalable and secure cloud infrastructure for your applications.',
    features: ['AWS & Azure', 'Cloud Migration', 'DevOps'],
  },
  {
    icon: <Brain className='w-8 h-8' />,
    title: 'AI/ML Services',
    description: 'Intelligent solutions powered by advanced machine learning.',
    features: [
      'Predictive Analytics',
      'Natural Language Processing',
      'Computer Vision',
    ],
  },
  {
    icon: <Database className='w-8 h-8' />,
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights.',
    features: [
      'Big Data Processing',
      'Business Intelligence',
      'Data Visualization',
    ],
  },
  {
    icon: <Shield className='w-8 h-8' />,
    title: 'Cybersecurity',
    description:
      'Protect your digital assets with advanced security solutions.',
    features: ['Security Audits', 'Penetration Testing', 'Compliance'],
  },
  {
    icon: <Smartphone className='w-8 h-8' />,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications.',
    features: ['iOS & Android', 'React Native', 'Flutter'],
  },
];

const page = () => {
  return (
    <div className='py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h1 className='text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl'>
            Our Services
          </h1>
          <p className='mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400'>
            Comprehensive technology solutions to drive your business forward
          </p>
        </div>

        <div className='mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3'>
          {services.map((service, index) => (
            <Card {...service} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
