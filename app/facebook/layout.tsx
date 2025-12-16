export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section style={{ display: "flex" }}>
      <aside style={{ width: 200 }}>📂 Sidebar</aside>

      <div style={{ flex: 1 }}>{children}</div>
    </section>
  );
}
