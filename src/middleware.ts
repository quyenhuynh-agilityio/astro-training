import { defineMiddleware } from 'astro:middleware';
import { getSession } from 'auth-astro/server';

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;

  // ✅ Don't protect login or auth routes
  if (pathname.startsWith('/login') || pathname.startsWith('/api/auth')) {
    return next();
  }

  const session = await getSession(context.request);

  if (!session) {
    console.log('⛔ Redirecting unauthenticated user to /login');
    return context.redirect('/login');
  }

  return next();
});
