import React from "react";

const menuItems = [
  {
    name: "Dorade Royale Grillée",
    description: "Dorade fraîche grillée aux herbes méditerranéennes",
    price: "2800 DA",
    image:
      "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?auto=format&fit=crop&q=80",
  },
  {
    name: "Fruits de Mer Mixtes",
    description: "Assortiment de crevettes, calamars et moules",
    price: "3200 DA",
    image:
      "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&q=80",
  },
  {
    name: "Soupe de Poisson",
    description: "Soupe traditionnelle aux poissons locaux",
    price: "1200 DA",
    image:
      "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?auto=format&fit=crop&q=80",
  },
  {
    name: "Paella aux Fruits de Mer",
    description: "Riz parfumé aux fruits de mer et safran",
    price: "2600 DA",
    image:
      "https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&q=80",
  },
];

export default function Menu() {
  return (
    <section id="menu" className="py-20 bg-gray-50 h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Notre Menu</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Des plats préparés avec les meilleurs poissons frais de la journée,
            sélectionnés directement auprès de nos pêcheurs locaux.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row"
            >
              <div className="md:w-1/2 h-48 ">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:w-1/2 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">
                    {item.price}
                  </span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    Commander
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
