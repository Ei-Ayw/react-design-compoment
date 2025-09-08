export default function ProductsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">产品列表</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, idx) => (
          <div key={idx} className="rounded-lg border p-4">
            <p className="font-medium">产品 #{idx + 1}</p>
            <p className="text-xs text-muted-foreground mt-1">这是一段产品描述。</p>
          </div>
        ))}
      </div>
    </div>
  );
}


