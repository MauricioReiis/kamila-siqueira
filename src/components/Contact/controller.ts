import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useInView } from 'react-intersection-observer';
import type { ContactFormData } from '../../models/types';
import { socialLinks } from '../../models/data';

export const useContact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const onSubmit = handleSubmit((data: ContactFormData) => {
    console.log('Form data:', data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  });

  return {
    ref,
    inView,
    register,
    onSubmit,
    errors,
    isSubmitted,
    socialLinks,
  };
};
