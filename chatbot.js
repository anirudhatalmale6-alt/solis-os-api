const { detectLanguage, getTranslation } = require('./translations');

const conversations = new Map();
const SESSION_TIMEOUT = 30 * 60 * 1000;

function getSession(phone) {
  const session = conversations.get(phone);
  if (session && Date.now() - session.lastActive < SESSION_TIMEOUT) {
    session.lastActive = Date.now();
    session.messageCount++;
    return session;
  }
  const newSession = { lastActive: Date.now(), messageCount: 1, greeted: false, lang: 'en' };
  conversations.set(phone, newSession);
  return newSession;
}

function handleIncomingMessage(text, senderName, phone) {
  const session = getSession(phone);
  const input = text.toLowerCase().trim();
  const firstName = senderName.split(' ')[0];

  const detectedLang = detectLanguage(text);
  if (detectedLang !== 'en') session.lang = detectedLang;
  const t = getTranslation(session.lang);

  if (!session.greeted) {
    session.greeted = true;
    if (isGreeting(input, session.lang)) {
      return t.welcome(firstName);
    }
    const topicKey = matchTopicKey(input, session.lang);
    if (topicKey && t[topicKey]) return t.welcomeWithAnswer(firstName, t[topicKey](firstName));
    return t.welcomeGeneric(firstName);
  }

  if (['1','2','3','4','5'].includes(input)) {
    const keys = ['features','pricing','industries','getStarted','demo'];
    return t[keys[parseInt(input)-1]](firstName);
  }

  const topicKey = matchTopicKey(input, session.lang);
  if (topicKey && t[topicKey]) return t[topicKey](firstName);

  return t.fallback(firstName);
}

function isGreeting(text, lang) {
  const greetings = {
    en: ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening', 'sup', 'yo', 'hiya', 'howdy', 'greetings', 'whats up', "what's up"],
    ar: ['مرحبا', 'مرحبًا', 'اهلا', 'أهلا', 'السلام عليكم', 'سلام', 'هلا', 'هاي', 'صباح الخير', 'مساء الخير'],
    fr: ['bonjour', 'salut', 'bonsoir', 'coucou', 'bonne journee', 'allo'],
    es: ['hola', 'buenos dias', 'buenas tardes', 'buenas noches', 'buenas', 'que tal']
  };
  const all = [...(greetings[lang] || []), ...(greetings.en || [])];
  return all.some(g => text === g || text.startsWith(g + ' ') || text.startsWith(g + ',') || text.startsWith(g + '!'));
}

