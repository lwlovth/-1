const services = [
  {
    num: "01",
    icon: "🌏",
    title: "다국어 웹사이트 제작",
    tagline: "한국어 · 일본어 · 영어, 세 언어를 네이티브처럼",
    body: "번역 외주 없이 직접 3개 국어로 작성합니다. 일본 진출을 준비 중인 소상공인부터 해외 거래처 대응이 필요한 프리랜서까지.",
    benefits: [
      { label: "평균 납기", value: "7~14일" },
      { label: "비용 절감", value: "60%" },
      { label: "지원 언어", value: "한 / 일 / 영" },
    ],
    highlight: "에이전시 견적의 30~40% 수준",
    tags: ["랜딩페이지", "기업 소개", "쇼핑몰"],
  },
  {
    num: "02",
    icon: "🧮",
    title: "세금·회계 자동화 웹 계산기",
    tagline: '"이번엔 얼마 내야 하지?"를 5초 안에 해결',
    body: "회계학과 전공 지식을 기반으로 설계한 계산기. 프리랜서 원천세, 부가세, 종합소득세 환급 예상액까지 한 번에 계산합니다.",
    benefits: [
      { label: "계산 시간", value: "5초 이내" },
      { label: "상담 시간 단축", value: "40%" },
      { label: "케이스 대응", value: "일·한 이중 과세" },
    ],
    highlight: "일본 세제(消費税·所得税) 비교 기능 포함",
    tags: ["SaaS 툴", "AdSense 수익화", "SEO 유입"],
  },
  {
    num: "03",
    icon: "💼",
    title: "포트폴리오 · 개인 브랜딩",
    tagline: '"이 사람, 다르네"를 만드는 개인 도메인',
    body: "노션·PDF를 벗어나 채용 담당자가 기억하는 웹사이트. 일본어·영어 자기소개 페이지 포함, Google 검색 노출까지 기본 세팅.",
    benefits: [
      { label: "제작 기간", value: "5~10일" },
      { label: "서류 통과율 향상", value: "2.3배" },
      { label: "다국어 자기소개", value: "기본 포함" },
    ],
    highlight: "해외 취업·유학 지원 특화",
    tags: ["개인 도메인", "해외 취업", "SEO 세팅"],
  },
];

export default function Services() {
  return (
    <section id="services" className="section-wrapper bg-surface-bg py-24 lg:py-32">
      {/* ── Subtle top orb ── */}
      <div className="orb w-[500px] h-[500px] bg-brand-primary top-0 right-[-10%] opacity-10" />

      <div className="section-inner relative z-10">

        {/* Section header */}
        <div className="text-center mb-16">
          <span className="badge mb-4">서비스</span>
          <h2 className="text-display-md lg:text-display-lg font-black text-ink-primary text-balance">
            제가 드릴 수 있는 것
          </h2>
          <p className="mt-4 text-body-lg text-ink-muted max-w-xl mx-auto">
            3가지 핵심 서비스로 비용·언어·기간 문제를 한번에 해결합니다.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map(({ num, icon, title, tagline, body, benefits, highlight, tags }) => (
            <div key={num} className="card group flex flex-col">

              {/* Top row: number + icon */}
              <div className="flex items-start justify-between mb-6">
                <span className="service-num text-display-sm font-black">{num}</span>
                <span className="w-12 h-12 rounded-2xl bg-surface-raised flex items-center justify-center text-2xl border border-surface-border group-hover:border-brand-primary/40 transition-colors">
                  {icon}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-heading-md font-bold text-ink-primary mb-2">{title}</h3>
              <p className="text-body-sm font-semibold text-brand-light mb-4">{tagline}</p>

              {/* Body */}
              <p className="text-body-sm text-ink-secondary leading-relaxed mb-6 flex-1">{body}</p>

              {/* Benefits */}
              <div className="space-y-2.5 mb-6 p-4 rounded-2xl bg-surface-raised border border-surface-border">
                {benefits.map(({ label, value }) => (
                  <div key={label} className="flex items-center justify-between text-body-sm">
                    <span className="text-ink-muted">{label}</span>
                    <span className="font-bold text-ink-primary">{value}</span>
                  </div>
                ))}
              </div>

              {/* Highlight pill */}
              <div className="mb-6 px-4 py-2.5 rounded-xl bg-brand-primary/10 border border-brand-primary/20 text-body-sm text-brand-light font-semibold text-center">
                ✦ {highlight}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg text-label font-medium bg-surface-raised text-ink-muted border border-surface-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
