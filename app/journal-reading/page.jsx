"use client";

import { useState } from "react";
import Breadcrumb from "../components/breadcrumb";

export default function JournalReadingPage() {
  // Taklit amaçlı günler
  const fakeDates = [
    "14 Ocak 2025",
    "15 Ocak 2025",
    "16 Ocak 2025",
    "17 Ocak 2025",
    "18 Ocak 2025",
  ];

  const [index, setIndex] = useState(2); // ortadaki gün seçili

  const prevDay = () => {
    if (index > 0) setIndex(index - 1);
  };

  const nextDay = () => {
    if (index < fakeDates.length - 1) setIndex(index + 1);
  };

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <div className="mx-auto w-full max-w-2xl">
        <Breadcrumb currentPage="Journal-reading" />
      </div>
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800">Günlük Oku</h1>

        <div className="flex gap-3">
          <button
            onClick={prevDay}
            className="px-3 py-1 bg-white border rounded shadow hover:bg-gray-100"
          >
            ◀ Prev
          </button>
          <button
            onClick={nextDay}
            className="px-3 py-1 bg-white border rounded shadow hover:bg-gray-100"
          >
            Next ▶
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* DATE BOX */}
          <div className="md:col-span-1 flex items-start justify-center md:justify-start">
            <div className="bg-yellow-200 px-5 py-4 rounded-xl shadow text-lg font-semibold text-gray-800">
              {fakeDates[index]}
            </div>
          </div>

          {/* TEXT AREA */}
          <div className="md:col-span-3">
            <h2 className="text-xl font-bold text-gray-700 mb-4">
              Bugünün Notu
            </h2>

            <p className="leading-7 text-gray-700 text-sm md:text-base">
              Hayat bazen yoğun, bazen sessiz, bazen de anlam arayışıyla
              doludur. Kendine bugün izin ver… Durmaya, nefes almaya,
              hissetmeye. Hissettiğin her şey geçici; ama senin kendine
              gösterdiğin şefkat kalıcıdır.
              <br />
              <br />
              Kendini zorlamadan, yargılamadan, yalnızca gözlemleyerek ilerle.
              Zihninde beliren düşünceler bir film şeridi gibi akıp gitsin.
              Hiçbirine tutunmak zorunda değilsin. Bedenine, kalbine ve zihnine
              küçük bir alan aç — sadece senin için.
              <br />
              <br />
              Bugün, kendinle kurduğun ilişkiyi bir nebze olsun
              yumuşatabilirsen… işte o zaman gerçek bir iyileşme başlar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
