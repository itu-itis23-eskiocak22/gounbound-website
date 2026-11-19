import Link from "next/link";
import { SiteShell } from "@/components/site/SiteShell";
import { StoreBadges } from "@/components/site/AppPromo";
import { LogoMark } from "@/components/Logo";
import { DATA_CONTROLLER } from "@/legal/company";
import { places, sports } from "@/lib/catalog";
import { localePath, type Lang } from "@/i18n";
import { PhoneShot, ScreenGallery, type ScreenKey } from "./AppScreens";

type Feature = { eyebrow: string; title: string; text: string; points: string[] };

const COPY = {
  tr: {
    meta: "Unbound mobil uygulaması: harita, çevrimdışı rehberler, faaliyet raporu paylaşımı, takip, beğeni ve hava durumu bildirimleri. Yakında App Store ve Google Play'de.",
    soon: "Yakında",
    galleryEyebrow: "Uygulamadan ekranlar", galleryTitle: "Gerçek ekranlar, maket değil.", galleryText: "Aşağıdakiler test sürümünden alınmış ekran görüntüleri. Yana kaydırarak hepsine göz atabilirsin.",
    lead: "Doğa ve macera sporlarında keşfet, öğren, git ve paylaş. Web sitesinde gördüğün her şey, üstüne seni sporcularla buluşturan bir topluluk ve cebinde çalışan rehberler.",
    platforms: "Android ve iOS · Ücretsiz · Türkçe",
    stats: [
      [String(sports.length), "spor", "Yelken, kano, dağcılık, yamaç paraşütü, dalış, kampçılık, hiking ve atlı binicilik."],
      [String(places.length), "işletme ve rota", "Her biri ulaşım, ücret, ekipman ve güvenlik başlıklarıyla araştırılmış rehberli."],
      ["5", "sekme", "Sporlar, Harita, Paylaş, Bildirimler ve Profil. Her şey en fazla iki dokunuş uzakta."],
    ],
    features: [
      { eyebrow: "Harita", title: "Yakınındaki her şey, tek ekranda.",
        text: "Haritayı istediğin yere kaydır; o bölgedeki yelken okulları, uçuş alanları, kamp alanları ve yürüyüş rotaları altta sürüklenebilir bir panelde sıralanır. Birine dokun, rehberi açılsın.",
        points: ["Spora göre renkli işaretler: su sporları mavi, kara ve doğa yeşil, kamp ve hava koyu.", "Haritayı kaydırdıkça alttaki panel o bölgedeki yerleri listeler.", "Spor, bölge, \"yeni başlayanlara uygun\" ve \"tandem\" filtreleri.", "Rehberler çevrimdışı da açılır; sinyalin olmadığı vadide bile."] },
      { eyebrow: "Faaliyet raporu", title: "Her spora özel, iki dakikada rapor.",
        text: "Döndüğünde ne yaptığını, nasıl geçtiğini ve senden sonra gidecekler için notlarını yaz. Rapor, hem senin zaman çizelgene hem de o sporun ve o yerin sayfasına düşer; web sitesinde de herkes okuyabilir.",
        points: ["Spora göre değişen sorular: yelkende rüzgâr ve tekne tipi, dalışta derinlik ve görüş, hikingde zorluk ve mesafe.", "Rapor başına 5 fotoğrafa kadar galeri.", "Yer ya da işletme seçince rapor o yerin sayfasında da görünür.", "Raporlar onay beklemeden yayımlanır; topluluk şikâyetiyle uygunsuz içerik gizlenir."] },
      { eyebrow: "Topluluk", title: "Seninle aynı rüzgârı kovalayanlar.",
        text: "Profilin, yaptığın her faaliyetin kronolojik bir seyir defteridir. İlgi alanlarını seç, seninle aynı sporları yapanları bul ve onların deneyiminden öğren.",
        points: ["Sporcuları takip et, takip ettiklerinin yeni raporlarından haberdar ol.", "İlgi alanlarına göre profil keşfi; takipçi ve takip listeleri.", "Beğendiğin raporlar \"Beğendiklerim\" listende saklanır.", "Profilini açık ya da gizli yap; Instagram hesabını bağla.", "Resmi Unbound Ekibi hesabı doğrulama rozetiyle görünür; kimse kendini resmi gösteremez."] },
      { eyebrow: "Bildirimler", title: "Hava uygunsa, haberin olsun.",
        text: "Bildirimler seni uygulamaya çekmek için değil, doğru günü kaçırmaman için. Az, zamanında ve tamamen senin kontrolünde.",
        points: ["Hava durumu fırsatı: her Perşembe 19:00'da hafta sonu tahmini, ilgi alanların ve kaba konumuna göre.", "İlgi alanı özeti: Pazartesi akşamı yakınına eklenen yeni yerler ve geçen haftanın raporları.", "Yeni takipçi ve takip ettiklerinin raporları.", "22:00–09:00 arası rahatsız etmez; sosyal bildirimler günde en fazla 3.", "Her kategoriyi ayarlardan ayrı ayrı açıp kapatabilirsin."] },
    ] as Feature[],
    finderEyebrow: "Ne yapsam?", finderTitle: "Karar veremediğin hafta sonları için.",
    finderText: "Üç soru: Nasıl bir gün istiyorsun, ne kadar yol gidebilirsin, karada mı suda mı havada mı? Uygulama konumundan yol süresini hesaplar, katalogdan sana en uygun yerleri sıralar.",
    finderCta: "Web'de hemen dene →",
    finderQs: [["Nasıl bir gün istiyorsun?", "Görece kolay"], ["Ne kadar yol gidebilirsin?", "3 saate kadar"], ["Nerede olmak istersin?", "Suda"]],
    cards: [
      ["Başlangıç rehberleri", "Her sporun \"ilk günün nasıl geçer, çantana ne koyarsın, kayıtta ne sorarsın\" rehberi. Samimi, cesaretlendirici, emir vermeyen bir dille."],
      ["Kaynaklı yer rehberleri", "Her işletme ve rota için sekiz başlık: ulaşım, tesis, ekipman, rezervasyon ve ücret, mevsim, güvenlik. Kaynak bağlantıları ve araştırma tarihiyle."],
      ["Güvenli topluluk", "Rapor ve kullanıcıları şikâyet et ya da engelle. Üç farklı şikâyet alan içerik otomatik gizlenir ve incelemeye düşer."],
      ["Kolay giriş", "E-posta ve 6 haneli doğrulama koduyla ya da Google hesabınla. Şifre sıfırlama da bağlantıyla değil, kodla. Hesap açmadan misafir olarak da gezebilirsin."],
      ["Verin senin", "Kişisel verilerin AB'deki sunucularda tutulur. Hesabını uygulamadan tek adımda, tüm verilerinle birlikte kalıcı olarak silebilirsin."],
      ["Emoji yok, gürültü yok", "Sade, marka paletine sadık bir arayüz. Her spor kendi rengi ve simgesiyle tanınır."],
    ],
    compareTitle: "Web sitesi mi, uygulama mı?", compareLead: "Keşif herkese açık. Paylaşmak ve topluluk uygulamada.",
    compareHead: ["Özellik", "Web", "Uygulama"], yes: "Var", no: "Yok",
    compare: [
      ["Sporlar ve başlangıç rehberleri", true], ["İşletme ve rota rehberleri", true], ["Harita ve filtreler", true], ["\"Ne yapsam?\" önerileri", true],
      ["Faaliyet raporlarını okumak", true], ["Rehberleri çevrimdışı açmak", false], ["Faaliyet raporu paylaşmak (fotoğraflarla)", false],
      ["Beğenmek ve beğendiklerini kaydetmek", false], ["Sporcuları takip etmek, profil keşfi", false], ["Profil ve faaliyet zaman çizelgesi", false],
      ["Hava durumu ve ilgi alanı bildirimleri", false],
    ] as [string, boolean][],
    faqTitle: "Sık sorulanlar",
    faq: [
      ["Uygulama ne zaman çıkıyor?", "Şu an test sürecindeyiz. Android ve iOS sürümleri yakında Google Play ve App Store'da olacak. Çıktığında bu sayfadan duyuracağız."],
      ["Ücretli mi?", "Hayır. Unbound App ücretsizdir; uygulama içi satın alma yoktur."],
      ["Web sitesinde hesap açabilir miyim?", "Hayır. Web sitesi keşif içindir: sporlar, işletmeler, rotalar ve raporlar herkese açık. Hesap, rapor paylaşma, beğeni ve takip mobil uygulamadadır."],
      ["Profilimi kimler görebilir?", "Profilini açık ya da gizli yapabilirsin. Gizli profilde raporlarını ve zaman çizelgeni yalnızca seni takip edenler görür. Hesabını uygulamadan istediğin an kalıcı olarak silebilirsin."],
      ["Rehberlerdeki bilgiler ne kadar güncel?", "Her rehberde araştırma tarihi yazar. Bilgiler işletmelerin kendi yayımladığı kaynaklara dayanır ve bağlantıları rehberde verilir. Saat, ücret ve rota koşullarını gitmeden teyit etmeni öneririz."],
      ["İşletmemi eklemek ya da bilgilerini düzeltmek istiyorum.", `Bize ${DATA_CONTROLLER.email} adresinden yaz; kaynağını kontrol edip rehberi güncelleriz.`],
    ],
    finalTitle: "Çok yakında cebinde.", finalText: "O zamana kadar web sitesinden sporları, işletmeleri ve raporları keşfetmeye başlayabilirsin.", finalCta: "İşletme ve rotaları keşfet →",
  },
  en: {
    meta: "The Unbound mobile app: map, offline guides, activity reports, following, likes and weather alerts for outdoor sports in Turkey. Coming soon to the App Store and Google Play.",
    soon: "Coming soon",
    galleryEyebrow: "Screens from the app", galleryTitle: "Real screens, not mock-ups.", galleryText: "These are screenshots from the test build (the app is in Turkish). Scroll sideways to see them all.",
    lead: "Discover, learn, go and share in outdoor and adventure sports. Everything on this website, plus a community that connects you with other athletes and guides that work in your pocket.",
    platforms: "Android & iOS · Free · App language: Turkish",
    stats: [
      [String(sports.length), "sports", "Sailing, kayaking, mountaineering, paragliding, diving, camping, hiking and horse riding."],
      [String(places.length), "places & routes", "Each with a researched guide on getting there, prices, gear and safety."],
      ["5", "tabs", "Sports, Map, Share, Notifications and Profile. Everything is at most two taps away."],
    ],
    features: [
      { eyebrow: "Map", title: "Everything near you, on one screen.",
        text: "Pan the map anywhere; sailing schools, flying sites, campsites and hiking routes in that area are listed in a draggable panel below. Tap one to open its guide.",
        points: ["Colour-coded pins by sport: water sports blue, land and nature green, camping and air dark.", "The bottom panel lists what's in view as you move the map.", "Filter by sport, region, \"beginner friendly\" and \"tandem\".", "Guides open offline too, even in a valley with no signal."] },
      { eyebrow: "Activity reports", title: "Sport-specific reports in two minutes.",
        text: "When you're back, write what you did, how it went and notes for whoever goes next. The report lands on your timeline and on the sport's and place's pages, and anyone can read it on the website too.",
        points: ["Questions that change with the sport: wind and boat type for sailing, depth and visibility for diving, difficulty and distance for hiking.", "A gallery of up to 5 photos per report.", "Pick a place or business and the report also shows on that place's page.", "Reports go live without waiting for approval; inappropriate content is hidden after community reports."] },
      { eyebrow: "Community", title: "People chasing the same wind as you.",
        text: "Your profile is a chronological logbook of every activity you've done. Choose your interests, find people who do the same sports and learn from their experience.",
        points: ["Follow athletes and get notified about their new reports.", "Discover profiles by interest; follower and following lists.", "Reports you like are kept in your \"Liked\" list.", "Make your profile public or private; link your Instagram.", "The official Unbound Team account carries a verified badge; nobody else can pass as official."] },
      { eyebrow: "Notifications", title: "Know when the weather's right.",
        text: "Notifications aren't there to pull you into the app; they're there so you don't miss the right day. Few, well-timed and fully under your control.",
        points: ["Weather window: every Thursday at 19:00, a weekend forecast matched to your interests and approximate location.", "Interest digest: on Monday evening, new places near you and last week's reports.", "New followers and reports from people you follow.", "Quiet between 22:00 and 09:00; at most 3 social notifications a day.", "Turn each category on or off separately in settings."] },
    ] as Feature[],
    finderEyebrow: "What should I do?", finderTitle: "For the weekends you can't decide.",
    finderText: "Three questions: what kind of day, how far can you travel, land, water or air? The app works out travel time from your location and ranks the best places from the catalogue.",
    finderCta: "Try it on the web now →",
    finderQs: [["What kind of day do you want?", "Fairly easy"], ["How far can you travel?", "Up to 3 hours"], ["Where do you want to be?", "On water"]],
    cards: [
      ["Beginner guides", "For every sport: what your first day is like, what to pack, what to ask when you book. Written in a friendly, encouraging tone."],
      ["Sourced place guides", "Eight sections for every business and route: getting there, facilities, gear, booking and prices, season, safety. With source links and research dates."],
      ["A safe community", "Report or block reports and users. Content reported by three different people is hidden automatically and queued for review."],
      ["Easy sign-in", "Email with a 6-digit verification code, or your Google account. Password resets use a code too, not a link. You can also browse as a guest."],
      ["Your data is yours", "Personal data is stored on servers in the EU. Delete your account and all its data permanently from the app in one step."],
      ["No emoji, no noise", "A clean interface true to the brand palette. Each sport has its own colour and icon."],
    ],
    compareTitle: "Website or app?", compareLead: "Discovery is open to everyone. Sharing and community live in the app.",
    compareHead: ["Feature", "Web", "App"], yes: "Yes", no: "No",
    compare: [
      ["Sports and beginner guides", true], ["Business and route guides", true], ["Map and filters", true], ["\"What should I do?\" suggestions", true],
      ["Reading activity reports", true], ["Opening guides offline", false], ["Sharing activity reports (with photos)", false],
      ["Liking and saving reports", false], ["Following athletes, profile discovery", false], ["Profile and activity timeline", false],
      ["Weather and interest notifications", false],
    ] as [string, boolean][],
    faqTitle: "FAQ",
    faq: [
      ["When is the app coming out?", "We're in testing right now. Android and iOS versions will be on Google Play and the App Store soon, and we'll announce it on this page."],
      ["Is it in English?", "The app is currently in Turkish, and so are the guides and reports. The website's interface is available in English."],
      ["Does it cost anything?", "No. Unbound App is free, with no in-app purchases."],
      ["Can I create an account on the website?", "No. The website is for discovery: sports, businesses, routes and reports are public. Accounts, sharing reports, likes and following are in the mobile app."],
      ["Who can see my profile?", "You can make your profile public or private. With a private profile only your followers see your reports and timeline. You can permanently delete your account from the app at any time."],
      ["How up to date are the guides?", "Every guide shows its research date. Details are based on the businesses' own published sources, linked in the guide. Please confirm opening hours, prices and route conditions before you go."],
      ["I want to add my business or correct its details.", `Write to us at ${DATA_CONTROLLER.email}; we'll check the source and update the guide.`],
    ],
    finalTitle: "In your pocket very soon.", finalText: "Until then, start exploring sports, businesses and reports on the website.", finalCta: "Explore places & routes →",
  },
};

