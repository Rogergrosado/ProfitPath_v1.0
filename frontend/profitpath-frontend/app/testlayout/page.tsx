export default function TestLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100 text-white">
      {/* Sidebar */}
      <aside className="w-64 h-screen bg-gray-900 p-6 flex flex-col">
        <h2 className="text-2xl font-bold mb-6">FBA Manager</h2>
        <nav className="space-y-4">
          <a href="#" className="block hover:text-blue-400">Dashboard</a>
          <a href="#" className="block hover:text-blue-400">Inventory</a>
          <a href="#" className="block hover:text-blue-400">Analytics</a>
        </nav>
        <div className="mt-auto text-sm text-gray-400 pt-6 border-t border-gray-800">
          Logout
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 text-black">
        <h1 className="text-3xl font-bold mb-4">Test Layout</h1>
        <p>This should appear beside the sidebar, not below it.</p>
      </main>
    </div>
  );
}

