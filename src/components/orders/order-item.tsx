import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

interface OrderItemProps {
  orderNumber: string;
  table: string;
  items: number;
  status: 'preparing' | 'ready' | 'completed';
  timestamp: Date;
}

const statusVariants = {
  preparing: 'warning',
  ready: 'success',
  completed: 'default',
} as const;

export function OrderItem({ orderNumber, table, items, status, timestamp }: OrderItemProps) {
  return (
    <div className="flex items-center justify-between py-3 border-b last:border-0">
      <div className="flex items-center space-x-4">
        <div>
          <p className="font-medium">{orderNumber}</p>
          <p className="text-sm text-gray-500">{table} • {items} items</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-500">
          {format(timestamp, 'p')}
        </span>
        <Badge variant={statusVariants[status]}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Badge>
      </div>
    </div>
  );
}