export const appMetaDescription = (lang: Lang) => COPY[lang].meta;

function Tick({ on, label }: { on: boolean; label: string }) {
  return on ? (
    <svg viewBox="0 0 24 24" className="w-5 h-5 mx-auto text-olive-dark" fill="none" stroke="currentColor" strokeWidth="2.5" aria-label={label}><path d="M5 12.5l4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ) : <span className="block text-center text-muted" aria-label={label}>—</span>;
}

function FeatureBlock({ f, phone, reverse = false }: { f: Feature; phone: React.ReactNode; reverse?: boolean }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-24 grid gap-12 lg:grid-cols-2 items-center">
      <div className={reverse ? "lg:order-2" : ""}>
        <p className="text-meta text-olive mb-3">{f.eyebrow}</p>
        <h2 className="heading-section text-3xl sm:text-5xl text-ink">{f.title}</h2>
        <p className="mt-5 text-lg text-text-secondary leading-relaxed">{f.text}</p>
        <ul className="mt-7 grid gap-3">
          {f.points.map((p) => (
            <li key={p} className="flex gap-3 text-ink/90">
              <svg viewBox="0 0 24 24" className="w-5 h-5 mt-0.5 shrink-0 text-olive" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12.5l4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              {p}
            </li>
          ))}
        </ul>
      </div>
      <div className={`flex justify-center ${reverse ? "lg:order-1" : ""}`}>
        <div className="relative">
          <div className="absolute -inset-10 rounded-full bg-surface -z-10" aria-hidden="true" />
          {phone}
        </div>
      </div>
    </section>
  );
}

