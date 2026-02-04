
import React from 'react';
import { PricingPlan, FAQItem } from './types';

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "FREE",
    priceMonthly: "$0",
    priceAnnual: "$0",
    features: [
      "Unlimited searches",
      "12 words per search",
      "Standard AI model",
    ],
    cta: "Get Started"
  },
  {
    name: "PRO*",
    priceMonthly: "$16",
    priceAnnual: "$10",
    popular: true,
    features: [
      "Everything in Free",
      "Save collections",
      "Search history",
      "Priority AI speed",
    ],
    cta: "Choose Pro*"
  },
  {
    name: "PRO+",
    priceMonthly: "$30",
    priceAnnual: "$20",
    features: [
      "Everything in Pro",
      "Custom semantic filters",
      "Team seats (3)",
      "API access (beta)",
    ],
    cta: "Go Pro+"
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: "What kind of words does it generate?",
    answer: "Our AI focuses on semantic relatives—verbs, adjectives, and concepts that expand your specific thought, strictly avoiding common nouns for higher inspiration quality."
  },
  {
    question: "Does it include definitions?",
    answer: "Yes! While the primary grid is for instant visual inspiration, you can hover over any word to see its core definition and nuance."
  },
  {
    question: "Works for technical writing?",
    answer: "Absolutely. Whether you're writing academic papers, software documentation, or creative fiction, the engine adapts to the tone of your root word."
  },
  {
    question: "Cancel anytime?",
    answer: "Yes, we believe in word freedom. You can downgrade or cancel your subscription at any time with no questions asked."
  },
  {
    question: "How many languages are supported?",
    answer: "Currently, we support English, with specialized modules for Spanish, French, and German coming later this year."
  },
  {
    question: "Who is this for?",
    answer: "Writers, poets, marketers, and students who find themselves stuck on a specific concept and need the 'perfect' word."
  },
  {
    question: "What AI model do you use?",
    answer: "We use high-speed Gemini models specifically fine-tuned for linguistic variety and semantic density."
  },
  {
    question: "Are my searches private?",
    answer: "Yes. We do not sell your data or use your personal creative searches to train public models."
  }
];
