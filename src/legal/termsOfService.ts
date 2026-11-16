// OTOMATİK KOPYA — bu dosyayı burada düzenleme.
// Kaynak: MyCrossApp/src/legal; değişiklikten sonra orada `npm run legal:sync` çalıştır.

// Unbound App Kullanıcı Sözleşmesi.
// Metin değiştiğinde TERMS_VERSION güncellenir; kayıt sırasında kabul edilen sürüm profilde saklanır.

import type { LegalDocument, LegalSection } from './types';
import { controllerDescription, DATA_CONTROLLER } from './company';

export const TERMS_VERSION = '2026-11-16';
export const TERMS_TITLE = 'Kullanıcı Sözleşmesi';
export const TERMS_UPDATED_AT = '16 Kasım 2026';

export const TERMS_INTRO =
  'Bu Kullanıcı Sözleşmesi ("Sözleşme"), Unbound App mobil uygulamasını ve gounbound.app alan adı üzerinden sunulan ' +
  'hizmetleri ("Uygulama" veya "Hizmet") kullanmanıza ilişkin koşulları düzenler. Uygulamaya üye olarak, misafir olarak ' +
  'giriş yaparak veya Uygulamayı herhangi bir şekilde kullanarak bu Sözleşmeyi okuduğunuzu, anladığınızı ve tüm ' +
  'hükümleriyle bağlı olmayı kabul ettiğinizi beyan edersiniz. Sözleşmeyi kabul etmiyorsanız Uygulamayı kullanmayınız.';

