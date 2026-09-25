import {
  BadgeCheck,
  Columns3,
  Handshake,
  MapPin,
  Sparkles,
  UtensilsCrossed,
  Wifi,
  type LucideIcon,
} from "lucide-react";

export type IconName =
  | "column"
  | "utensils"
  | "concierge"
  | "sparkle"
  | "wifi"
  | "hands"
  | "location";

const iconMap: Record<IconName, LucideIcon> = {
  column: Columns3,
  utensils: UtensilsCrossed,
  concierge: BadgeCheck,
  sparkle: Sparkles,
  wifi: Wifi,
  hands: Handshake,
  location: MapPin,
};

export default function Icon({
  name,
  className,
  strokeWidth = 1.8,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}) {
  const Component = iconMap[name];

  return <Component className={className} strokeWidth={strokeWidth} />;
}
