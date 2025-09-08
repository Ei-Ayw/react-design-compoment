import Link from "next/link";

export default function BusinessLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <header className="border-b border-border bg-background/60 backdrop-blur">
        <nav className="mx-auto max-w-5xl px-6 py-4 flex items-center gap-6">
          <Link className="font-semibold hover:underline" href="/dashboard">
            仪表盘
          </Link>
          <Link className="font-semibold hover:underline" href="/products">
            产品
          </Link>
          <Link className="font-semibold hover:underline" href="/orders">
            订单
          </Link>
        </nav>
      </header>
      <main className="mx-auto max-w-5xl px-6 py-8">
        {children}
      </main>
    </div>
  );
}


