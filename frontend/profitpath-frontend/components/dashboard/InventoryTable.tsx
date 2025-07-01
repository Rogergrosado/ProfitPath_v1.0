'use client';

const inventory = [
  { product: 'Wireless Earbuds', sku: 'WE-001', stock: 145, reorder: 50, status: 'Good' },
  { product: 'Phone Stand', sku: 'PS-002', stock: 32, reorder: 40, status: 'Low' },
  { product: 'USB-C Cable', sku: 'UC-003', stock: 78, reorder: 30, status: 'Good' },
  { product: 'Power Bank', sku: 'PB-004', stock: 12, reorder: 25, status: 'Critical' },
  { product: 'Bluetooth Speaker', sku: 'BS-005', stock: 54, reorder: 20, status: 'Good' },
];

export default function InventoryTable() {
  return (
    <div className="flex-1 bg-white p-6 rounded-lg shadow overflow-x-auto">
      <h2 className="text-lg font-semibold mb-4">Inventory Overview</h2>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-gray-600 border-b">
            <th className="pb-2">Product</th>
            <th className="pb-2">SKU</th>
            <th className="pb-2">Stock</th>
            <th className="pb-2">Reorder Point</th>
            <th className="pb-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item.sku} className="border-b last:border-none">
              <td className="py-2">{item.product}</td>
              <td>{item.sku}</td>
              <td>{item.stock}</td>
              <td>{item.reorder}</td>
              <td className={`font-medium ${item.status === 'Critical' ? 'text-red-600' : item.status === 'Low' ? 'text-yellow-600' : 'text-green-600'}`}>
                {item.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
