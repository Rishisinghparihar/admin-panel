export function validatePassword(input: string): boolean {
  return input === process.env.ADMIN_PASSWORD;
}
