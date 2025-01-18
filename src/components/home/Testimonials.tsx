'use client';

import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Jennifer Smith',
    role: 'CTO',
    company: 'TechGrowth Inc.',
    content:
      "TechNova's innovative solutions transformed our digital infrastructure. Their team's expertise and dedication to excellence made the entire process seamless.",
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Director of Operations',
    company: 'GlobalTech Solutions',
    content:
      'Working with TechNova has been a game-changer for our business. Their attention to detail and innovative approach helped us achieve our digital transformation goals.',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150',
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'Innovate Labs',
    content:
      "The expertise and professionalism of TechNova's team exceeded our expectations. They delivered exceptional results that directly impacted our bottom line.",
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150',
  },
  {
    id: 4,
    name: 'David Park',
    role: 'Head of Engineering',
    company: 'Future Systems',
    content:
      "The technical prowess of TechNova's team is outstanding. They not only met our complex requirements but also introduced innovative solutions we hadn't considered.",
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150',
  },
  {
    id: 5,
    name: 'Emily Rodriguez',
    role: 'Digital Transformation Director',
    company: 'Nexus Enterprises',
    content:
      "TechNova's strategic approach to our digital transformation journey was impressive. They understood our vision and delivered beyond expectations.",
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=150&h=150',
  },
  {
    id: 6,
    name: 'Alex Thompson',
    role: 'Product Manager',
    company: 'InnovateTech',
    content:
      "The level of dedication and technical expertise from TechNova is unmatched. They've been instrumental in our product's success.",
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150',
  },
  {
    id: 7,
    name: 'Lisa Wong',
    role: 'VP of Technology',
    company: 'Digital Dynamics',
    content:
      'Partnering with TechNova was one of our best decisions. Their innovative solutions and reliable support have been crucial to our growth.',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150',
  },
];

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className='py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-4'>
            What Our Clients Say
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
            Discover why leading companies trust TechNova for their digital
            transformation journey
          </p>
        </div>

        <div className='relative'>
          <div className='overflow-hidden' ref={emblaRef}>
            <div className='flex py-8'>
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className='flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4'
                >
                  <div className='bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 m-2 h-full transition-transform duration-300 hover:-translate-y-2'>
                    <div className='flex items-center mb-6'>
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        className='w-14 h-14 rounded-full object-cover mr-4'
                        width={150}
                        height={150}
                      />
                      <div>
                        <h3 className='font-semibold text-gray-900 dark:text-white'>
                          {testimonial.name}
                        </h3>
                        <p className='text-sm text-gray-600 dark:text-gray-400'>
                          {testimonial.role}
                        </p>
                        <p className='text-sm text-indigo-600 dark:text-indigo-400'>
                          {testimonial.company}
                        </p>
                      </div>
                    </div>

                    <div className='flex mb-4'>
                      {[...Array(testimonial.rating)].map((_, index) => (
                        <Star
                          key={index}
                          className='w-5 h-5 text-yellow-400 fill-current'
                        />
                      ))}
                    </div>

                    <p className='text-gray-600 dark:text-gray-300 italic'>
                      &quot;{testimonial.content}&quot;
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200'
          >
            <ChevronLeft className='w-6 h-6 text-gray-600 dark:text-gray-300' />
          </button>

          <button
            onClick={scrollNext}
            className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200'
          >
            <ChevronRight className='w-6 h-6 text-gray-600 dark:text-gray-300' />
          </button>

          <div className='flex justify-center gap-2 mt-8'>
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === selectedIndex
                    ? 'bg-indigo-600 dark:bg-indigo-400'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
                onClick={() => emblaApi?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
