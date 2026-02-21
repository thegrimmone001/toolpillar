export interface Tool {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: Category;
  pricing: PricingType;
  pricingNote?: string;
  url: string;
  affiliateUrl?: string;
  featured: boolean;
  tags: string[];
  launchDate?: string;
}

export type Category =
  | "text-writing"
  | "image-generation"
  | "code-dev"
  | "video-audio"
  | "productivity"
  | "data-analytics"
  | "marketing-seo"
  | "design"
  | "chatbots"
  | "automation";

export type PricingType = "free" | "freemium" | "paid" | "open-source";

export const CATEGORY_META: Record<Category, { label: string; emoji: string; description: string }> = {
  "text-writing": {
    label: "Text & Writing",
    emoji: "✍️",
    description: "AI-powered writing assistants, copywriting tools, and content generators.",
  },
  "image-generation": {
    label: "Image Generation",
    emoji: "🎨",
    description: "Create images, illustrations, and visual art with AI models.",
  },
  "code-dev": {
    label: "Code & Development",
    emoji: "💻",
    description: "AI coding assistants, code generation, and developer tools.",
  },
  "video-audio": {
    label: "Video & Audio",
    emoji: "🎬",
    description: "AI video editors, voice synthesis, music generation, and transcription.",
  },
  productivity: {
    label: "Productivity",
    emoji: "⚡",
    description: "AI tools to boost workflow, note-taking, scheduling, and organization.",
  },
  "data-analytics": {
    label: "Data & Analytics",
    emoji: "📊",
    description: "AI-driven data analysis, visualization, and business intelligence.",
  },
  "marketing-seo": {
    label: "Marketing & SEO",
    emoji: "📈",
    description: "AI tools for SEO optimization, ad copy, email marketing, and growth.",
  },
  design: {
    label: "Design",
    emoji: "🎯",
    description: "AI-powered design tools for UI/UX, branding, and creative workflows.",
  },
  chatbots: {
    label: "Chatbots & Assistants",
    emoji: "🤖",
    description: "Conversational AI, customer support bots, and virtual assistants.",
  },
  automation: {
    label: "Automation",
    emoji: "⚙️",
    description: "AI workflow automation, integration platforms, and agent frameworks.",
  },
};

export const ALL_CATEGORIES = Object.keys(CATEGORY_META) as Category[];
