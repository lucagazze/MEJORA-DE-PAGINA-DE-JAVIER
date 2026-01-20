export interface Testimonial {
  id: string;
  clinicName: string;
  headline: string;
  quote: string;
  videoUrl: string; // Vimeo Embed URL
  result: string;
  treatment: string;
  date: string;
  logoUrl?: string;
  photoUrl?: string;
}

export interface Benefit {
  title: string;
  items: string[];
  type: 'pain' | 'gain'; // 'pain' for "Di Adios", 'gain' for "Ofrecemos"
}