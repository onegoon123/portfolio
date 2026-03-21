# 김경학 포트폴리오 - Claude 가이드

이 문서는 이 프로젝트에서 클로드가 작업할 때 참고해야 할 정보를 담고 있습니다.

---

## 프로젝트 개요

- **프로젝트명**: 김경학 게임 프로그래머 포트폴리오
- **개발자**: 김경학 (KKH)
- **유형**: 정적 HTML/CSS/JS 포트폴리오 사이트 (프레임워크 없음)
- **언어**: 한국어
- **목표**: 게임 프로그래머 포트폴리오, 프로젝트 상세 문서화

---

## 프로젝트 구조

```
portfolio/
├── index.html              # 메인 페이지
├── css/
│   └── style.css          # 스타일시트
├── js/
│   └── main.js           # 메인 스크립트
├── Images/               # 이미지 리소스 (.webp, .png 등)
└── [프로젝트명]_상세.html # 프로젝트 상세 페이지들
```

---

## 파일 상세

### index.html
메인 페이지. 다음 섹션들로 구성됨:

| 섹션 | ID | 설명 |
|------|-----|------|
| Hero | `#about` | 소개, 스크린샷 갤러리, 통계 |
| Projects | `#projects` | 프로젝트 카드 그리드 |
| Skills | `#skills` | 기술 스택 바 & 태그 |
| Education | (없음) | 교육 이력 타임라인 |
| Contact | `#contact` | 연락처 링크 |

### css/style.css
1028줄의 스타일시트. 주요 CSS 클래스:

| 섹션 | 주요 클래스 |
|------|-----------|
| Navigation | `.navbar`, `.nav-menu`, `.nav-link`, `.hamburger` |
| Hero | `.hero`, `.hero-content`, `.screenshot-gallery`, `.code-block` |
| Projects | `.project-card`, `.project-image`, `.video-thumbnail`, `.play-icon` |
| Tech Doc | `.tech-doc`, `.doc-header`, `.doc-content`, `.problem-box`, `.solution-box`, `.result-box` |
| Skills | `.skill-category`, `.skill-bar`, `.skill-fill`, `.skill-tag` |

### js/main.js
네비게이션, 스크롤, 애니메이션 기능을 담당함.

---

## 디자인 시스템

### 색상 팔레트 (CSS 변수)
```css
--primary-color: #6366f1;        /* 메인 인디고 */
--primary-dark: #4f46e5;
--primary-light: #818cf8;
--text-dark: #1e293b;
--text-gray: #64748b;
--text-light: #94a3b8;
--bg-dark: #0f172a;
--bg-light: #f8fafc;
--bg-card: #ffffff;
--border-color: #e2e8f0;
```

### 엔진 태그 색상
| 태그 클래스 | 배경색 | 의미 |
|-------------|--------|------|
| `.engine-tag.unity` | #22c55e (녹색) | Unity 엔진 |
| `.engine-tag.unreal` | #ef4444 (빨강) | Unreal Engine |
| `.engine-tag.custom` | #10b981 (연두) | Win32 API 등 커스텀 엔진 |
| `.engine-tag.directx` | #8b5cf6 (보라) | DirectX |

---

## 코드 패턴

### 프로젝트 카드 (index.html)
```html
<div class="project-card">
    <div class="project-image">
        <!-- 이미지 또는 비디오 썸네일 -->
        <img src="./Images/파일명.webp" alt="프로젝트명" class="project-img">
    </div>
    <div class="project-content">
        <span class="project-tag">장르</span>
        <span class="engine-tag [unity|unreal|custom|directx]">엔진명</span>
        <h3 class="project-title">프로젝트명</h3>
        <p class="project-description">간단 설명 (1줄)</p>
        <div class="project-tech">
            <span>기술1</span><span>기술2</span>...
        </div>
        <div class="project-links">
            <a href="GitHub_URL" class="project-link">GitHub</a>
            <a href="상세_URL.html" class="project-link">프로젝트 상세</a>
        </div>
    </div>
</div>
```

### 비디오 썸네일 (유튜브 링크가 있는 경우)
```html
<div class="project-image">
    <a href="유튜브_URL" class="video-thumbnail" target="_blank" rel="noopener">
        <img src="./Images/썸네일.webp" alt="설명">
        <div class="play-icon"></div>
    </a>
</div>
```

### 상세 페이지 구조 ([프로젝트명]_상세.html)
```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[프로젝트명] - 프로젝트 상세 | 김경학 포트폴리오</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <!-- Navigation (메인과 동일) -->
    <nav class="navbar">...</nav>

    <!-- Technical Document -->
    <section class="tech-doc">
        <div class="container">
            <div class="doc-nav">
                <a href="index.html#projects">← 프로젝트 목록으로 돌아가기</a>
            </div>

            <div class="doc-header">
                <h1 class="doc-title">[프로젝트명] - 프로젝트 상세</h1>
                <div class="doc-meta">
                    <span>날짜</span>
                    <span>장르</span>
                    <span>기술 스택</span>
                </div>
            </div>

            <div class="doc-content">
                <!-- 프로젝트 개요, 기술 스택, 문제/해결, 성과 등 -->
            </div>
        </div>
    </section>

    <script src="js/main.js"></script>
</body>
</html>
```

