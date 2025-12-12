/* eslint-disable react/jsx-one-expression-per-line */

'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { createUser } from '@/lib/dbActions';

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const trimmedEmail = email.trim().toLowerCase();

    if (!trimmedEmail.endsWith('@hawaii.edu')) {
      setError('Please use a hawaii.edu email address');
      setIsSubmitting(false);
      return;
    }

    try {
      await createUser({ email: trimmedEmail, password });
      const result = await signIn('credentials', {
        callbackUrl: '/list',
        email: trimmedEmail,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError('Account created, but signing in failed. Please try logging in.');
        return;
      }

      router.push('/list');
    } catch (err) {
      console.error('Sign up failed', err);
      setError('Unable to create account. Please try a different email or try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-style">
      <form className="card-style" onSubmit={handleSubmit}>
        {/* Logo + Titles */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '10px',
          }}
        >
          <span style={{ fontSize: '28px' }}>🌈</span>
          <h2 style={{ margin: 0, fontWeight: 700 }}>Rainbow Reclamation</h2>
        </div>

        <h3 style={{ marginTop: '10px', marginBottom: '5px', fontSize: '24px' }}>Create Account</h3>

        <p style={{ fontWeight: 300, marginBottom: '20px' }}>Join Mānoa&apos;s virtual lost & found.</p>

        {/* Email Input */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input-style"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Password Input */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input-style"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength={6}
          required
        />

        {error && <p style={{ marginTop: '12px', color: '#FFE4E4', fontSize: '14px' }}>{error}</p>}

        {/* Sign Up Button */}
        <button type="submit" className={`button-style ${isSubmitting ? 'submitting' : ''}`} disabled={isSubmitting}>
          {isSubmitting ? 'Creating account…' : 'Sign Up'}
        </button>

        {/* Login Link */}
        <p className="switch-text-style">
          Already have an account?{' '}
          <a href="/auth/signin" style={{ textDecoration: 'underline', color: 'white' }}>
            Login
          </a>
        </p>
      </form>
    </div>
  );
}
