interface KpiCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  color: string;
}

const KpiCard = ({ title, value, change, icon, color }: KpiCardProps) => (
  <div className={`p-4 rounded-lg shadow-md bg-white flex-1`}>
    <div className="flex justify-between items-center">
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <h2 className="text-xl font-bold">{value}</h2>
        <p className={`text-sm mt-1 ${color}`}>{change}</p>
      </div>
      <div>{icon}</div>
    </div>
  </div>
);

export default KpiCard;