---

## 문서화 표준

### 상세 페이지 섹션 구조
1. **프로젝트 개요**: 프로젝트 요약, 표로 기본 정보
2. **기술 스택**: 리스트로 기술 나열
3. **시스템 아키텍처**: (선택) 코드 구조 다이어그램
4. **문제/해결 섹션** (각 기술적 주제마다):
   - `<div class="problem-box">`: 문제 상황
   - 해결 과정 (1단계, 2단계...)
   - `<div class="result-box">`: 결과 표 (개선 전/후/향상율)
5. **성과 및 성능 개선**: 종합 성과 표
6. **개발 도전과제 및 해결**: 문제-해결 박스들
7. **결론**: 주요 성과, 학습 내용

### 문서화용 CSS 클래스
| 클래스 | 설명 |
|--------|------|
| `.problem-box` | 빨간 테두리 (문제 상황) |
| `.solution-box` | 초록 테두리 (해결 방안) |
| `.result-box` | 파란 테두리 (결과/성과) |

---

## 작업 가이드

### 새 프로젝트 추가 시
1. **index.html** - `project-grid` 섹션에 새 `.project-card` 추가
2. **[프로젝트명]_상세.html** - 상세 페이지 생성 (위 템플릿 참고)
3. **이미지** - `Images/` 폴더에 `.webp` 형식으로 추가

### 이미지 형식
- **일반 프로젝트 이미지**: `.project-img` 클래스 사용
- **유튜브 썸네일**: `.video-thumbnail` 클래스 + `.play-icon`
- **형식**: `.webp` 권장 (압축 효율 우수)

---

## 상세페이지_템플릿.md 사용법

### 파일 용도
`상세페이지_템플릿.md`는 HTML을 직접 작성하지 않아도 상세 페이지를 쉽게 만들 수 있는 마크다운 템플릿입니다.

### 사용 절차
1. **템플릿 복사**: `상세페이지_템플릿.md`의 내용을 복사
2. **내용 작성**: 프로젝트에 맞게 내용을 채워서 마크다운 파일 생성
3. **변환 요청**: "[프로젝트명] 상세 페이지 HTML로 변환해줘"라고 요청
4. **HTML 생성**: Claude가 마크다운을 `[프로젝트명]_상세.html`로 변환

### 이미지 포함 방법
마크다운 파일에서 이미지를 포함하려면 다음 형식을 사용하세요:
```
[이미지: ./Images/파일명.webp]
```
- 변환 시 이 형식을 `<img>` 태그로 자동 변환합니다

### 템플릿 섹션 구조
1. 기본 정보 (날짜, 장르, 엔진, 언어, GitHub, 출시 플랫폼)
2. 프로젝트 개요 (2-3문장 요약)
3. 기술 스택
4. 문제/해결 내역 (여러 개 가능)
   - 문제 상황
   - 해결 과정 (1단계, 2단계...)
   - 결과 표
5. 주요 성과
6. 개발 도전과제 및 해결
7. 결론/학습 내용
8. 코드 예시 (선택)

---

## 담당자 정보
- **이름**: 김경학
- **이메일**: asd315406@gmail.com
- **GitHub**: github.com/onegoon123
- **전화**: 010-6501-7939

---

## 기술 스택 (현재)
- **엔진**: Unity (고급), Unreal (기본)
- **언어**: C# (고급), C++ (중급), Python (기본)
- **백엔드**: 뒤끝, GPGS
- **디자인 패턴**: Singleton, Factory, Object Pool, FSM, Observer

---

## 주요 프로젝트 목록
1. 메모리아 기사단 - 방치형 RPG (Unity, LLM API, 뒤끝)
2. 미궁기사 키우기 - 방치형 RPG (Unity, Naninovel)
3. 와일드 템페스트 - 뱀서라이크 (Unity, GPGS)
4. 원더메이트 - 타워 디펜스 (Unity, FSM)
5. 여관 - 호러 어드벤처 (Unreal, MetaHuman)
6. 바이오하자드 RE4 모작 - 3D 액션 (Unreal)
7. 데빌 메이 크라이 5 모작 - 3D 액션 (Unreal)
8. 파이어엠블렘 모작 - SRPG (DirectX, C++)
9. PocketMon_API - RPG (Win32 API)
10. 슈퍼 마리오 월드 모작 - 2D 플랫포머 (Win32 API)
