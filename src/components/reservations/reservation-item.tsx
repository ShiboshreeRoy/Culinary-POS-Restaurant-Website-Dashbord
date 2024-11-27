import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

interface ReservationItemProps {
  name: string;
  time: Date;
  guests: number;
  status: 'confirmed' | 'pending' | 'cancelled';
  phone?: string;
  notes?: string;
}

const statusVariants = {
  confirmed: 'success',
  pending: 'warning',
  cancelled: 'danger',
} as const;

export function ReservationItem({ name, time, guests, status, phone, notes }: ReservationItemProps) {
  return (
    <div className="flex items-center justify-between py-3 border-b last:border-0 hover:bg-gray-50 transition-colors">
      <div>
        <div className="flex items-center space-x-2">
          <p className="font-medium">{name}</p>
          <Badge variant={statusVariants[status]}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        </div>
        <div className="mt-1 space-y-1">
          <p className="text-sm text-gray-500">
            {format(time, 'PPp')} • {guests} guests
          </p>
          {phone && (
            <p className="text-sm text-gray-500">
              📞 {phone}
            </p>
          )}
          {notes && (
            <p className="text-sm text-gray-500 italic">
              "{notes}"
            </p>
          )}
        </div>
      </div>
      <div className="flex space-x-2">
        <button className="text-sm text-emerald-600 hover:text-emerald-700">
          Edit
        </button>
        <button className="text-sm text-gray-600 hover:text-gray-700">
          Cancel
        </button>
      </div>
    </div>
  );
}