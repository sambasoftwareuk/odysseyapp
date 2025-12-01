import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-sky-100">
      <div className="relative h-[40vh] w-full overflow-hidden">
        <Image
          src="/way.jpeg"
          alt="Yol görüntüsü"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="flex flex-1 flex-col items-center justify-center bg-[#1a4d3a] px-3 py-4 text-white">
        <div className="w-full max-w-md space-y-6 text-center">
          <h1 className="text-xl font-semibold leading-tight">
            Odyssey Yolculuğuna Hoş Geldiniz...
          </h1>

          <div className="space-y-4">
            <p className="text-lg">Bir hesabınız var mı?</p>
            <button className="rounded-4xl bg-yellow-400 text-lg font-semibold text-black transition-all hover:bg-yellow-500 active:scale-95 px-4 py-2">
              GİRİŞ
            </button>
          </div>
          <div className="space-y-4">
            <p className="text-lg">Yok mu?</p>
            <button className="rounded-4xl bg-yellow-400 px-4 py-2 text-lg font-semibold text-black transition-all hover:bg-yellow-500 active:scale-95">
              KAYIT OL
            </button>
          </div>
          <div className="space-y-4 pt-4">
            <p className="text-base opacity-90">ya da kayıt olmadan:</p>
            <button className="rounded-4xl bg-yellow-400 px-4 py-2 text-lg font-semibold text-black transition-all hover:bg-yellow-500 active:scale-95">
              DEVAM ET
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
