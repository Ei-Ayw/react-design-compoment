export default function DashboardPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">仪表盘</h1>
      <p className="text-sm text-muted-foreground">概览你的业务关键指标。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="rounded-lg border p-4">
          <p className="text-xs text-muted-foreground">今日订单</p>
          <p className="text-xl font-semibold">128</p>
        </div>
        <div className="rounded-lg border p-4">
          <p className="text-xs text-muted-foreground">转化率</p>
          <p className="text-xl font-semibold">3.2%</p>
        </div>
        <div className="rounded-lg border p-4">
          <p className="text-xs text-muted-foreground">库存预警</p>
          <p className="text-xl font-semibold">5</p>
        </div>
      </div>
    </div>
  );
}


