"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Breadcrumb from "../components/Breadcrumb";

const options = [
  "5 dakika – Küçük ama istikrarlı adımlarla ilerlemek istiyorum.",
  "10 dakika – Kısa ama etkili bir rutin oluşturmak istiyorum.",
  "15 dakika – İçerikleri biraz daha derinlemesine incelemek istiyorum.",
  "20-30 dakika – Günlük olarak uygulamayı aktif kullanıp yeni alışkanlıklar geliştirmek istiyorum.",
  "Günlük kullanım sürem değişebilir.",
];

export default function DailyTimePage() {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleContinue = () => {
    if (selectedOption) {
      router.push("/profile"); // devam edilecek sayfa
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#1a4d3a] px-4 py-8">
      <div className="mx-auto w-full max-w-2xl">
        <Breadcrumb currentPage="Daily Time" />
      </div>

      <div className="mx-auto w-full max-w-2xl space-y-6">
        <h1 className="text-center text-2xl font-semibold text-white">
          Odyssey'e günlük ne kadar vakit ayırmak istiyorsunuz?
        </h1>
        <p className="text-center text-base text-white/80">
          Lütfen sadece bir seçenek işaretleyin
        </p>

        <div className="space-y-3">
          {options.map((option, index) => {
            const isSelected = selectedOption === option;

            return (
              <label
                key={index}
                className={`flex cursor-pointer items-start gap-3 rounded-2xl border-2 p-4 transition-all ${
                  isSelected
                    ? "border-yellow-400 bg-yellow-400/10"
                    : "border-white/30 bg-white/5 hover:border-white/50"
                }`}
              >
                <input
                  type="radio"
                  name="dailyTime"
                  checked={isSelected}
                  onChange={() => setSelectedOption(option)}
                  className="mt-1 h-5 w-5 cursor-pointer rounded-full border-2 border-white/50 bg-transparent text-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-[#1a4d3a]"
                />
                <span className="flex-1 text-base text-white">{option}</span>
              </label>
            );
          })}
        </div>

        <div className="pt-4">
          <button
            onClick={handleContinue}
            disabled={!selectedOption}
            className={`w-full rounded-2xl px-6 py-4 text-lg font-semibold text-black transition-all ${
              selectedOption
                ? "bg-yellow-400 hover:bg-yellow-500 active:scale-95"
                : "bg-yellow-400/50 cursor-not-allowed"
            }`}
          >
            DEVAM ET
          </button>
        </div>
      </div>
    </div>
  );
}
