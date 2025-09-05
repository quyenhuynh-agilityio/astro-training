// src/components/LoginForm.tsx
import React, { useState } from 'react';

import { signIn } from 'auth-astro/client';

import Button from '@components/Button';
import Input from '@components/Input';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    try {
      const response = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });
      if (response?.error) {
        setError(`Invalid email or password ${response.error}`);
        return;
      }

      window.location.href = '/';
    } catch (err) {
      setError(`An error occurred during login ${err}`);
    }
  };

  const handleGitHubLogin = async () => {
    try {
      await signIn('github', { redirect: true, callbackUrl: '/' });
    } catch (err) {
      setError('Failed to login with GitHub');
      console.error('GitHub login error:', err);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

      {error && (
        <p className="mb-4 text-sm text-red-500 text-center">{error}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <span>Remember me</span>
          </label>
          <a href="/forgot-pwd" className="text-blue-600 hover:underline">
            Forgot password?
          </a>
        </div>
        <Button className="w-full rounded-xl py-2.5" type="submit">
          Login
        </Button>
      </form>

      <div className="mt-4 text-center">
        <Button
          className="w-full bg-gray-800 text-white py-2.5 rounded-xl hover:bg-gray-700"
          onClick={handleGitHubLogin}
        >
          Login with GitHub
        </Button>
      </div>

      <p className="mt-6 text-center text-sm text-gray-500">
        Don&apos;t have an account?
        <a href="/sign-up" className="text-blue-600 hover:underline ml-2">
          Sign up
        </a>
      </p>
    </div>
  );
}
