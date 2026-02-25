import type { Platform, PlatformContent } from "./create-post-types"

export interface MockArticle {
  id: string
  title: string
  source: string
  summary: string
  publishedAt: string
}

export const MOCK_ARTICLES: MockArticle[] = [
  {
    id: "a1",
    title: "Home Prices Rise 3.2% in Q1 2025 Amid Low Inventory",
    source: "Realtor.com",
    summary: "National home prices continued their upward trend in the first quarter, driven by persistent inventory shortages in major metro areas.",
    publishedAt: "2025-04-02",
  },
  {
    id: "a2",
    title: "Mortgage Rates Drop Below 6.5% for First Time Since 2023",
    source: "HousingWire",
    summary: "The 30-year fixed mortgage rate fell to 6.48% this week, sparking renewed interest from first-time buyers who had been sitting on the sidelines.",
    publishedAt: "2025-04-01",
  },
  {
    id: "a3",
    title: "Sun Belt Cities Lead in New Construction Activity",
    source: "National Association of Realtors",
    summary: "Cities like Austin, Phoenix, and Charlotte are seeing a surge in new construction permits, helping to alleviate tight inventory conditions.",
    publishedAt: "2025-03-28",
  },
  {
    id: "a4",
    title: "Remote Work Trends Continue to Shift Suburban Demand",
    source: "Zillow Research",
    summary: "Suburban and exurban markets within 60 miles of major employment centers are experiencing above-average price appreciation as hybrid work becomes permanent.",
    publishedAt: "2025-03-25",
  },
]

