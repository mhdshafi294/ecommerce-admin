import prismadb from "@/lib/prismadb";

interface DashboardPageProps {
  params: {
    storeId: string;
  };
}

const DashboardPage: React.FC<DashboardPageProps> = async ({ params }) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  });

  return (
    <div className="flex-col">
      <div>Hello hello</div>
      <div>Active Store: {store?.name}</div>
    </div>
  );
};

export default DashboardPage;
