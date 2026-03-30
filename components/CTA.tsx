export default function CTA() {
  return (
    <section id="cta" className="section-wrapper py-24 lg:py-32">
      {/* ── Gradient background ── */}
      <div className="absolute inset-0 bg-cta-gradient opacity-95" />

      {/* ── Orbs for depth ── */}
      <div className="orb w-[500px] h-[500px] bg-white top-[-20%] left-[-5%] opacity-10" />
      <div className="orb w-[400px] h-[400px] bg-white bottom-[-20%] right-[-5%] opacity-10" />

      {/* ── Grid dot pattern ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="section-inner relative z-10">
        <div className="max-w-prose mx-auto text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/25 text-white text-label font-semibold uppercase tracking-widest mb-8 backdrop-blur-sm">
            ✦ 무료 상담 운영 중
          </div>

          {/* Headline */}
          <h2 className="text-display-lg lg:text-display-xl font-black text-white mb-6 text-balance">
            지금 바로 시작할 수 있습니다
          </h2>

          {/* Sub */}
          <p className="text-body-lg text-white/80 mb-4 text-balance">
            비용 걱정, 언어 걱정, 기간 걱정—
            <br className="hidden sm:block" />
            상담 30분이면 세 가지 모두 해결됩니다.
          </p>
          <p className="text-body-lg text-white font-bold mb-10">
            첫 상담은 무료입니다.
          </p>

          {/* CTA button */}
          <a
            href="mailto:hello@yjdev.com"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-brand-primary font-black text-body-lg shadow-glow-lg hover:shadow-glow-lg hover:-translate-y-1 transition-all duration-200 active:translate-y-0"
          >
            → 무료 30분 상담 신청
          </a>

          {/* Info strip */}
          <div className="mt-12 pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/70 text-body-sm">
            <span className="flex items-center gap-2">
              <span>📩</span>
              <span>응답 시간: 24시간 이내</span>
            </span>
            <span className="hidden sm:block text-white/30">|</span>
            <span className="flex items-center gap-2">
              <span>🌏</span>
              <span>한국어 · 日本語 · English</span>
            </span>
            <span className="hidden sm:block text-white/30">|</span>
            <span className="flex items-center gap-2">
              <span>📅</span>
              <span>주 5일, 10:00–22:00</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
