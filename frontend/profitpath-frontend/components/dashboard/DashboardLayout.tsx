const DashboardLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex">
    <Sidebar />
    <div className="flex-1 md:ml-60 ml-0 bg-gray-50 min-h-screen">{children}</div>
  </div>
);

export default DashboardLayout;
