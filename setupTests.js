import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';

// Cleanup after each test
afterEach(() => {
  cleanup();
});

// Mock Sanity client (example)
vi.mock('sanity:client', () => ({
  sanityClient: {
    fetch: vi.fn().mockResolvedValue([{ title: 'Mock House', price: 300000 }]),
  },
}));
