"use client";

import { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";


export default function JournalPage() {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Ay isimleri
  const months = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ];

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Ayın ilk günü ve toplam gün sayısı
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Takvim kutuları
  const calendarDays = [];

  // BOŞ KUTULAR (Ayın ilk gününden önce)
  for (let i = 0; i < (firstDay === 0 ? 6 : firstDay - 1); i++) {
    calendarDays.push(<div key={"empty-" + i}></div>);
  }

  // GÜNLER
  for (let d = 1; d <= daysInMonth; d++) {
    calendarDays.push(
      <div
        key={d}
        className="p-3 text-center bg-white rounded-lg shadow hover:bg-yellow-200 cursor-pointer"
      >
        {d}
      </div>
    );
  }

  // Ay değiştir
  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };
  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  return (
    <div className="min-h-screen bg-sky-100 p-6">
      <div className="mx-auto w-full max-w-2xl text- ">
        <Breadcrumb currentPage="journal" />
      </div>
      {/* TITLE */}
      <h1 className="text-3xl font-bold text-center mb-6">Günlük (Journal)</h1>

      {/* CALENDAR BOX */}
      <div className="bg-yellow-300 max-w-3xl mx-auto p-6 rounded-2xl shadow">
        {/* Month Selector */}
        <div className="flex justify-between mb-4">
          <button
            onClick={prevMonth}
            className="px-3 py-1 bg-white shadow rounded hover:bg-gray-200"
          >
            ◀
          </button>

          <h2 className="text-xl font-semibold">
            {months[month]} {year}
          </h2>

          <button
            onClick={nextMonth}
            className="px-3 py-1 bg-white shadow rounded hover:bg-gray-200"
          >
            ▶
          </button>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2 text-sm font-medium">
          {["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"].map((day) => (
            <div key={day} className="text-center font-semibold text-gray-700">
              {day}
            </div>
          ))}

          {calendarDays}
        </div>
      </div>

      {/* JOURNAL MODES */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* HIZLI MOD */}
        <div className="bg-white p-6 shadow rounded-xl">
          <h3 className="text-xl font-bold mb-3 text-green-700">
            Hızlı Mod (30 saniye)
          </h3>

          <ul className="text-sm space-y-3">
            <li>• Bugün nasıldım?</li>
            <li>• Bugün iyi giden 1 şey</li>
            <li>• Kendim için yaptığım 1 mini adım</li>
          </ul>
        </div>

        {/* YAVAŞ MOD */}
        <div className="bg-white p-6 shadow rounded-xl">
          <h3 className="text-xl font-bold mb-3 text-red-700">
            Yavaş Mod (1–2 dakika)
          </h3>

          <ul className="text-sm space-y-3">
            <li>• Duygu</li>
            <li>• Bedendeki yeri</li>
            <li>• Düşünce</li>
            <li>• İhtiyaç</li>
            <li>• Küçük çözüm adımı</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
