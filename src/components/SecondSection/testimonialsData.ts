interface Testimonial {
  id: number;
  name: string;
  date: string;
  textKey: string;
}

export const testimonialsData:Testimonial[] = [
  {
    id: 1,
    name: "Anna i Marek",
    date: "Wesele, 2023",
    textKey: "testimonials.opinion1"
  },
  {
    id: 2,
    name: "Krzysztof",
    date: "Kawalerski, 2024",
    textKey: "testimonials.opinion2"
  },
  {
    id: 3,
    name: "Magda",
    date: "18-stka, 2023",
    textKey: "testimonials.opinion3"
  },
  {
    id: 4,
    name: "Tomek",
    date: "18-stka, 2024",
    textKey: "testimonials.opinion4"
  },
  {
    id: 5,
    name: "Kasia i Piotr",
    date: "Wesele, 2024",
    textKey: "testimonials.opinion5"
  },
  {
    id: 6,
    name: "Michał",
    date: "Kawalerski, 2023",
    textKey: "testimonials.opinion6"
  }
];
