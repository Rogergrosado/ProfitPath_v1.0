const DashboardLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex">
    <Sidebar />
    <div className="flex-1 ml-60 bg-gray-50 min-h-screen">{children}</div>
  </div>
);

export default DashboardLayout;