export const TERMS_SECTIONS: LegalSection[] = [
  {
    heading: '1. Taraflar ve Tanımlar',
    body: [
      `Bu Sözleşme, Uygulamayı bireysel olarak geliştiren ve yayımlayan ${controllerDescription()} ("Unbound", "biz") ile Uygulamayı kullanan gerçek kişi ("Kullanıcı", "siz") arasında kurulur. Unbound bir şirket veya ticari işletme değildir.`,
      {
        bullets: [
          'Rehber İçeriği: Uygulamada yer alan rota, saha, tesis, işletme, kamp alanı, iletişim, fiyat, zorluk, ulaşım, hazırlık ve benzeri tüm bilgiler.',
          'Kullanıcı İçeriği: Kullanıcıların paylaştığı faaliyet raporları, fotoğraflar, açıklamalar, profil bilgileri ve diğer tüm içerikler.',
          'Üçüncü Taraf İşletme: Uygulamada adı veya bilgisi geçen; spor, konaklama, eğitim, rehberlik, ekipman veya benzeri hizmet sunan kişi ve kuruluşlar.',
          'Aktivite: Dağcılık, doğa yürüyüşü, kampçılık, yamaç paraşütü, dalış, yelken, kano, binicilik ve benzeri her türlü doğa ve macera sporu.',
        ],
      },
    ],
  },
  {
    heading: '2. Hizmetin Niteliği',
    body: [
      'Unbound yalnızca bilgilendirme ve topluluk amaçlı bir dijital platformdur. Kullanıcıların Aktivitelerle ilgili kamuya açık bilgilere ulaşmasını, kendi deneyimlerini paylaşmasını ve diğer kullanıcılarla etkileşim kurmasını sağlar.',
      {
        bullets: [
          'Unbound; rehberlik, eğitmenlik, tur organizasyonu, ulaşım, konaklama, ekipman kiralama veya satış hizmeti vermez.',
          'Uygulama üzerinden rezervasyon, ödeme veya satış işlemi yapılmaz; Unbound hiçbir işletme adına sözleşme kurmaz ve ödeme almaz.',
          'Uygulamadaki hiçbir bilgi profesyonel, tıbbi, hukuki veya teknik tavsiye niteliği taşımaz ve yetkili bir eğitmen, rehber ya da kurumun görüşünün yerine geçmez.',
        ],
      },
    ],
  },
  {
    heading: '3. Rehber İçeriğinin Kaynağı ve Doğruluğu',
    body: [
      'Rehber İçeriği; internette herkese açık olarak yayımlanan kaynaklardan (işletmelerin kendi web siteleri ve sosyal medya hesapları, kamu kurumlarının duyuruları, açık harita ve açık veri servisleri, yayımlanmış rehber ve makaleler gibi) derlenmiştir. Hava durumu bilgileri üçüncü taraf açık veri servislerinden otomatik olarak alınır.',
      {
        bullets: [
          'Unbound, bu bilgilerin doğruluğunu, güncelliğini, eksiksizliğini veya belirli bir amaca uygunluğunu bağımsız olarak denetlemez ve garanti etmez.',
          'Fiyatlar, çalışma saatleri, iletişim bilgileri, saha ve rota durumları, izin gereklilikleri ve hava koşulları önceden haber verilmeksizin değişebilir.',
          'Haritadaki konumlar yaklaşıktır; kesin buluşma, giriş, kalkış veya iniş noktası olarak kullanılamaz.',
          'Bir Aktiviteye başlamadan önce tüm bilgileri ilgili işletmeden, yetkili kurumdan ve resmi kaynaklardan bizzat teyit etmek tamamen Kullanıcının sorumluluğundadır.',
        ],
      },
      `Hak sahibi olduğunuz bir bilginin düzeltilmesini veya kaldırılmasını ${DATA_CONTROLLER.email} adresinden talep edebilirsiniz.`,
    ],
  },
  {
    heading: '4. Ticari İlişki Bulunmadığına Dair Beyan',
    body: [
      'Unbound ile Uygulamada adı geçen Üçüncü Taraf İşletmeler arasında hiçbir ortaklık, sponsorluk, bayilik, acentelik, temsil, komisyon, reklam veya başka bir maddi ya da ticari ilişki bulunmamaktadır.',
      {
        bullets: [
          'Bir işletmenin Uygulamada yer alması; o işletmenin Unbound tarafından önerildiği, onaylandığı, denetlendiği veya güvenilirliğinin garanti edildiği anlamına gelmez.',
          'Sıralama, öne çıkarma ve listeleme tercihleri herhangi bir ücret karşılığında yapılmaz.',
          'Kullanıcı ile Üçüncü Taraf İşletme arasında kurulan her türlü sözleşme, ödeme, iptal, iade, hizmet kusuru veya uyuşmazlık yalnızca ilgili taraflar arasındadır; Unbound bu ilişkinin tarafı değildir ve bunlardan sorumlu tutulamaz.',
        ],
      },
    ],
  },
  {
    heading: '5. Aktivitelerin Riskleri ve Riskin Kabulü',
    body: [
      'Doğa ve macera sporları, doğaları gereği yüksek risk içerir. Bu riskler; düşme, boğulma, hipotermi, çığ, kaya düşmesi, hayvan kaynaklı yaralanma, ekipman arızası, ani hava değişimi, kaybolma, ağır yaralanma, kalıcı sakatlık ve ölüm dahil ancak bunlarla sınırlı olmamak üzere ciddi sonuçlar doğurabilir.',
      'Uygulamayı kullanarak bir Aktiviteye katılma kararının tamamen size ait olduğunu, bu riskleri bildiğinizi ve özgür iradenizle üstlendiğinizi kabul edersiniz. Aktivite öncesinde ve sırasında aşağıdakilerden siz sorumlusunuz:',
      {
        bullets: [
          'Sağlık durumunuzun, fiziksel kondisyonunuzun ve deneyim seviyenizin Aktiviteye uygun olduğundan emin olmak; gerekirse hekime danışmak.',
          'Uygun ve bakımlı ekipman kullanmak; gerekli lisans, sertifika ve eğitimlere sahip olmak (ör. dalış ve yamaç paraşütü brövesi).',
          'Gerektiğinde yetkili ve lisanslı rehber, eğitmen veya işletmelerle birlikte hareket etmek.',
          'Hava ve saha koşullarını resmi kaynaklardan (ör. Meteoroloji Genel Müdürlüğü) takip etmek, koşullar uygun değilse Aktiviteyi ertelemek.',
          'Milli park, koruma alanı ve benzeri yerler için gerekli izinleri almak, ilgili mevzuata ve yerel kurallara uymak.',
          'Rotanızı ve dönüş saatinizi bir yakınınızla paylaşmak; uygun bir sigorta yaptırmak.',
          'Acil durumlarda vakit kaybetmeden 112 Acil Çağrı Merkezini aramak.',
        ],
      },
      '18 yaşından küçük kişilerin Aktivitelere katılımı, veli veya vasilerinin gözetimi ve sorumluluğu altındadır.',
    ],
  },
  {
    heading: '6. Sorumluluğun Sınırlandırılması',
    body: [
      'Uygulama ve tüm içerikleri "olduğu gibi" ve "mevcut haliyle" sunulur. Yürürlükteki mevzuatın izin verdiği azami ölçüde, Unbound; yöneticileri, çalışanları ve iş ortakları aşağıdakilerden kaynaklanan hiçbir doğrudan veya dolaylı zarardan sorumlu değildir:',
      {
        bullets: [
          'Bir Aktivite sırasında veya Aktivite nedeniyle meydana gelen kaza, yaralanma, hastalık, kalıcı sakatlık veya ölüm.',
          'Eşya kaybı, ekipman hasarı, araç hasarı veya diğer maddi zararlar.',
          'Rehber İçeriğinin veya Kullanıcı İçeriğinin hatalı, eksik, güncel olmayan ya da yanıltıcı olması ve bu bilgilere dayanılarak verilen kararlar.',
          'Hava durumu tahminleri, bildirimler veya konum bilgilerinin yanlış ya da gecikmeli olması.',
          'Üçüncü Taraf İşletmelerin, diğer kullanıcıların veya üçüncü kişilerin eylem ve ihmalleri.',
          'Uygulamanın kesintiye uğraması, hata vermesi, veri kaybı veya erişilememesi.',
          'Kâr kaybı, itibar kaybı, fırsat kaybı ve benzeri dolaylı zararlar.',
        ],
      },
      'Bu madde, kanunen sorumluluğun önceden kaldırılamadığı haller (ağır kusur ve kast gibi) ile tüketicinin emredici haklarını sınırlamaz.',
    ],
  },
  {
    heading: '7. Üyelik ve Hesap Güvenliği',
    body: [
      {
        bullets: [
          'Üye olmak için 18 yaşını doldurmuş olmanız ve kayıt sırasında doğru, güncel bilgi vermeniz gerekir. Yaş aralığınızı yanlış beyan etmeniz halinde doğacak sonuçlar size aittir.',
          'Hesabınız size özeldir; başkasına devredilemez, kullandırılamaz. Şifrenizin gizliliğinden ve hesabınızla yapılan tüm işlemlerden siz sorumlusunuz.',
          'Hesabınızın yetkisiz kullanıldığından şüphelenirseniz şifrenizi derhal değiştirmeli ve bize bildirmelisiniz.',
          'Misafir olarak kullanımda içerik paylaşma, beğenme, takip etme ve bildirim alma özellikleri kapalıdır; bu Sözleşmenin diğer hükümleri misafir kullanım için de geçerlidir.',
        ],
      },
    ],
  },
  {
    heading: '8. Kullanıcı İçeriği',
    body: [
      'Paylaştığınız faaliyet raporları ve fotoğraflar önceden incelenmeden yayımlanır. Paylaştığınız her içerikten yalnızca siz sorumlusunuz ve içeriğin gerçeği yansıttığını, üçüncü kişilerin haklarını ihlal etmediğini beyan edersiniz.',
      {
        bullets: [
          'Fotoğraflarda yer alan kişilerin açık rızasını almak, özellikle çocukların görüntülerini paylaşmamak sizin sorumluluğunuzdadır.',
          'İçeriklerinizin fikri haklarının sahibi siz olarak kalırsınız. Paylaşım yaptığınızda Unbound\'a bu içeriği Uygulama içinde ve Uygulamanın tanıtımında göstermek, çoğaltmak, biçimini uyarlamak ve diğer kullanıcılara sunmak için dünya çapında, münhasır olmayan, bedelsiz ve alt lisans verilebilir bir kullanım izni vermiş olursunuz.',
          'Bu izin, içeriği veya hesabınızı sildiğinizde makul teknik süre içinde sona erer; yasal saklama yükümlülükleri saklıdır.',
          'Başkalarını tehlikeli davranışa yönlendirebilecek, gerçeğe aykırı rota, koşul veya güvenlik bilgisi paylaşmamalısınız.',
        ],
      },
    ],
  },
  {
    heading: '9. Yasak Davranışlar',
    body: [
      'Uygulamayı kullanırken aşağıdakileri yapmamayı kabul edersiniz:',
      {
        bullets: [
          'Hukuka, genel ahlaka, kişilik haklarına veya fikri mülkiyet haklarına aykırı içerik paylaşmak.',
          'Taciz, tehdit, hakaret, nefret söylemi, ayrımcılık veya zorbalık içeren davranışlarda bulunmak.',
          'Müstehcen, şiddet içeren veya rahatsız edici görseller paylaşmak.',
          'Reklam, spam, yanıltıcı tanıtım veya izinsiz ticari ileti göndermek.',
          'Başka bir kişi veya kurum gibi davranmak, sahte hesap açmak.',
          'Diğer kullanıcıların kişisel verilerini izinsiz toplamak veya yaymak.',
          'Uygulamanın güvenliğini aşmaya çalışmak, otomatik araçlarla veri çekmek, tersine mühendislik yapmak, sistemlere aşırı yük bindirmek.',
          'Koruma alanlarına zarar vermeyi, yasak bölgelere girmeyi veya yasa dışı faaliyetleri teşvik etmek.',
        ],
      },
    ],
  },
  {
    heading: '10. Şikayet, Engelleme ve Moderasyon',
    body: [
      'Uygunsuz bulduğunuz içerik ve profilleri Uygulama içinden şikayet edebilir, dilediğiniz kullanıcıyı engelleyebilirsiniz. Belirli sayıda farklı kullanıcı tarafından şikayet edilen içerikler incelenene kadar yayından kaldırılabilir.',
      'Unbound, 5651 sayılı Kanun kapsamında yer sağlayıcı sıfatıyla kullanıcıların paylaştığı içerikleri önceden kontrol etmek veya hukuka aykırı bir faaliyetin söz konusu olup olmadığını araştırmakla yükümlü değildir. Bununla birlikte, bu Sözleşmeye veya hukuka aykırı olduğunu değerlendirdiği içerikleri önceden bildirimde bulunmaksızın kaldırma, erişime kapatma ve ilgili hesabı askıya alma ya da kapatma hakkını saklı tutar.',
    ],
  },
  {
    heading: '11. Sosyal Özellikler ve Profil Görünürlüğü',
    body: [
      {
        bullets: [
          'Profilinizi herkese açık yaptığınızda adınız, profil fotoğrafınız, ilgi alanlarınız, paylaştığınız raporlar, takipçi ve takip sayılarınız ile eklediyseniz Instagram kullanıcı adınız diğer kullanıcılar tarafından görülebilir.',
          'E-posta adresiniz diğer kullanıcılara gösterilmez.',
          'Profil görünürlüğünüzü dilediğiniz zaman ayarlardan değiştirebilirsiniz.',
        ],
      },
    ],
  },
  {
    heading: '12. Konum ve Bildirimler',
    body: [
      'Konum izni vermeniz halinde konumunuz; size yakın rotaları göstermek, mesafe hesaplamak ve hava durumuna dayalı öneriler sunmak için kullanılır. Bildirimler için konumunuz yaklaşık (yaklaşık 10 km hassasiyetinde) olarak saklanır; konum geçmişiniz tutulmaz. Konum ve bildirim izinlerini cihaz ayarlarından, bildirim türlerini Uygulama içindeki Bildirim Ayarlarından dilediğiniz zaman kapatabilirsiniz.',
      'Hava durumu ve öneri bildirimleri bilgilendirme amaçlıdır; bir Aktivitenin güvenli olduğu anlamına gelmez.',
    ],
  },
  {
    heading: '13. Kişisel Verilerin Korunması',
    body: [
      'Kişisel verileriniz 6698 sayılı Kişisel Verilerin Korunması Kanunu ve ilgili mevzuata uygun olarak işlenir. Hangi verilerin hangi amaçlarla işlendiği, kimlere aktarıldığı ve haklarınızın neler olduğu Uygulama içindeki KVKK Aydınlatma Metni ve Gizlilik Politikasında açıklanır. Bu metinler Sözleşmenin ayrılmaz parçasıdır. Ticari elektronik ileti onayı isteğe bağlıdır ve dilediğiniz zaman geri alınabilir.',
    ],
  },
  {
    heading: '14. Fikri Mülkiyet',
    body: [
      'Uygulamanın adı, logosu, tasarımı, yazılımı, derlenmiş veri tabanı ve Unbound tarafından hazırlanan özgün metinler Unbound\'a aittir ve izinsiz kopyalanamaz, çoğaltılamaz veya ticari amaçla kullanılamaz. Rehber İçeriğinde yer alan ve üçüncü kişilere ait olan marka, isim, görsel ve bilgilerin hakları ilgili hak sahiplerine aittir.',
    ],
  },
  {
    heading: '15. Üçüncü Taraf Hizmetleri ve Bağlantılar',
    body: [
      'Uygulama; harita, giriş (ör. Google), bildirim, hava durumu ve sosyal medya (ör. Instagram) gibi üçüncü taraf hizmetleri kullanır ve dış bağlantılar içerebilir. Bu hizmetlerin ve sitelerin içeriği, gizlilik uygulamaları ve kesintileri ilgili sağlayıcıların sorumluluğundadır ve kendi koşullarına tabidir.',
    ],
  },
  {
    heading: '16. Ücretsiz Hizmet ve Hizmette Değişiklik',
    body: [
      'Uygulama ücretsizdir; uygulama içi satın alma, abonelik veya reklam bulunmaz, Kullanıcılardan herhangi bir ödeme alınmaz ve fatura düzenlenmez. Unbound, Uygulamanın özelliklerini, içeriklerini veya kapsamını dilediği zaman değiştirme, geçici ya da kalıcı olarak durdurma hakkına sahiptir. İleride ücretli bir özellik sunulması halinde bu özellik ve geçerli koşulları ayrıca ve açıkça bildirilir; onayınız olmadan ücret talep edilmez.',
    ],
  },
  {
    heading: '17. Hesabın Silinmesi ve Sözleşmenin Sona Ermesi',
    body: [
      {
        bullets: [
          'Hesabınızı dilediğiniz zaman Profil menüsü > Kişisel Bilgiler > Hesabımı Sil adımlarıyla kalıcı olarak silebilirsiniz. Silme işlemiyle profiliniz, raporlarınız, fotoğraflarınız, beğenileriniz, takip ilişkileriniz ve bildirimleriniz geri alınamaz şekilde silinir.',
          'Bu Sözleşmeye aykırılık halinde Unbound hesabınızı önceden bildirimde bulunmaksızın askıya alabilir veya kapatabilir.',
          'Sorumluluğun sınırlandırılması, fikri mülkiyet ve uyuşmazlıkların çözümüne ilişkin hükümler Sözleşme sona erse de geçerliliğini korur.',
        ],
      },
    ],
  },
  {
    heading: '18. Sözleşmede Değişiklik',
    body: [
      'Unbound bu Sözleşmeyi güncelleyebilir. Önemli değişiklikler Uygulama içinde veya e-posta yoluyla duyurulur. Değişikliklerin yürürlüğe girmesinden sonra Uygulamayı kullanmaya devam etmeniz güncel Sözleşmeyi kabul ettiğiniz anlamına gelir. Güncel metin her zaman Uygulama içinde yer alır.',
    ],
  },
  {
    heading: '19. Uygulanacak Hukuk ve Uyuşmazlıklar',
    body: [
      'Bu Sözleşme Türkiye Cumhuriyeti hukukuna tabidir. Uyuşmazlıklarda Türkiye Cumhuriyeti mahkemeleri ve icra daireleri yetkilidir. Kanundan doğan emredici haklarınız (varsa 6502 sayılı Tüketicinin Korunması Hakkında Kanun kapsamındaki haklar dahil) saklıdır.',
      'Sözleşmenin herhangi bir hükmünün geçersiz sayılması, diğer hükümlerin geçerliliğini etkilemez.',
    ],
  },
  {
    heading: '20. İletişim ve Yürürlük',
    body: [
      `Sözleşmeyle ilgili soru, talep ve bildirimlerinizi ${DATA_CONTROLLER.email} adresine iletebilirsiniz. Unbound'un size yapacağı bildirimler, kayıtlı e-posta adresinize veya Uygulama içi bildirim yoluyla yapılır.`,
      'Bu Sözleşme, kayıt sırasında elektronik ortamda onaylamanız veya Uygulamayı kullanmaya başlamanızla yürürlüğe girer.',
    ],
  },
];

export const TERMS_DOCUMENT: LegalDocument = {
  title: TERMS_TITLE,
  version: TERMS_VERSION,
  updatedAt: TERMS_UPDATED_AT,
  intro: TERMS_INTRO,
  sections: TERMS_SECTIONS,
};