export function AppView({ lang }: { lang: Lang }) {
  const c = COPY[lang];
  const phoneScreens: ScreenKey[] = ["map", "share-form", "profile", "notifications"];
  return (
    <SiteShell lang={lang}>
      <section className="relative overflow-hidden bg-ink text-paper">
        <LogoMark className="absolute -left-20 -bottom-24 h-[28rem] w-auto text-paper/[0.04]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 pt-16 pb-0 sm:pt-24 grid gap-14 lg:grid-cols-2 items-end">
          <div className="pb-16 sm:pb-24">
            <span className="inline-flex items-center gap-2 rounded-full bg-gold/15 text-gold px-3 py-1 text-xs font-semibold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" /> {c.soon}
            </span>
            <h1 className="heading-display text-5xl sm:text-7xl mt-6">Unbound App</h1>
            <p className="mt-6 text-xl text-paper/75 max-w-lg leading-relaxed">{c.lead}</p>
            <div className="mt-9"><StoreBadges dark lang={lang} /></div>
            <p className="mt-5 text-sm text-paper/45">{c.platforms}</p>
          </div>
          <div className="hidden sm:flex justify-center gap-6 translate-y-16 -mt-8" lang="tr">
            <div className="hidden xl:block translate-y-10 opacity-90"><PhoneShot screen="guide" lang={lang} priority /></div>
            <PhoneShot screen="home" lang={lang} priority />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-8 pt-28 pb-8">
        <div className="grid gap-8 sm:grid-cols-3">
          {c.stats.map(([n, l, text]) => (
            <div key={l} className="rounded-3xl bg-white/70 border border-stone p-7">
              <p className="heading-display text-5xl text-ink">{n}</p>
              <p className="font-semibold text-ink mt-1">{l}</p>
              <p className="text-text-secondary mt-3 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-8 pt-16">
        <p className="text-meta text-olive mb-3">{c.galleryEyebrow}</p>
        <h2 className="heading-section text-3xl sm:text-4xl text-ink mb-3">{c.galleryTitle}</h2>
        <p className="text-text-secondary mb-10 max-w-2xl">{c.galleryText}</p>
        <div lang="tr"><ScreenGallery lang={lang} /></div>
      </section>

      {c.features.map((f, i) => <FeatureBlock key={f.eyebrow} f={f} phone={<div lang="tr"><PhoneShot screen={phoneScreens[i]} lang={lang} /></div>} reverse={i % 2 === 1} />)}

      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <div className="rounded-[2rem] bg-olive text-paper p-8 sm:p-14 grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <p className="text-meta text-gold mb-3">{c.finderEyebrow}</p>
            <h2 className="heading-section text-3xl sm:text-5xl">{c.finderTitle}</h2>
            <p className="mt-5 text-paper/80 text-lg leading-relaxed">{c.finderText}</p>
            <Link href={localePath(lang, "/ne-yapsam/")} className="inline-flex mt-7 rounded-full bg-paper text-ink px-6 py-3 font-semibold hover:bg-gold">{c.finderCta}</Link>
          </div>
          <ol className="grid gap-3">
            {c.finderQs.map(([q, a], i) => (
              <li key={q} className="rounded-2xl bg-paper/10 px-5 py-4 flex items-center justify-between gap-4">
                <span><span className="text-paper/50 mr-2">{i + 1}.</span>{q}</span>
                <span className="shrink-0 rounded-full bg-paper text-ink px-3 py-1 text-sm font-semibold">{a}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-20 grid gap-5 md:grid-cols-3">
        {c.cards.map(([title, text]) => (
          <div key={title} className="rounded-3xl bg-white/70 border border-stone p-7">
            <h3 className="font-semibold text-ink text-lg">{title}</h3>
            <p className="mt-3 text-text-secondary leading-relaxed">{text}</p>
          </div>
        ))}
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-8 py-12">
        <h2 className="heading-section text-3xl sm:text-4xl text-ink text-center">{c.compareTitle}</h2>
        <p className="mt-4 text-center text-text-secondary">{c.compareLead}</p>
        <div className="mt-10 rounded-3xl border border-stone overflow-hidden bg-white/70">
          <table className="w-full text-left">
            <thead className="bg-surface text-sm">
              <tr><th className="p-4 font-semibold">{c.compareHead[0]}</th><th className="p-4 font-semibold text-center w-24">{c.compareHead[1]}</th><th className="p-4 font-semibold text-center w-24">{c.compareHead[2]}</th></tr>
            </thead>
            <tbody>
              {c.compare.map(([f, web]) => (
                <tr key={f} className="border-t border-stone/70">
                  <td className="p-4 text-[0.95rem]">{f}</td>
                  <td className="p-4"><Tick on={web} label={web ? c.yes : c.no} /></td>
                  <td className="p-4"><Tick on label={c.yes} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-8 py-16">
        <h2 className="heading-section text-3xl sm:text-4xl text-ink mb-8">{c.faqTitle}</h2>
        <div className="flex flex-col gap-3">
          {c.faq.map(([q, a]) => (
            <details key={q} className="rounded-2xl border border-stone bg-white/60">
              <summary className="flex items-center justify-between gap-4 px-5 py-4 font-semibold text-ink">
                {q}
                <svg className="chevron w-5 h-5 shrink-0 text-text-secondary transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </summary>
              <p className="px-5 pb-5 text-text-secondary leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-8 pb-24">
        <div className="rounded-[2rem] bg-ink text-paper px-6 py-14 sm:p-16 text-center">
          <LogoMark className="h-10 w-auto mx-auto text-gold" />
          <h2 className="heading-section text-3xl sm:text-5xl mt-6">{c.finalTitle}</h2>
          <p className="mt-4 text-paper/70 max-w-xl mx-auto">{c.finalText}</p>
          <div className="mt-8 flex justify-center"><StoreBadges dark lang={lang} /></div>
          <Link href={localePath(lang, "/mekanlar/")} className="inline-block mt-8 text-gold hover:text-paper font-semibold">{c.finalCta}</Link>
        </div>
      </section>
    </SiteShell>
  );
}
