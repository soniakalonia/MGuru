import {
  Compass, GraduationCap, Award, Building2, Repeat, Target, BookOpen, Zap,
  ClipboardCheck, Users, ShieldCheck, type LucideIcon,
} from 'lucide-react';

const map: Record<string, LucideIcon> = {
  Compass, GraduationCap, Award, Building2, Repeat, Target,
  BookOpen, Zap, ClipboardCheck, Users, ShieldCheck,
  // Add any additional icons if needed
};

export default function Icon({ name, className }: { name: string; className?: string }) {
  const C = map[name] ?? Compass;
  return <C className={className} />;
}