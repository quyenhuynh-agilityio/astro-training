import { useEffect } from 'react';

export default function TestimonialAction() {
  useEffect(() => {
    const section = document.querySelector('#testimonial-section');
    if (!section) return;

    const quotes = section.querySelectorAll<HTMLElement>('.testimonial-quote');
    const buttons =
      section.querySelectorAll<HTMLButtonElement>('.testimonial-btn');

    const update = (idx: number) => {
      quotes.forEach(
        (q, i) => (q.style.display = i === idx ? 'block' : 'none')
      );
      buttons.forEach((b, i) => {
        const active = i === idx;
        b.classList.toggle('scale-110', active);
        b.classList.toggle('bg-black', active);
        b.classList.toggle('opacity-60', !active);
        b.querySelector('img')?.classList.toggle('ring-2', active);
        b.querySelector('img')?.classList.toggle('ring-white', active);
      });
    };

    update(0);

    const clickHandler = (e: Event) => {
      const idx = [...buttons].indexOf(e.currentTarget as HTMLButtonElement);
      update(idx);
    };
    buttons.forEach((b) => b.addEventListener('click', clickHandler));

    return () =>
      buttons.forEach((b) => b.removeEventListener('click', clickHandler));
  }, []);

  return null;
}
