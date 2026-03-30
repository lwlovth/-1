import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. 정적 내보내기 설정 (GitHub Pages 배포 필수)
  output: 'export',
  
  images: {
    // 2. GitHub Pages는 서버가 없어서 이미지 최적화 기능을 쓸 수 없으므로 끕니다.
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "api.dicebear.com" },
    ],
  },
  
  // 3. (선택사항) 저장소 이름이 'my-portfolio'라면 아래 주석을 해제하고 적어주세요.
  // 만약 주소가 '사용자이름.github.io' 자체라면 이 설정은 필요 없습니다.
  // basePath: '/my-portfolio',
};

export default nextConfig;