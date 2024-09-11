"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons';
import { ErrorMessage, Field, Label } from '@/components/Fieldset';
import { Input } from '@/components/Input';

function FNameInput({ errors, handleChange }) {
  return (
    <Field>
      <Label>Your first name</Label>
      <Input
        name="first_name"
        onChange={handleChange}
        invalid={errors.has('first_name')}
      />
      {errors.has('first_name') && (
        <ErrorMessage>{errors.get('first_name')}</ErrorMessage>
      )}
    </Field>
  );
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
}

export default function Home() {
  const [formData, setFormData] = useState({ first_name: '' });
  const [errors, setErrors] = useState(new Map());
  const router = useRouter(); // Initialize useRouter

  const validate = () => {
    const newErrors = new Map();

    if (!formData.first_name) {
      newErrors.set('first_name', 'First name is required.');
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (validationErrors.size > 0) {
      setErrors(validationErrors);
    } else {
      // Redirect to /name/{input}
      router.push(`/name/${formData.first_name}`);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const errorObj = {
    has: (field) => errors.has(field),
    get: (field) => errors.get(field),
  };

  return (
    <>
      <Container className="my-9">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Hi, I’m Dan Guenet,
          </h1>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
            and I want to work with you.
          </h2>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I have spent the last seven years working in go-to-market operations, progressing from a fresh college graduate tasked with implementing Salesforce to achieving a Director title. Along the way, I’ve gained valuable experience and insights, and I’m eager to bring that knowledge and more to Vercel.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://www.linkedin.com/in/danguenet/"
              target="_blank"
              aria-label="Find me on LinkedIn"
              icon={LinkedInIcon}
            />
            <SocialLink
              href="https://github.com/danguenet/vercel"
              target="_blank"
              aria-label="See my GitHub"
              icon={GitHubIcon}
            />
          </div>
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col items-start gap-4">
            <FNameInput errors={errorObj} handleChange={handleChange} />
            <Button type="submit" className="flex-none">
              Learn why
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
}
