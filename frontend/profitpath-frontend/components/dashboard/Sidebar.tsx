const Sidebar = () => (
  <aside className="bg-gray-900 text-white h-screen w-60 p-4 fixed">
    <h2 className="text-2xl font-bold mb-6">FBA Manager</h2>
    <nav className="space-y-4">
      {['Dashboard', 'Inventory', 'Analytics', 'Orders', 'Settings', 'Help'].map(label => (
        <div key={label} className="hover:text-blue-400 cursor-pointer">{label}</div>
      ))}
    </nav>
    <div className="absolute bottom-4 text-sm text-gray-400">Logout</div>
  </aside>
);

export default Sidebar;
