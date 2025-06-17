const inventoryData = [
  { product: "Wireless Earbuds", sku: "WE-001", stock: 145, reorder: 50, status: "Good" },
  { product: "Phone Stand", sku: "PS-002", stock: 32, reorder: 40, status: "Low" },
  { product: "USB-C Cable", sku: "UC-003", stock: 78, reorder: 30, status: "Good" },
  { product: "Power Bank", sku: "PB-004", stock: 12, reorder: 25, status: "Critical" },
  { product: "Bluetooth Speaker", sku: "BS-005", stock: 54, reorder: 20, status: "Good" },
];

const InventoryTable = () => (
  <div className="bg-white p-4 rounded-lg shadow-md w-full md:w-1/2">
    <h3 className="text-md font-medium mb-4">Inventory Status</h3>
    <table className="w-full text-sm">
      <thead>
        <tr className="text-left text-gray-500 border-b">
          <th>Product</th><th>SKU</th><th>Stock</th><th>Reorder</th><th>Status</th>
        </tr>
      </thead>
      <tbody>
        {inventoryData.map((item, idx) => (
          <tr key={idx} className="border-b">
            <td>{item.product}</td>
            <td>{item.sku}</td>
            <td>{item.stock}</td>
            <td>{item.reorder}</td>
            <td>
              <span className={`text-xs px-2 py-1 rounded-full
                ${item.status === "Good" ? "bg-green-100 text-green-700" :
                  item.status === "Low" ? "bg-yellow-100 text-yellow-700" :
                  "bg-red-100 text-red-700"}`}>
                {item.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default InventoryTable;
