export function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(' ');
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  const months = [
    'gener', 'febrer', 'març', 'abril', 'maig', 'juny',
    'juliol', 'agost', 'setembre', 'octubre', 'novembre', 'desembre'
  ];
  return `${date.getDate()} de ${months[date.getMonth()]} de ${date.getFullYear()}`;
}
