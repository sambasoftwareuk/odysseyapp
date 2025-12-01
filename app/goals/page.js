"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const goals = [
  "Stres ve kaygımı daha iyi yönetmek istiyorum.",
  "Duygularımı daha iyi anlamak ve ifade etmek istiyorum.",
  "Özgüvenimi ve kendime olan saygımı güçlendirmek istiyorum.",
  "Kendime daha nazik davranmayı öğrenmek istiyorum.",
  "Günlük hayatımı düzene sokup küçük alışkanlıklar kazanmak istiyorum.",
  "İlişkilerimi ve iletişimimi güçlendirmek istiyorum.",
  "Enerjimi ve motivasyonumu toparlamak istiyorum.",
  "Hayatıma daha fazla anlam ve yön katmak istiyorum.",
  "Zor bir dönemden geçiyorum, küçük destek adımlarına ihtiyacım var.",
  "Emin değilim, sadece keşfetmek istiyorum.",
];

export default function GoalsPage() {
  const router = useRouter();
  const [selectedGoals, setSelectedGoals] = useState([]);

  const handleCheckboxChange = (goal) => {
    if (selectedGoals.includes(goal)) {
      // Seçimi kaldır
      setSelectedGoals(selectedGoals.filter((g) => g !== goal));
    } else {
      // Yeni seçim ekle (maksimum 3)
      if (selectedGoals.length < 3) {
        setSelectedGoals([...selectedGoals, goal]);
      }
    }
  };

  const handleContinue = () => {
    if (selectedGoals.length === 3) {
      router.push("/next-page");
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#1a4d3a] px-4 py-8">
      <div className="mx-auto w-full max-w-2xl space-y-6">
        <h1 className="text-center text-2xl font-semibold text-white">
          Hedeflerinizi Seçin
        </h1>
        <p className="text-center text-base text-white/80">
          Lütfen size en uygun 3 seçeneği işaretleyin
        </p>

        <div className="space-y-3">
          {goals.map((goal, index) => {
            const isSelected = selectedGoals.includes(goal);
            const isDisabled = !isSelected && selectedGoals.length >= 3;

            return (
              <label
                key={index}
                className={`flex cursor-pointer items-start gap-3 rounded-2xl border-2 p-4 transition-all ${
                  isSelected
                    ? "border-yellow-400 bg-yellow-400/10"
                    : isDisabled
                    ? "border-white/20 bg-white/5 opacity-50"
                    : "border-white/30 bg-white/5 hover:border-white/50"
                }`}
              >
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => handleCheckboxChange(goal)}
                  disabled={isDisabled}
                  className="mt-1 h-5 w-5 cursor-pointer rounded border-2 border-white/50 bg-transparent text-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-[#1a4d3a] disabled:cursor-not-allowed"
                />
                <span className="flex-1 text-base text-white">{goal}</span>
              </label>
            );
          })}
        </div>

        <div className="pt-4">
          <p className="mb-4 text-center text-sm text-white/70">
            {selectedGoals.length}/3 seçim yapıldı
          </p>
          <button
            onClick={handleContinue}
            disabled={selectedGoals.length !== 3}
            className={`w-full rounded-2xl px-6 py-4 text-lg font-semibold text-black transition-all ${
              selectedGoals.length === 3
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
