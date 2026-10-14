type P = { className?: string };
const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, viewBox: "0 0 24 24", "aria-hidden": true };

export const PhoneIcon = ({ className = "h-5 w-5" }: P) => (
  <svg {...base} className={className}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /></svg>
);
export const MailIcon = ({ className = "h-5 w-5" }: P) => (
  <svg {...base} className={className}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
);
export const PinIcon = ({ className = "h-5 w-5" }: P) => (
  <svg {...base} className={className}><path d="M12 21s-7-5.8-7-11a7 7 0 0 1 14 0c0 5.2-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>
);
export const ClockIcon = ({ className = "h-5 w-5" }: P) => (
  <svg {...base} className={className}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
);
export const CheckIcon = ({ className = "h-5 w-5" }: P) => (
  <svg {...base} className={className}><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>
);
export const ArrowIcon = ({ className = "h-4 w-4" }: P) => (
  <svg {...base} className={className}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const LeafIcon = ({ className = "h-6 w-6" }: P) => (
  <svg {...base} className={className}><path d="M5 19c0-9 5-14 15-14 0 10-5 15-14 15" /><path d="M5 19c3-5 6-7 10-9" /></svg>
);
export const ShieldIcon = ({ className = "h-6 w-6" }: P) => (
  <svg {...base} className={className}><path d="M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6z" /><path d="m9 12 2 2 4-4" /></svg>
);
export const KeyIcon = ({ className = "h-6 w-6" }: P) => (
  <svg {...base} className={className}><circle cx="8" cy="15" r="4" /><path d="m11 12 9-9M16 7l3 3" /></svg>
);
export const CloseIcon = ({ className = "h-6 w-6" }: P) => (
  <svg {...base} className={className}><path d="M6 6l12 12M18 6 6 18" /></svg>
);
export const MenuIcon = ({ className = "h-6 w-6" }: P) => (
  <svg {...base} className={className}><path d="M4 8h16M4 16h16" /></svg>
);
export const ChevronIcon = ({ className = "h-4 w-4" }: P) => (
  <svg {...base} className={className}><path d="m6 9 6 6 6-6" /></svg>
);
