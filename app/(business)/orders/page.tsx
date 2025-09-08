export default function OrdersPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">订单列表</h1>
      <div className="overflow-x-auto rounded-lg border">
        <table className="w-full text-sm">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left p-3 font-medium">订单号</th>
              <th className="text-left p-3 font-medium">客户</th>
              <th className="text-left p-3 font-medium">金额</th>
              <th className="text-left p-3 font-medium">状态</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 8 }).map((_, idx) => (
              <tr key={idx} className="border-t">
                <td className="p-3">NO-{1000 + idx}</td>
                <td className="p-3">张三</td>
                <td className="p-3">¥{(99 + idx).toFixed(2)}</td>
                <td className="p-3">已支付</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


