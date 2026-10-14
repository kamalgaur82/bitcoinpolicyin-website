// Web3Forms wiring for the Contact and Support forms.
//
// Access keys are PUBLIC by design — each key only permits delivery to the one
// inbox it is bound to (you cannot set an arbitrary recipient from the page),
// so they are safe to commit to this public repo.
//
// SETUP: at https://web3forms.com, create one access key per destination using
// that alias's email address, then paste the keys below. A blank key keeps that
// form in its "coming soon" state (safe to deploy), and it goes live the moment
// a real key is present.
//
//   general  -> contact@bitcoinpolicy.in
//   partners -> partners@bitcoinpolicy.in
//   press    -> media@bitcoinpolicy.in
//   support  -> contact@ (or a dedicated supporters inbox)

export const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export const WEB3FORMS_KEYS = {
  // Single key for now -> delivers to bitcoinpolicyin@gmail.com. partners/press
  // fall back to `general` until per-alias keys are created (see contactKey).
  general: "4627d93a-8a1e-4835-bee5-4d93dcf8cbe9",
  partners: "",
  press: "",
  support: "4627d93a-8a1e-4835-bee5-4d93dcf8cbe9",
} as const;

export const CONTACT_PURPOSES = [
  { value: "general", label: "General enquiry" },
  { value: "partners", label: "Partnership" },
  { value: "press", label: "Press & media" },
] as const;

export type ContactPurpose = (typeof CONTACT_PURPOSES)[number]["value"];

export const SUPPORT_ROLES = [
  "Citizen / individual",
  "Researcher / academic",
  "Industry / builder",
  "Policy / government",
  "Student",
  "Other",
] as const;

// Destination key for a contact purpose, falling back to the general inbox.
export function contactKey(purpose: ContactPurpose): string {
  return WEB3FORMS_KEYS[purpose] || WEB3FORMS_KEYS.general;
}

export const contactEnabled = (): boolean => Boolean(WEB3FORMS_KEYS.general);
export const supportEnabled = (): boolean => Boolean(WEB3FORMS_KEYS.support);
