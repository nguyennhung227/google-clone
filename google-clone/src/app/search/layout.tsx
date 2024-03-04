import { SearchHeader } from "@/components/SearchHeader";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen">
      <SearchHeader />
      <div className="flex py-10 justify-start w-full">{children}</div>
    </div>
  );
}
