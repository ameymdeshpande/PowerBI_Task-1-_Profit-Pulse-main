import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const categoryData = [
  { category: 'Electronics', sales: 245000, orders: 1250 },
  { category: 'Clothing', sales: 189000, orders: 2100 },
  { category: 'Home & Garden', sales: 156000, orders: 890 },
  { category: 'Sports', sales: 134000, orders: 750 },
  { category: 'Books', sales: 98000, orders: 1800 },
  { category: 'Beauty', sales: 87000, orders: 980 },
];

export const CategoryChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sales by Category</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={categoryData} layout="horizontal">
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              type="number"
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
            />
            <YAxis 
              type="category"
              dataKey="category" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              width={100}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '6px',
              }}
              formatter={(value: number, name: string) => [
                name === 'sales' ? `$${value.toLocaleString()}` : value.toLocaleString(),
                name === 'sales' ? 'Sales' : 'Orders'
              ]}
            />
            <Bar 
              dataKey="sales" 
              fill="hsl(var(--chart-primary))"
              radius={[0, 4, 4, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};