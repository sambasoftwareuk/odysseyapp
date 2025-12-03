"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ProgressRing from "../components/ProgressRing";
import Breadcrumb from "../components/Breadcrumb";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("goals");
  const router = useRouter();

  return (
    <div className="bg-green-700  min-h-screen w-full py-6 px-5 md:px-8 lg:px-20 text-white">
      <div className="mx-auto w-full max-w-2xl">
        <Breadcrumb currentPage="Profil" />
      </div>
      {/* Profile + Info */}
      <div className="flex items-center justify-evenly gap-4">
        {/* Avatar */}
        <div className=" rounded-full overflow-hidden bg-white shadow flex-shrink-0">
          <Image
            src="/avatar.png"
            alt="Avatar"
            width={140}
            height={140}
            className="object-cover"
          />
        </div>

        {/* Info Box */}
        <div className="bg-green-400/50  w-[40%] md:w-[25%] rounded-lg p-3 text-sm md:text-base">
          <p className="font-semibold text-lg md:text-xl">Muhsin</p>
          <p>
            Mental Skor: <span className="font-bold">5/5</span>
          </p>
          <p>
            Sağlık Skoru: <span className="font-bold">5/5</span>
          </p>
          <p>
            Alışkanlık Skoru: <span className="font-bold">5/5</span>
          </p>
          <p>
            Rozetleriniz: <span className="font-bold">12</span>
          </p>
        </div>
      </div>

      {/* Emoji Section */}
      <div className="text-center my-14">
        <p className="mb-2 text-sm md:text-base">
          Bugün nasıl hissediyorsunuz?
        </p>
        <div className="flex justify-center gap-3 text-2xl md:text-3xl">
          {["😭", "😔", "😐", "😲", "😀", "😁"].map((emoji, index) => (
            <button
              key={index}
              className="hover:scale-125 transition-transform duration-150"
            >
              {emoji}
            </button>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-16 flex justify-around text-sm font-semibold">
        <button
          onClick={() => setActiveTab("goals")}
          className={`flex flex-col items-center gap-1 ${
            activeTab === "goals" ? "text-yellow-300" : "text-white"
          }`}
        >
          <span className="text-xl">❤️</span>
          Hedefler
        </button>
        <button
          onClick={() => setActiveTab("daily")}
          className={`flex flex-col items-center gap-1 ${
            activeTab === "daily" ? "text-yellow-300" : "text-white"
          }`}
        >
          <span className="text-xl">🕘</span>
          Günlük Görevler
        </button>
      </div>
      <div
        className="bg-yellow-400 w-screen relative left-1/2 right-1/2 
    -ml-[50vw] -mr-[50vw] text-center py-14 md:py-20 mt-6"
      >
        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-6 md:gap-8  p-6">
          {activeTab === "daily" && (
            <>
              <div className="text-3xl md:text-4xl font-bold bg-white/30 py-4 rounded-xl shadow">
                Kitap Oku
              </div>

              <div className="text-3xl md:text-4xl font-bold bg-white/30 py-4 rounded-xl shadow">
                Dua Et
              </div>
            </>
          )}

          {activeTab === "goals" && (
            <>
              <div className="grid grid-cols-2 gap-4 place-items-center">
                <div>
                  <ProgressRing progress={1} label="Stres" />
                </div>
                <div>
                  <ProgressRing progress={2} label="Duygu Yönetimi" />
                </div>
                <div className="col-span-2 justify-self-center">
                  <ProgressRing
                    progress={4}
                    label="Kişisel Gelişim"
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="mt-16">
        <p className="py-2 text-center bg-white text-gray-700 text-xs w-[40%] md:w-[25%] mx-auto mt-4 rounded-md shadow-sm">
          Welcome!
        </p>
      </div>
    </div>
  );
}
