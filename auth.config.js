// src/auth.config.ts
import Credentials from '@auth/core/providers/credentials';
import GitHub from '@auth/core/providers/github';
import { defineConfig } from 'auth-astro';

export default defineConfig({
  providers: [
    GitHub({
      clientId: import.meta.env.GITHUB_CLIENT_ID,
      clientSecret: import.meta.env.GITHUB_CLIENT_SECRET,
    }),
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          const user = {
            id: '1',
            name: 'Test User',
            email: credentials.email,
          };
          if (
            credentials.email === 'test@example.com' &&
            credentials.password === 'password123'
          ) {
            return user;
          }
          console.error('Authentication failed: Invalid credentials');
          return null;
        } catch (err) {
          console.error('Authorize error:', err);
          return null;
        }
      },
    }),
  ],
  secret: import.meta.env.AUTH_SECRET,
  trustHost: true,
});
