export function getFormUrl(category: string) {
  const map: Record<string, string> = {
    technical: 'https://forms.gle/KYqstmztD7UazrBu6',
    cultural: 'https://forms.gle/YpQCfXMVQ4kasDtB6',
    wellness: 'https://forms.gle/sqGzHvJY8Y8hPuDK6',
  };

  return map[category?.toLowerCase() ?? ''] ?? '/register';
}
