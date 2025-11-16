'use client';

import React, { useState, CSSProperties } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');

  // Styles with TypeScript-safe typing
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
  };

  const switchTextStyle: CSSProperties = {
    marginTop: '18px',
    fontSize: '14px',
  };

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
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

        <h3 style={{ marginTop: '10px', marginBottom: '5px', fontSize: '24px' }}>
          Login
        </h3>

        <p style={{ fontWeight: 300, marginBottom: '20px' }}>
          Welcome back! Let’s find what’s lost.
        </p>

        {/* Email Input */}
        <input
          type="email"
          placeholder="Email"
          style={inputStyle}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Button */}
        <button type="button" style={buttonStyle}>Login</button>

        {/* Switch page */}
        <p style={switchTextStyle}>
          Don’t have an account?
          {' '}
          <a href="/signup" style={{ textDecoration: 'underline', color: 'white' }}>
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
