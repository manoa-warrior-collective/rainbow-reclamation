'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState, CSSProperties } from 'react';
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

  // Shared styles (TS-safes)
  const pageStyle: CSSProperties = {
    minHeight: '100vh',
    background: 'linear-gradient(180deg, #7585FF, #8FA0FF)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Inter, sans-serif',
    padding: '20px',
  };

  const cardStyle: CSSProperties = {
    width: '380px',
    background: 'rgba(255,255,255,0.15)',
    backdropFilter: 'blur(16px)',
    borderRadius: '22px',
    padding: '35px',
    boxShadow: '0 8px 25px rgba(0,0,0,0.12)',
    textAlign: 'center',
    color: 'white',
  };

  const inputStyle: CSSProperties = {
    width: '100%',
    padding: '12px 14px',
    borderRadius: '14px',
    border: 'none',
    marginTop: '12px',
    outline: 'none',
    fontSize: '15px',
  };

  const buttonStyle: CSSProperties = {
    width: '100%',
    background: 'white',
    color: '#5A6BFF',
    border: 'none',
    padding: '12px 0',
    borderRadius: '16px',
    fontSize: '16px',
    fontWeight: 600,
    cursor: 'pointer',
    transition: '0.25s',
    marginTop: '20px',
    opacity: isSubmitting ? 0.7 : 1,
  };

  const switchTextStyle: CSSProperties = {
    marginTop: '18px',
    fontSize: '14px',
  };

  return (
    <div style={pageStyle}>
      <form style={cardStyle} onSubmit={handleSubmit}>
        {/* Logo + Title */}
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

        <h3 style={{ marginTop: '10px', marginBottom: '5px', fontSize: '24px' }}>
          Create Account
        </h3>

        <p style={{ fontWeight: 300, marginBottom: '20px' }}>
          Join Mānoa’s virtual lost & found.
        </p>

        {/* Email Input */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          style={inputStyle}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Password Input */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          style={inputStyle}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength={6}
          required
        />

        {error && (
          <p style={{ marginTop: '12px', color: '#FFE4E4', fontSize: '14px' }}>
            {error}
          </p>
        )}

        {/* Sign Up Button */}
        <button type="submit" style={buttonStyle} disabled={isSubmitting}>
          {isSubmitting ? 'Creating account…' : 'Sign Up'}
        </button>

        {/* Login Link */}
        <p style={switchTextStyle}>
          Already have an account?
          {' '}
          <a href="/auth/signin" style={{ textDecoration: 'underline', color: 'white' }}>
            Login
          </a>
        </p>
      </form>
    </div>
  );
}