function matchTopicKey(input, lang) {
  const patterns = {
    pricing: {
      en: ['price', 'pricing', 'cost', 'how much', 'plans', 'subscription', 'payment', 'pay', 'fee', 'charge', 'monthly', 'yearly'],
      ar: ['سعر', 'اسعار', 'أسعار', 'كم', 'باقة', 'باقات', 'اشتراك', 'دفع', 'شهري', 'تكلفة'],
      fr: ['prix', 'tarif', 'combien', 'abonnement', 'forfait', 'cout', 'payer', 'mensuel'],
      es: ['precio', 'costo', 'cuanto', 'plan', 'planes', 'pago', 'mensual', 'suscripcion']
    },
    features: {
      en: ['feature', 'what does', 'what can', 'what do you', 'capabilities', 'offer', 'what is solis', "what's solis", 'tell me about', 'about solis', 'explain'],
      ar: ['مميزات', 'خصائص', 'ماذا يفعل', 'ما هو', 'اشرح', 'عن سوليس'],
      fr: ['fonctionnalite', 'que fait', 'quoi', "c'est quoi", 'expliquer', 'a propos'],
      es: ['funcionalidad', 'caracteristica', 'que hace', 'que es', 'explicar', 'sobre solis']
    },
    booking: {
      en: ['booking', 'appointment', 'schedule', 'calendar', 'reserve'],
      ar: ['حجز', 'موعد', 'مواعيد', 'جدول', 'حجوزات'],
      fr: ['reservation', 'rendez-vous', 'calendrier', 'reserver'],
      es: ['reserva', 'cita', 'agendar', 'calendario', 'reservar']
    },
    industries: {
      en: ['salon', 'hair', 'barber', 'beauty', 'spa', 'clinic', 'medical', 'dental', 'garage', 'mechanic', 'gym', 'fitness', 'industry', 'who is it for', 'what kind'],
      ar: ['صالون', 'حلاقة', 'تجميل', 'عيادة', 'طبي', 'ورشة', 'سيارات', 'رياضة', 'قطاع'],
      fr: ['salon', 'coiffure', 'beaute', 'clinique', 'medical', 'garage', 'mecanique', 'salle de sport', 'secteur'],
      es: ['salon', 'peluqueria', 'belleza', 'clinica', 'medico', 'taller', 'mecanico', 'gimnasio', 'industria']
    },
    getStarted: {
      en: ['start', 'sign up', 'signup', 'register', 'create account', 'get started', 'begin', 'try', 'join'],
      ar: ['بدء', 'تسجيل', 'انشاء حساب', 'ابدأ', 'كيف ابدأ', 'جرب'],
      fr: ['commencer', 'inscrire', 'inscription', 'creer compte', 'demarrer', 'essayer'],
      es: ['empezar', 'registrar', 'crear cuenta', 'comenzar', 'iniciar', 'probar']
    },
    demo: {
      en: ['demo', 'demonstration', 'show me', 'see it', 'preview', 'walkthrough', 'tour'],
      ar: ['عرض', 'توضيحي', 'شاهد', 'جولة'],
      fr: ['demo', 'demonstration', 'montrer', 'voir', 'visite'],
      es: ['demo', 'demostracion', 'mostrar', 'ver', 'tour']
    },
    trial: {
      en: ['free', 'trial', 'test', 'no cost'],
      ar: ['مجاني', 'تجربة', 'مجانية', 'بدون تكلفة'],
      fr: ['gratuit', 'essai', 'test', 'sans frais'],
      es: ['gratis', 'gratuito', 'prueba', 'sin costo']
    },
    ai: {
      en: ['ai', 'artificial intelligence', 'smart', 'intelligent', 'automation', 'automate'],
      ar: ['ذكاء اصطناعي', 'ذكي', 'اتمتة', 'تلقائي', 'أتمتة'],
      fr: ['ia', 'intelligence artificielle', 'intelligent', 'automatisation', 'automatiser'],
      es: ['ia', 'inteligencia artificial', 'inteligente', 'automatizacion', 'automatizar']
    },
    support: {
      en: ['support', 'help', 'customer service', 'issue', 'problem', 'trouble', 'bug', 'error'],
      ar: ['دعم', 'مساعدة', 'مشكلة', 'خطأ'],
      fr: ['support', 'aide', 'service client', 'probleme', 'erreur'],
      es: ['soporte', 'ayuda', 'servicio', 'problema', 'error']
    },
    human: {
      en: ['speak', 'talk', 'human', 'person', 'agent', 'real person', 'someone', 'representative', 'call me'],
      ar: ['تحدث', 'شخص', 'موظف', 'اتصل', 'بشري', 'تحدث مع شخص'],
      fr: ['parler', 'humain', 'personne', 'agent', 'quelqu\'un', 'representant', 'parler a quelqu'],
      es: ['hablar', 'humano', 'persona', 'agente', 'alguien', 'representante', 'hablar con']
    },
    app: {
      en: ['app', 'download', 'mobile', 'android', 'iphone', 'ios', 'phone app', 'install'],
      ar: ['تطبيق', 'تحميل', 'جوال', 'اندرويد', 'ايفون', 'موبايل'],
      fr: ['app', 'application', 'telecharger', 'mobile', 'android', 'iphone'],
      es: ['app', 'aplicacion', 'descargar', 'movil', 'android', 'iphone']
    },
    security: {
      en: ['secure', 'security', 'data protection', 'privacy', 'safe', 'gdpr'],
      ar: ['أمان', 'امان', 'حماية', 'خصوصية', 'آمن'],
      fr: ['securite', 'protection', 'confidentialite', 'rgpd', 'securise'],
      es: ['seguridad', 'proteccion', 'privacidad', 'gdpr', 'seguro']
    },
    thanks: {
      en: ['thank', 'thanks', 'appreciate', 'cheers', 'great', 'perfect', 'awesome', 'amazing'],
      ar: ['شكرا', 'شكرًا', 'ممتاز', 'رائع', 'مثالي'],
      fr: ['merci', 'parfait', 'genial', 'super', 'excellent', 'formidable'],
      es: ['gracias', 'perfecto', 'genial', 'excelente', 'increible']
    },
    bye: {
      en: ['bye', 'goodbye', 'see you', 'later', 'take care', 'good night'],
      ar: ['مع السلامة', 'وداعا', 'باي', 'تصبح على خير'],
      fr: ['au revoir', 'a bientot', 'bonne nuit', 'adieu', 'bye'],
      es: ['adios', 'hasta luego', 'nos vemos', 'buenas noches', 'bye', 'chao']
    },
    yes: {
      en: ['yes', 'yeah', 'yep', 'sure', 'ok', 'okay', 'sounds good', 'interested', 'tell me more'],
      ar: ['نعم', 'اه', 'حسنا', 'طيب', 'تمام', 'موافق', 'اخبرني اكثر'],
      fr: ['oui', 'ouais', 'bien sur', 'ok', "d'accord", 'interesse'],
      es: ['si', 'claro', 'ok', 'vale', 'bueno', 'de acuerdo', 'interesado']
    }
  };

  for (const [key, langs] of Object.entries(patterns)) {
    const keywords = [...(langs[lang] || []), ...(langs.en || [])];
    if (keywords.some(k => input.includes(k))) {
      if (key === 'booking' && ['demo', 'call', 'meeting'].some(w => input.includes(w))) return 'demo';
      return key;
    }
  }
  return null;
}

module.exports = { handleIncomingMessage };
