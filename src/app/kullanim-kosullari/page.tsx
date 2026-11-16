import type { Metadata } from "next";
import { LegalShell } from "@/components/legal/LegalShell";
import { LegalDocumentView } from "@/components/legal/LegalDocumentView";
import { TERMS_DOCUMENT } from "@/legal/termsOfService";

export const metadata: Metadata = {
  title: TERMS_DOCUMENT.title,
  description: "Unbound App kullanım koşulları ve kullanıcı sözleşmesi.",
  alternates: { canonical: "https://gounbound.app/kullanim-kosullari/" },
};

export default function Page() {
  return (
    <LegalShell>
      <LegalDocumentView document={TERMS_DOCUMENT} />
    </LegalShell>
  );
}