const CONTENT_VARIANTS: Array<Record<Platform, PlatformContent>> = [
  {
    instagram: {
      headline: "Your Dream Home Awaits",
      body: "Whether you're buying or selling, now is the perfect time to make your move. The market is buzzing with opportunity — don't miss out!",
      hashtags: ["#RealEstate", "#DreamHome", "#HomeForSale", "#RealtorLife", "#JustListed", "#HomeBuyer", "#PropertyGoals"],
      supportText: "Swipe to see more photos",
      cta: "Book a showing in the link in bio!",
    },
    facebook: {
      headline: "Exciting Opportunity in the Real Estate Market",
      body: "The market is moving fast, and we're here to help you navigate every step of the way. From your first consultation to closing day, our team is dedicated to finding you the perfect home that fits your lifestyle and budget.\n\nInterested in learning more? Drop a comment or send us a message!",
      hashtags: ["#RealEstate", "#HomeForSale", "#LocalRealtor"],
      supportText: "Share with someone who might be looking!",
      cta: "Schedule a free consultation today.",
    },
    linkedin: {
      headline: "Real Estate Market Update — Q1 2025",
      body: "As a real estate professional, I'm seeing firsthand the resilience of our local market. Despite economic headwinds, buyer demand remains strong and inventory is slowly improving.\n\nKey insights from this quarter:\n• Average days on market: 28 days\n• Median sale price up 4.1% YoY\n• Buyer inquiries up 18% from last quarter\n\nIf you're considering a move — whether buying, selling, or investing — I'd love to connect and share what I'm seeing on the ground.",
      hashtags: ["#RealEstate", "#MarketUpdate", "#Realtor", "#PropertyInvestment"],
      supportText: "Feel free to share with your network.",
      cta: "Connect with me to discuss your real estate goals.",
    },
    x: {
      headline: "Market is HOT right now 🔥",
      body: "Just closed another deal in under 2 weeks. If you've been thinking about buying or selling, now is the time. DM me for a free market analysis.",
      hashtags: ["#RealEstate", "#HomeSelling", "#Realtor"],
      supportText: "",
      cta: "DM me for a free market analysis.",
    },
  },
  {
    instagram: {
      headline: "Your Next Chapter Starts Here",
      body: "Every home has a story — let us help you write yours. From cozy starter homes to luxury estates, we find properties that match your vision.",
      hashtags: ["#HomeSweetHome", "#RealEstate", "#NewListing", "#HouseHunting", "#RealtorOfInstagram", "#HomeGoals", "#JustListed", "#MoveIn"],
      supportText: "Tag someone who needs a new home!",
      cta: "Click the link in bio to browse all listings.",
    },
    facebook: {
      headline: "Finding Your Perfect Home Has Never Been Easier",
      body: "We believe everyone deserves to find a home they love. Our process is simple: we listen to your needs, search the market, and guide you from offer to keys.\n\nWhat are you looking for in your next home? Tell us in the comments!",
      hashtags: ["#HomeSearch", "#RealEstate", "#BuyingAHome"],
      supportText: "Like and share to support local real estate!",
      cta: "Message us to get started.",
    },
    linkedin: {
      headline: "Navigating Today's Real Estate Landscape",
      body: "The real estate market continues to evolve, and staying informed is more important than ever. Here's what I'm advising my clients this quarter:\n\n1. Get pre-approved early — sellers are prioritizing serious buyers\n2. Be flexible on timeline but firm on your must-haves\n3. Consider up-and-coming neighborhoods for better value\n\nHappy to discuss what this means for your specific situation.",
      hashtags: ["#RealEstate", "#HomeBuying", "#MarketInsights", "#Realtor"],
      supportText: "Repost if you found this helpful.",
      cta: "Let's connect and discuss your next move.",
    },
    x: {
      headline: "Quick tip for home buyers 💡",
      body: "Getting pre-approved before you start looking saves you time AND puts you ahead of competing offers. Your future self will thank you. Thread below 👇",
      hashtags: ["#HomeBuying", "#RealEstateTips", "#Mortgage"],
      supportText: "",
      cta: "Follow for more real estate tips.",
    },
  },
  {
    instagram: {
      headline: "Sold Above Asking Price!",
      body: "Another listing sold above asking price in record time! Our proven marketing strategy gets results. Thinking of selling? Let's talk about what your home is worth today.",
      hashtags: ["#JustSold", "#SoldOverAsking", "#SellerSuccess", "#RealEstate", "#Realtor", "#HomeSelling", "#ListWithUs"],
      supportText: "Congratulate this happy seller! 🎉",
      cta: "Get your free home valuation — link in bio.",
    },
    facebook: {
      headline: "Just Sold: Above Asking Price & Under 30 Days!",
      body: "Thrilled to share another success story! This beautiful property received multiple offers and closed above the asking price in less than a month.\n\nOur sellers achieved their goals because of strategic pricing, professional photography, and targeted marketing. Ready to get the same results?\n\nComment 'VALUE' below and I'll send you a free market analysis for your home.",
      hashtags: ["#JustSold", "#RealEstate", "#HomeSellingTips"],
      supportText: "Share with a friend who's thinking of selling!",
      cta: "Comment 'VALUE' for a free home valuation.",
    },
    linkedin: {
      headline: "What Makes a Property Sell Above Asking Price?",
      body: "After closing dozens of transactions above list price, I've identified the key factors that consistently drive stronger offers:\n\n✅ Professional staging and photography\n✅ Strategic list price positioning\n✅ Targeted digital marketing to qualified buyers\n✅ Transparent communication throughout the process\n✅ Expert negotiation at offer review\n\nEvery seller's situation is unique, but these principles hold across markets and price points.",
      hashtags: ["#RealEstate", "#HomeSelling", "#Negotiation", "#Realtor"],
      supportText: "Save this for when you're ready to sell.",
      cta: "Reach out to discuss your selling strategy.",
    },
    x: {
      headline: "SOLD 🏡",
      body: "Another one. Listed Thursday, multiple offers by Sunday, closed above asking. The market is moving fast — is YOUR home next? Reply for a free analysis.",
      hashtags: ["#JustSold", "#RealEstate", "#Realtor"],
      supportText: "",
      cta: "Reply or DM for a free home analysis.",
    },
  },
]

export function getMockAIContent(
  platforms: Platform[],
  variantIndex = 0
): Record<Platform, PlatformContent> {
  const variant = CONTENT_VARIANTS[variantIndex % CONTENT_VARIANTS.length]
  const result: Partial<Record<Platform, PlatformContent>> = {}
  for (const platform of platforms) {
    result[platform] = variant[platform]
  }
  return result as Record<Platform, PlatformContent>
}
