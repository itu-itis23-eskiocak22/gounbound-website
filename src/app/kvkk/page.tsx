import type { Metadata } from "next";
import { LegalShell } from "@/components/legal/LegalShell";
import { LegalDocumentView } from "@/components/legal/LegalDocumentView";
import { KVKK_NOTICE } from "@/legal/kvkkNotice";

export const metadata: Metadata = {
  title: KVKK_NOTICE.title,
  description: "6698 sayılı KVKK kapsamında Unbound App kullanıcılarına yönelik aydınlatma metni.",
  alternates: { canonical: "https://gounbound.app/kvkk/" },
};

export default function Page() {
  return (
    <LegalShell>
      <LegalDocumentView document={KVKK_NOTICE} />
    </LegalShell>
  );
}
