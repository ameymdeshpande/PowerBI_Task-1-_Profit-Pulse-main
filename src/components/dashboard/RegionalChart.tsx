import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const regionalData = [
  { name: 'North America', value: 425000, percentage: 35 },
  { name: 'Europe', value: 365000, percentage: 30 },
  { name: 'Asia Pacific', value: 245000, percentage: 20 },
  { name: 'Latin America', value: 183000, percentage: 15 },
];

const COLORS = [
  'hsl(var(--chart-primary))',
  'hsl(var(--chart-secondary))',
  'hsl(var(--chart-tertiary))',
  'hsl(var(--chart-quaternary))',
];

export const RegionalChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sales by Region</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={regionalData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percentage }) => `${name} ${percentage}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {regionalData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '6px',
              }}
              formatter={(value: number) => [`$${value.toLocaleString()}`, 'Sales']}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};