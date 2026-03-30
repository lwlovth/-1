import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "한·일·영 3개 국어 웹 솔루션 | 회계 전공 개발자",
  description:
    "번역가·개발자·컨설턴트를 따로 고용할 필요 없습니다. 일본어·영어·한국어를 모두 다루는 개발자가 기획부터 배포까지 처리합니다.",
  keywords: ["다국어 웹사이트", "랜딩페이지 제작", "일본어 홈페이지", "프리랜서 세금 계산기", "포트폴리오 사이트"],
  openGraph: {
    title: "한·일·영 3개 국어 웹 솔루션",
    description: "에이전시 비용의 1/3로 완성하는 다국어 웹 솔루션",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
