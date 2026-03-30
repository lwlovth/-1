export default function Hero() {
  return (
    <section className="section-wrapper noise min-h-screen flex items-center bg-surface-bg pt-16">
      {/* ── Background orbs ── */}
      <div className="orb w-[600px] h-[600px] bg-brand-primary top-[-10%] left-[-10%] animate-float-1" />
      <div className="orb w-[500px] h-[500px] bg-purple-600 top-[20%] right-[-8%] animate-float-2" />
      <div className="orb w-[400px] h-[400px] bg-pink-600 bottom-[-5%] left-[30%] animate-float-1 animation-delay-300" />

      {/* ── Hero gradient overlay ── */}
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />

      {/* ── Grid dot pattern ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #6366F1 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="section-inner relative z-10 py-24 lg:py-32">
        <div className="max-w-prose mx-auto text-center">

          {/* Language badges */}
          <div className="flex items-center justify-center gap-2 mb-8 animate-fade-up">
            <span className="lang-tag">🇰🇷 한국어</span>
            <span className="lang-tag">🇯🇵 日本語</span>
            <span className="lang-tag">🇺🇸 English</span>
          </div>

          {/* Main headline */}
          <h1 className="text-display-xl lg:text-display-2xl font-black text-ink-primary text-balance mb-6 animate-fade-up animation-delay-100">
            한·일·영 3개 국어로
            <br />
            <span className="gradient-text">완성하는 웹 솔루션</span>
          </h1>

          {/* Sub headline */}
          <p className="text-heading-sm lg:text-heading-md font-semibold text-ink-secondary mb-4 animate-fade-up animation-delay-200">
            회계 전공 지식 + AI 개발로,{" "}
            <span className="text-brand-accent font-bold">에이전시 비용의 1/3</span>
            로 만듭니다.
          </p>

          {/* Body */}
          <p className="text-body-lg text-ink-muted mb-10 text-balance animate-fade-up animation-delay-300">
            번역가, 개발자, 컨설턴트를 따로 고용할 필요 없습니다.
            <br className="hidden sm:block" />
            일본어·영어·한국어를 모두 다루는 개발자가 기획부터 배포까지 혼자 처리합니다.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animation-delay-500">
            <a href="#cta" className="btn-primary text-body-md w-full sm:w-auto justify-center">
              → 무료 상담 신청하기
            </a>
            <a href="#services" className="btn-secondary text-body-md w-full sm:w-auto justify-center">
              서비스 보기
            </a>
          </div>

          {/* Trust strip */}
          <div className="mt-16 pt-8 border-t border-surface-border flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-up animation-delay-500">
            {[
              { num: "7~14일", label: "평균 납기" },
              { num: "60%", label: "비용 절감" },
              { num: "3개 국어", label: "네이티브 작성" },
            ].map(({ num, label }) => (
              <div key={label} className="text-center">
                <p className="text-display-sm font-black gradient-text">{num}</p>
                <p className="text-body-sm text-ink-muted font-medium mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
