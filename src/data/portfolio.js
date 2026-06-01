export const PROFILE = {
  name: "정다진",
  tagline: "Embedded · AI Software Engineer  ·  Web Developer",
  headline: "기술의 경계를 넘나드는 \n독보적인 스펙트럼",
  subheadline: "펌웨어 레벨 제어부터 웹 풀스택, 온디바이스 AI까지.\n문제를 해결하기 위해 필요한 모든 레이어를 깊이 있게 개발합니다.",
  mainRole: "AI SW & Firmware Developer",
  subRole: "MLOps / Infra",
  tags: ["C/C++", "Python", "Jetson Nano", "RTOS", "PyTorch", "TensorFlow", "Linux"],
  about: {
    avatar: "/assets/dajin.jpg",
    intro: "하드웨어 제어부터 웹 풀스택까지 도메인의 경계 없이 실무 기술 레이어를 확장해 왔습니다. 시스템 전체 구조(End-to-End)를 이해하는 넓은 시야로 최적의 엔지니어링 솔루션을 도출합니다.",
    skills: {
      "Embedded Hardware & Systems": ["STM32 (Cortex-M)", "Jetson Orin Nano", "Raspberry Pi", "ROS (Robot Operating System)", "Linux Environment"],
      "AI Models & Optimization": ["YOLO (v5/v8/v11)", "PyTorch", "TensorRT Engine", "ONNX Optimization", "Python / FastAPI"],
      "Web Full-Stack Development": ["JavaScript", "React.js", "Next.js", "Java / Spring Boot", "Node.js"],
      "Tools & Core Languages": ["C/C++", "Android NDK", "Git", "Docker", "CMake"]
    },
    timeline: [
      { date: "2025.07 - 현재", title: "삼성 청년 SW·AI 아카데미(SSAFY) 14기", desc: "임베디드 트랙" },
      { date: "2024.06 - 2024.12", title: "LG전자 DX School 1기 수료", desc: "데이터 분석을 통한 BX, CX, DX 전략 수립" },
      { date: "2019.03 - 2023.08", title: "아주대학교 졸업", desc: "물리학과 & 소프트웨어학과 전공" },
      { date: "2021.12 - 2022.12", title: "블루프린트랩 인턴", desc: "웹 풀스택 개발 & AI 얼굴 인식 최적화" },
      { date: "2014.03 - 2017.02", title: "서울 세화여자 고등학교 졸업", desc: "자율형 사립고" }

    ],
    contacts: [
      { label: "GitHub", url: "https://github.com" },
      { label: "Velog", url: "https://velog.io" },
      { label: "Email", url: "mailto:your-email@example.com" }
    ]
  }
};

