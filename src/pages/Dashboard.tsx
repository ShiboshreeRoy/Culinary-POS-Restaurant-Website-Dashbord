import { DollarSign, Users, ShoppingBag, TrendingUp, Plus, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { StatCard } from '@/components/stats/stat-card';
import { OrderItem } from '@/components/orders/order-item';
import { ReservationItem } from '@/components/reservations/reservation-item';
import Button from '@/components/ui/button';

export default function Dashboard() {
  const stats = [
    { 
      icon: DollarSign, 
      label: 'Total Revenue', 
      value: '$12,426', 
      trend: '+8.2%',
      trendDirection: 'up' as const
    },
    { 
      icon: Users, 
      label: 'Total Customers', 
      value: '2,142', 
      trend: '+5.1%',
      trendDirection: 'up' as const
    },
    { 
      icon: ShoppingBag, 
      label: 'Total Orders', 
      value: '856', 
      trend: '+12.5%',
      trendDirection: 'up' as const
    },
    { 
      icon: TrendingUp, 
      label: 'Avg. Order Value', 
      value: '$48.65', 
      trend: '-2.4%',
      trendDirection: 'down' as const
    },
  ];

  const orders = [
    {
      orderNumber: '#1001',
      table: 'Table 4',
      items: 3,
      status: 'preparing' as const,
      timestamp: new Date(Date.now() - 5 * 60000),
    },
    {
      orderNumber: '#1002',
      table: 'Table 7',
      items: 2,
      status: 'ready' as const,
      timestamp: new Date(Date.now() - 12 * 60000),
    },
    {
      orderNumber: '#1003',
      table: 'Takeaway',
      items: 1,
      status: 'completed' as const,
      timestamp: new Date(Date.now() - 25 * 60000),
    },
  ];

  const reservations = [
    {
      name: 'John Doe',
      time: new Date(2024, 2, 15, 18, 0),
      guests: 4,
      status: 'confirmed' as const,
      phone: '+1 (555) 123-4567',
      notes: 'Anniversary dinner, window seat preferred',
    },
    {
      name: 'Sarah Smith',
      time: new Date(2024, 2, 15, 19, 30),
      guests: 2,
      status: 'pending' as const,
      phone: '+1 (555) 987-6543',
    },
    {
      name: 'Mike Johnson',
      time: new Date(2024, 2, 15, 20, 0),
      guests: 6,
      status: 'confirmed' as const,
      notes: 'Birthday celebration',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-gray-600">Welcome back, Alex</p>
        </div>
        <div className="space-x-4">
          <Button variant="outline">Export Report</Button>
          <Button icon={Plus}>New Order</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">Active Orders</h3>
              <p className="text-sm text-gray-500 mt-1">Manage and track current orders</p>
            </div>
            <Button variant="outline" size="sm" icon={ArrowRight}>View All</Button>
          </CardHeader>
          <CardContent>
            <div className="divide-y divide-gray-100">
              {orders.map((order) => (
                <OrderItem key={order.orderNumber} {...order} />
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">Today's Reservations</h3>
              <p className="text-sm text-gray-500 mt-1">Manage upcoming bookings</p>
            </div>
            <Button variant="outline" size="sm" icon={ArrowRight}>View All</Button>
          </CardHeader>
          <CardContent>
            <div className="divide-y divide-gray-100">
              {reservations.map((reservation, index) => (
                <ReservationItem key={index} {...reservation} />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}