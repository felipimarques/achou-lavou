import Image from "next/image";

const WA = "https://wa.me/5511987027771?text=Ol%C3%A1!%20Vi%20o%20site%20da%20Achou%20Lavou%20e%20quero%20lavar%20meu%20edredon.";
const IG = "https://instagram.com/achoulavou";

export default function Page() {
  return (
    <>
      <div className="bg-grass-night text-grass-mist text-[11px] sm:text-[13px] font-bold text-center py-2 px-2 flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5">
        <span className="inline-flex items-center gap-1.5">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Cachoeirinha · Lauzane Paulista •
        </span>
        <span className="text-aqua">★★★★★ 4.9 no Google</span>
        <span className="text-grass-mist/70 font-semibold">(68 avaliações)</span>
      </div>

      <header className="sticky top-0 z-50 bg-grass-mist/90 backdrop-blur border-b-2 border-grass/20">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 h-16 sm:h-20 flex items-center justify-between gap-2">
          <a href="#inicio" className="flex items-center gap-2.5 min-w-0">
            <Image src="/images/logo.jpg" alt="Achou Lavou" width={42} height={42} className="rounded-2xl shrink-0" />
            <div className="leading-none min-w-0">
              <span className="font-extrabold text-xl text-grass-night">achou<span className="text-aqua">lavou</span></span>
              <div className="text-[8px] font-bold tracking-[0.22em] uppercase text-grass-deep">Lavanderia Express</div>
            </div>
          </a>
          <a href={WA} target="_blank" rel="noopener" className="shrink-0 bg-grass text-white font-bold text-xs sm:text-sm rounded-full px-4 sm:px-6 py-2 sm:py-2.5 hover:brightness-110 active:scale-95 transition whitespace-nowrap">
            Falar agora
          </a>
        </div>
      </header>

      <main>
        <section id="inicio" className="pt-10 pb-14 lg:pt-16 lg:pb-20">
          <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <h1 className="font-extrabold text-grass-night text-[40px] sm:text-6xl lg:text-[68px] leading-[1.02] tracking-tight">
                Achou a
                <br />
                lavanderia.
                <br />
                <span className="text-grass">Lavou. Resolvido.</span>
              </h1>
              <p className="mt-5 text-lg text-grass-night/70 max-w-md leading-relaxed">
                Self-service com máquina Speed Queen de verdade: cabe edredon
                Queen ou King, ou 2 cestos de uma vez.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row gap-3 max-w-md">
                <a href={WA} target="_blank" rel="noopener" className="flex-1 text-center bg-grass text-white font-extrabold text-lg rounded-2xl px-6 py-4 hover:brightness-110 active:scale-95 transition">
                  Quero lavar hoje
                </a>
                <a href={IG} target="_blank" rel="noopener" className="flex-1 text-center bg-white border-2 border-grass/25 text-grass-night font-bold text-lg rounded-2xl px-6 py-4 hover:border-grass transition">
                  @achoulavou
                </a>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="relative rounded-[36px] overflow-hidden border-4 border-white shadow-2xl shadow-green-200">
                <Image src="/images/post-03.jpg" alt="Máquinas Speed Queen — SECADORA e LAVADORA" fill className="object-cover" priority />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-aqua text-grass-night font-extrabold text-xs rounded-full px-3 py-1.5 shadow">SECADORA</span>
                  <span className="bg-grass text-white font-extrabold text-xs rounded-full px-3 py-1.5 shadow">LAVADORA</span>
                </div>
              </div>
              <p className="text-center text-sm text-grass-night/60 mt-3 font-semibold">
                Máquinas reais da loja — igual no vídeo do Instagram.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-grass text-white py-14 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="font-extrabold text-3xl sm:text-5xl leading-tight tracking-tight">
              Cabe o edredon inteiro.
              <br />
              <span className="text-aqua">De uma vez só.</span>
            </h2>
            <p className="mt-4 text-grass-mist/90 text-lg max-w-xl mx-auto">
              Queen ou King — ou 2 cestos. Sem dividir em três lavagens, sem
              empurrar na força. Tecnologia, rapidez e facilidade.
            </p>
            <a href={WA} target="_blank" rel="noopener" className="mt-8 inline-flex bg-white text-grass-night font-extrabold text-lg rounded-full px-9 py-4 hover:brightness-95 active:scale-95 transition">
              Perguntar quanto custa
            </a>
          </div>
        </section>

        <section className="py-14 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-80 sm:h-[420px] rounded-[32px] overflow-hidden border-4 border-white shadow-xl rotate-1">
              <Image src="/images/post-04.jpg" alt="Interior da Achou Lavou" fill className="object-cover" />
            </div>
            <div>
              <h2 className="font-extrabold text-grass-night text-3xl sm:text-4xl leading-tight tracking-tight">
                A lavanderia que conquistou a região do Lauzane Paulista.
              </h2>
              <div className="mt-6 space-y-3">
                {["Você lava no seu ritmo, máquina profissional", "Edredon, coberta, cesto do dia a dia — tudo resolve", "Você acompanha pelo tambor de vidro: vendo é acreditando"].map((t) => (
                  <div key={t} className="flex items-start gap-3 bg-white rounded-2xl px-5 py-4 border-2 border-grass/15">
                    <span className="font-extrabold text-grass text-xl leading-none">✓</span>
                    <span className="font-semibold text-grass-night/80">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-grass-night text-white py-14">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <p className="font-extrabold text-3xl sm:text-4xl leading-tight">
              Cesto cheio de novo?
            </p>
            <a href={WA} target="_blank" rel="noopener" className="mt-6 inline-flex bg-aqua text-grass-night font-extrabold text-lg rounded-full px-9 py-4 hover:brightness-110 active:scale-95 transition">
              (11) 98702-7771
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-[#051F0F] text-grass-mist/60 py-8 text-sm text-center">
        Achou Lavou · Lavanderia Express · Cachoeirinha · ★ 4.9 no Google · 68 avaliações
      </footer>

      <a href={WA} target="_blank" rel="noopener" aria-label="WhatsApp" className="fixed bottom-6 left-5 md:left-auto md:right-5 md:bottom-24 z-[60] w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-white text-2xl shadow-2xl hover:scale-105 transition">✆</a>
    </>
  );
}
