import { Header } from '@/widgets/header/Header';
import { useEffect } from 'react';

function RootLayout() {
  // 비로그인 시 자동으로 로그인 모달 표시
  useEffect(() => {}, []);

  return (
    <div>
      <Header />
    </div>
  );
}

export { RootLayout };
