export const whatsappNumber = '212627899976';
export const whatsappBase = `https://wa.me/${whatsappNumber}`;
export const generalMessage = 'سلام، بغيت نعرف العروض المتوفرة عندكم.';
export const plans = [
  { id: 'three-months', title: 'اشتراك 3 أشهر', duration: '3 أشهر', displayDuration: '3 أشهر', price: '180', quality: 'FULL HD', message: 'سلام، بغيت نعرف التفاصيل ديال اشتراك TOD Full HD لمدة 3 أشهر بثمن 180 درهم.' },
  { id: 'six-months', title: 'اشتراك 6 أشهر', duration: '6 أشهر', displayDuration: '6 أشهر', price: '350', quality: 'FULL HD', message: 'سلام، بغيت نعرف التفاصيل ديال اشتراك TOD Full HD لمدة 6 أشهر بثمن 350 درهم.' },
  { id: 'year', title: 'اشتراك سنة كاملة', duration: 'سنة كاملة', displayDuration: '12 شهر', price: '650', quality: 'FULL HD', message: 'سلام، بغيت نعرف التفاصيل ديال اشتراك TOD Full HD لمدة سنة بثمن 650 درهم.' },
] as const;
export const whatsappUrl = (message: string) => `${whatsappBase}?text=${encodeURIComponent(message)}`;
export const policyDestinations = { terms: '#terms', privacy: '#privacy', refunds: '#refunds' } as const;
