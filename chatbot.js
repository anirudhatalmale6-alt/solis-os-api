const conversations = new Map();

const SESSION_TIMEOUT = 30 * 60 * 1000;

function getSession(phone) {
  const session = conversations.get(phone);
  if (session && Date.now() - session.lastActive < SESSION_TIMEOUT) {
    session.lastActive = Date.now();
    session.messageCount++;
    return session;
  }
  const newSession = { lastActive: Date.now(), messageCount: 1, greeted: false, context: null };
  conversations.set(phone, newSession);
  return newSession;
}

function handleIncomingMessage(text, senderName, phone) {
  const session = getSession(phone);
  const input = text.toLowerCase().trim();
  const firstName = senderName.split(' ')[0];

  if (!session.greeted) {
    session.greeted = true;
    if (isGreeting(input)) {
      return `Hi ${firstName}! Welcome to Solis OS.\n\nI'm here to help you learn about our AI-powered business management platform. We help salons, clinics, garages, and other service businesses automate their operations.\n\nWhat would you like to know? Here are some things I can help with:\n\n1. What Solis OS does\n2. Pricing plans\n3. Which industries we support\n4. How to get started\n5. Book a demo\n\nJust type a number or ask me anything!`;
    }
    const response = matchTopic(input, firstName);
    if (response) return `Hi ${firstName}! Welcome to Solis OS.\n\n${response}`;
    return `Hi ${firstName}! Welcome to Solis OS, the AI-powered platform that helps service businesses manage bookings, customers, staff, and more.\n\nHow can I help you today? You can ask about our features, pricing, supported industries, or anything else!`;
  }

  if (input === '1' || input === '2' || input === '3' || input === '4' || input === '5') {
    return handleMenuChoice(input, firstName);
  }

  const response = matchTopic(input, firstName);
  if (response) return response;

  return `Thanks for your message, ${firstName}. I want to make sure I give you the right answer.\n\nCould you try asking about:\n- Our features and what Solis OS does\n- Pricing and plans\n- Industries we support (salons, clinics, garages, etc.)\n- How to get started or sign up\n- Booking a demo\n\nOr if you'd like to speak with our team directly, just say "speak to someone" and I'll connect you.`;
}

function isGreeting(text) {
  const greetings = ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening', 'sup', 'yo', 'hiya', 'howdy', 'greetings', 'whats up', "what's up", 'hola', 'bonjour', 'salam', 'marhaba'];
  return greetings.some(g => text === g || text.startsWith(g + ' ') || text.startsWith(g + ',') || text.startsWith(g + '!'));
}

function handleMenuChoice(choice, name) {
  switch (choice) {
    case '1': return getFeatureResponse(name);
    case '2': return getPricingResponse(name);
    case '3': return getIndustryResponse(name);
    case '4': return getStartedResponse(name);
    case '5': return getDemoResponse(name);
    default: return null;
  }
}

