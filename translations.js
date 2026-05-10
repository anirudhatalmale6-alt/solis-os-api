const translations = {
  en: {
    welcome: (name) => `Hi ${name}! Welcome to Solis OS.\n\nI'm here to help you learn about our AI-powered business management platform. We help salons, clinics, garages, and other service businesses automate their operations.\n\nWhat would you like to know? Here are some things I can help with:\n\n1. What Solis OS does\n2. Pricing plans\n3. Which industries we support\n4. How to get started\n5. Book a demo\n\nJust type a number or ask me anything!`,
    welcomeWithAnswer: (name, answer) => `Hi ${name}! Welcome to Solis OS.\n\n${answer}`,
    welcomeGeneric: (name) => `Hi ${name}! Welcome to Solis OS, the AI-powered platform that helps service businesses manage bookings, customers, staff, and more.\n\nHow can I help you today? You can ask about our features, pricing, supported industries, or anything else!`,
    fallback: (name) => `Thanks for your message, ${name}. I want to make sure I give you the right answer.\n\nCould you try asking about:\n- Our features and what Solis OS does\n- Pricing and plans\n- Industries we support (salons, clinics, garages, etc.)\n- How to get started or sign up\n- Booking a demo\n\nOr if you'd like to speak with our team directly, just say "speak to someone" and I'll connect you.`,
    features: (name) => `Great question, ${name}! Here's what Solis OS does:\n\nSolis OS is an all-in-one AI platform that runs your business operations:\n\nBookings & Scheduling - Online booking page your customers can use 24/7. Automatic confirmations and reminders.\n\nCustomer Management - Full CRM to track all your clients, their history, preferences, and notes.\n\nStaff Management - Manage your team, assign roles, track availability and performance.\n\nAI Insights - Smart analytics that tell you what's working, predict busy periods, and suggest improvements.\n\nAutomated Communications - WhatsApp and email notifications sent automatically to your customers.\n\nBusiness Analytics - Real-time dashboard showing revenue, bookings, customer trends, and more.\n\nWould you like to know about pricing, or ready to start your free trial?`,
    pricing: (name) => `Here are our plans, ${name}:\n\nSTARTER - $10/month\nPerfect for solo operators and small businesses just getting started.\n\nPROFESSIONAL - $25/quarter ($8.33/month)\nBest value. Ideal for growing businesses that want the full suite of tools.\n\nENTERPRISE - $45/half-year ($7.50/month)\nFor established businesses that want maximum savings and priority support.\n\nAll plans include:\n- Unlimited bookings\n- Customer & staff management\n- AI-powered insights\n- Online booking page\n- WhatsApp notifications\n\nEvery plan starts with a free trial, no credit card required.\n\nReady to get started? Visit https://app.solis-os.com/signup`,
    industries: (name) => `Solis OS is built for service-based businesses, ${name}. Here are the industries we serve:\n\nHair Salons & Barbershops - Appointment booking, stylist scheduling, client preferences\n\nBeauty & Spa - Treatment bookings, package management, customer history\n\nMedical & Dental Clinics - Patient scheduling, practitioner management, appointment reminders\n\nAuto Garages & Workshops - Job booking, mechanic assignments, service tracking\n\nFitness & Gyms - Class scheduling, trainer management, member bookings\n\nAnd many more - Any business that takes appointments or manages services can use Solis OS.\n\nThe platform adapts to your industry automatically during setup. What type of business do you run?`,
    getStarted: (name) => `Getting started is easy, ${name}! Here's how:\n\nStep 1 - Visit https://app.solis-os.com/signup and create your account (takes 30 seconds)\n\nStep 2 - Set up your business profile (name, industry, location, hours)\n\nStep 3 - Add your services and pricing\n\nStep 4 - Add your team members\n\nStep 5 - Share your booking page with customers\n\nThat's it! The whole setup takes about 5 minutes. Your AI-powered booking page goes live immediately.\n\nNo credit card required to start. You can explore everything for free.\n\nStart now: https://app.solis-os.com/signup`,
    demo: (name) => `I'd love to show you around, ${name}!\n\nYou can explore Solis OS right now:\n\n1. Visit our website to see what we offer: https://solis-os.com\n\n2. Sign up for a free trial and explore the full platform yourself: https://app.solis-os.com/signup\n\n3. If you'd like a personal walkthrough with our team, reply with "speak to someone" and we'll arrange a time that works for you.\n\nWhat would you prefer?`,
    trial: (name) => `Yes, ${name}! We offer a free trial with full access to all features.\n\nNo credit card required. No commitments. Just sign up and start using it.\n\nStart your free trial here: https://app.solis-os.com/signup\n\nTakes less than a minute to set up!`,
    human: (name) => `Of course, ${name}! I'll make sure someone from our team gets back to you shortly.\n\nA team member will reach out to you on this number within a few hours. Thank you for your patience!`,
    thanks: (name) => `You're welcome, ${name}! Happy to help.\n\nIf you have any more questions, just message us here anytime.\n\nReady to get started? https://app.solis-os.com/signup`,
    bye: (name) => `It was great chatting with you, ${name}! If you ever need anything, just message us here anytime.\n\nHave a wonderful day!`,
    yes: (name) => `Great! Here's what I'd suggest, ${name}:\n\n1. Start your free trial at https://app.solis-os.com/signup - takes 2 minutes, no card needed\n2. Set up your business profile, services, and team\n3. Share your booking page with customers right away\n\nOr if you'd like a personal walkthrough first, just say "demo" and I'll arrange one for you.\n\nWhat would you prefer?`,
    nonText: "Thanks for reaching out! I can best assist you with text messages. Feel free to type your question and I'll help you right away.",
    ai: (name) => `AI is at the heart of Solis OS, ${name}. Here's how it helps your business:\n\nSmart Scheduling - AI learns your busy patterns and optimizes appointment slots to maximize your bookings.\n\nCustomer Insights - Understands customer behavior, predicts no-shows, and suggests the best times to reach out.\n\nRevenue Optimization - Identifies your most profitable services and suggests pricing improvements.\n\nAutomated Follow-ups - Sends perfectly timed reminders and follow-ups to reduce no-shows by up to 80%.\n\nIt's like having a business consultant working for you 24/7.\n\nWant to see it in action? Sign up free: https://app.solis-os.com/signup`,
    support: (name) => `I'm here to help, ${name}!\n\nFor quick answers, you can ask me anything about Solis OS right here.\n\nIf you need technical support, just reply with "speak to someone" and we'll get a team member to help you.\n\nWhat do you need help with?`,
    booking: (name) => `Solis OS makes booking management effortless, ${name}!\n\nOnline Booking Page - Your customers can book 24/7 from their phone or computer.\n\nSmart Calendar - See all your appointments in one place.\n\nAutomatic Reminders - Customers get reminders before their appointment. Reduces no-shows by up to 80%.\n\nEasy Rescheduling - Customers can reschedule themselves.\n\nWould you like to set up your booking page? It's free to start: https://app.solis-os.com/signup`,
    security: (name) => `Security is a top priority at Solis OS, ${name}.\n\nYour data is protected with:\n- End-to-end encryption\n- Secure cloud hosting with automatic backups\n- Role-based access control\n- GDPR-compliant data handling\n\nYour customers' information is safe with us.`,
    app: (name) => `Solis OS works on all devices, ${name}!\n\nMobile - Works like a native app from your phone browser.\n\nDesktop - Full dashboard at https://app.solis-os.com\n\nTablet - Perfect for reception desks.\n\nNative apps for Google Play and App Store are coming soon!\n\nStart using Solis OS now: https://app.solis-os.com/signup`
  },

  ar: {
    welcome: (name) => `مرحبا ${name}! أهلا بك في Solis OS.\n\nأنا هنا لمساعدتك في التعرف على منصتنا لإدارة الأعمال بالذكاء الاصطناعي. نحن نساعد الصالونات والعيادات والورش وغيرها من الأعمال الخدمية.\n\nبماذا يمكنني مساعدتك؟\n\n1. ما هو Solis OS\n2. الأسعار والباقات\n3. القطاعات التي ندعمها\n4. كيف تبدأ\n5. حجز عرض توضيحي\n\nاكتب رقم أو اسأل أي سؤال!`,
    welcomeWithAnswer: (name, answer) => `مرحبا ${name}! أهلا بك في Solis OS.\n\n${answer}`,
    welcomeGeneric: (name) => `مرحبا ${name}! أهلا بك في Solis OS، المنصة الذكية التي تساعد الأعمال الخدمية في إدارة الحجوزات والعملاء والموظفين.\n\nكيف يمكنني مساعدتك اليوم؟`,
    fallback: (name) => `شكرا لرسالتك ${name}. يمكنك السؤال عن:\n- مميزات المنصة\n- الأسعار والباقات\n- القطاعات المدعومة\n- كيفية البدء\n- حجز عرض توضيحي\n\nأو اكتب "تحدث مع شخص" للتواصل مع فريقنا.`,
    features: (name) => `سؤال ممتاز ${name}! إليك ما يقدمه Solis OS:\n\nالحجوزات - صفحة حجز أونلاين لعملائك تعمل 24/7\n\nإدارة العملاء - نظام CRM كامل لتتبع جميع عملائك\n\nإدارة الموظفين - إدارة فريقك وتعيين الأدوار\n\nالذكاء الاصطناعي - تحليلات ذكية وتوصيات لتحسين عملك\n\nالتواصل التلقائي - إشعارات واتساب وبريد إلكتروني تلقائية\n\nلوحة تحكم - بيانات مباشرة عن الإيرادات والحجوزات\n\nهل تريد معرفة الأسعار أو البدء بالتجربة المجانية؟`,
    pricing: (name) => `إليك باقاتنا ${name}:\n\nالأساسية - $10/شهر\nمثالية للأعمال الصغيرة\n\nالاحترافية - $25/3 أشهر ($8.33/شهر)\nأفضل قيمة. لجميع الأدوات والمميزات\n\nالمتقدمة - $45/6 أشهر ($7.50/شهر)\nأقصى توفير مع دعم أولوية\n\nجميع الباقات تشمل:\n- حجوزات غير محدودة\n- إدارة العملاء والموظفين\n- الذكاء الاصطناعي\n- صفحة حجز أونلاين\n\nابدأ تجربتك المجانية: https://app.solis-os.com/signup`,
    industries: (name) => `Solis OS مصمم للأعمال الخدمية ${name}:\n\nصالونات الحلاقة والتجميل - حجز المواعيد وجدولة المصممين\n\nالسبا والعناية - إدارة العلاجات والباقات\n\nالعيادات الطبية وطب الأسنان - جدولة المرضى وإدارة الأطباء\n\nورش السيارات - حجز الخدمات وتعيين الميكانيكيين\n\nالصالات الرياضية - جدولة الحصص وإدارة المدربين\n\nوأكثر - أي عمل يحتاج حجوزات يمكنه استخدام Solis OS.\n\nما هو نوع عملك؟`,
    getStarted: (name) => `البدء سهل جدا ${name}!\n\n1. سجل حسابك: https://app.solis-os.com/signup (30 ثانية)\n2. أعد ملف عملك\n3. أضف خدماتك وأسعارك\n4. أضف فريقك\n5. شارك صفحة الحجز مع عملائك\n\nالإعداد يستغرق 5 دقائق فقط. بدون بطاقة ائتمان.\n\nابدأ الآن: https://app.solis-os.com/signup`,
    demo: (name) => `يسعدني أن أريك المنصة ${name}!\n\n1. زر موقعنا: https://solis-os.com\n2. جرب المنصة مجانا: https://app.solis-os.com/signup\n3. أو اكتب "تحدث مع شخص" لترتيب جولة شخصية\n\nماذا تفضل؟`,
    trial: (name) => `نعم ${name}! نوفر تجربة مجانية كاملة.\n\nبدون بطاقة ائتمان. بدون التزام.\n\nابدأ تجربتك: https://app.solis-os.com/signup`,
    human: (name) => `بالتأكيد ${name}! سيتواصل معك أحد أعضاء فريقنا قريبا. شكرا لصبرك!`,
    thanks: (name) => `عفوا ${name}! يسعدني المساعدة.\n\nإذا كان لديك أي أسئلة أخرى، راسلنا في أي وقت.\n\nابدأ الآن: https://app.solis-os.com/signup`,
    bye: (name) => `سعدت بالتحدث معك ${name}! إذا احتجت أي شيء، راسلنا في أي وقت.\n\nأتمنى لك يوما رائعا!`,
    yes: (name) => `ممتاز! إليك اقتراحي ${name}:\n\n1. ابدأ تجربتك المجانية: https://app.solis-os.com/signup\n2. أعد ملف عملك وخدماتك\n3. شارك صفحة الحجز مع عملائك\n\nأو اكتب "عرض" لترتيب جولة شخصية.`,
    nonText: "شكرا للتواصل! يمكنني مساعدتك بشكل أفضل عبر الرسائل النصية. اكتب سؤالك وسأساعدك فورا.",
    ai: (name) => `الذكاء الاصطناعي في قلب Solis OS ${name}:\n\nجدولة ذكية - يتعلم أنماط عملك ويحسن المواعيد\n\nتحليل العملاء - يفهم سلوك العملاء ويتوقع التغيب\n\nتحسين الإيرادات - يحدد خدماتك الأكثر ربحية\n\nمتابعة تلقائية - تذكيرات في الوقت المناسب تقلل التغيب بنسبة 80%\n\nجربه مجانا: https://app.solis-os.com/signup`,
    support: (name) => `أنا هنا للمساعدة ${name}!\n\nاسألني أي شيء عن Solis OS هنا.\n\nللدعم الفني، اكتب "تحدث مع شخص".\n\nبماذا يمكنني مساعدتك؟`,
    booking: (name) => `Solis OS يجعل إدارة الحجوزات سهلة ${name}!\n\nصفحة حجز أونلاين - عملاؤك يحجزون 24/7\n\nتقويم ذكي - كل مواعيدك في مكان واحد\n\nتذكيرات تلقائية - تقلل التغيب بنسبة 80%\n\nإعادة جدولة سهلة - العملاء يعيدون الجدولة بأنفسهم\n\nابدأ مجانا: https://app.solis-os.com/signup`,
    security: (name) => `الأمان أولوية في Solis OS ${name}.\n\nبياناتك محمية بـ:\n- تشفير كامل\n- استضافة سحابية آمنة\n- التحكم بالصلاحيات\n- متوافق مع GDPR\n\nبيانات عملائك آمنة معنا.`,
    app: (name) => `Solis OS يعمل على جميع الأجهزة ${name}!\n\nالجوال - يعمل كتطبيق من متصفح هاتفك\n\nالكمبيوتر - لوحة تحكم كاملة: https://app.solis-os.com\n\nالتابلت - مثالي لمكاتب الاستقبال\n\nتطبيقات Google Play و App Store قريبا!\n\nابدأ الآن: https://app.solis-os.com/signup`
  },

  fr: {
    welcome: (name) => `Bonjour ${name} ! Bienvenue chez Solis OS.\n\nJe suis ici pour vous aider a decouvrir notre plateforme de gestion d'entreprise alimentee par l'IA. Nous aidons les salons, cliniques, garages et autres entreprises de services.\n\nQue souhaitez-vous savoir ?\n\n1. Ce que fait Solis OS\n2. Nos tarifs\n3. Les secteurs que nous soutenons\n4. Comment demarrer\n5. Reserver une demo\n\nTapez un numero ou posez votre question !`,
    welcomeWithAnswer: (name, answer) => `Bonjour ${name} ! Bienvenue chez Solis OS.\n\n${answer}`,
    welcomeGeneric: (name) => `Bonjour ${name} ! Bienvenue chez Solis OS, la plateforme IA qui aide les entreprises de services a gerer les reservations, clients et equipes.\n\nComment puis-je vous aider ?`,
    fallback: (name) => `Merci pour votre message, ${name}. Vous pouvez demander :\n- Nos fonctionnalites\n- Les tarifs\n- Les secteurs supportes\n- Comment demarrer\n- Reserver une demo\n\nOu tapez "parler a quelqu'un" pour contacter notre equipe.`,
    features: (name) => `Excellente question, ${name} ! Voici ce que fait Solis OS :\n\nReservations - Page de reservation en ligne 24/7\n\nGestion clients - CRM complet pour suivre tous vos clients\n\nGestion equipe - Gerez votre equipe et attribuez des roles\n\nIA - Analyses intelligentes et recommandations\n\nCommunications automatiques - Notifications WhatsApp et email\n\nTableau de bord - Donnees en temps reel\n\nVoulez-vous connaitre nos tarifs ou commencer l'essai gratuit ?`,
    pricing: (name) => `Voici nos forfaits, ${name} :\n\nSTARTER - 10$/mois\nParfait pour les petites entreprises.\n\nPROFESSIONNEL - 25$/trimestre (8,33$/mois)\nMeilleur rapport qualite-prix.\n\nENTREPRISE - 45$/semestre (7,50$/mois)\nEconomies maximales avec support prioritaire.\n\nTous les forfaits incluent :\n- Reservations illimitees\n- Gestion clients et equipe\n- IA integree\n- Page de reservation\n\nEssai gratuit : https://app.solis-os.com/signup`,
    industries: (name) => `Solis OS est concu pour les entreprises de services, ${name} :\n\nSalons de coiffure - Reservations et planning des stylistes\n\nBeaute & Spa - Gestion des soins et forfaits\n\nCliniques medicales & dentaires - Planning des patients\n\nGarages automobiles - Reservations et suivi des reparations\n\nSalles de sport - Planning des cours et des coachs\n\nQuel est votre type d'entreprise ?`,
    getStarted: (name) => `C'est facile de commencer, ${name} !\n\n1. Creez votre compte : https://app.solis-os.com/signup\n2. Configurez votre profil\n3. Ajoutez vos services\n4. Ajoutez votre equipe\n5. Partagez votre page de reservation\n\nEn 5 minutes c'est pret ! Sans carte bancaire.\n\nCommencez : https://app.solis-os.com/signup`,
    demo: (name) => `Avec plaisir, ${name} !\n\n1. Visitez notre site : https://solis-os.com\n2. Essayez gratuitement : https://app.solis-os.com/signup\n3. Ou tapez "parler a quelqu'un" pour une demo personnalisee`,
    trial: (name) => `Oui, ${name} ! Essai gratuit avec acces complet.\n\nSans carte bancaire. Sans engagement.\n\nCommencez : https://app.solis-os.com/signup`,
    human: (name) => `Bien sur, ${name} ! Un membre de notre equipe vous contactera bientot. Merci de votre patience !`,
    thanks: (name) => `De rien, ${name} ! Ravi de vous aider.\n\nN'hesitez pas a nous ecrire.\n\nCommencez : https://app.solis-os.com/signup`,
    bye: (name) => `Ravi d'avoir discute avec vous, ${name} ! N'hesitez pas a revenir.\n\nBonne journee !`,
    yes: (name) => `Super ! Voici ce que je suggere, ${name} :\n\n1. Essai gratuit : https://app.solis-os.com/signup\n2. Configurez votre entreprise\n3. Partagez votre page de reservation\n\nOu tapez "demo" pour une visite guidee.`,
    nonText: "Merci de nous contacter ! Je peux mieux vous aider par texte. Tapez votre question !",
    ai: (name) => `L'IA est au coeur de Solis OS, ${name} :\n\nPlanification intelligente - Optimise vos creneaux\n\nAnalyse clients - Predit les absences\n\nOptimisation revenus - Identifie vos services les plus rentables\n\nSuivis automatiques - Reduit les absences de 80%\n\nEssayez : https://app.solis-os.com/signup`,
    support: (name) => `Je suis la pour vous aider, ${name} !\n\nPosez-moi n'importe quelle question ici.\n\nPour le support technique, tapez "parler a quelqu'un".`,
    booking: (name) => `Solis OS simplifie les reservations, ${name} !\n\nPage de reservation 24/7\nCalendrier intelligent\nRappels automatiques (-80% d'absences)\nReprogrammation facile\n\nCommencez : https://app.solis-os.com/signup`,
    security: (name) => `La securite est une priorite, ${name}.\n\n- Chiffrement complet\n- Hebergement securise\n- Controle des acces\n- Conforme RGPD`,
    app: (name) => `Solis OS fonctionne partout, ${name} !\n\nMobile, Desktop, Tablette.\n\nApps natives bientot disponibles !\n\nCommencez : https://app.solis-os.com/signup`
  },

  es: {
    welcome: (name) => `Hola ${name}! Bienvenido a Solis OS.\n\nEstoy aqui para ayudarte a conocer nuestra plataforma de gestion empresarial con IA. Ayudamos a salones, clinicas, talleres y otros negocios de servicios.\n\nQue te gustaria saber?\n\n1. Que hace Solis OS\n2. Precios y planes\n3. Industrias que apoyamos\n4. Como empezar\n5. Reservar una demo\n\nEscribe un numero o pregunta lo que quieras!`,
    welcomeWithAnswer: (name, answer) => `Hola ${name}! Bienvenido a Solis OS.\n\n${answer}`,
    welcomeGeneric: (name) => `Hola ${name}! Bienvenido a Solis OS, la plataforma con IA que ayuda a negocios de servicios a gestionar reservas, clientes y equipos.\n\nComo puedo ayudarte?`,
    fallback: (name) => `Gracias por tu mensaje, ${name}. Puedes preguntar sobre:\n- Funcionalidades\n- Precios y planes\n- Industrias compatibles\n- Como empezar\n- Reservar una demo\n\nO escribe "hablar con alguien" para contactar a nuestro equipo.`,
    features: (name) => `Excelente pregunta, ${name}! Esto es lo que hace Solis OS:\n\nReservas - Pagina de reservas online 24/7\n\nGestion de clientes - CRM completo\n\nGestion de equipo - Administra roles y disponibilidad\n\nIA - Analiticas inteligentes y recomendaciones\n\nComunicaciones automaticas - WhatsApp y email\n\nPanel de control - Datos en tiempo real\n\nQuieres conocer los precios o empezar la prueba gratis?`,
    pricing: (name) => `Aqui estan nuestros planes, ${name}:\n\nINICIAL - $10/mes\nPerfecto para empezar.\n\nPROFESIONAL - $25/trimestre ($8.33/mes)\nMejor valor.\n\nEMPRESA - $45/semestre ($7.50/mes)\nMaximo ahorro con soporte prioritario.\n\nTodos incluyen:\n- Reservas ilimitadas\n- Gestion de clientes y equipo\n- IA integrada\n\nPrueba gratis: https://app.solis-os.com/signup`,
    industries: (name) => `Solis OS esta hecho para negocios de servicios, ${name}:\n\nSalones de belleza y barberias\nSpa y estetica\nClinicas medicas y dentales\nTalleres mecanicos\nGimnasios y fitness\n\nCualquier negocio con citas puede usar Solis OS.\n\nQue tipo de negocio tienes?`,
    getStarted: (name) => `Empezar es facil, ${name}!\n\n1. Crea tu cuenta: https://app.solis-os.com/signup\n2. Configura tu perfil\n3. Agrega tus servicios\n4. Agrega tu equipo\n5. Comparte tu pagina de reservas\n\nEn 5 minutos esta listo. Sin tarjeta de credito.\n\nEmpieza: https://app.solis-os.com/signup`,
    demo: (name) => `Con gusto, ${name}!\n\n1. Visita nuestro sitio: https://solis-os.com\n2. Prueba gratis: https://app.solis-os.com/signup\n3. O escribe "hablar con alguien" para una demo personalizada`,
    trial: (name) => `Si, ${name}! Prueba gratis con acceso completo.\n\nSin tarjeta. Sin compromiso.\n\nEmpieza: https://app.solis-os.com/signup`,
    human: (name) => `Claro, ${name}! Alguien de nuestro equipo te contactara pronto. Gracias por tu paciencia!`,
    thanks: (name) => `De nada, ${name}! Encantado de ayudar.\n\nSi tienes mas preguntas, escribenos.\n\nEmpieza: https://app.solis-os.com/signup`,
    bye: (name) => `Fue un placer, ${name}! Si necesitas algo, escribenos.\n\nQue tengas un excelente dia!`,
    yes: (name) => `Genial! Te sugiero, ${name}:\n\n1. Prueba gratis: https://app.solis-os.com/signup\n2. Configura tu negocio\n3. Comparte tu pagina de reservas\n\nO escribe "demo" para una visita guiada.`,
    nonText: "Gracias por contactarnos! Puedo ayudarte mejor por texto. Escribe tu pregunta!",
    ai: (name) => `La IA esta en el corazon de Solis OS, ${name}:\n\nAgenda inteligente - Optimiza tus horarios\n\nAnalisis de clientes - Predice ausencias\n\nOptimizacion de ingresos - Identifica servicios mas rentables\n\nSeguimientos automaticos - Reduce ausencias un 80%\n\nPruebalo: https://app.solis-os.com/signup`,
    support: (name) => `Estoy aqui para ayudarte, ${name}!\n\nPreguntame lo que quieras aqui.\n\nPara soporte tecnico, escribe "hablar con alguien".`,
    booking: (name) => `Solis OS simplifica las reservas, ${name}!\n\nPagina de reservas 24/7\nCalendario inteligente\nRecordatorios automaticos\nReprogramacion facil\n\nEmpieza: https://app.solis-os.com/signup`,
    security: (name) => `La seguridad es prioridad, ${name}.\n\n- Encriptacion completa\n- Hosting seguro\n- Control de accesos\n- Cumple con GDPR`,
    app: (name) => `Solis OS funciona en todos los dispositivos, ${name}!\n\nMovil, Desktop, Tablet.\n\nApps nativas proximamente!\n\nEmpieza: https://app.solis-os.com/signup`
  }
};

function detectLanguage(text) {
  const arabicRegex = /[؀-ۿݐ-ݿࢠ-ࣿ]/;
  if (arabicRegex.test(text)) return 'ar';

  const frenchWords = ['bonjour', 'salut', 'merci', 'comment', 'prix', 'combien', 'fonctionnalites', 'aide', 'parler', 'reservation', 'oui', 'non', 'bonsoir', 'bonne', 'je veux', 'je voudrais', 'est-ce que', "c'est quoi", "qu'est"];
  const spanishWords = ['hola', 'gracias', 'precio', 'cuanto', 'ayuda', 'hablar', 'reserva', 'quiero', 'necesito', 'buenas', 'buenos', 'como', 'funciona', 'puedo', 'donde'];

  const lower = text.toLowerCase();
  const frCount = frenchWords.filter(w => lower.includes(w)).length;
  const spCount = spanishWords.filter(w => lower.includes(w)).length;

  if (frCount >= 1) return 'fr';
  if (spCount >= 1) return 'es';

  return 'en';
}

function getTranslation(lang) {
  return translations[lang] || translations.en;
}

module.exports = { detectLanguage, getTranslation, translations };
