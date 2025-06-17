'use client';

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Electronics', value: 400 },
  { name: 'Home & Kitchen', value: 300 },
  { name: 'Beauty', value: 300 },
  { name: 'Sports', value: 200 },
  { name: 'Toys', value: 100 }
];

const COLORS = ['#6366F1', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];

const SalesChart = () => (
  <div className="bg-white p-4 rounded-lg shadow-md w-full md:w-1/2">
    <h3 className="text-md font-medium mb-4">Sales by Category</h3>
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie data={data} dataKey="value" nameKey="name" outerRadius={90}>
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  </div>
);

export default SalesChart;
