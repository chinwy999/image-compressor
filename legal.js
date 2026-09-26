(function () {
  const languageNames = {
    ar: 'العربية',
    en: 'English',
    fr: 'Français',
    es: 'Español'
  };

  const dictionary = {
    ar: {
      brand: 'ضاغط الصور',
      home: 'الرئيسية',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الاستخدام',
      about: 'من نحن',
      footer: 'ضاغط الصور — أداة مجانية لمعالجة الصور محليًا',
      updated: 'آخر تحديث: 26 سبتمبر 2026',

      privacyTitle: 'سياسة الخصوصية',
      privacyIntro: 'توضح هذه الصفحة كيفية تعامل ضاغط الصور مع بياناتك عند استخدام الأداة.',
      localTitle: 'معالجة الصور محليًا',
      localText: 'تتم معالجة الصور التي تختارها باستخدام متصفحك وعلى جهازك. لا يرفع ضاغط الصور ملفات الصور إلى خادم تابع للخدمة لغرض الضغط أو التحويل أو تغيير الأبعاد.',
      dataTitle: 'المعلومات التي نجمعها',
      dataText: 'لا ننشئ حسابات مستخدمين، ولا نطلب اسمك أو بريدك الإلكتروني لاستخدام أداة ضغط الصور. قد يعالج مزود الاستضافة أو الشبكة بيانات تقنية اعتيادية، مثل عنوان IP وسجلات الطلبات، لأغراض التشغيل والحماية وفق سياساته الخاصة.',
      storageTitle: 'التخزين المحلي',
      storageText: 'قد يستخدم الموقع التخزين المحلي في متصفحك لحفظ تفضيلات الواجهة، مثل اللغة أو الوضع الفاتح والداكن. يمكنك حذف هذه البيانات من إعدادات المتصفح في أي وقت.',
      externalTitle: 'الروابط والخدمات الخارجية',
      externalText: 'قد يتضمن الموقع روابط إلى خدمات خارجية مثل GitHub أو Vercel. لا تنطبق هذه السياسة على المواقع الخارجية، ونوصي بمراجعة سياسات الخصوصية الخاصة بها.',
      changesTitle: 'التغييرات على هذه السياسة',
      changesText: 'قد نحدّث هذه السياسة عند تغيير وظائف الموقع أو أسلوب معالجة البيانات. سيظهر تاريخ آخر تحديث في أعلى الصفحة.',
      contactTitle: 'تواصل معنا',
      contactText: 'للاستفسارات المتعلقة بالخصوصية، تواصل مع مالك الموقع عبر صفحة المشروع أو القنوات المرتبطة به.',

      termsTitle: 'شروط الاستخدام',
      termsIntro: 'تنظم هذه الشروط استخدامك لموقع ضاغط الصور وأدواته.',
      acceptanceTitle: 'قبول الشروط',
      acceptanceText: 'باستخدامك ضاغط الصور، فإنك توافق على هذه الشروط. إذا لم توافق عليها، يرجى عدم استخدام الموقع.',
      serviceTitle: 'طبيعة الخدمة',
      serviceText: 'يوفر الموقع أداة مجانية لمعالجة الصور داخل المتصفح، بما يشمل الضغط والتحويل وتغيير الأبعاد. تعتمد النتائج على متصفحك ونوع الصورة وإعدادات الجودة وقدرات جهازك.',
      responsibilityTitle: 'مسؤولية المستخدم',
      responsibilityText: 'أنت مسؤول عن الصور التي تختار معالجتها وعن امتلاكك الحقوق أو الصلاحيات اللازمة لاستخدامها. لا تستخدم الأداة لمعالجة أو مشاركة محتوى يخالف القوانين أو حقوق الآخرين.',
      backupTitle: 'النسخ الاحتياطي والجودة',
      backupText: 'قد يؤدي ضغط الصور أو تحويلها إلى تغيير الجودة أو البيانات الوصفية أو الشفافية حسب الصيغة المختارة. احتفظ دائمًا بنسخة من ملفك الأصلي قبل تنزيل النسخة المعالجة أو استخدامها.',
      availabilityTitle: 'توفر الخدمة',
      availabilityText: 'نوفر الموقع كما هو ودون ضمان لاستمرارية التوفر أو خلوه من الأخطاء أو ملاءمته لغرض معين. يمكن تعديل الأداة أو إيقافها أو تحديثها في أي وقت.',
      termsChangesTitle: 'تعديل الشروط',
      termsChangesText: 'قد نحدّث هذه الشروط عند الحاجة. استمرارك في استخدام الموقع بعد نشر التحديث يعني موافقتك على النسخة الجديدة.',

      aboutTitle: 'عن ضاغط الصور',
      aboutIntro: 'ضاغط الصور هو أداة ويب مجانية تساعدك على تقليل حجم الصور وتحويلها بين صيغ JPG وPNG وWebP وتغيير أبعادها مباشرة من المتصفح.',
      whyTitle: 'لماذا أنشأنا الأداة؟',
      whyText: 'تحتاج الصور الكبيرة إلى وقت أطول للمشاركة والرفع. صممنا الأداة لتسهيل تقليل حجم الملفات بسرعة، مع إبقاء المعالجة محلية على جهاز المستخدم كلما كان ذلك ممكنًا.',
      howTitle: 'كيف تعمل؟',
      howText: 'اختر صورة، وحدد صيغة الإخراج والجودة والأبعاد، ثم أنشئ نسخة جديدة للتنزيل. لا تحتاج إلى إنشاء حساب لاستخدام الوظائف الأساسية.',
      formatsTitle: 'الصيغ المدعومة',
      jpg: 'JPG للصور الفوتوغرافية والملفات الصغيرة غالبًا.',
      png: 'PNG للصور التي تحتاج إلى شفافية أو تفاصيل دقيقة.',
      webp: 'WebP لتقليل حجم الملف في كثير من حالات الاستخدام الحديثة.'
    },

    en: {
      brand: 'Image Compressor',
      home: 'Home',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
      about: 'About',
      footer: 'Image Compressor — Free local image processing tool',
      updated: 'Last updated: September 26, 2026',

      privacyTitle: 'Privacy Policy',
      privacyIntro: 'This page explains how Image Compressor handles data when you use the tool.',
      localTitle: 'Local image processing',
      localText: 'Images you choose are processed in your browser and on your device. Image Compressor does not upload image files to a service server for compression, conversion, or resizing.',
      dataTitle: 'Information we collect',
      dataText: 'We do not create user accounts and do not ask for your name or email address to use the image compressor. Our hosting or network provider may process routine technical data, such as IP addresses and request logs, for operation and security under its own policies.',
      storageTitle: 'Local storage',
      storageText: 'The site may use browser local storage to remember interface preferences, such as your language or light and dark theme. You can remove this data from your browser settings at any time.',
      externalTitle: 'External links and services',
      externalText: 'The site may include links to external services such as GitHub or Vercel. This policy does not apply to external sites, and we recommend reviewing their privacy policies.',
      changesTitle: 'Changes to this policy',
      changesText: 'We may update this policy when site functions or data practices change. The latest update date appears at the top of this page.',
      contactTitle: 'Contact',
      contactText: 'For privacy questions, contact the site owner through the project page or its linked channels.',

      termsTitle: 'Terms of Use',
      termsIntro: 'These terms govern your use of the Image Compressor website and its tools.',
      acceptanceTitle: 'Acceptance of terms',
      acceptanceText: 'By using Image Compressor, you agree to these terms. If you do not agree, please do not use the site.',
      serviceTitle: 'Service nature',
      serviceText: 'The site provides a free in-browser tool for image compression, conversion, and resizing. Results depend on your browser, image type, quality settings, and device capabilities.',
      responsibilityTitle: 'User responsibility',
      responsibilityText: 'You are responsible for the images you choose to process and for having the rights or permissions required to use them. Do not use the tool to process or share content that violates laws or other people’s rights.',
      backupTitle: 'Backups and quality',
      backupText: 'Compressing or converting images can change quality, metadata, or transparency depending on the selected format. Always keep a copy of your original file before using a processed version.',
      availabilityTitle: 'Service availability',
      availabilityText: 'The site is provided as is, without guarantees of continuous availability, error-free operation, or fitness for a particular purpose. The tool may be changed, updated, or discontinued at any time.',
      termsChangesTitle: 'Changes to terms',
      termsChangesText: 'We may update these terms when needed. Continued use of the site after an update means you accept the new version.',

      aboutTitle: 'About Image Compressor',
      aboutIntro: 'Image Compressor is a free web tool that helps you reduce image file size, convert JPG, PNG, and WebP images, and resize them directly in your browser.',
      whyTitle: 'Why we built it',
      whyText: 'Large images take longer to share and upload. We built this tool to make file-size reduction fast and simple while keeping processing local to the user’s device whenever possible.',
      howTitle: 'How it works',
      howText: 'Choose an image, set the output format, quality, and dimensions, then create a new version for download. You do not need an account for the core features.',
      formatsTitle: 'Supported formats',
      jpg: 'JPG for photos and often smaller files.',
      png: 'PNG for images that need transparency or fine detail.',
      webp: 'WebP for smaller files in many modern use cases.'
    },

    fr: {
      brand: 'Compresseur d’images',
      home: 'Accueil',
      privacy: 'Politique de confidentialité',
      terms: 'Conditions d’utilisation',
      about: 'À propos',
      footer: 'Compresseur d’images — Outil gratuit de traitement local',
      updated: 'Dernière mise à jour : 26 septembre 2026',

      privacyTitle: 'Politique de confidentialité',
      privacyIntro: 'Cette page explique comment le Compresseur d’images traite vos données lorsque vous utilisez l’outil.',
      localTitle: 'Traitement local des images',
      localText: 'Les images que vous choisissez sont traitées dans votre navigateur et sur votre appareil. Le Compresseur d’images ne téléverse pas vos fichiers vers un serveur pour la compression, la conversion ou le redimensionnement.',
      dataTitle: 'Informations collectées',
      dataText: 'Nous ne créons pas de comptes utilisateurs et ne demandons pas votre nom ou votre adresse e-mail pour utiliser l’outil. Notre hébergeur ou fournisseur réseau peut traiter des données techniques habituelles, telles que les adresses IP et les journaux de requêtes, pour le fonctionnement et la sécurité selon ses propres politiques.',
      storageTitle: 'Stockage local',
      storageText: 'Le site peut utiliser le stockage local du navigateur pour mémoriser vos préférences, comme la langue ou le thème clair et sombre. Vous pouvez supprimer ces données dans les paramètres de votre navigateur à tout moment.',
      externalTitle: 'Liens et services externes',
      externalText: 'Le site peut contenir des liens vers des services externes, tels que GitHub ou Vercel. Cette politique ne s’applique pas aux sites externes ; nous vous recommandons de consulter leurs politiques de confidentialité.',
      changesTitle: 'Modifications de cette politique',
      changesText: 'Nous pouvons mettre à jour cette politique si les fonctions du site ou les pratiques de traitement des données changent. La date de mise à jour apparaît en haut de cette page.',
      contactTitle: 'Contact',
      contactText: 'Pour toute question relative à la confidentialité, contactez le propriétaire du site via la page du projet ou ses canaux liés.',

      termsTitle: 'Conditions d’utilisation',
      termsIntro: 'Ces conditions régissent votre utilisation du site Compresseur d’images et de ses outils.',
      acceptanceTitle: 'Acceptation des conditions',
      acceptanceText: 'En utilisant le Compresseur d’images, vous acceptez ces conditions. Si vous ne les acceptez pas, veuillez ne pas utiliser le site.',
      serviceTitle: 'Nature du service',
      serviceText: 'Le site fournit un outil gratuit dans le navigateur pour compresser, convertir et redimensionner les images. Les résultats dépendent de votre navigateur, du type d’image, des réglages de qualité et des capacités de votre appareil.',
      responsibilityTitle: 'Responsabilité de l’utilisateur',
      responsibilityText: 'Vous êtes responsable des images que vous choisissez de traiter et devez disposer des droits ou autorisations nécessaires. N’utilisez pas l’outil pour traiter ou partager un contenu qui enfreint la loi ou les droits d’autrui.',
      backupTitle: 'Sauvegardes et qualité',
      backupText: 'La compression ou la conversion peut modifier la qualité, les métadonnées ou la transparence selon le format choisi. Conservez toujours une copie du fichier original avant d’utiliser une version traitée.',
      availabilityTitle: 'Disponibilité du service',
      availabilityText: 'Le site est fourni tel quel, sans garantie de disponibilité continue, d’absence d’erreurs ou d’adaptation à un objectif particulier. L’outil peut être modifié, mis à jour ou arrêté à tout moment.',
      termsChangesTitle: 'Modification des conditions',
      termsChangesText: 'Nous pouvons mettre à jour ces conditions si nécessaire. La poursuite de l’utilisation du site après une mise à jour vaut acceptation de la nouvelle version.',

      aboutTitle: 'À propos du Compresseur d’images',
      aboutIntro: 'Le Compresseur d’images est un outil web gratuit qui vous aide à réduire la taille des fichiers image, convertir des images JPG, PNG et WebP, et modifier leurs dimensions directement dans votre navigateur.',
      whyTitle: 'Pourquoi avons-nous créé cet outil ?',
      whyText: 'Les grandes images prennent plus de temps à partager et à téléverser. Nous avons créé cet outil pour réduire facilement et rapidement la taille des fichiers tout en gardant le traitement local sur l’appareil de l’utilisateur lorsque cela est possible.',
      howTitle: 'Comment cela fonctionne ?',
      howText: 'Choisissez une image, définissez le format de sortie, la qualité et les dimensions, puis créez une nouvelle version à télécharger. Aucun compte n’est nécessaire pour les fonctions principales.',
      formatsTitle: 'Formats pris en charge',
      jpg: 'JPG pour les photos et des fichiers souvent plus petits.',
      png: 'PNG pour les images nécessitant de la transparence ou des détails fins.',
      webp: 'WebP pour des fichiers plus petits dans de nombreux usages modernes.'
    },

    es: {
      brand: 'Compresor de imágenes',
      home: 'Inicio',
      privacy: 'Política de privacidad',
      terms: 'Términos de uso',
      about: 'Acerca de',
      footer: 'Compresor de imágenes — Herramienta gratuita de procesamiento local',
      updated: 'Última actualización: 26 de septiembre de 2026',

      privacyTitle: 'Política de privacidad',
      privacyIntro: 'Esta página explica cómo el Compresor de imágenes maneja tus datos cuando utilizas la herramienta.',
      localTitle: 'Procesamiento local de imágenes',
      localText: 'Las imágenes que eliges se procesan en tu navegador y en tu dispositivo. El Compresor de imágenes no sube archivos a un servidor para comprimirlos, convertirlos o cambiar su tamaño.',
      dataTitle: 'Información que recopilamos',
      dataText: 'No creamos cuentas de usuario ni pedimos tu nombre o correo electrónico para utilizar la herramienta. Nuestro proveedor de alojamiento o red puede procesar datos técnicos habituales, como direcciones IP y registros de solicitudes, para fines operativos y de seguridad conforme a sus propias políticas.',
      storageTitle: 'Almacenamiento local',
      storageText: 'El sitio puede utilizar el almacenamiento local del navegador para recordar preferencias de interfaz, como el idioma o el tema claro y oscuro. Puedes eliminar estos datos desde la configuración del navegador en cualquier momento.',
      externalTitle: 'Enlaces y servicios externos',
      externalText: 'El sitio puede incluir enlaces a servicios externos como GitHub o Vercel. Esta política no se aplica a sitios externos; recomendamos revisar sus políticas de privacidad.',
      changesTitle: 'Cambios en esta política',
      changesText: 'Podemos actualizar esta política cuando cambien las funciones del sitio o las prácticas de datos. La fecha de actualización aparece en la parte superior de esta página.',
      contactTitle: 'Contacto',
      contactText: 'Para consultas de privacidad, contacta al propietario del sitio mediante la página del proyecto o sus canales vinculados.',

      termsTitle: 'Términos de uso',
      termsIntro: 'Estos términos regulan el uso del sitio Compresor de imágenes y sus herramientas.',
      acceptanceTitle: 'Aceptación de los términos',
      acceptanceText: 'Al usar el Compresor de imágenes, aceptas estos términos. Si no estás de acuerdo, no uses el sitio.',
      serviceTitle: 'Naturaleza del servicio',
      serviceText: 'El sitio ofrece una herramienta gratuita en el navegador para comprimir, convertir y cambiar el tamaño de imágenes. Los resultados dependen del navegador, el tipo de imagen, la configuración de calidad y las capacidades del dispositivo.',
      responsibilityTitle: 'Responsabilidad del usuario',
      responsibilityText: 'Eres responsable de las imágenes que eliges procesar y de tener los derechos o permisos necesarios para usarlas. No utilices la herramienta para procesar o compartir contenido que infrinja leyes o derechos de otras personas.',
      backupTitle: 'Copias de seguridad y calidad',
      backupText: 'Comprimir o convertir imágenes puede cambiar la calidad, los metadatos o la transparencia según el formato elegido. Conserva siempre una copia del archivo original antes de utilizar una versión procesada.',
      availabilityTitle: 'Disponibilidad del servicio',
      availabilityText: 'El sitio se proporciona tal cual, sin garantías de disponibilidad continua, funcionamiento sin errores o idoneidad para un fin concreto. La herramienta puede modificarse, actualizarse o interrumpirse en cualquier momento.',
      termsChangesTitle: 'Cambios en los términos',
      termsChangesText: 'Podemos actualizar estos términos cuando sea necesario. El uso continuado del sitio después de una actualización implica la aceptación de la nueva versión.',

      aboutTitle: 'Acerca del Compresor de imágenes',
      aboutIntro: 'El Compresor de imágenes es una herramienta web gratuita que te ayuda a reducir el tamaño de archivos, convertir imágenes JPG, PNG y WebP, y cambiar sus dimensiones directamente en el navegador.',
      whyTitle: 'Por qué creamos la herramienta',
      whyText: 'Las imágenes grandes tardan más en compartirse y subirse. Creamos esta herramienta para reducir el tamaño de los archivos de forma rápida y sencilla, manteniendo el procesamiento local en el dispositivo del usuario siempre que sea posible.',
      howTitle: 'Cómo funciona',
      howText: 'Elige una imagen, configura el formato de salida, la calidad y las dimensiones, y crea una nueva versión para descargar. No necesitas una cuenta para las funciones principales.',
      formatsTitle: 'Formatos compatibles',
      jpg: 'JPG para fotografías y archivos normalmente más pequeños.',
      png: 'PNG para imágenes que necesitan transparencia o detalle fino.',
      webp: 'WebP para archivos más pequeños en muchos usos modernos.'
    }
  };

  function language() {
    const saved = localStorage.getItem('imageCompressorLanguage');
    if (saved && dictionary[saved]) return saved;
    const browser = (navigator.language || 'en').split('-')[0];
    return dictionary[browser] ? browser : 'en';
  }

  function render() {
    const lang = language();
    const t = dictionary[lang];
    const page = document.body.dataset.page;
    const rtl = lang === 'ar';

    document.documentElement.lang = lang;
    document.documentElement.dir = rtl ? 'rtl' : 'ltr';
    document.title = page === 'privacy'
      ? t.privacyTitle + ' | ' + t.brand
      : page === 'terms'
        ? t.termsTitle + ' | ' + t.brand
        : t.aboutTitle + ' | ' + t.brand;

    document.querySelectorAll('[data-i18n]').forEach(function (node) {
      const key = node.dataset.i18n;
      if (t[key]) node.textContent = t[key];
    });
  }

  document.addEventListener('DOMContentLoaded', render);
})();
