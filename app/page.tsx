import Image from "next/image";

const WA = "https://wa.me/5511987027771?text=Ol%C3%A1!%20Vi%20o%20site%20da%20Achou%20Lavou%20e%20quero%20lavar%20minha%20roupa.";
const IG = "https://instagram.com/achoulavou";

export default function Page() {
  return (
    <div className="bg-cream text-pine-deep">
      <div className="bg-pine-deep text-cream/90 text-[11px] sm:text-[13px] font-semibold text-center py-2 px-2 flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5">
        <span className="inline-flex items-center gap-1.5">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Lauzane Paulista · Cachoeirinha •
        </span>
        <span className="font-bold text-white">★★★★★ 4.9 no Google</span>
        <span className="opacity-70">(68 avaliações)</span>
      </div>

      <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-pine/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-3">
          <a href="#inicio" className="flex items-center gap-2.5 min-w-0">
            <span className="bg-white rounded-2xl px-2 py-1 shadow-sm border border-pine/10 shrink-0">
              <Image src="/images/logo.jpg" alt="Achou Lavou — Lavanderia Express" width={120} height={40} className="h-9 sm:h-10 w-auto" />
            </span>
          </a>
          <nav className="hidden lg:flex items-center gap-7 text-[15px] font-semibold text-pine-deep/80">
            <a href="#como-funciona" className="hover:text-pine transition">Como funciona</a>
            <a href="#edredom" className="hover:text-pine transition">Edredom</a>
            <a href="#onde" className="hover:text-pine transition">Onde estamos</a>
          </nav>
          <a href={WA} target="_blank" rel="noopener" className="shrink-0 bg-leaf text-pine-deep font-bold text-xs sm:text-sm rounded-full px-4 sm:px-6 py-2 sm:py-2.5 hover:brightness-105 active:scale-95 transition whitespace-nowrap">
            Chamar no WhatsApp
          </a>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="inicio" className="pt-10 pb-12 lg:pt-16 lg:pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="font-extrabold text-[38px] sm:text-5xl lg:text-[60px] leading-[1.04] tracking-tight">
                Sua roupa limpa.
                <br />
                Seu tempo de volta.
              </h1>
              <p className="mt-5 text-lg text-pine-deep/70 max-w-md leading-relaxed">
                Lavanderia self-service com máquinas profissionais Speed Queen.
                Lave e seque edredons, roupas do dia a dia e muito mais.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row gap-3 max-w-md">
                <a href={WA} target="_blank" rel="noopener" className="flex-1 text-center bg-pine text-white font-bold text-lg rounded-full px-6 py-4 hover:brightness-125 active:scale-95 transition">
                  Quero lavar agora
                </a>
                <a href="#onde" className="flex-1 text-center bg-white border-2 border-pine/20 font-bold text-lg rounded-full px-6 py-4 hover:border-pine transition">
                  Ver onde fica
                </a>
              </div>
              <div className="mt-6 inline-flex items-center gap-2 bg-white border border-pine/10 rounded-full px-4 py-2 text-sm shadow-sm">
                <span className="text-leaf font-black">★★★★★</span>
                <strong>4.9 no Google</strong>
                <span className="text-pine-deep/50">68 avaliações · qualidade que conquista</span>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-[28px] overflow-hidden shadow-2xl">
                <Image src="/images/salao-maquinas.jpg" alt="Salão da Achou Lavou com máquinas Speed Queen e logo na parede" fill className="object-cover" priority />
              </div>
              <div className="absolute -bottom-5 left-5 right-5 sm:left-8 sm:right-auto bg-white rounded-2xl shadow-xl px-5 py-3.5 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-pine text-white font-extrabold flex items-center justify-center text-lg shrink-0">✓</span>
                <span className="font-bold leading-tight">Máquinas profissionais<br />Speed Queen</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAIXA DE PROVA */}
        <section className="py-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid sm:grid-cols-3 gap-6">
            {[
              ["Edredom King cabe de verdade", "Queen, King ou 2 cestos — de uma vez só."],
              ["Self-service com Speed Queen", "Máquina industrial, ciclo profissional."],
              ["Na Lauzane Paulista", "A lavanderia que conquistou a região."],
            ].map(([t, d]) => (
              <div key={t} className="border-l-2 border-pine/20 pl-5">
                <h2 className="font-bold text-xl leading-tight">{t}</h2>
                <p className="mt-1 text-pine-deep/60">{d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* EDREDOM */}
        <section id="edredom" className="py-8 lg:py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 rounded-[28px] overflow-hidden bg-pine-deep text-white shadow-2xl">
              <div className="relative min-h-[280px] lg:min-h-[420px]">
                <Image src="/images/post-07.jpg" alt="Tambor com edredom colorido em movimento" fill className="object-cover" />
              </div>
              <div className="p-8 sm:p-12 flex flex-col justify-center">
                <h2 className="font-extrabold text-3xl sm:text-[44px] leading-[1.08] tracking-tight">
                  Chega de sofrer
                  <br />
                  com edredom
                </h2>
                <p className="mt-4 text-white/75 text-lg">
                  Edredom King, cobertores e roupa acumulada. Tudo em uma única
                  lavagem.
                </p>
                <a href={WA} target="_blank" rel="noopener" className="mt-7 inline-flex w-fit bg-white text-pine-deep font-bold text-lg rounded-full px-8 py-3.5 hover:brightness-95 active:scale-95 transition">
                  Consultar valores
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section id="como-funciona" className="py-14 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid sm:grid-cols-3 gap-4">
            {[
              ["1", "Escolha sua máquina", "Numeradas e à vista — a grande leva o edredon inteiro."],
              ["2", "Lave e seque", "Ciclo profissional, você acompanha pelo tambor de vidro."],
              ["3", "Leve tudo pronto", "Dobre na bancada e saia com o cesto zerado."],
            ].map(([n, t, d]) => (
              <div key={t} className="bg-white rounded-3xl border border-pine/10 p-6 shadow-sm">
                <div className="font-extrabold text-4xl text-leaf">{n}</div>
                <h3 className="mt-2 font-bold text-xl">{t}</h3>
                <p className="mt-1 text-pine-deep/60">{d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ONDE */}
        <section id="onde" className="py-14 lg:py-20 bg-mint">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-center">
            <div className="grid grid-cols-5 gap-3">
              <div className="col-span-3 relative h-64 sm:h-80 rounded-3xl overflow-hidden shadow-lg">
                <Image src="/images/maquinas-perto.jpg" alt="Máquinas Speed Queen de perto" fill className="object-cover" />
              </div>
              <div className="col-span-2 relative h-64 sm:h-80 rounded-3xl overflow-hidden shadow-lg mt-8">
                <Image src="/images/rua-anoitecer.jpg" alt="Rua do bairro no fim de tarde" fill className="object-cover" />
              </div>
            </div>
            <div>
              <h2 className="font-extrabold text-3xl sm:text-[44px] leading-[1.08] tracking-tight">
                Uma lavanderia moderna perto de você.
              </h2>
              <p className="mt-4 text-pine-deep/65 text-lg">
                Ambiente seguro, prático e equipado para cuidar das suas roupas
                com qualidade — na Lauzane Paulista, Cachoeirinha.
              </p>
              <div className="mt-6 inline-flex items-center gap-3 bg-white rounded-2xl px-5 py-3 shadow-sm">
                <span className="w-10 h-10 rounded-full border-2 border-pine text-pine font-extrabold flex items-center justify-center shrink-0">✓</span>
                <span className="font-bold leading-tight">Lauzane<br />Paulista</span>
              </div>
            </div>
          </div>
        </section>

        {/* FECHAMENTO */}
        <section className="bg-ocean text-white py-16 lg:py-20 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="font-extrabold text-3xl sm:text-[44px] leading-tight tracking-tight">
              Cesto cheio não precisa virar problema.
            </h2>
            <a href={WA} target="_blank" rel="noopener" className="mt-8 inline-flex items-center gap-2 bg-leaf text-pine-deep font-extrabold text-lg rounded-full px-9 py-4 hover:brightness-105 active:scale-95 transition">
              ✆ Falar com a Achou Lavou
            </a>
            <div className="mt-10 bg-cream text-pine-deep rounded-2xl px-6 py-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm font-semibold">
              <span className="bg-white rounded-xl px-2 py-1 border border-pine/10 text-xs">achou lavou</span>
              <span>Lauzame Paulista · São Paulo – SP</span>
              <a href={IG} target="_blank" rel="noopener" className="text-brandblue hover:underline">@achoulavou</a>
            </div>
          </div>
        </section>
      </main>

      <a href={WA} target="_blank" rel="noopener" aria-label="WhatsApp" className="fixed bottom-6 left-5 md:left-auto md:right-5 md:bottom-24 z-[60] w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-white text-2xl shadow-2xl hover:scale-105 transition">✆</a>
    </div>
  );
}
