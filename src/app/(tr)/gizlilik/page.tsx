import type { Metadata } from "next";
import { LegalShell } from "@/components/legal/LegalShell";
import { LegalDocumentView } from "@/components/legal/LegalDocumentView";
import { PRIVACY_POLICY } from "@/legal/privacyPolicy";

export const metadata: Metadata = {
  title: PRIVACY_POLICY.title,
  description: "Unbound App'in hangi kişisel verileri topladığı, nasıl kullandığı ve kimlerle paylaştığı.",
  alternates: { canonical: "https://gounbound.app/gizlilik/" },
};

export default function Page() {
  return (
    <LegalShell>
      <LegalDocumentView document={PRIVACY_POLICY} />
    </LegalShell>
  );
}
