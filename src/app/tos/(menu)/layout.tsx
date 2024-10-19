import Header from "../components/header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-screen flex-col p-4">
      <Header className="border-b-2 border-cyan-700 pb-4 text-cyan-700">
        Выберите нужную услугу:
      </Header>
      {children}
    </main>
  );
}
