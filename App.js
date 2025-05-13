// src/App.js

import React from 'react';
import './App.css'; // App 컴포넌트의 스타일 파일 (기본 생성됨)

// --- 수정 전 ---
// import VWorldMap from './VWorldMap'; // 우리가 만든 VWorldMap 컴포넌트를 불러옵니다.

// --- 수정 후 ---
// VWorldMap 컴포넌트의 새 위치를 정확히 지정합니다.
import VWorldMap from './components/VWorldMap';

function App() {
  return (
    // .App 클래스는 src/App.css에 정의되어 있습니다.
    <div className="App">
      {/* 페이지 제목 헤더 (선택 사항) */}
      <header
        style={{
          backgroundColor: '#f0f0f0',
          height: '50px',            // 높이 증가
          padding: '0 10px',         // 좌우 패딩만 (상하 padding 제거)
          display: 'flex',           // 수직 가운데 정렬
          alignItems: 'center',
          justifyContent: 'center',  // 텍스트 가운데 정렬
          color: '#333',
        }}
      >
        <h5>VWorld 지도에 KML 데이터 표시 (OpenLayers 사용)</h5>
      </header>

      {/* VWorldMap 컴포넌트를 렌더링합니다. */}
      {/* VWorldMap 컴포넌트 내부에서 지도가 생성되어 해당 div 안에 표시됩니다. */}
      {/* VWorldMap 자체에 flexbox 스타일을 주어 헤더/푸터 외 남은 공간을 사용하게 했습니다. << footer 불필요해요*/}
        <VWorldMap />

    </div>
  );
}

export default App; // App 컴포넌트를 내보냅니다.
