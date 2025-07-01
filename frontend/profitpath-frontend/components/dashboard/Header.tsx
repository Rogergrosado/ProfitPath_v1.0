type Kpi = { label: string; value: string; danger?: boolean };

const kpis: Kpi[] = [
  { label: 'Revenue', value: '$24,532' },
  { label: 'Profit', value: '$8,245' },
  { label: 'Units Sold', value: '1,243' },
  { label: 'Conversion Rate', value: '3.2%', danger: true },
];

export default function Header() {
  return (
    <header className="mb-6">
      <h1 className="text-2xl font-bold mb-1">Welcome back, John!</h1>
      <p className="text-gray-600">Here's what's happening with your store today.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {kpis.map(({ label, value, danger }) => (
          <div
            key={label}
            className={`bg-white p-4 rounded-lg shadow text-sm ${danger ? 'text-red-600' : ''}`}
          >
            {label}
            <br />
            <strong className="text-lg">{value}</strong>
          </div>
        ))}
      </div>
    </header>
  );
}
