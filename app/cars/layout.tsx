import CarSearch from "@/components/CarSearch";

export default function carListPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-50">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-4 min-h-screen">
        {/* Added flex and items-start to align the search form to the left */}
        <CarSearch />
        {children}
      </div>
    </div>
  );
}
