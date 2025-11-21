'use client';

import React, { useState, CSSProperties } from 'react';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

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

        {/* Full Name Input */}
        <input
          type="text"
          placeholder="Full Name"
          style={inputStyle}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* Email Input */}
        <input
          type="email"
          placeholder="Email"
          style={inputStyle}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Sign Up Button */}
        <button type="button" style={buttonStyle}>Sign Up</button>

        {/* Login Link */}
        <p style={switchTextStyle}>
          Already have an account?
          {' '}
          <a href="/login" style={{ textDecoration: 'underline', color: 'white' }}>
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
