// OTOMATİK KOPYA — bu dosyayı burada düzenleme.
// Kaynak: MyCrossApp/src/legal; değişiklikten sonra orada `npm run legal:sync` çalıştır.

// Yasal metinlerin ortak yapısı: uygulamada tek bir bileşenle gösterilir.

export type LegalBlock = string | { bullets: string[] };
export type LegalSection = { heading: string; body: LegalBlock[] };

export type LegalDocument = {
  title: string;
  version: string;
  updatedAt: string;
  intro: string;
  sections: LegalSection[];
};
