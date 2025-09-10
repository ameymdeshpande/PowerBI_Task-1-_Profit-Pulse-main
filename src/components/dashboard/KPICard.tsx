import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface KPICardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative';
  icon: LucideIcon;
  subtitle?: string;
}

export const KPICard = ({ title, value, change, changeType, icon: Icon, subtitle }: KPICardProps) => {
  const TrendIcon = changeType === 'positive' ? TrendingUp : TrendingDown;
  
  return (
    <Card className="transition-all duration-300 hover:shadow-lg border-0" style={{ boxShadow: 'var(--shadow-card)' }}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-foreground">{value}</span>
            {subtitle && <span className="text-sm text-muted-foreground">{subtitle}</span>}
          </div>
          
          <div className="flex items-center gap-1">
            <TrendIcon className={`h-4 w-4 ${changeType === 'positive' ? 'text-success' : 'text-destructive'}`} />
            <span className={`text-sm font-medium ${changeType === 'positive' ? 'text-success' : 'text-destructive'}`}>
              {change}
            </span>
            <span className="text-sm text-muted-foreground">vs last month</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};