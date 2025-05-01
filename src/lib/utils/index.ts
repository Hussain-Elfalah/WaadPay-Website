import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Create a deterministic random string generator that's stable across server/client
// We'll use a seed value to make it deterministic during server-side rendering
let seed = 1;
function seededRandom() {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

export function generateRandomString(length: number = 8, useSeed: boolean = true): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  
  // Use a simple cache for server-side rendering to ensure consistency
  if (typeof window === 'undefined' && useSeed) {
    // Server-side - use seeded random for deterministic output
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(seededRandom() * characters.length));
    }
  } else {
    // Client-side - use regular random
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  }
  
  return result;
}

export function extractClasses(className: string, subString: string): string {
  if (!className) return '';
  
  return className
    .split(' ')
    .filter(cls => cls.includes(subString))
    .join(' ');
} 