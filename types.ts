
export interface WordResult {
  word: string;
}

export interface PricingPlan {
  name: string;
  priceMonthly: string;
  priceAnnual: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}
