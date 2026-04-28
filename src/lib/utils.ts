type ClassValue = string | number | boolean | undefined | null;
type ClassArray = ClassValue[];

export function cn(...inputs: (ClassValue | ClassArray)[]): string {
  return inputs
    .flat()
    .filter(Boolean)
    .join(' ')
}
