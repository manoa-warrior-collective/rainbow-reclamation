/* eslint-disable react/jsx-one-expression-per-line */

'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const result = await signIn('credentials', {
      // callbackUrl: '/list',
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError('Sign in failed. Check your details and try again.');
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(false);
    router.push('/list');
  };

  return (
    <div className="page-style">
      <form className="card-style" onSubmit={handleSubmit}>
        {/* Logo + Title */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            marginBottom: '10px',
          }}
        >
          <span style={{ fontSize: '28px' }}>🌈</span>
          <h2 style={{ margin: 0, fontWeight: 700 }}>Rainbow Reclamation</h2>
        </div>

        <h3 style={{ marginTop: '10px', marginBottom: '5px', fontSize: '24px' }}>Login</h3>

        <p style={{ fontWeight: 300, marginBottom: '20px' }}>Welcome back! Let&apos;s find what&apos;s lost.</p>

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
          required
        />

        {error && <p style={{ marginTop: '12px', color: '#FFE4E4', fontSize: '14px' }}>{error}</p>}

        {/* Button */}
        <button type="submit" className={`button-style ${isSubmitting ? 'submitting' : ''}`} disabled={isSubmitting}>
          {isSubmitting ? 'Signing in…' : 'Login'}
        </button>

        {/* Switch page */}
        <p className="switch-text-style">
          Don&apos;t have an account?{' '}
          <a href="/signup" style={{ textDecoration: 'underline', color: 'white' }}>
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
}
