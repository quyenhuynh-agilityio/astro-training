import { signOut } from 'auth-astro/client';

import Button from '@components/Button';

export default function LogoutButton() {
  const handleLogout = async () => {
    try {
      // Sign out without redirect
      await signOut();

      // Force redirect manually
      window.location.href = '/login';
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
