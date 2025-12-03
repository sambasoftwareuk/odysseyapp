"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Breadcrumb from "../components/breadcrumb";

export default function JournalWritingPage() {
  const router = useRouter();

  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleSave = () => {
    // Database olmadığından direkt ana sayfaya dönüyoruz
    router.push("/journal");
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);

    // Database yok → sahte 1 saniyelik yükleme
    setTimeout(() => {
      setImage(URL.createObjectURL(file));
      setUploading(false);
    }, 700);
  };

  return (
    <div className="min-h-screen bg-sky-100 px-6 py-8">
      <div className="mx-auto w-full max-w-2xl">
        <Breadcrumb currentPage="Journal-writing" />
      </div>
      <h1 className="text-3xl font-bold text-center mb-6">
        Günlük Yaz (Journal Writing)
      </h1>

      <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
        {/* WRITING AREA */}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Bugün neler yaşadığını, nasıl hissettiğini buraya yazabilirsin..."
          className="w-full h-56 p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
        />

        {/* IMAGE PREVIEW */}
        {image && (
          <div className="mt-4">
            <p className="text-sm font-semibold mb-1">Eklenen Fotoğraf:</p>
            <img
              src={image}
              alt="Uploaded"
              className="rounded-lg shadow-md max-h-64 object-cover"
            />
          </div>
        )}

        {/* UPLOAD BUTTON */}
        <div className="mt-6">
          <label className="cursor-pointer w-full flex flex-col items-center gap-2 py-3 bg-yellow-200 hover:bg-yellow-300 transition rounded-lg border border-yellow-400">
            {uploading ? (
              <span className="animate-pulse text-gray-600">Yükleniyor...</span>
            ) : (
              <>
                <span className="text-sm font-semibold">
                  📷 Fotoğraf Ekle (Opsiyonel)
                </span>
                <span className="text-xs text-gray-600">
                  Telefon veya bilgisayardan yükleyebilirsin
                </span>
              </>
            )}

            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>
        </div>

        {/* BUTTONS */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handleSave}
            className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition"
          >
            Kaydet ve Ana Sayfaya Dön
          </button>
        </div>
      </div>
    </div>
  );
}
