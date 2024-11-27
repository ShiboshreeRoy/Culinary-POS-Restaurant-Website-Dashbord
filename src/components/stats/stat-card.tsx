import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  icon: React.ElementType;
  label: string;
  value: string;
  trend: string;
  trendDirection: 'up' | 'down';
  className?: string;
}

export function StatCard({ icon: Icon, label, value, trend, trendDirection, className }: StatCardProps) {
  return (
    <Card className={cn("hover:shadow-md transition-shadow", className)}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm font-medium">{label}</p>
            <h3 className="text-2xl font-bold mt-1">{value}</h3>
          </div>
          <div className={cn(
            "p-3 rounded-lg",
            trendDirection === 'up' ? 'bg-emerald-100' : 'bg-red-100'
          )}>
            <Icon className={cn(
              "h-6 w-6",
              trendDirection === 'up' ? 'text-emerald-600' : 'text-red-600'
            )} />
          </div>
        </div>
        <p className="text-sm mt-2">
          <span className={cn(
            trendDirection === 'up' ? 'text-emerald-600' : 'text-red-600'
          )}>
            {trend}
          </span>
          {' '}vs last month
        </p>
      </CardContent>
    </Card>
  );
}