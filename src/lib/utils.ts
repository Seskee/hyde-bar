type ClassValue = string | undefined | null | false | ClassValue[]

function clsx(...inputs: ClassValue[]): string {
  return inputs
    .flat(Infinity)
    .filter(Boolean)
    .join(' ')
}

// Lightweight cn without clsx/tailwind-merge dependency
export function cn(...inputs: ClassValue[]): string {
  return clsx(...inputs)
}
