export type Language = 'es' | 'en';

export interface RecoveryItem {
  id: string;
  name: string;
  shortDesc: string;
  howToUse?: string;
  details?: string;
  iconType: 'pill' | 'stomach' | 'mint' | 'bandage';
  badge?: string;
  tips?: string[];
}

export interface WeddingContent {
  monogram: {
    initials: string;
    couple: string;
  };
  languageName: string;
  switchLanguageLabel: string;
  cardTitle: string;
  cardSubtitle: string;
  introLines: string[];
  items: RecoveryItem[];
  closingMessage: string;
  signaturePrefix: string;
  signature: string;
  actions: {
    viewOriginal: string;
    viewInteractive: string;
    celebrateToast: string;
    toastSuccess: string;
    shareWhatsApp: string;
    copyLink: string;
    copied: string;
    downloadCard: string;
    changeLanguage: string;
    doseTrackerTitle: string;
    logDoseBtn: string;
    dosesTakenToday: string;
    nextDoseAvailableIn: string;
    readyForNextDose: string;
    resetDoses: string;
    waterReminderTitle: string;
    waterReminderDesc: string;
    waterDrankBtn: string;
    glassesOfWater: string;
    emergencyHeading: string;
    needRide: string;
    needRideDesc: string;
    callUber: string;
    callCabify: string;
    morningTipsHeading: string;
    morningTips: { title: string; desc: string }[];
  };
}

