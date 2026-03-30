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
  
  // 3. 저장소 이름이 '-1'이므로 basePath를 설정합니다.
  // 이 설정을 해야 https://lwlovth.github.io/-1/ 주소에서 파일들을 제대로 불러옵니다.
  basePath: '/project1', 
};

export default nextConfig;