function matchTopic(input, name) {
  if (matches(input, ['price', 'pricing', 'cost', 'how much', 'plans', 'subscription', 'payment', 'pay', 'fee', 'charge', 'afford', 'expensive', 'cheap', 'budget', 'monthly', 'yearly', 'annual'])) {
    return getPricingResponse(name);
  }

  if (matches(input, ['feature', 'what does', 'what can', 'what do you', 'capabilities', 'functions', 'tools', 'offer', 'services', 'what is solis', "what's solis", 'tell me about', 'about solis', 'explain'])) {
    return getFeatureResponse(name);
  }

  if (matches(input, ['booking', 'appointment', 'schedule', 'calendar', 'reserve', 'book a'])) {
    if (matches(input, ['demo', 'call', 'meeting', 'consultation'])) {
      return getDemoResponse(name);
    }
    return getBookingResponse(name);
  }

  if (matches(input, ['salon', 'hair', 'barber', 'beauty', 'spa', 'nail', 'clinic', 'medical', 'dental', 'dentist', 'doctor', 'health', 'garage', 'mechanic', 'auto', 'car', 'workshop', 'gym', 'fitness', 'yoga', 'pilates', 'industry', 'business type', 'who is it for', 'what kind'])) {
    return getIndustryResponse(name);
  }

  if (matches(input, ['start', 'sign up', 'signup', 'register', 'create account', 'get started', 'begin', 'try', 'join', 'onboard'])) {
    return getStartedResponse(name);
  }

  if (matches(input, ['demo', 'demonstration', 'show me', 'see it', 'preview', 'walkthrough', 'tour'])) {
    return getDemoResponse(name);
  }

  if (matches(input, ['free', 'trial', 'test', 'free plan', 'no cost'])) {
    return getTrialResponse(name);
  }

  if (matches(input, ['ai', 'artificial intelligence', 'smart', 'intelligent', 'automation', 'automate', 'automatic'])) {
    return getAIResponse(name);
  }

  if (matches(input, ['support', 'help', 'contact', 'customer service', 'assistance', 'issue', 'problem', 'trouble', 'bug', 'error'])) {
    return getSupportResponse(name);
  }

  if (matches(input, ['speak', 'talk', 'human', 'person', 'agent', 'real person', 'someone', 'representative', 'manager', 'call me'])) {
    return getHumanResponse(name);
  }

  if (matches(input, ['app', 'download', 'mobile', 'android', 'iphone', 'ios', 'phone app', 'install'])) {
    return getAppResponse(name);
  }

  if (matches(input, ['customer', 'client', 'crm', 'manage customer', 'client management', 'customer data'])) {
    return getCustomerResponse(name);
  }

  if (matches(input, ['staff', 'employee', 'team', 'worker', 'manage staff'])) {
    return getStaffResponse(name);
  }

  if (matches(input, ['invoice', 'billing', 'receipt', 'payment processing'])) {
    return getInvoiceResponse(name);
  }

  if (matches(input, ['analytics', 'report', 'dashboard', 'data', 'insight', 'statistics', 'stats', 'performance'])) {
    return getAnalyticsResponse(name);
  }

  if (matches(input, ['secure', 'security', 'data protection', 'privacy', 'safe', 'gdpr', 'compliant'])) {
    return getSecurityResponse(name);
  }

  if (matches(input, ['thank', 'thanks', 'appreciate', 'cheers', 'great', 'perfect', 'awesome', 'amazing'])) {
    return getThankResponse(name);
  }

  if (matches(input, ['bye', 'goodbye', 'see you', 'later', 'take care', 'good night'])) {
    return `It was great chatting with you, ${name}! If you ever need anything, just message us here anytime.\n\nHave a wonderful day!`;
  }

  if (matches(input, ['yes', 'yeah', 'yep', 'sure', 'ok', 'okay', 'sounds good', 'interested', 'tell me more'])) {
    return `Great! Here's what I'd suggest, ${name}:\n\n1. Start your free trial at https://app.solis-os.com/signup - takes 2 minutes, no card needed\n2. Set up your business profile, services, and team\n3. Share your booking page with customers right away\n\nOr if you'd like a personal walkthrough first, just say "demo" and I'll arrange one for you.\n\nWhat would you prefer?`;
  }

  return null;
}

function matches(input, keywords) {
  return keywords.some(k => input.includes(k));
}

function getFeatureResponse(name) {
  return `Great question, ${name}! Here's what Solis OS does:\n\nSolis OS is an all-in-one AI platform that runs your business operations:\n\n` +
    `Bookings & Scheduling - Online booking page your customers can use 24/7. Automatic confirmations and reminders.\n\n` +
    `Customer Management - Full CRM to track all your clients, their history, preferences, and notes.\n\n` +
    `Staff Management - Manage your team, assign roles, track availability and performance.\n\n` +
    `AI Insights - Smart analytics that tell you what's working, predict busy periods, and suggest improvements.\n\n` +
    `Automated Communications - WhatsApp and email notifications sent automatically to your customers.\n\n` +
    `Business Analytics - Real-time dashboard showing revenue, bookings, customer trends, and more.\n\n` +
    `Would you like to know about pricing, or ready to start your free trial?`;
}

function getPricingResponse(name) {
  return `Here are our plans, ${name}:\n\n` +
    `STARTER - $10/month\n` +
    `Perfect for solo operators and small businesses just getting started.\n\n` +
    `PROFESSIONAL - $25/quarter ($8.33/month)\n` +
    `Best value. Ideal for growing businesses that want the full suite of tools.\n\n` +
    `ENTERPRISE - $45/half-year ($7.50/month)\n` +
    `For established businesses that want maximum savings and priority support.\n\n` +
    `All plans include:\n` +
    `- Unlimited bookings\n` +
    `- Customer & staff management\n` +
    `- AI-powered insights\n` +
    `- Online booking page\n` +
    `- WhatsApp notifications\n\n` +
    `Every plan starts with a free trial, no credit card required.\n\n` +
    `Ready to get started? Visit https://app.solis-os.com/signup`;
}

