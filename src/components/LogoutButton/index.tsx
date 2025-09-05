// src/components/LogoutButton.tsx
import { signOut } from 'auth-astro/client';

import Button from '@components/Button';

export default function LogoutButton() {
  const handleLogout = async () => {
    try {
      // Auth.js will handle redirect automatically
      await signOut({ callbackUrl: '/login' });
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  return (
    <Button
      className="bg-gray-800 text-white rounded-xl px-4 py-2 hover:bg-gray-600"
      onClick={handleLogout}
    >
      Logout
    </Button>
  );
}