export const weddingContent: Record<Language, WeddingContent> = {
  es: {
    monogram: {
      initials: 'A & M',
      couple: 'A & M',
    },
    languageName: 'Español',
    switchLanguageLabel: 'Cambiar idioma',
    cardTitle: 'UN PEQUEÑO KIT PARA LA RESACA',
    cardSubtitle: 'Instrucciones & Guía de Bienestar',
    introLines: [
      'Esperamos que bailes, brindes, rías y disfrutes cada momento con nosotros.',
      'Preparamos este pequeño kit para que tengas a mano todo lo necesario si la celebración deja alguna huella.',
    ],
    items: [
      {
        id: 'resaquit',
        name: 'RESAQUIT',
        shortDesc: 'ayuda a aliviar el dolor de cabeza, la acidez y las molestias digestivas que pueden aparecer después de una noche de festejo.',
        howToUse: '¿Cómo tomarlo: 1 comprimido con un vaso de agua. Si es necesario, puede repetirse cada 6 horas. Máximo 4 comprimidos en 24 horas y no usar por más de 2 días seguidos. Es un medicamento para mayores de 15 años.',
        details: 'Indicado para el alivio sintomático de cefalea y malestar gástrico post-celebración. Recuerda acompañarlo con abundante agua para potenciar su efecto.',
        iconType: 'pill',
        badge: 'Alivio General',
        tips: [
          'Tomar con 1 vaso completo de agua (250ml)',
          'Esperar al menos 6 horas entre tomas',
          'Máximo 4 comprimidos en 24 horas',
          'No mezclar con más bebidas alcohólicas'
        ]
      },
      {
        id: 'antiacidos',
        name: 'ANTIÁCIDOS',
        shortDesc: 'para aliviar la acidez o el malestar estomacal.',
        howToUse: 'Masticar o disolver en agua según indicación. Tomar preferentemente al sentir ardor estomacal o pesadez.',
        details: 'Calma rápidamente la acidez gástrica provocada por las comidas festivas y brindis.',
        iconType: 'stomach',
        badge: 'Digestión',
        tips: [
          'Ideal antes de ir a dormir si sientes pesadez',
          'Acompáñalo con agua a temperatura ambiente',
          'Evita acostarte inmediatamente después de comer pesado'
        ]
      },
      {
        id: 'menta',
        name: 'PASTILLAS DE MENTA Y CHICLE',
        shortDesc: 'para un aliento fresco y seguir disfrutando.',
        howToUse: 'Disfrútalos en cualquier momento de la fiesta o a la mañana siguiente.',
        details: 'El toque de frescura necesario para continuar con la mejor sonrisa en las fotos y la pista de baile.',
        iconType: 'mint',
        badge: 'Frescura',
        tips: [
          'Menta estimulante para reanimar el ánimo',
          'Excelente para la mañana siguiente al despertar'
        ]
      },
      {
        id: 'curitas',
        name: 'CURITAS',
        shortDesc: 'porque los zapatos lindos también pueden tener personalidad. 😉',
        howToUse: 'Aplicar directamente sobre la piel limpia y seca donde el calzado roce.',
        details: '¡Que nada te detenga en la pista! Protege tus pies de rozaduras para bailar hasta el final.',
        iconType: 'bandage',
        badge: 'Para la pista',
        tips: [
          'Colocar ante el primer roce para evitar ampollas',
          'Presionar suavemente los bordes para fijación duradera'
        ]
      },
    ],
    closingMessage: '¡Gracias por celebrar este día tan especial con nosotros!',
    signaturePrefix: 'CON CARIÑO,',
    signature: 'A & M',
    actions: {
      viewOriginal: 'Ver Tarjeta Original',
      viewInteractive: 'Modo Interactivo',
      celebrateToast: '¡Brindar por A & M! 🥂',
      toastSuccess: '¡Salud por los recién casados! Que viva el amor ❤️',
      shareWhatsApp: 'Compartir en WhatsApp',
      copyLink: 'Copiar enlace',
      copied: '¡Enlace copiado!',
      downloadCard: 'Guardar Tarjeta',
      changeLanguage: 'Seleccionar otro idioma',
      doseTrackerTitle: 'Controlador de Dosis de Resaquit',
      logDoseBtn: 'Registrar toma ahora (+1)',
      dosesTakenToday: 'Comprimidos tomados hoy',
      nextDoseAvailableIn: 'Próxima toma sugerida disponible en:',
      readyForNextDose: '¡Ya puedes tomar otra dosis si lo necesitas!',
      resetDoses: 'Reiniciar registro',
      waterReminderTitle: 'Control de Hidratación 💧',
      waterReminderDesc: 'El secreto número 1 para evitar la resaca es beber agua.',
      waterDrankBtn: 'Tomé un vaso de agua 🥤',
      glassesOfWater: 'vasos de agua registrados',
      emergencyHeading: '¿Necesitas transporte?',
      needRide: 'Regreso seguro a casa u hotel',
      needRideDesc: 'Por favor no conduzcas si has brindado. Pide un auto seguro.',
      callUber: 'Abrir Uber',
      callCabify: 'Abrir Cabify',
      morningTipsHeading: 'Consejos de Oro para la Mañana Siguiente',
      morningTips: [
        { title: 'Hidratación con electrolitos', desc: 'Bebe agua, agua de coco o bebidas isotónicas para reponer sales minerales.' },
        { title: 'Desayuno reparador', desc: 'Opta por frutas frescas (plátano), tostadas con miel o huevos revueltos.' },
        { title: 'Ducha reconfortante', desc: 'Una ducha tibia seguida de un chorro fresco ayuda a reactivar la circulación.' },
        { title: 'Descanso reparador', desc: 'Descansa en una habitación oscura y fresca con las cortinas cerradas.' },
      ]
    },
  },
  en: {
    monogram: {
      initials: 'A & M',
      couple: 'A & M',
    },
    languageName: 'English',
    switchLanguageLabel: 'Change language',
    cardTitle: 'A LITTLE RECOVERY KIT',
    cardSubtitle: 'Instructions & Wellness Guide',
    introLines: [
      'We hope you dance, laugh, celebrate, and make unforgettable memories with us.',
      'We put together this little kit to help you feel your best after an amazing night.',
    ],
    items: [
      {
        id: 'resaquit',
        name: 'RESAQUIT',
        shortDesc: 'Helps relieve headaches, heartburn and stomach discomfort that can sometimes follow a night of celebrating.',
        howToUse: 'How to use: Take 1 tablet with a glass of water. If needed, you may take another tablet every 6 hours. Do not exceed 4 tablets in 24 hours.',
        details: 'Designed for gentle relief from headaches and discomfort after celebration. Always take with plenty of water for optimal effect.',
        iconType: 'pill',
        badge: 'General Relief',
        tips: [
          'Take with 1 full glass of water (8 oz / 250ml)',
          'Wait at least 6 hours between doses',
          'Do not exceed 4 tablets in 24 hours',
          'Avoid mixing with more alcoholic beverages'
        ]
      },
      {
        id: 'antiacidos',
        name: 'ANTACIDS',
        shortDesc: 'To help soothe heartburn or an upset stomach.',
        howToUse: 'Chew or dissolve in water as directed. Take when experiencing heartburn or acid indigestion.',
        details: 'Quickly relieves acid reflux and stomach sensitivity after late-night gourmet food and champagne.',
        iconType: 'stomach',
        badge: 'Digestion',
        tips: [
          'Great before going to sleep if feeling full',
          'Take with room temperature water',
          'Avoid lying completely flat right away'
        ]
      },
      {
        id: 'menta',
        name: 'MINTS & GUM',
        shortDesc: 'Because fresh breath is always a good idea.',
        howToUse: 'Enjoy anytime during the festivities or the morning after.',
        details: 'Instant freshness to keep you feeling crisp and photo-ready all night long.',
        iconType: 'mint',
        badge: 'Freshness',
        tips: [
          'Invigorating mint for a quick energy pick-me-up',
          'Wonderful for the morning after waking up'
        ]
      },
      {
        id: 'curitas',
        name: 'BANDAGES',
        shortDesc: 'Just in case your dancing shoes become a little too ambitious.',
        howToUse: 'Apply directly to clean, dry skin wherever shoes cause friction.',
        details: 'Keep dancing without worry! Protect blisters and hotspots so you can celebrate until dawn.',
        iconType: 'bandage',
        badge: 'Dance Floor Savior',
        tips: [
          'Apply at the first sign of friction',
          'Press adhesive edges firmly for long-lasting hold'
        ]
      },
    ],
    closingMessage: 'Thank you for celebrating our special day with us.',
    signaturePrefix: 'WITH LOVE,',
    signature: 'A & M',
    actions: {
      viewOriginal: 'View Original Card',
      viewInteractive: 'Interactive Guide',
      celebrateToast: 'Toast to A & M! 🥂',
      toastSuccess: 'Cheers to the newlyweds! Wishing them a lifetime of love ❤️',
      shareWhatsApp: 'Share on WhatsApp',
      copyLink: 'Copy link',
      copied: 'Link copied!',
      downloadCard: 'Save Card Image',
      changeLanguage: 'Select another language',
      doseTrackerTitle: 'Resaquit Dose Tracker',
      logDoseBtn: 'Log 1 dose now (+1)',
      dosesTakenToday: 'Tablets taken today',
      nextDoseAvailableIn: 'Next recommended dose in:',
      readyForNextDose: 'You can take another dose now if needed!',
      resetDoses: 'Reset tracker',
      waterReminderTitle: 'Hydration Counter 💧',
      waterReminderDesc: 'The #1 secret to beating a hangover is staying well hydrated.',
      waterDrankBtn: 'I drank a glass of water 🥤',
      glassesOfWater: 'glasses of water logged',
      emergencyHeading: 'Need a safe ride home?',
      needRide: 'Safe ride back to your hotel or home',
      needRideDesc: 'Please do not drive after celebrating. Order a verified ride.',
      callUber: 'Open Uber',
      callCabify: 'Open Cabify',
      morningTipsHeading: 'Golden Morning-After Tips',
      morningTips: [
        { title: 'Electrolyte Hydration', desc: 'Sip on coconut water or electrolyte drinks to restore minerals.' },
        { title: 'Gentle Recovery Breakfast', desc: 'Choose fresh fruit (bananas), toast with honey, or scrambled eggs.' },
        { title: 'Refreshing Shower', desc: 'A warm shower followed by a cool rinse helps jumpstart your circulation.' },
        { title: 'Restful Sleep', desc: 'Rest in a cool, dark room with blackout curtains to fully recharge.' },
      ]
    },
  },
};
