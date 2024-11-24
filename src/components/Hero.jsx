import React from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div id="home" className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1615361200141-f45040f367be?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Découvrez les Saveurs
            <br />
            de la Méditerranée
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Une expérience culinaire unique avec les meilleurs poissons frais
            d'El Kala, servis dans un cadre exceptionnel avec vue sur mer.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg flex items-center justify-center hover:bg-blue-700 transition">
              Réserver une table
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg hover:bg-white/20 transition">
              Voir le menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
