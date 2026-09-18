import Image from "next/image";

const WA = "https://wa.me/5511987027771?text=Ol%C3%A1!%20Vi%20o%20site%20da%20Achou%20Lavou%20e%20quero%20lavar%20meu%20edredon.";
const IG = "https://instagram.com/achoulavou";

function Bolha({ className = "", size = 40 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
      <circle cx="20" cy="20" r="17" stroke="currentColor" strokeWidth="2.5" opacity="0.7" />
      <path d="M12 15 Q14 10 19 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.9" />
      <circle cx="27" cy="26" r="2" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

function Onda({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className={`${className} ${flip ? "rotate-180" : ""}`}>
      <path
        d="M0,50 Q120,15 260,45 T520,45 T780,50 T1040,40 T1300,50 T1440,45 L1440,90 L0,90 Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Estrela({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative inline-block">
      <svg width="150" height="150" viewBox="0 0 150 150" className="absolute -inset-4 -z-0 m-auto">
        <polygon
          points="75,4 88,32 118,28 112,58 140,70 118,88 124,118 94,114 82,142 70,114 40,118 46,88 18,76 44,62 40,32 68,38"
          fill="#FACC15"
          stroke="#073018"
          strokeWidth="3"
          strokeLinejoin="round"
        />
      </svg>
      <span className="relative font-script font-bold text-grass-night text-2xl leading-tight block text-center px-6 py-8 rotate-[-4deg]">
        {children}
      </span>
    </div>
  );
}

function Edredom() {
  return (
    <svg viewBox="0 0 220 150" className="w-full max-w-[260px] mx-auto">
      <rect x="20" y="95" width="180" height="34" rx="14" fill="#fff" stroke="#0D7A36" strokeWidth="4" />
      <rect x="30" y="58" width="160" height="36" rx="14" fill="#DFF7E4" stroke="#0D7A36" strokeWidth="4" />
      <rect x="42" y="22" width="136" height="36" rx="14" fill="#fff" stroke="#0D7A36" strokeWidth="4" />
      <path d="M60 22 v36 M100 22 v36 M140 22 v36 M50 58 v36 M90 58 v36 M130 58 v36 M40 95 v34 M80 95 v34 M120 95 v34 M160 95 v34" stroke="#0D7A36" strokeWidth="3" opacity="0.5" />
      <circle cx="188" cy="40" r="10" fill="#22D3EE" stroke="#0D7A36" strokeWidth="3" />
    </svg>
  );
}

export default function Page() {
  return (
    <div className="bg-[#E9F6E7]">
      <div className="bg-grass-night text-grass-mist text-[11px] sm:text-[13px] font-bold text-center py-2 px-2 flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5">
        <span className="inline-flex items-center gap-1.5">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Lauzane Paulista · Cachoeirinha •
        </span>
        <span className="text-aqua">★★★★★ 4.9 no Google</span>
        <span className="text-grass-mist/70 font-semibold">(68 avaliações)</span>
      </div>

      <header className="sticky top-0 z-50 bg-[#E9F6E7]/90 backdrop-blur">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 h-16 sm:h-20 flex items-center justify-between gap-2">
          <a href="#inicio" className="flex items-center gap-2 min-w-0">
            <Image src="/images/logo.jpg" alt="Achou Lavou" width={42} height={42} className="rounded-2xl shrink-0" />
            <span className="font-extrabold text-xl sm:text-2xl text-grass-night leading-none">
              achou<span className="text-grass">lavou</span>
            </span>
          </a>
          <a href={WA} target="_blank" rel="noopener" className="shrink-0 bg-grass text-white font-bold text-xs sm:text-sm rounded-full px-4 sm:px-6 py-2 sm:py-2.5 hover:brightness-110 active:scale-95 transition whitespace-nowrap">
            Falar agora
          </a>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="inicio" className="relative overflow-hidden pt-10 pb-8 lg:pt-14">
          <Bolha size={56} className="absolute top-16 left-4 text-grass/40" />
          <Bolha size={34} className="absolute top-40 right-8 text-aqua/60" />
          <Bolha size={24} className="absolute bottom-24 left-1/3 text-grass/30" />
          <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-12 gap-10 items-center relative">
            <div className="lg:col-span-6">
              <h1 className="font-extrabold text-grass-night text-[42px] sm:text-6xl lg:text-[70px] leading-[1.0] tracking-tight">
                Achou a<br />
                lavanderia.
                <br />
                <span className="text-grass">Lavou.</span>{" "}
                <span className="font-script font-bold text-aqua text-[48px] sm:text-7xl">Resolvido.</span>
              </h1>
              <p className="mt-5 text-lg text-grass-night/70 max-w-md leading-relaxed font-semibold">
                Self-service com máquina Speed Queen de verdade: cabe edredon
                Queen ou King, ou até 2 cestos de uma vez só.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row gap-3 max-w-md">
                <a href={WA} target="_blank" rel="noopener" className="flex-1 text-center bg-grass text-white font-extrabold text-lg rounded-full px-6 py-4 shadow-lg shadow-green-200 hover:brightness-110 active:scale-95 transition">
                  Quero lavar hoje
                </a>
                <a href={IG} target="_blank" rel="noopener" className="flex-1 text-center bg-white border-2 border-grass/25 text-grass-night font-bold text-lg rounded-full px-6 py-4 hover:border-grass transition">
                  Acompanhe @achoulavou
                </a>
              </div>
            </div>
            <div className="lg:col-span-6 relative">
              <div className="absolute -top-5 left-6 z-10 bg-grass-night text-white text-xs sm:text-sm font-bold rounded-full px-4 py-2 shadow-lg rotate-[-2deg]">
                Aperte o play: veja nossas máquinas reais de perto!
              </div>
              <a href={IG} target="_blank" rel="noopener" className="block relative rounded-[32px] overflow-hidden border-4 border-white shadow-2xl shadow-green-200 group">
                <Image src="/images/post-03.jpg" alt="Máquinas Speed Queen da Achou Lavou" fill className="object-cover" priority />
                <span className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-white/95 flex items-center justify-center shadow-xl group-hover:scale-110 transition">
                  <svg width="30" height="30" viewBox="0 0 30 30"><path d="M9 5 L25 15 L9 25 Z" fill="#1FA84F" /></svg>
                </span>
                <span className="absolute bottom-4 left-4 flex gap-2">
                  <span className="bg-aqua text-grass-night font-extrabold text-xs rounded-full px-3 py-1.5">SECADORA</span>
                  <span className="bg-grass text-white font-extrabold text-xs rounded-full px-3 py-1.5">LAVADORA</span>
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* FAIXA VERDE — edredon */}
        <section className="relative mt-6">
          <Onda className="w-full h-14 text-grass block" flip />
          <div className="bg-grass text-white relative overflow-hidden">
            <Bolha size={70} className="absolute top-6 left-6 text-white/30" />
            <Bolha size={44} className="absolute bottom-10 right-10 text-white/30" />
            <Bolha size={30} className="absolute top-1/2 right-1/4 text-aqua/50" />
            <div className="max-w-6xl mx-auto px-4 py-12 grid lg:grid-cols-12 gap-8 items-center relative">
              <div className="lg:col-span-7 text-center lg:text-left">
                <h2 className="font-extrabold text-3xl sm:text-5xl leading-tight tracking-tight">
                  Cabe o edredon inteiro.
                  <br />
                  <span className="text-aqua">De uma vez só.</span>
                </h2>
                <p className="mt-4 text-white/85 text-lg max-w-lg mx-auto lg:mx-0 font-semibold">
                  Queen ou King — ou 2 cestos. Sem dividir em três lavagens,
                  sem empurrar na força. Tecnologia, rapidez e facilidade.
                </p>
                <a href={WA} target="_blank" rel="noopener" className="mt-7 inline-flex bg-white text-grass-night font-extrabold text-lg rounded-full px-9 py-4 hover:brightness-95 active:scale-95 transition shadow-xl">
                  Perguntar quanto custa
                </a>
              </div>
              <div className="lg:col-span-5">
                <Edredom />
                <p className="text-center font-script font-bold text-2xl text-aqua mt-2 rotate-[-2deg]">até 2 cestos, tá?</p>
              </div>
            </div>
          </div>
          <Onda className="w-full h-14 text-grass block" />
        </section>

        {/* PROVA — Lauzane */}
        <section className="py-14 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              <div className="relative h-56 rounded-3xl overflow-hidden border-4 border-white shadow-lg rotate-[-2deg]">
                <Image src="/images/post-04.jpg" alt="Interior da Achou Lavou" fill className="object-cover" />
              </div>
              <div className="relative h-56 rounded-3xl overflow-hidden border-4 border-white shadow-lg rotate-[2deg] mt-8">
                <Image src="/images/post-07.jpg" alt="Tambor da máquina em movimento" fill className="object-cover" />
              </div>
            </div>
            <div className="lg:col-span-7">
              <Estrela>A lavanderia que conquistou o Lauzane Paulista</Estrela>
              <div className="mt-6 space-y-3 max-w-md">
                {[
                  "Você lava no seu ritmo, máquina profissional",
                  "Edredon, coberta, cesto do dia a dia — tudo resolve",
                  "Você acompanha pelo tambor de vidro: vendo é acreditando",
                ].map((t) => (
                  <div key={t} className="flex items-start gap-3 bg-white rounded-2xl px-5 py-4 border-2 border-grass/15 shadow-sm">
                    <span className="font-extrabold text-grass text-xl leading-none">✓</span>
                    <span className="font-semibold text-grass-night/85">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* RODAPÉ ESCURO com ondas */}
        <footer className="relative mt-4">
          <Onda className="w-full h-14 text-grass-night block" flip />
          <div className="bg-grass-night text-white relative overflow-hidden">
            <Bolha size={64} className="absolute top-8 left-8 text-white/20" />
            <Bolha size={40} className="absolute bottom-8 right-12 text-aqua/40" />
            <div className="max-w-2xl mx-auto px-4 py-12 text-center relative">
              <h2 className="font-extrabold text-3xl sm:text-4xl">Cesto cheio de novo?</h2>
              <a href={WA} target="_blank" rel="noopener" className="mt-6 inline-flex items-center gap-2 bg-aqua text-grass-night font-extrabold text-lg rounded-full px-9 py-4 hover:brightness-110 active:scale-95 transition">
                ✆ (11) 98702-7771
              </a>
              <p className="mt-4 text-sm text-white/50">Cachoeirinha · Lauzane Paulista · ★ 4.9 no Google · 68 avaliações</p>
            </div>
          </div>
        </footer>
      </main>

      <a href={WA} target="_blank" rel="noopener" aria-label="WhatsApp" className="fixed bottom-6 left-5 md:left-auto md:right-5 md:bottom-24 z-[60] w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-white text-2xl shadow-2xl hover:scale-105 transition">✆</a>
    </div>
  );
}
