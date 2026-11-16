// OTOMATİK KOPYA — bu dosyayı burada düzenleme.
// Kaynak: MyCrossApp/src/legal; değişiklikten sonra orada `npm run legal:sync` çalıştır.

// Veri sorumlusu bilgileri — yasal metinlerin tamamı buradan okur.
// Unbound App bir şirket değil, bireysel (gerçek kişi) geliştirici tarafından yayımlanır;
// Google Play'de kişisel geliştirici hesabı kullanılır, ücret alınmaz ve fatura düzenlenmez.

export const DATA_CONTROLLER = {
  brand: 'Unbound App',
  /** Geliştiricinin adı soyadı (Google Play geliştirici adıyla aynı olmalı). Boşken yalnızca "geliştirici" yazılır. */
  ownerName: 'Ali Davut Eskiocak',
  email: 'info@gounbound.app',
  website: 'https://gounbound.app',
  /** Supabase projesinin bölgesi */
  hostingRegion: 'İrlanda (Avrupa Birliği)',
};

/** Metinlerde veri sorumlusunun tanımı: "Unbound App geliştiricisi Ad Soyad (gerçek kişi)" */
export function controllerDescription() {
  const name = DATA_CONTROLLER.ownerName ? ` ${DATA_CONTROLLER.ownerName}` : '';
  return `${DATA_CONTROLLER.brand} geliştiricisi${name} (gerçek kişi)`;
}
