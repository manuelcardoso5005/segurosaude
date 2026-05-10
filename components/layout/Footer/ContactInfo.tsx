import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from "@/i18n/navigation";
import { ContactInfoProps } from "@/types/FooterTypes"

export default function ContactInfo({
  phone,
  email,
  address,
}: ContactInfoProps) {
  return (
    <div className="mt-6 space-y-3">
      <Link
        href={`tel:${phone}`}
        className="flex items-center gap-3 text-sm transition-colors hover:text-blue-400"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5">
          <Phone className="h-4 w-4" />
        </div>

        {phone}
      </Link>

      <Link
        href={`mailto:${email}`}
        className="flex items-center gap-3 text-sm transition-colors hover:text-blue-400"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5">
          <Mail className="h-4 w-4" />
        </div>

        {email}
      </Link>

      <div className="flex items-start gap-3 text-sm">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5">
          <MapPin className="h-4 w-4" />
        </div>

        <span className="leading-relaxed whitespace-pre-line">
          {address}
        </span>
      </div>
    </div>
  );
}