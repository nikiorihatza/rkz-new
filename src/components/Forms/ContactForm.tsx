import React from 'react';
import { useForm } from '../../hooks/useForm';
import { Button } from '../UI/Button';
import { TextField } from '../UI/TextField';
import { TextArea } from '../UI/TextArea';
import { FormWrapper } from './FormWrapper';
import type { ContactFormData } from './types';

export const ContactForm: React.FC = () => {
  const { formData, handleChange, handleSubmit, isSubmitting, errors } = useForm<ContactFormData>({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    onSubmit: async (values) => {
      // In a real app, you would send this to your backend
      console.log('Form submitted:', values);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    },
    validate: (values) => {
      const errors: Partial<Record<keyof ContactFormData, string>> = {};
      if (!values.name) errors.name = 'Name ist erforderlich';
      if (!values.email) errors.email = 'E-Mail ist erforderlich';
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Ungültige E-Mail-Adresse';
      }
      if (!values.message) errors.message = 'Nachricht ist erforderlich';
      return errors;
    },
  });

  return (
    <FormWrapper title="Kontaktformular" subtitle="Wir freuen uns auf Ihre Nachricht">
      <form onSubmit={handleSubmit} className="space-y-6">
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          required
        />
        <TextField
          label="E-Mail"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
        />
        <TextArea
          label="Nachricht"
          name="message"
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
          required
          rows={4}
        />
        <Button type="submit" isLoading={isSubmitting}>
          Nachricht senden
        </Button>
      </form>
    </FormWrapper>
  );
};