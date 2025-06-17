const Header = () => (
  <div className="ml-60 p-6 flex justify-between items-center bg-white shadow-sm">
    <div>
      <h1 className="text-2xl font-semibold">Welcome back, John!</h1>
      <p className="text-sm text-gray-500">Here’s what's happening with your store today.</p>
    </div>
    <div className="flex items-center gap-4">
      <span className="text-gray-600">John Seller</span>
      <img src="/avatar.png" alt="avatar" className="w-8 h-8 rounded-full" />
    </div>
  </div>
);

export default Header;
