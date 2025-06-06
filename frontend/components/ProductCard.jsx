"use client";
export default function ProductCard({ product, onAdd }) {
  return (
    <div className="border rounded shadow p-4 flex flex-col items-center">
      {product.image && (
        <img src={product.image} alt={product.name} className="h-32 w-32 object-cover mb-2" />
      )}
      <h2 className="font-semibold text-lg mb-1">{product.name}</h2>
      <p className="text-gray-600 mb-2">{product.description}</p>
      <p className="font-bold mb-2">${product.price}</p>
      {onAdd && (
        <button
          onClick={() => onAdd(product)}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}
