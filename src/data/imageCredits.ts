// Uygulamadaki src/data/imageCredits.ts ile aynı liste (atıf gerektiren CC BY / CC BY-SA görseller).
// Kartlarda altyazı gösterilmez; lisans şartı /gorsel-kaynaklari/ sayfasıyla karşılanır.

export interface ImageCredit {
  subject: string;
  title: string;
  author: string;
  license: string;
  licenseUrl: string;
  sourceUrl: string;
}

export const IMAGE_CREDITS: ImageCredit[] = [
  {
    subject: 'Yelken',
    title: 'TurkishSailor.jpg',
    author: 'Bahar',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:TurkishSailor.jpg',
  },
  {
    subject: 'Dağcılık',
    title: 'Kaçkar mountains.JPG',
    author: 'Ouitos',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Ka%C3%A7kar_mountains.JPG',
  },
  {
    subject: 'Yamaç Paraşütü',
    title: 'Paragliding over the Blue Lagoon in Ölüdeniz, Turkey',
    author: 'dronepicr',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Paragliding_over_the_Blue_Lagoon_in_%C3%96l%C3%BCdeniz,_Turkey_(49070937152).jpg',
  },
  {
    subject: 'Kampçılık',
    title: 'Camping in Turkey 2022.jpg',
    author: 'Rotana Nawwaf Al Hasanat',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Camping_in_Turkey_2022.jpg',
  },
  {
    subject: 'Atlı Binicilik',
    title: 'Horseback Riding Turkey.jpg',
    author: 'Horseback riding Turkey',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Horseback_Riding_Turkey.jpg',
  },
];

export const IMAGE_CREDITS_NOTE =
  'Bazı spor ve rehber görselleri Wikimedia Commons üzerinden açık lisansla kullanılmaktadır. ' +
  'Diğer görseller Unsplash lisanslı ya da kamu malıdır (CC0). Görseller kırpılarak gösterilir.';
