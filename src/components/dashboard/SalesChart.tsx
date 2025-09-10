import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const salesData = [
  { month: 'Jan', sales: 65000, profit: 15000 },
  { month: 'Feb', sales: 72000, profit: 18000 },
  { month: 'Mar', sales: 68000, profit: 16000 },
  { month: 'Apr', sales: 85000, profit: 22000 },
  { month: 'May', sales: 92000, profit: 25000 },
  { month: 'Jun', sales: 88000, profit: 23000 },
  { month: 'Jul', sales: 95000, profit: 27000 },
  { month: 'Aug', sales: 102000, profit: 30000 },
  { month: 'Sep', sales: 98000, profit: 28000 },
  { month: 'Oct', sales: 110000, profit: 33000 },
  { month: 'Nov', sales: 115000, profit: 35000 },
  { month: 'Dec', sales: 125000, profit: 38000 },
];

export const SalesChart = () => {
  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Sales & Profit Trend
          <span className="text-sm font-normal text-muted-foreground">(Last 12 Months)</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="month" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '6px',
              }}
              formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="sales" 
              stroke="hsl(var(--chart-primary))" 
              strokeWidth={3}
              name="Sales"
              dot={{ fill: 'hsl(var(--chart-primary))', strokeWidth: 2, r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="profit" 
              stroke="hsl(var(--chart-secondary))" 
              strokeWidth={3}
              name="Profit"
              dot={{ fill: 'hsl(var(--chart-secondary))', strokeWidth: 2, r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};