function getIndustryResponse(name) {
  return `Solis OS is built for service-based businesses, ${name}. Here are the industries we serve:\n\n` +
    `Hair Salons & Barbershops - Appointment booking, stylist scheduling, client preferences\n\n` +
    `Beauty & Spa - Treatment bookings, package management, customer history\n\n` +
    `Medical & Dental Clinics - Patient scheduling, practitioner management, appointment reminders\n\n` +
    `Auto Garages & Workshops - Job booking, mechanic assignments, service tracking\n\n` +
    `Fitness & Gyms - Class scheduling, trainer management, member bookings\n\n` +
    `And many more - Any business that takes appointments or manages services can use Solis OS.\n\n` +
    `The platform adapts to your industry automatically during setup. What type of business do you run?`;
}

function getStartedResponse(name) {
  return `Getting started is easy, ${name}! Here's how:\n\n` +
    `Step 1 - Visit https://app.solis-os.com/signup and create your account (takes 30 seconds)\n\n` +
    `Step 2 - Set up your business profile (name, industry, location, hours)\n\n` +
    `Step 3 - Add your services and pricing\n\n` +
    `Step 4 - Add your team members\n\n` +
    `Step 5 - Share your booking page with customers\n\n` +
    `That's it! The whole setup takes about 5 minutes. Your AI-powered booking page goes live immediately.\n\n` +
    `No credit card required to start. You can explore everything for free.\n\n` +
    `Start now: https://app.solis-os.com/signup`;
}

function getDemoResponse(name) {
  return `I'd love to show you around, ${name}!\n\n` +
    `You can explore Solis OS right now:\n\n` +
    `1. Visit our website to see what we offer: https://solis-os.com\n\n` +
    `2. Sign up for a free trial and explore the full platform yourself: https://app.solis-os.com/signup\n\n` +
    `3. If you'd like a personal walkthrough with our team, reply with "speak to someone" and we'll arrange a time that works for you.\n\n` +
    `What would you prefer?`;
}

function getTrialResponse(name) {
  return `Yes, ${name}! We offer a free trial with full access to all features.\n\n` +
    `No credit card required. No commitments. Just sign up and start using it.\n\n` +
    `You'll get access to:\n` +
    `- Online booking page\n` +
    `- Customer management\n` +
    `- Staff scheduling\n` +
    `- AI insights\n` +
    `- Business dashboard\n\n` +
    `Start your free trial here: https://app.solis-os.com/signup\n\n` +
    `Takes less than a minute to set up!`;
}

function getAIResponse(name) {
  return `AI is at the heart of Solis OS, ${name}. Here's how it helps your business:\n\n` +
    `Smart Scheduling - AI learns your busy patterns and optimizes appointment slots to maximize your bookings.\n\n` +
    `Customer Insights - Understands customer behavior, predicts no-shows, and suggests the best times to reach out.\n\n` +
    `Revenue Optimization - Identifies your most profitable services and suggests pricing improvements.\n\n` +
    `Automated Follow-ups - Sends perfectly timed reminders and follow-ups to reduce no-shows by up to 80%.\n\n` +
    `Business Intelligence - Weekly AI reports that tell you exactly what's working and what needs attention.\n\n` +
    `It's like having a business consultant working for you 24/7, but at a fraction of the cost.\n\n` +
    `Want to see it in action? Sign up free: https://app.solis-os.com/signup`;
}

function getSupportResponse(name) {
  return `I'm here to help, ${name}!\n\n` +
    `For quick answers, you can ask me anything about Solis OS right here in this chat.\n\n` +
    `If you need technical support or have an account-specific issue, our team is ready to assist:\n\n` +
    `Just reply with "speak to someone" and we'll get a team member to help you as soon as possible.\n\n` +
    `You can also visit our website for more information: https://solis-os.com\n\n` +
    `What do you need help with?`;
}

function getHumanResponse(name) {
  return `Of course, ${name}! I'll make sure someone from our team gets back to you shortly.\n\n` +
    `In the meantime, feel free to check out our platform at https://solis-os.com or start a free trial at https://app.solis-os.com/signup.\n\n` +
    `A team member will reach out to you on this WhatsApp number within a few hours. Thank you for your patience!`;
}