export const PROJECTS = [
  {
    id: "sarvis",
    index: "01",
    title: "SARVIS",
    subtitle: "Smart Monitor Arm with AI",
    tags: ["C++", "On-Device AI", "TensorRT", "Jetson Nano"],
    accentColor: "#2D6BE4",
    accentLight: "#EBF1FD",
    category: "CASE STUDY · EMBEDDED AI",
    headline: "AI 기반 안면 및 음성 인식을 통한 지능형 스마트 모니터 암 시스템",
    description: "사용자의 자세와 시선 방향을 실시간으로 추적하여 모니터의 각도 및 높이를 자동 조절하는 임베디드 시스템입니다. 임베디드 환경에서의 연산 자원 제약을 해결하기 위해 파이프라인 최적화 및 모델 경량화를 직접 주도했습니다.",
    stats: [
      { label: "주요 스택", value: "C++ / TensorRT" },
      { label: "하드웨어", value: "Jetson Nano / MCU" },
      { label: "최적화 지표", value: "FPS 2.3x 향상" },
      { label: "기간", value: "6주 (SSAFY 3등 수상)" },
    ],
    features: [
      { icon: "👁️", title: "실시간 안면 트래킹", desc: "가벼운 가속 모델을 사용해 시선 및 목 각도를 분석합니다.", badge: "On-Device AI" },
      { icon: "🤖", title: "모터 제어 펌웨어", desc: "PID 제어를 통해 흔들림 없고 정밀한 하드웨어 구동을 구현했습니다.", badge: "Firmware" },
      { icon: "⚡", title: "메모리 풀 최적화", desc: "C++ Custom Memory Pool을 적용하여 단편화와 지연 시간을 방지했습니다.", badge: "Optimization" },
    ],
    sections: [
      {
        part: "Part I",
        title: "Product Walkthrough",
        subtitle: "시스템 아키텍처 및 구동 메커니즘",
        items: [
          { sectionNum: "SECTION 01", sectionTitle: "하드웨어 파이프라인", content: "카메라 입력부터 가속 추론, MCU 모터 제어 명령 전달까지의 하드웨어 블록도 구조 설계." },
          { sectionNum: "SECTION 02", sectionTitle: "실시간 디스플레이 피드백", content: "추론 상태 및 추적 결과를 오버레이하여 보여주는 임베디드 GUI 데모 화면 프로토타이핑." },
        ],
      },
      {
        part: "Part II",
        title: "Architecture Deep Dive",
        subtitle: "자원 제약 극복을 위한 엔지니어링 접근",
        items: [
          { sectionNum: "SECTION 03", sectionTitle: "TensorRT 파이프라인 구현", content: "FP32 모델을 FP16로 양자화(Quantization)하고, 호스트-디바이스 간 비동기 메모리 복사(Async Memcpy)를 통해 병목 현상 제거." },
          { sectionNum: "SECTION 04", sectionTitle: "멀티스레딩 데이터 큐", content: "영상 프레임 캡처, AI 추론, 모터 시리얼 통신 스레드를 분리하고 무잠금(Lock-Free) 큐로 스레드 간 데이터 동기화 최적화." },
        ],
      },
    ],
  },
  {
    id: "shutter",
    index: "02",
    title: "Shutter",
    subtitle: "Real-time Deepfake Detector",
    tags: ["Android NDK", "C++", "PyTorch Mobile", "Security"],
    accentColor: "#16A34A",
    accentLight: "#EDFAF3",
    category: "CASE STUDY · MOBILE AI SECURITY",
    headline: "실시간 비디오 콜 환경에서의 딥페이크 및 딥보이스 변조 탐지 시스템",
    description: "Android 커널 레이어 단에서 화상 통화 패킷을 분석하여 인공지능 변조 여부를 실시간 서브 버퍼 단계에서 탐지 및 차단하는 모바일 보안 솔루션입니다.",
    stats: [
      { label: "아키텍처", value: "Clean / Android NDK" },
      { label: "코어 엔진", value: "C++ / PyTorch" },
      { label: "탐지 레이턴시", value: "45ms 이하" },
      { label: "기간", value: "6주" },
    ],
    features: [
      { icon: "🛡️", title: "실시간 하이재킹 탐지", desc: "Android Media Projection 및 오디오 트랙 후킹을 통해 데이터를 수집합니다.", badge: "Security" },
      { icon: "🧠", title: "경량 변환 탐지 모델", desc: "MobileNetV3 기반 구조를 안드로이드 가속 엔진에 맞춤 이식했습니다.", badge: "Mobile AI" },
    ],
    sections: [
      {
        part: "Part I",
        title: "Product Walkthrough",
        subtitle: "모바일 인앱 구동 스크린 및 시나리오",
        items: [
          { sectionNum: "SECTION 01", sectionTitle: "백그라운드 모니터링", content: "보안 가이드라인을 준수하며 오버레이 팝업 형태로 경고를 표시하는 UI 구현." },
        ],
      },
      {
        part: "Part II",
        title: "Engineering Deep Dive",
        subtitle: "커널 및 프레임워크 한계 극복",
        items: [
          { sectionNum: "SECTION 02", sectionTitle: "Android Media Hooking", content: "가상 디스플레이 수크린 버퍼와 오디오 하드웨어 추상화 계층(HAL)의 스트림 데이터를 유실 없이 처리하는 프레임 캡처 파이프라인 설계." },
        ],
      },
    ],
  }
];