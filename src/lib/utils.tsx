import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export enum AppTheme {
  DARK = 'dark',
  LIGHT = 'light',
  SYSTEM = 'system',
}

export const NA_LOGO =
  'https://i0.wp.com/nacentralohio.org/wp-content/uploads/2018/05/cropped-cropped-default_nalogo-1.jpg';
