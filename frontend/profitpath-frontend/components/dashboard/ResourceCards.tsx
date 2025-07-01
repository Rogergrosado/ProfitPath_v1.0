'use client';

const resources = [
  { title: 'Amazon PPC Optimization', subtitle: 'Webinar - June 15, 2023' },
  { title: 'Inventory Management Guide', subtitle: 'E-Book - May 22, 2023' },
  { title: 'Q3 Selling Strategies', subtitle: 'Workshop - July 5, 2023' },
  { title: 'Product Photography Tips', subtitle: 'Tutorial - June 8, 2023' },
  { title: 'Scaling Your FBA Business', subtitle: 'Course - Ongoing' },
];

export default function ResourceCards() {
  return (
    <section className="mt-10">
      <h2 className="text-lg font-semibold mb-3">Resources & Learning</h2>
      <div className="flex overflow-x-auto gap-4 pb-4">
        {resources.map(({ title, subtitle }) => (
          <div
            key={title}
            className="flex-none w-64 bg-white p-4 rounded-lg shadow text-sm"
          >
            <h3 className="font-semibold mb-1">{title}</h3>
            <p className="text-gray-500">{subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
