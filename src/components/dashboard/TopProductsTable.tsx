import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const topProducts = [
  { id: 1, name: 'iPhone 15 Pro', category: 'Electronics', sales: 89500, units: 179, status: 'high' },
  { id: 2, name: 'MacBook Air M2', category: 'Electronics', sales: 78200, units: 89, status: 'high' },
  { id: 3, name: 'Nike Air Max', category: 'Sports', sales: 45600, units: 456, status: 'medium' },
  { id: 4, name: 'Samsung TV 55"', category: 'Electronics', sales: 42300, units: 67, status: 'medium' },
  { id: 5, name: 'Adidas Ultraboost', category: 'Sports', sales: 38900, units: 389, status: 'medium' },
];

export const TopProductsTable = () => {
  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader>
        <CardTitle>Top Performing Products</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-2 font-medium text-muted-foreground">Product</th>
                <th className="text-left py-3 px-2 font-medium text-muted-foreground">Category</th>
                <th className="text-right py-3 px-2 font-medium text-muted-foreground">Sales</th>
                <th className="text-right py-3 px-2 font-medium text-muted-foreground">Units</th>
                <th className="text-center py-3 px-2 font-medium text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {topProducts.map((product) => (
                <tr key={product.id} className="border-b hover:bg-muted/50 transition-colors">
                  <td className="py-4 px-2">
                    <div className="font-medium text-foreground">{product.name}</div>
                  </td>
                  <td className="py-4 px-2">
                    <span className="text-muted-foreground">{product.category}</span>
                  </td>
                  <td className="py-4 px-2 text-right">
                    <span className="font-medium">${product.sales.toLocaleString()}</span>
                  </td>
                  <td className="py-4 px-2 text-right">
                    <span className="text-muted-foreground">{product.units}</span>
                  </td>
                  <td className="py-4 px-2 text-center">
                    <Badge 
                      variant={product.status === 'high' ? 'default' : 'secondary'}
                      className={product.status === 'high' ? 'bg-success text-success-foreground' : ''}
                    >
                      {product.status === 'high' ? 'High' : 'Medium'}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};