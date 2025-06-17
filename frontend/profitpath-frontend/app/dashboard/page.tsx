import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import Header from '@/components/dashboard/Header';
import KpiCard from '@/components/dashboard/KpiCard';
import SalesChart from '@/components/dashboard/SalesChart';
import InventoryTable from '@/components/dashboard/InventoryTable';
import ResourceCard from '@/components/dashboard/ResourceCard';
import { TrendingUp, DollarSign, Package, Percent } from 'lucide-react';

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardLayout>
        <Header />
        <main className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <KpiCard title="Revenue" value="$24,532" change="+12.5%" icon={<DollarSign />} color="text-green-600" />
            <KpiCard title="Profit" value="$8,245" change="+8.3%" icon={<TrendingUp />} color="text-green-600" />
            <KpiCard title="Units Sold" value="1,243" change="+15.2%" icon={<Package />} color="text-green-600" />
            <KpiCard title="Conversion Rate" value="3.2%" change="-0.5%" icon={<Percent />} color="text-red-600" />
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <SalesChart />
            <InventoryTable />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Resources & Learning</h3>
            <ResourceCard />
          </div>
        </main>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
