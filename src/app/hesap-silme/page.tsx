import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell } from "@/components/legal/LegalShell";
import { controllerDescription, DATA_CONTROLLER } from "@/legal/company";

export const metadata: Metadata = {
  title: "Hesap Silme",
  description: "Unbound App hesabınızı ve verilerinizi nasıl kalıcı olarak silebileceğiniz.",
  alternates: { canonical: "https://gounbound.app/hesap-silme/" },
};

const MAIL_SUBJECT = "Hesap silme talebi";
const MAIL_BODY =
  "Merhaba,\n\nUnbound App hesabımın ve bağlı tüm verilerimin kalıcı olarak silinmesini talep ediyorum.\n\n" +
  "Hesabıma kayıtlı e-posta adresi: (bu e-postayı gönderdiğiniz adres değilse buraya yazın)\n";
const MAILTO = `mailto:${DATA_CONTROLLER.email}?subject=${encodeURIComponent(MAIL_SUBJECT)}&body=${encodeURIComponent(MAIL_BODY)}`;

const DELETED = [
  "Profiliniz: ad, soyad, e-posta adresi, yaş aralığı, cinsiyet, profil fotoğrafı, ilgi alanları, yapılacaklar listesi, Instagram kullanıcı adı",
  "Paylaştığınız faaliyet raporları ve tüm rapor fotoğrafları",
  "Beğenileriniz, takipçi ve takip ilişkileriniz",
  "Bildirimleriniz, bildirim tercihleriniz ve cihaz bildirim anahtarlarınız",
  "Kaydedilmiş yaklaşık konumunuz",
  "Engelleme listeniz ve gönderdiğiniz şikayetler",
  "Giriş bilgileriniz (e-posta/şifre veya Google bağlantısı)",
];

export default function AccountDeletionPage() {
  return (
    <LegalShell>
      <article>
        <h1 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-semibold text-forest-dark tracking-tight">
          Hesap Silme
        </h1>
        <p className="mt-4 text-[15px] leading-7 text-text-primary/85">
          Bu sayfa, <strong>{DATA_CONTROLLER.brand}</strong> mobil uygulamasındaki hesabınızı ve hesabınıza bağlı
          verileri nasıl kalıcı olarak silebileceğinizi açıklar. Veri sorumlusu: {controllerDescription()}.
        </p>

        <section className="mt-10 rounded-2xl bg-white border border-black/5 p-6 sm:p-8">
          <h2 className="text-lg font-semibold mb-4">1. Uygulama içinden silme (en hızlı yol)</h2>
          <ol className="space-y-2 pl-5 list-decimal marker:text-sage text-[15px] leading-7 text-text-primary/85">
            <li>Unbound App&apos;i açın ve hesabınızla giriş yapın.</li>
            <li>Alt menüden <strong>Profil</strong> sekmesine dokunun.</li>
            <li>Sağ üstteki <strong>☰ menü</strong> simgesine dokunun ve <strong>Kişisel Bilgiler</strong>&apos;i seçin.</li>
            <li>
              Sayfanın altındaki <strong>Hesabımı Sil</strong> düğmesine dokunun ve <strong>Evet, Sil</strong> ile onaylayın.
            </li>
          </ol>
          <p className="mt-4 text-[15px] leading-7 text-text-primary/85">
            Hesabınız ve aşağıda listelenen tüm verileriniz <strong>hemen ve kalıcı olarak</strong> silinir; bu işlem geri
            alınamaz.
          </p>
        </section>

        <section className="mt-6 rounded-2xl bg-white border border-black/5 p-6 sm:p-8">
          <h2 className="text-lg font-semibold mb-4">2. Uygulamaya erişemiyorsanız: e-posta ile talep</h2>
          <p className="text-[15px] leading-7 text-text-primary/85">
            Uygulamayı silmiş veya hesabınıza giremiyorsanız, hesabınıza <strong>kayıtlı e-posta adresinizden</strong>{" "}
            <a href={`mailto:${DATA_CONTROLLER.email}`} className="text-forest underline underline-offset-2">
              {DATA_CONTROLLER.email}
            </a>{" "}
            adresine &quot;{MAIL_SUBJECT}&quot; konulu bir e-posta gönderin. Hesap sahibi olduğunuzu doğruladıktan sonra
            hesabınızı ve verilerinizi en geç <strong>30 gün</strong> içinde siler, size e-postayla bilgi veririz.
          </p>
          <a
            href={MAILTO}
            className="mt-5 inline-flex items-center rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-white hover:bg-forest-light transition-colors"
          >
            Silme talebi e-postası oluştur
          </a>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-semibold mb-3">Silinen veriler</h2>
          <ul className="space-y-2 pl-5 list-disc marker:text-sage text-[15px] leading-7 text-text-primary/85">
            {DELETED.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-semibold mb-3">Saklama süreleri</h2>
          <ul className="space-y-2 pl-5 list-disc marker:text-sage text-[15px] leading-7 text-text-primary/85">
            <li>Silinen veriler sunucuların teknik yedeklerinden en geç 30 gün içinde kalıcı olarak temizlenir.</li>
            <li>
              Yalnızca mevzuat gereği saklanması zorunlu olan kayıtlar (ör. güvenlik kayıtları) yasal süre boyunca tutulur
              ve süre sonunda silinir.
            </li>
            <li>Silinen hesaplar geri getirilemez; aynı e-posta adresiyle daha sonra yeni bir hesap açabilirsiniz.</li>
          </ul>
        </section>

        <p className="mt-10 text-[15px] leading-7 text-text-primary/85">
          Hesabınızı silmeden yalnızca bazı verilerinizin silinmesini istiyorsanız (ör. belirli bir rapor veya fotoğraf),
          kayıtlı e-posta adresinizden {DATA_CONTROLLER.email} adresine yazmanız yeterlidir. Ayrıntılar için{" "}
          <Link href="/gizlilik/" className="text-forest underline underline-offset-2">
            Gizlilik Politikası
          </Link>{" "}
          ve{" "}
          <Link href="/kvkk/" className="text-forest underline underline-offset-2">
            KVKK Aydınlatma Metni
          </Link>
          &apos;ne bakabilirsiniz.
        </p>
      </article>
    </LegalShell>
  );
}
