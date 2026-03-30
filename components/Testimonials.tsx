const testimonials = [
  {
    quote:
      "일본 거래처에 사이트 링크 보냈더니 'プロっぽい(프로답다)'는 답장이 왔어요",
    body: "일본 온라인 판매를 준비하면서 일본어 상품 소개 페이지가 꼭 필요했는데, 에이전시 견적은 350만 원이라 포기하고 있었습니다. 여기서는 13일 만에 한·일 이중 언어 쇼핑몰 소개 페이지를 받았고, 비용은 에이전시의 35% 수준이었어요.",
    highlights: [
      { num: "13일", label: "납기 완료" },
      { num: "35%", label: "에이전시 대비 비용" },
    ],
    name: "김○○ 대표",
    role: "뷰티 소품 온라인 셀러",
    location: "경기 성남",
    initial: "K",
    color: "from-rose-500 to-orange-500",
  },
  {
    quote:
      "세금 때문에 매달 1시간씩 낭비했는데, 이제 5분이면 끝납니다",
    body: "프리랜서 번역 일을 하면서 원천세를 매달 직접 계산했는데, 계산 실수로 한 번은 가산세를 낸 적도 있었어요. 계산기 써보고 처음에는 반신반의했는데, 세무사분이 보시더니 '계산 완벽하게 됐네요' 하셨습니다.",
    highlights: [
      { num: "1시간 → 5분", label: "월간 절약 시간" },
      { num: "0원", label: "계산 실수 후 가산세" },
    ],
    name: "Yuna S.",
    role: "한일 프리랜서 번역가",
    location: "서울·도쿄 거점",
    initial: "Y",
    color: "from-violet-500 to-indigo-500",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-wrapper bg-surface-base py-24 lg:py-32">
      <div className="section-inner">

        {/* Section header */}
        <div className="text-center mb-16">
          <span className="badge mb-4">고객 후기</span>
          <h2 className="text-display-md lg:text-display-lg font-black text-ink-primary text-balance">
            실제로 이렇게 달라졌습니다
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map(({ quote, body, highlights, name, role, location, initial, color }) => (
            <div key={name} className="quote-card flex flex-col group hover:-translate-y-1 transition-all duration-300 hover:shadow-card-hover hover:border-brand-primary/30">

              {/* Highlight stats */}
              <div className="flex gap-4 mb-8">
                {highlights.map(({ num, label }) => (
                  <div
                    key={label}
                    className="flex-1 p-4 rounded-2xl bg-surface-raised border border-surface-border text-center"
                  >
                    <p className="text-heading-sm font-black gradient-text">{num}</p>
                    <p className="text-label text-ink-muted mt-1">{label}</p>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <p className="text-heading-sm font-bold text-ink-primary mb-4 leading-snug relative z-10">
                &ldquo;{quote}&rdquo;
              </p>

              {/* Body */}
              <p className="text-body-sm text-ink-secondary leading-relaxed flex-1 mb-8">
                {body}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-surface-border">
                {/* Avatar */}
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center text-white font-black text-heading-sm shadow-glow-sm flex-shrink-0`}
                >
                  {initial}
                </div>

                <div>
                  <p className="text-body-md font-bold text-ink-primary">{name}</p>
                  <p className="text-body-sm text-ink-muted">
                    {role} &middot; {location}
                  </p>
                </div>

                {/* Stars */}
                <div className="ml-auto text-brand-accent text-body-md flex-shrink-0">
                  ★★★★★
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