function getAppResponse(name) {
  return `Great news, ${name}! Solis OS works on all devices:\n\n` +
    `Mobile - Access the full platform from your phone browser. It's a Progressive Web App (PWA), so it works just like a native app.\n\n` +
    `Desktop - Full dashboard experience on your laptop or desktop at https://app.solis-os.com\n\n` +
    `Tablet - Perfect for reception desks and front counters.\n\n` +
    `Your customers can book appointments from their phones too, through your personalized booking page.\n\n` +
    `Native apps for Google Play and App Store are coming soon!\n\n` +
    `Start using Solis OS now: https://app.solis-os.com/signup`;
}

function getBookingResponse(name) {
  return `Solis OS makes booking management effortless, ${name}!\n\n` +
    `Online Booking Page - Your customers can book 24/7 from their phone or computer. You get a unique link to share.\n\n` +
    `Smart Calendar - See all your appointments in one place. Color-coded by service type and staff member.\n\n` +
    `Automatic Reminders - Customers get WhatsApp/email reminders before their appointment. Reduces no-shows by up to 80%.\n\n` +
    `Easy Rescheduling - Customers can reschedule themselves, freeing up your time.\n\n` +
    `Staff Assignment - Automatically assigns the right team member based on service and availability.\n\n` +
    `Would you like to set up your booking page? It's free to start: https://app.solis-os.com/signup`;
}

function getCustomerResponse(name) {
  return `Solis OS gives you a complete customer management system, ${name}!\n\n` +
    `Customer Profiles - Store contact info, visit history, preferences, and notes for every client.\n\n` +
    `Visit History - See every appointment a customer has had, what services they booked, and which staff served them.\n\n` +
    `Smart Notes - Add private notes about customer preferences (like "prefers morning appointments" or "allergic to certain products").\n\n` +
    `Communication Log - Track all messages and interactions in one place.\n\n` +
    `It's like a CRM built specifically for service businesses.\n\n` +
    `Try it free: https://app.solis-os.com/signup`;
}

function getStaffResponse(name) {
  return `Managing your team is easy with Solis OS, ${name}!\n\n` +
    `Team Profiles - Add each staff member with their role, skills, and contact info.\n\n` +
    `Availability Management - Set working hours for each team member. The booking system respects these automatically.\n\n` +
    `Service Assignment - Assign which services each staff member can perform.\n\n` +
    `Performance Tracking - See booking stats, customer ratings, and revenue generated per team member.\n\n` +
    `Whether you have 1 employee or 50, Solis OS scales with your team.\n\n` +
    `Get started: https://app.solis-os.com/signup`;
}

function getInvoiceResponse(name) {
  return `Solis OS helps you manage the financial side too, ${name}!\n\n` +
    `Payment tracking, service pricing, and revenue reporting are all built in. You can see exactly how much each service generates and track your business performance over time.\n\n` +
    `Full invoicing and payment processing features are being rolled out soon as part of our platform expansion.\n\n` +
    `Want to see what's available now? Start free: https://app.solis-os.com/signup`;
}

function getAnalyticsResponse(name) {
  return `Data drives better decisions, ${name}! Solis OS gives you:\n\n` +
    `Real-Time Dashboard - See today's bookings, revenue, and customer activity at a glance.\n\n` +
    `AI Insights - Smart recommendations based on your business patterns. Know your peak hours, popular services, and growth trends.\n\n` +
    `Revenue Reports - Track earnings by day, week, month. See which services and staff generate the most revenue.\n\n` +
    `Customer Analytics - Understand booking patterns, retention rates, and customer lifetime value.\n\n` +
    `All the data you need to grow your business, presented in a way that's easy to understand.\n\n` +
    `See your dashboard: https://app.solis-os.com/signup`;
}

function getSecurityResponse(name) {
  return `Security is a top priority at Solis OS, ${name}.\n\n` +
    `Your data is protected with:\n\n` +
    `- End-to-end encryption for all data\n` +
    `- Secure cloud hosting with automatic backups\n` +
    `- Role-based access control for your team\n` +
    `- GDPR-compliant data handling\n` +
    `- Regular security audits\n\n` +
    `Your customers' information is safe with us. We never share or sell any data.\n\n` +
    `Any other questions? I'm happy to help!`;
}

function getThankResponse(name) {
  return `You're welcome, ${name}! Happy to help.\n\n` +
    `If you have any more questions, just message us here anytime. We're always available.\n\n` +
    `Ready to get started? https://app.solis-os.com/signup`;
}

module.exports = { handleIncomingMessage };
