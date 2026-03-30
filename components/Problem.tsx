const problems = [
  {
    emoji: "💸",
    quote: '"다국어 홈페이지, 견적 받아보니 300만 원이 넘었어요"',
    stats: [
      { num: "280만~500만 원", desc: "국내 중소 에이전시 다국어 사이트 평균 견적" },
    ],
    body: "웹 에이전시는 개발비 따로, 번역비 따로, 유지보수비 따로 청구합니다. 일본·해외 시장 진출을 앞두고 비용 때문에 멈춰버린 분들이 많습니다.",
    color: "from-rose-500/10 to-orange-500/5",
    border: "border-rose-500/20",
  },
  {
    emoji: "📊",
    quote: '"엑셀로 세금 계산하다 실수, 가산세 12만 원 냈습니다"',
    stats: [
      { num: "68%", desc: "세금 신고 시즌마다 계산 방법을 매번 검색하는 프리랜서" },
    ],
    body: "원천세, 부가세, 종합소득세—헷갈리는 항목이 3개 이상이면 실수 한 번으로 납부할 세금보다 가산세가 더 나올 수 있습니다.",
    color: "from-amber-500/10 to-yellow-500/5",
    border: "border-amber-500/20",
  },
  {
    emoji: "📁",
    quote: '"PDF 포트폴리오 100개 넣어도 서류 탈락, 이유를 모르겠어요"',
    stats: [
      { num: "91%", desc: "노션·PDF로 포트폴리오 제출하는 일본 취업 준비생" },
      { num: "3배", desc: "개인 도메인이 서류 검토 시간을 늘리는 효과" },
    ],
    body: "채용 담당자가 하루에 검토하는 지원서는 평균 47건. 기억에 남는 한 페이지가 합격을 가릅니다.",
    color: "from-violet-500/10 to-indigo-500/5",
    border: "border-violet-500/20",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="section-wrapper bg-light-bg py-24 lg:py-32">
      <div className="section-inner">

        {/* Section header */}
        <div className="text-center mb-16">
          <span className="badge mb-4" style={{ color: "#6366F1", borderColor: "rgba(99,102,241,0.3)", background: "rgba(99,102,241,0.08)" }}>
            문제 인식
          </span>
          <h2 className="text-display-md lg:text-display-lg font-black text-gray-900 text-balance">
            혹시 이런 상황이신가요?
          </h2>
        </div>

        {/* Problem cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map(({ emoji, quote, stats, body, color, border }) => (
            <div
              key={emoji}
              className={`relative rounded-3xl border ${border} bg-gradient-to-br ${color} bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              style={{ background: "white" }}
            >
              {/* Gradient top accent */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${color} pointer-events-none`} />

              <div className="relative z-10">
                {/* Emoji */}
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-3xl mb-6 border border-gray-100">
                  {emoji}
                </div>

                {/* Quote */}
                <p className="text-body-md font-bold text-gray-800 mb-6 leading-snug">
                  {quote}
                </p>

                {/* Stats */}
                <div className="space-y-4 mb-6 pb-6 border-b border-gray-100">
                  {stats.map(({ num, desc }) => (
                    <div key={num}>
                      <p className="text-display-sm font-black text-brand-primary leading-none mb-1">
                        {num}
                      </p>
                      <p className="text-body-sm text-gray-500 leading-snug">
                        {desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Body */}
                <p className="text-body-sm text-gray-500 leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
