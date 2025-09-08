import Credentials from '@auth/core/providers/credentials';
import GitHub from '@auth/core/providers/github';
import { defineConfig } from 'auth-astro';

export default defineConfig({
  secret: import.meta.env.AUTH_SECRET,
  trustHost: true, // make sure redirects work on Vercel
  providers: [
    GitHub({
      clientId: import.meta.env.GITHUB_CLIENT_ID ?? '',
      clientSecret: import.meta.env.GITHUB_CLIENT_SECRET ?? '',
    }),
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (
          credentials.email === 'test@example.com' &&
          credentials.password === 'password123'
        ) {
          return { id: '1', name: 'Test User', email: credentials.email };
        }
        return null;
      },
    }),
  ],
});
