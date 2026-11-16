// OTOMATİK KOPYA — bu dosyayı burada düzenleme.
// Kaynak: MyCrossApp/src/legal; değişiklikten sonra orada `npm run legal:sync` çalıştır.

// Gizlilik Politikası: uygulamanın hangi veriyi neden topladığını, kimlerle paylaştığını ve
// kullanıcının kontrollerini sade bir dille anlatır (Google Play "Veri güvenliği" beyanıyla tutarlı olmalı).
// KVKK'ya özgü hukuki sebep ve başvuru ayrıntıları KVKK Aydınlatma Metnindedir.

import type { LegalDocument } from './types';
import { controllerDescription, DATA_CONTROLLER } from './company';

export const PRIVACY_POLICY: LegalDocument = {
  title: 'Gizlilik Politikası',
  version: '2026-11-16',
  updatedAt: '16 Kasım 2026',
  intro:
    `Unbound App, bireysel bir geliştirici tarafından ücretsiz olarak yayımlanan bir uygulamadır ve gizliliğinize önem veriyoruz. Bu Gizlilik Politikası, Unbound App mobil uygulamasını ("Uygulama") ` +
    'kullanırken hangi bilgileri topladığımızı, bu bilgileri nasıl kullandığımızı, kimlerle paylaştığımızı ve bilgileriniz ' +
    'üzerinde hangi kontrollere sahip olduğunuzu açıklar. Bu politika, Kullanıcı Sözleşmesi ve KVKK Aydınlatma Metni ile birlikte uygulanır.',
  sections: [
    {
      heading: '1. Kısaca',
      body: [
        {
          bullets: [
            'Verilerinizi satmıyoruz ve reklam amacıyla kimseyle paylaşmıyoruz.',
            'Uygulamada reklam, reklam takibi, üçüncü taraf analiz aracı veya ücretli içerik bulunmuyor.',
            'Konumunuzu yalnızca Uygulama açıkken ve izin verirseniz kullanıyoruz; arka planda konum toplamıyoruz.',
            'E-posta adresiniz diğer kullanıcılara hiçbir zaman gösterilmez.',
            'Hesabınızı ve tüm verilerinizi istediğiniz an Uygulama içinden kalıcı olarak silebilirsiniz.',
          ],
        },
      ],
    },
    {
      heading: '2. Topladığımız Bilgiler',
      body: [
        'Bize doğrudan verdiğiniz bilgiler:',
        {
          bullets: [
            'Hesap bilgileri: ad, soyad, e-posta adresi, şifre (yalnızca geri döndürülemez özeti saklanır), yaş aralığı ve cinsiyet.',
            'Google ile giriş: Google\'ın bizimle paylaştığı ad, e-posta adresi ve hesap kimliği.',
            'Profil: profil fotoğrafı, ilgi alanları, yapılacaklar listesi, isteğe bağlı Instagram kullanıcı adı ve profil görünürlüğü tercihiniz.',
            'Paylaşımlar: faaliyet raporları, fotoğraflar, tarih ve yer bilgisi, açıklamalar.',
            'Etkileşimler: beğeniler, takip ettiğiniz ve sizi takip eden kişiler, şikayetler ve engellediğiniz kullanıcılar.',
            'Tercihler: bildirim türü tercihleri, ticari ileti onayı, Kullanıcı Sözleşmesi kabul kaydı.',
          ],
        },
        'Uygulamayı kullanırken otomatik oluşan bilgiler:',
        {
          bullets: [
            'Konum (izin verirseniz): haritada size yakın yerleri göstermek için cihazınızın konumu Uygulama açıkken kullanılır. Hava durumu bildirimleri için yalnızca yaklaşık son konumunuz (yaklaşık 10 km hassasiyetine yuvarlanmış), en fazla 6 saatte bir güncellenerek saklanır; konum geçmişi tutulmaz.',
            'Bildirim anahtarı: anlık bildirim gönderebilmek için cihazınıza ait bildirim anahtarı (push token) ve cihaz platformu.',
            'Güvenlik kayıtları: giriş zamanı, IP adresi ve oturum bilgileri.',
          ],
        },
        'Kişi listeniz, mikrofonunuz, kameranız, arka plan konumunuz veya diğer uygulamalardaki verileriniz toplanmaz. Galerinize yalnızca fotoğraf seçtiğiniz anda, seçtiğiniz fotoğraflar için erişilir.',
      ],
    },
    {
      heading: '3. Bilgileri Nasıl Kullanıyoruz',
      body: [
        {
          bullets: [
            'Hesabınızı oluşturmak, e-posta adresinizi doğrulamak ve oturumunuzu güvenle açık tutmak.',
            'Harita, rehber, rapor paylaşımı, beğeni, takip ve profil özelliklerini sunmak.',
            'Size yakın rotaları ve hava koşullarına uygun önerileri göstermek.',
            'Takip ettiğiniz kişilerin paylaşımları, ilgi alanlarınız ve hava durumu fırsatlarıyla ilgili bildirim göndermek (sessiz saatlerde 22:00–09:00 bildirim gönderilmez).',
            'Şikayetleri incelemek, kötüye kullanımı ve sahte hesapları önlemek.',
            'Destek taleplerinize yanıt vermek ve yasal yükümlülükleri yerine getirmek.',
            'Onay verdiyseniz kampanya ve yeni rotalarla ilgili e-posta göndermek.',
          ],
        },
      ],
    },
    {
      heading: '4. Diğer Kullanıcıların Görebildikleri',
      body: [
        {
          bullets: [
            'Profiliniz herkese açıksa: adınız, profil fotoğrafınız, ilgi alanlarınız, paylaştığınız raporlar, takipçi ve takip sayılarınız ve eklediyseniz Instagram kullanıcı adınız.',
            'Profiliniz gizliyse: profiliniz keşfet ve aramada görünmez; paylaştığınız raporlarda yalnızca adınız ve profil fotoğrafınız görünür.',
            'E-posta adresiniz, yaş aralığınız, cinsiyetiniz ve konumunuz hiçbir durumda diğer kullanıcılara gösterilmez.',
            'Engellediğiniz kullanıcılar profilinizi ve raporlarınızı göremez.',
          ],
        },
      ],
    },
    {
      heading: '5. Bilgileri Kimlerle Paylaşıyoruz',
      body: [
        'Bilgileriniz yalnızca Uygulamanın çalışması için zorunlu hizmet sağlayıcılarla ve yalnızca gerekli olduğu kadarıyla paylaşılır:',
        {
          bullets: [
            `Supabase: veritabanı, kimlik doğrulama, fotoğraf depolama ve sunucu fonksiyonları (sunucular ${DATA_CONTROLLER.hostingRegion}).`,
            'Google Firebase Cloud Messaging: anlık bildirimlerin cihazınıza iletilmesi.',
            'Google Sign-In: Google ile giriş yapmayı seçerseniz.',
            'Google Maps: haritanın gösterilmesi.',
            'Open-Meteo: hava tahmini; kimliğinizle ilişkilendirilmeyen yaklaşık koordinatlar gönderilir.',
          ],
        },
        `Hesap ve içerik verileriniz ${DATA_CONTROLLER.hostingRegion} bölgesindeki sunucularda saklanır. Google hizmetleri kapsamında veriler ABD dahil yurt dışındaki sunuculara aktarılabilir; aktarımlar KVKK'nın yurt dışına aktarım hükümlerine uygun güvencelerle yapılır. Yasal bir zorunluluk olması halinde (ör. mahkeme kararı) bilgiler yetkili mercilerle paylaşılabilir.`,
      ],
    },
    {
      heading: '6. Saklama ve Silme',
      body: [
        {
          bullets: [
            'Bilgileriniz hesabınız açık kaldığı sürece saklanır.',
            'Hesabınızı Profil menüsü > Kişisel Bilgiler > Hesabımı Sil adımlarıyla sildiğinizde profiliniz, raporlarınız, fotoğraflarınız, beğenileriniz, takip ilişkileriniz, bildirimleriniz ve konum kaydınız derhal kalıcı olarak silinir.',
            'Silinen veriler teknik yedeklerden en geç 30 gün içinde temizlenir.',
            'Mevzuat gereği saklanması zorunlu kayıtlar yalnızca yasal süre boyunca tutulur.',
            `Uygulamaya erişemiyorsanız, kayıtlı e-posta adresinizden ${DATA_CONTROLLER.email} adresine yazarak hesabınızın silinmesini isteyebilirsiniz.`,
          ],
        },
      ],
    },
    {
      heading: '7. Güvenlik',
      body: [
        {
          bullets: [
            'Uygulama ile sunucular arasındaki tüm iletişim şifreli (HTTPS/TLS) bağlantı üzerinden yapılır.',
            'Şifreler geri döndürülemez biçimde özetlenerek saklanır; ekibimiz dahil kimse şifrenizi göremez.',
            'Veritabanında satır düzeyinde erişim kuralları uygulanır: her kullanıcı yalnızca kendi özel verisine erişebilir.',
            'Yönetici yetkileri ve hesap rolleri yalnızca sunucu tarafında belirlenir.',
            'Oturum bilgileriniz yalnızca cihazınızda saklanır ve Android yedeklerine dahil edilmez.',
          ],
        },
        'Hiçbir sistem tamamen güvenli değildir; bir veri ihlali fark etmemiz halinde mevzuatın öngördüğü şekilde Kişisel Verileri Koruma Kuruluna ve etkilenen kullanıcılara bildirimde bulunuruz.',
      ],
    },
    {
      heading: '8. Kontrolünüzdeki Ayarlar',
      body: [
        {
          bullets: [
            'Profil görünürlüğü: Profil menüsü > Herkese Açık Profil.',
            'Bildirim türleri: Profil menüsü > Bildirim Ayarları; tüm bildirimler için cihaz ayarları.',
            'Konum izni: cihaz ayarları > Unbound App > Konum.',
            'Engelleme ve şikayet: profil ve rapor sayfalarındaki "⋯" menüsü.',
            'Kişisel bilgiler ve hesap silme: Profil menüsü > Kişisel Bilgiler.',
            `Ticari ileti onayının geri alınması: ${DATA_CONTROLLER.email} adresine yazarak veya e-postalardaki bağlantıyla.`,
          ],
        },
      ],
    },
    {
      heading: '9. Çocukların Gizliliği',
      body: [
        `Uygulama 18 yaşından küçükler için tasarlanmamıştır ve bilerek 18 yaş altındaki kişilerden kişisel veri toplanmaz. 18 yaşından küçük bir kişinin hesap açtığını fark edersek hesabı ve ilgili verileri sileriz. Böyle bir durumu ${DATA_CONTROLLER.email} adresine bildirebilirsiniz.`,
      ],
    },
    {
      heading: '10. Haklarınız',
      body: [
        'KVKK 11. maddesi kapsamındaki haklarınız (bilgi talep etme, düzeltme, silme, itiraz, zararın giderilmesi vb.) ve başvuru yöntemi KVKK Aydınlatma Metninde ayrıntılı olarak açıklanmıştır.',
      ],
    },
    {
      heading: '11. Değişiklikler',
      body: [
        'Bu politikayı Uygulamadaki değişikliklere veya mevzuata göre güncelleyebiliriz. Önemli değişiklikleri Uygulama içinde veya e-posta ile duyururuz. Güncel metin her zaman Uygulama içinde ve web sitemizde yer alır; üst kısımdaki tarih son güncellemeyi gösterir.',
      ],
    },
    {
      heading: '12. İletişim',
      body: [
        `Veri sorumlusu: ${controllerDescription()}`,
        `E-posta: ${DATA_CONTROLLER.email}`,
        `Web: ${DATA_CONTROLLER.website}`,
      ],
    },
  ],
};
