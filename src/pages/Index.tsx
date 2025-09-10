import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { KPICard } from "@/components/dashboard/KPICard";
import { SalesChart } from "@/components/dashboard/SalesChart";
import { CategoryChart } from "@/components/dashboard/CategoryChart";
import { RegionalChart } from "@/components/dashboard/RegionalChart";
import { TopProductsTable } from "@/components/dashboard/TopProductsTable";
import { DollarSign, TrendingUp, ShoppingCart, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <div className="container mx-auto px-6 py-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <KPICard
            title="Total Sales"
            value="$1,234,567"
            change="+12.5%"
            changeType="positive"
            icon={DollarSign}
            subtitle="Revenue"
          />
          <KPICard
            title="Total Profit"
            value="$345,890"
            change="+8.2%"
            changeType="positive"
            icon={TrendingUp}
            subtitle="Margin"
          />
          <KPICard
            title="Total Orders"
            value="8,945"
            change="+15.3%"
            changeType="positive"
            icon={ShoppingCart}
            subtitle="This month"
          />
          <KPICard
            title="Active Customers"
            value="12,456"
            change="-2.1%"
            changeType="negative"
            icon={Users}
            subtitle="Users"
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <SalesChart />
          <CategoryChart />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <RegionalChart />
          <TopProductsTable />
        </div>
      </div>
    </div>
  );
};

export default Index;
