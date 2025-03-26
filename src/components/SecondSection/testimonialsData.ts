interface Testimonial {
  id: number;
  name: string;
  date: string;
  textKey: string;
}

export const testimonialsData = [
  { id: 1, name: "Ewa i Adam", date: "Wesele, 2025", textKey: "testimonials.opinion1" },
  { id: 2, name: "Bartek", date: "Kawalerski, 2025", textKey: "testimonials.opinion2" },
  { id: 3, name: "Natalia", date: "Komunia, 2025", textKey: "testimonials.opinion3" },
  { id: 4, name: "Ola", date: "Urodziny, 2025", textKey: "testimonials.opinion4" },
];
