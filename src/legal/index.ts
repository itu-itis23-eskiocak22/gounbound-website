// OTOMATİK KOPYA — bu dosyayı burada düzenleme.
// Kaynak: MyCrossApp/src/legal; değişiklikten sonra orada `npm run legal:sync` çalıştır.

import type { LegalDocument } from './types';
import { TERMS_DOCUMENT } from './termsOfService';
import { KVKK_NOTICE } from './kvkkNotice';
import { PRIVACY_POLICY } from './privacyPolicy';

export type LegalDocumentKey = 'terms' | 'privacy' | 'kvkk';

export const LEGAL_DOCUMENTS: Record<LegalDocumentKey, LegalDocument> = {
  terms: TERMS_DOCUMENT,
  privacy: PRIVACY_POLICY,
  kvkk: KVKK_NOTICE,
};

/** Menüde gösterilme sırası */
export const LEGAL_DOCUMENT_ORDER: LegalDocumentKey[] = ['terms', 'privacy', 'kvkk'];
