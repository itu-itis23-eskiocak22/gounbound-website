// OTOMATİK KOPYA — bu dosyayı burada düzenleme.
// Kaynak: MyCrossApp/src/legal; değişiklikten sonra orada `npm run legal:sync` çalıştır.

// 6698 sayılı KVKK m.10 ve Aydınlatma Yükümlülüğünün Yerine Getirilmesinde Uyulacak Usul ve Esaslar Hakkında Tebliğ
// kapsamında aydınlatma metni. Uygulamanın gerçekte işlediği verilerle birebir tutulmalıdır:
// yeni bir veri, servis veya amaç eklendiğinde bu metin ve Gizlilik Politikası birlikte güncellenir.

import type { LegalDocument } from './types';
import { controllerDescription, DATA_CONTROLLER } from './company';

export const KVKK_NOTICE: LegalDocument = {
  title: 'KVKK Aydınlatma Metni',
  version: '2026-11-16',
  updatedAt: '16 Kasım 2026',
  intro:
    `Bu Aydınlatma Metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") 10. maddesi uyarınca, veri sorumlusu sıfatıyla ` +
    `${controllerDescription()} ("Unbound", "biz") tarafından, Unbound App mobil uygulamasını ("Uygulama") kullanan kişilerin ` +
    'kişisel verilerinin işlenmesine ilişkin olarak hazırlanmıştır.',
  sections: [
    {
      heading: '1. Veri Sorumlusu',
      body: [
        `Kişisel verileriniz, veri sorumlusu ${controllerDescription()} tarafından işlenmektedir. Bize ${DATA_CONTROLLER.email} adresinden ulaşabilirsiniz.`,
      ],
    },
    {
      heading: '2. İşlenen Kişisel Veri Kategorileri',
      body: [
        {
          bullets: [
            'Kimlik: ad, soyad, cinsiyet, yaş aralığı.',
            'İletişim: e-posta adresi.',
            'Müşteri işlem ve hesap: kullanıcı kimliği, hesap rolü, şifrenin geri döndürülemez özeti (şifrenin kendisi saklanmaz), Google ile girişte Google hesap kimliği, hesap oluşturma ve güncelleme tarihleri.',
            'Profil ve tercih: profil fotoğrafı, ilgi alanları, yapılacaklar listesi, Instagram kullanıcı adı, profil görünürlüğü, bildirim tercihleri.',
            'Kullanıcı içeriği ve görsel kayıtlar: faaliyet raporları, rapor fotoğrafları, rapor tarihi ve yeri, beğeniler, takip ilişkileri.',
            'Konum: Uygulama açıkken cihazınızın konumu; bildirimler için yaklaşık 10 km hassasiyetine yuvarlanmış son konumunuz (konum geçmişi tutulmaz).',
            'İşlem güvenliği: giriş kayıtları, IP adresi, oturum ve cihaz bildirim anahtarı (push token), cihaz platformu, şikayet ve engelleme kayıtları.',
            'Hukuki işlem: Kullanıcı Sözleşmesinin kabul tarihi ve sürümü, ticari elektronik ileti onayı ve tarihi.',
          ],
        },
        'Uygulama kapsamında özel nitelikli kişisel veri (sağlık, biyometrik, din, etnik köken vb.) talep edilmez ve işlenmez. Faaliyet raporlarınıza ve açıklamalarınıza bu tür veriler eklememenizi rica ederiz.',
      ],
    },
    {
      heading: '3. Kişisel Verilerin İşlenme Amaçları',
      body: [
        {
          bullets: [
            'Üyelik kaydının oluşturulması, e-posta adresinin doğrulanması ve hesabın yönetilmesi.',
            'Kullanıcı Sözleşmesinin kurulması ve ifası; Uygulamanın temel özelliklerinin (harita, rehberler, rapor paylaşımı, beğeni, takip, profil) sunulması.',
            'Size yakın rotaların gösterilmesi, mesafe hesaplanması ve hava durumuna dayalı öneriler sunulması.',
            'İlgi alanlarınıza ve takip ettiğiniz kişilere ilişkin Uygulama içi ve anlık bildirimlerin gönderilmesi.',
            'Bilgi güvenliği süreçlerinin yürütülmesi, yetkisiz erişimin ve kötüye kullanımın önlenmesi.',
            'Şikayet, engelleme ve içerik moderasyonu süreçlerinin yürütülmesi; topluluk güvenliğinin sağlanması.',
            'Talep ve şikayetlerinizin sonuçlandırılması, sizinle iletişim kurulması.',
            'Hukuki yükümlülüklerin yerine getirilmesi, yetkili kurum ve kuruluşlara bilgi verilmesi, olası uyuşmazlıklarda hakların korunması.',
            'Onay vermeniz halinde kampanya ve yeni rotalara ilişkin ticari elektronik ileti gönderilmesi.',
          ],
        },
      ],
    },
    {
      heading: '4. Hukuki Sebepler',
      body: [
        'Kişisel verileriniz KVKK 5. maddesinde yer alan aşağıdaki hukuki sebeplere dayanılarak işlenir:',
        {
          bullets: [
            'Bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması (m.5/2-c): üyelik, kimlik ve iletişim bilgileri, profil, kullanıcı içerikleri, takip ve beğeniler, bildirim tercihleri.',
            'Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi (m.5/2-ç): işlem güvenliği kayıtları, sözleşme onay kayıtları, yetkili mercilerin talepleri.',
            'Bir hakkın tesisi, kullanılması veya korunması (m.5/2-e): şikayet ve moderasyon kayıtları, uyuşmazlık halinde delil niteliğindeki kayıtlar.',
            'Temel hak ve özgürlüklerinize zarar vermemek kaydıyla meşru menfaatimiz (m.5/2-f): bilgi güvenliği, kötüye kullanımın önlenmesi, hizmetin geliştirilmesi.',
            'İlgili kişinin kendisi tarafından alenileştirilmiş olması (m.5/2-d): herkese açık yaptığınız profil bilgileri ve paylaştığınız raporlar.',
            'Açık rıza (m.5/1): cihaz izniyle paylaştığınız konum verisinin işlenmesi ve anlık bildirim gönderilmesi. Ticari elektronik iletiler ise 6563 sayılı Kanun uyarınca verdiğiniz onaya dayanır.',
          ],
        },
        'Açık rızanızı ve ticari ileti onayınızı dilediğiniz zaman cihaz ayarlarından, Uygulama içindeki Bildirim Ayarlarından veya bize başvurarak geri alabilirsiniz. Geri alma, o tarihe kadar yapılan işlemleri etkilemez.',
      ],
    },
    {
      heading: '5. Kişisel Verilerin Toplanma Yöntemi',
      body: [
        'Kişisel verileriniz; kayıt formu, Google ile giriş, profil ve rapor paylaşım ekranları, cihaz konum ve bildirim izinleri ile Uygulamanın kullanımı sırasında oluşan sistem kayıtları aracılığıyla, elektronik ortamda, kısmen veya tamamen otomatik yollarla toplanır.',
      ],
    },
    {
      heading: '6. Kişisel Verilerin Aktarılması',
      body: [
        'Kişisel verileriniz satılmaz ve reklam amacıyla üçüncü kişilerle paylaşılmaz. Veriler, yalnızca yukarıdaki amaçlarla ve gerekli olduğu ölçüde aşağıdaki alıcılara aktarılabilir:',
        {
          bullets: [
            `Barındırma ve altyapı hizmeti sağlayıcısı: veritabanı, kimlik doğrulama, dosya depolama ve sunucu fonksiyonları için Supabase Inc. (veriler ${DATA_CONTROLLER.hostingRegion} bölgesindeki sunucularda saklanır).`,
            'Bildirim hizmeti: anlık bildirimlerin iletilmesi için Google LLC (Firebase Cloud Messaging); bu kapsamda yalnızca cihaz bildirim anahtarı ve bildirim içeriği aktarılır.',
            'Kimlik doğrulama: Google ile giriş yapmayı seçmeniz halinde Google LLC.',
            'Harita hizmeti: haritanın gösterilmesi için Google LLC (Google Maps).',
            'Hava durumu hizmeti: hava tahmini alınması için Open-Meteo; bu kapsamda kimliğinizle ilişkilendirilmeyen, yaklaşık (yuvarlanmış) koordinatlar aktarılır.',
            'Diğer kullanıcılar: herkese açık profilinizde gösterilen bilgiler ve paylaştığınız raporlar.',
            'Yetkili kamu kurum ve kuruluşları ile yargı mercileri: hukuki yükümlülük ve talepler kapsamında.',
          ],
        },
        `Hesap ve içerik verileriniz ${DATA_CONTROLLER.hostingRegion} bölgesindeki sunucularda saklanır; bildirim, giriş ve harita hizmetleri kapsamında Google LLC'nin Amerika Birleşik Devletleri dahil yurt dışındaki sunucularına veri aktarılabilir. Yurt dışına aktarım, KVKK 9. maddesinde öngörülen şartlara uygun olarak (standart sözleşme veya diğer uygun güvenceler ile) gerçekleştirilir.`,
      ],
    },
    {
      heading: '7. Saklama Süresi',
      body: [
        'Kişisel verileriniz, işleme amacının gerektirdiği süre boyunca ve her halükarda hesabınız açık kaldığı sürece saklanır. Hesabınızı sildiğinizde profiliniz, raporlarınız, fotoğraflarınız ve diğer hesap verileriniz derhal silinir; teknik yedeklerden en geç 30 gün içinde kalıcı olarak temizlenir. Mevzuat gereği saklanması zorunlu kayıtlar, ilgili mevzuatta öngörülen süre boyunca saklanır ve süre sonunda silinir veya anonim hale getirilir.',
      ],
    },
    {
      heading: '8. KVKK 11. Madde Kapsamındaki Haklarınız',
      body: [
        'Veri sorumlusuna başvurarak:',
        {
          bullets: [
            'Kişisel verilerinizin işlenip işlenmediğini öğrenme,',
            'İşlenmişse buna ilişkin bilgi talep etme,',
            'İşlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,',
            'Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme,',
            'Eksik veya yanlış işlenmişse düzeltilmesini isteme,',
            'KVKK 7. maddesindeki şartlar çerçevesinde silinmesini veya yok edilmesini isteme,',
            'Düzeltme ve silme işlemlerinin, verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,',
            'İşlenen verilerin münhasıran otomatik sistemlerle analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme,',
            'Kanuna aykırı işlenmesi sebebiyle zarara uğramanız halinde zararın giderilmesini talep etme',
          ],
        },
        'haklarına sahipsiniz.',
      ],
    },
    {
      heading: '9. Başvuru Yöntemi',
      body: [
        `Haklarınıza ilişkin taleplerinizi, Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında Tebliğ uyarınca; Uygulamada kayıtlı e-posta adresinizden ${DATA_CONTROLLER.email} adresine, kimliğinizi tespit etmemize yarayacak bilgilerle ve talebinizi açıkça belirterek iletebilirsiniz. Yazılı başvurular ve kayıtlı elektronik posta (KEP) ile yapılan başvurular da kabul edilir.`,
        'Başvurunuz, talebin niteliğine göre en kısa sürede ve en geç 30 gün içinde ücretsiz olarak sonuçlandırılır. İşlemin ayrıca bir maliyet gerektirmesi halinde Kişisel Verileri Koruma Kurulunca belirlenen tarifedeki ücret alınabilir. Başvurunuzun reddedilmesi, verilen cevabı yetersiz bulmanız veya süresinde cevap verilmemesi halinde Kişisel Verileri Koruma Kuruluna şikayette bulunabilirsiniz.',
        'Profil bilgilerinizi Uygulama içinden güncelleyebilir, hesabınızı Profil menüsü > Kişisel Bilgiler > Hesabımı Sil adımlarıyla kendiniz kalıcı olarak silebilirsiniz.',
      ],
    },
  ],
};
