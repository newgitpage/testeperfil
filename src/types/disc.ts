export type DiscType = 'D' | 'I' | 'S' | 'C';

export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export interface Option {
  id: string;
  text: string;
  type: DiscType;
}

export interface DiscResult {
  type: DiscType;
  score: number;
  percentage: number;
}

export interface DiscProfile {
  primary: DiscType;
  secondary: DiscType;
  results: DiscResult[];
}

export interface ProfileDescription {
  title: string;
  description: string;
  characteristics: string[];
  strengths: string[];
  weaknesses: string[];
  careers: string[];
  communicationTips: string[];
}
