export function smoothScrollTo(elementId: string): void {
  const element = document.getElementById(elementId);
  if (element) {
    const offset = 80; // navbar height
    const top = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}
