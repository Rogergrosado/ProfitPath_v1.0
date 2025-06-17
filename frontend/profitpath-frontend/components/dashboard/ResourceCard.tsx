const resourceData = [
  { title: "Amazon PPC Optimization", type: "Webinar", date: "June 15, 2023", color: "bg-blue-500" },
  { title: "Inventory Management Guide", type: "E-Book", date: "May 22, 2023", color: "bg-green-500" },
  { title: "Q3 Selling Strategies", type: "Workshop", date: "July 5, 2023", color: "bg-purple-500" },
  { title: "Product Photography Tips", type: "Tutorial", date: "June 8, 2023", color: "bg-yellow-500" },
  { title: "Scaling Your FBA Business", type: "Course", date: "Ongoing", color: "bg-indigo-500" },
];

const ResourceCard = () => (
  <div className="overflow-x-auto flex space-x-4 py-4">
    {resourceData.map((item, idx) => (
      <div key={idx} className={`min-w-[200px] p-4 rounded-lg text-white shadow-md ${item.color}`}>
        <div className="text-xs mb-1">{item.type}</div>
        <h4 className="font-semibold">{item.title}</h4>
        <p className="text-sm mt-1">{item.date}</p>
      </div>
    ))}
  </div>
);

export default ResourceCard;
