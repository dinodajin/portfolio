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
      "Embedded Hardware & Systems": ["STM32", "Jetson Orin Nano", "Raspberry Pi", "ROS", "Linux Environment"],
      "AI Models & Optimization": ["YOLO (v5/v8/v11)", "PyTorch", "TensorRT Engine", "ONNX Optimization", "Python / FastAPI"],
      "Web Full-Stack Development": ["JavaScript", "React.js", "Java / Spring Boot", "Node.js"],
      "Tools & Core Languages": ["C/C++", "Android NDK", "Git", "Docker", "CMake"]
    },
    certifications: [
      { name: "정보처리기사", issuer: "한국산업인력공단" },
      { name: "SQLD (SQL 개발자)", issuer: "한국데이터산업진흥원" },
      { name: "ADsP (데이터분석 준전문가)", issuer: "한국데이터산업진흥원" },
      { name: "TOEIC Speaking IH", issuer: "YBM (어학 성적)" }
    ],
    timeline: [
      { date: "2025.07 - 현재", title: "삼성 청년 SW·AI 아카데미(SSAFY) 14기", desc: "임베디드 트랙" },
      { date: "2024.06 - 2024.12", title: "LG전자 DX School 1기 수료", desc: "데이터 분석을 통한 BX, CX, DX 전략 수립" },
      { date: "2019.03 - 2023.08", title: "아주대학교 졸업", desc: "물리학과 & 소프트웨어학과 전공" },
      { date: "2021.12 - 2022.12", title: "블루프린트랩 인턴", desc: "웹 풀스택 개발 & AI 얼굴 인식 최적화" },
      { date: "2014.03 - 2017.02", title: "서울 세화여자 고등학교 졸업", desc: "자율형 사립고" }
    ],
    contacts: [
      { label: "GitHub", url: "https://github.com/dinodajin" },
      { label: "Velog", url: "https://velog.io/@da8411/posts" },
      { label: "Email", url: "mailto:djbrachio@gmail.com" }
    ]
  }
};

export const PROJECTS = [
  {
    id: "btaa",
    index: "01",
    title: "BTAA",
    subtitle: "BTSP Ticket AI-Assistant",
    tags: ["LangGraph", "vLLM", "DSPy", "BGE-m3 Embedding", "Redis Queue"],
    accentColor: "#2D6BE4",
    accentLight: "#EBF1FD",
    category: "CASE STUDY · AI AGENT SYSTEM",
    headline: "삼성전자 네트워크사업부 기지국 VoC 관리 포털(BTSP) 내 지능형 티켓 분석 및 담당 부서 배정 자동화 Multi-Agent 시스템 구축",
    description: "글로벌 통신사 고객으로부터 유입되는 기지국 장비 관련 기술 문제(Ticket)를 AI가 실시간으로 분석하고 최적의 담당 부서를 자동 매칭하는 엔지니어링 솔루션입니다. 10만 건 규모의 대용량 레거시 데이터 환경에서 LLM 병목과 자원 제약을 극복하고, 1순위 AI 추천 확정률 40%, Top-5 예측 정확도 99.5%를 달성하며 대기업 실무 프로세스를 자동화했습니다.",
    stats: [
      { label: "AI 프레임워크", value: "LangGraph / DSPy" },
      { label: "코어 모델", value: "gpt-oss-120b / vLLM" },
      { label: "1순위 확정률", value: "40% (Top-5 99.5%)" },
      { label: "데이터 스케일", value: "10만 건 정제 및 자산화" },
    ],
    features: [
      {
        icon: "■",
        title: "Multi-Agent 파이프라인",
        desc: "LangGraph를 기반으로 티켓 요약, 내용 보강, Defect 1차 분류 및 담당 부서 추론 단계를 분업화했습니다.",
        badge: "LangGraph"
      },
      {
        icon: "■",
        title: "BGE-m3 + HNSW 고성능 벡터 검색",
        desc: "BGE-m3 임베딩 모델과 Re-ranker 아키텍처, HNSW 인덱스를 통해 1024차원 벡터 공간에서 코사인 유사도 기반으로 유사 티켓 Top-13을 정밀 추출합니다.",
        badge: "RAG Engine"
      },
      {
        icon: "■",
        title: "DSPy ReAct 에이전트 및 피드백 루프",
        desc: "DSPy 프레임워크로 프롬프팅을 프로그래밍 방식으로 추상화하고, 부서 역할 문서와 과거 해결 티켓을 Tool로 연동한 ReAct 에이전트가 추론 근거를 생성합니다. 운영자 교정 데이터가 벡터 DB에 점진적으로 반영되어 정확도가 지속 향상됩니다.",
        badge: "DSPy / ReAct"
      },
    ],
    sections: [
      {
        part: "Part I",
        title: "Product Walkthrough",
        subtitle: "지능형 워크플로우 및 현업 편의 기능 설계",
        items: [
          {
            sectionNum: "SECTION 01",
            sectionTitle: "자동 배정 및 수집 파이프라인",
            content: "5분 주기로 BTSP 포털에서 미할당된 오픈 티켓을 실시간 수집하고, 약 40초 내외의 추론 가속화를 거쳐 자동 배정을 수행하는 엔지니어링 파이프라인 구현. 1순위 AI 추천이 그대로 확정된 비율 40% 달성."
          },
          {
            sectionNum: "SECTION 02",
            sectionTitle: "설명 가능한 AI 및 글로벌 지원",
            content: "외국인 관리자와의 협업을 고려하여 AI 에이전트의 의사결정 추론 과정을 정형화(Structured Output)하고 한국어와 영어 추천 근거를 동시 출력하도록 보장."
          },
          {
            sectionNum: "SECTION 03",
            sectionTitle: "운영 효율화 대시보드",
            content: "1순위 추천 채택률 및 수동 재할당 비율을 실시간 추적하고, 30일 이상 미해결된 Long TAT 티켓을 경과순으로 정렬하여 BTSP 페이지로 즉시 연결하는 관리 환경 구축."
          },
        ],
      },
      {
        part: "Part II",
        title: "Architecture Deep Dive",
        subtitle: "자원 제약 극복과 추론 정확도 고도화를 위한 기술적 접근",
        items: [
          {
            sectionNum: "SECTION 04",
            sectionTitle: "비동기 분산 큐 기반 인프라 안정화",
            content: "수십 건의 티켓이 동시 유입될 때 발생하는 LLM 병목 문제를 해결하기 위해 Redis Queue(RQ) 기반 비동기 태스크 큐 아키텍처를 도입하여 시스템 가용성 확보."
          },
          {
            sectionNum: "SECTION 05",
            sectionTitle: "대용량 DB I/O 최적화 및 배치 처리",
            content: "1,500줄 규모의 레거시 쿼리와 해외 DB 환경의 과부하를 방지하기 위한 배치 처리를 구현하고, 운영체제 수준의 Named Pipe(FIFO) 스트리밍 방식을 도입하여 데이터 인출 효율을 극대화."
          },
          {
            sectionNum: "SECTION 06",
            sectionTitle: "DSPy 프로그래밍 및 ReAct 로직 고도화",
            content: "기존의 수동 프롬프트 엔지니어링 한계를 극복하기 위해 DSPy 프레임워크를 도입, 프롬프팅 과정을 프로그래밍 언어 형태로 추상화하고 부서 역할 문서·과거 티켓을 Tool로 연동한 ReAct 에이전트로 추론 정확도를 고도화."
          },
          {
            sectionNum: "SECTION 07",
            sectionTitle: "점진적 데이터 임베딩 파이프라인",
            content: "전체 데이터를 상시 재임베딩하는 연산 비용을 최소화하기 위해, DB 변경 사항을 감지하여 신규 및 수정된 데이터만 선별 처리하는 자동 지식 최신화 파이프라인 구축."
          },
          {
            sectionNum: "SECTION 08",
            sectionTitle: "피드백 루프 기반의 지식 베이스 축적",
            content: "오배정 케이스 발생 시 운영자의 수동 교정 사유와 피드백 데이터를 LLM의 자체 Tool로 재구성하여 벡터 DB에 점진적 반영함으로써 과거 편향을 지우고 지속적인 정확도 향상 유도."
          },
        ],
      },
    ],
  },
  {
    id: "onguard",
    index: "02",
    title: "OnGuard",
    subtitle: "Real-time On-Device Deepfake Detector",
    tags: ["Android NDK", "Qualcomm QNN", "NNAPI", "Whisper Base", "gpt-5-mini"],
    accentColor: "#16A34A",
    accentLight: "#EDFAF3",
    category: "On-Device AI",
    headline: "온디바이스 AI 기반 영상 통화 중 실시간 딥페이크 및 딥보이스 탐지 및 차단으로 적극적인 보호 대응 서비스",
    description: "딥페이크와 딥보이스를 활용한 신종 AI 보이스피싱 범죄가 급증하고 있습니다. 조사에 따르면 전 세계 인구의 0.01%만이 딥페이크를 정확하게 식별할 수 있으며, 최근 캄보디아 조직형 사기단 사건에서는 딥페이크 영상통화를 통해 100억 원 규모의 대형 피해가 발생했습니다. 남녀노소 누구나 무방비로 노출될 수 있는 위험을 방지하기 위해, 통화 중 실시간으로 위조를 판별하고 차단하는 '적극적인 대응 서비스'가 필요합니다. 탐지부터 보호까지 한번에 적극적으로 도와주는, OnGuard를 소개합니다.",
    stats: [
      { label: "아키텍처", value: "Clean / Android NDK / SDK" },
      { label: "가속화 전 Latency", value: "8,050 ms (Max Bottleneck)" },
      { label: "가속화 후 Latency", value: "748 ms (HTP Accelerated)" },
      { label: "추론 속도 개선", value: "약 90.7% 레이턴시 단축" },
    ],
    features: [
      {
        icon: "■",
        title: "하드웨어 가속 및 폴백 파이프라인",
        desc: "NNAPI 및 QNN 기술을 활용하여 HTP, GPU, CPU 순으로 연산 자원을 자동 폴백 할당하는 유연한 온디바이스 최적화를 달성했습니다.",
        badge: "Optimization"
      },
      {
        icon: "■",
        title: "멀티모달 하이브리드 탐지",
        desc: "CLIP 기반 ForensicAdapter의 CAM 연산과 Whisper 오디오 가속 분석을 결합하여 가짜 프레임과 목소리 변조를 동시 판별합니다.",
        badge: "Multi-Modal AI"
      },
      {
        icon: "■",
        title: "접근성 기반 실시간 금융 차단",
        desc: "위험 감지 시 Foreground Service 접근성 권한을 활용하여 주요 금융앱들의 터치를 즉각 제한하고 화면을 강제 잠금합니다.",
        badge: "Security"
      },
    ],
    images: {
      architecture: "/assets/onguard/system_architecture.png",
      techFlow: "/assets/onguard/hw_fallback_flow.png",
      grafana: "/assets/onguard/grafana_telemetry.png",
      uiScreenshots: [
        { src: "/assets/onguard/screen_detection.png", caption: "실시간 비디오 콜 프레임 기반 딥페이크 검출 및 의심 영역 시각화" },
        { src: "/assets/onguard/screen_bank_block.png", caption: "위험 탐지 상황 시 Foreground Service 연동 우리WON/신한 SOL 금융앱 차단" },
        { src: "/assets/onguard/screen_guardian_sms.png", caption: "사기 피해 방지를 위한 GPS 기반 실시간 보호자 연동 알림 전송" }
      ],
      demohome: "/assets/homepage.png",
      gifs: {
        detect: "/assets/detect.gif",
        process: "/assets/process.gif"
      }
    },
    sections: [
      {
        part: "Part I",
        title: "Product Walkthrough",
        subtitle: "상황별 능동형 대응 구조 및 시나리오",
        items: [
          {
            sectionNum: "SECTION 01",
            sectionTitle: "프레임 버퍼 ROI 판별 및 앙상블",
            content: "일반 영상통화 시 0.5초, 앱 내 통화 시 1초 간격으로 스크린 캡처를 수행하여 매 프레임마다 관심 영역(ROI)을 판단하고 가짜 확률 평균값으로 최종 딥페이크 여부를 정밀 판별.",
            gif: "detect"
          },
          {
            sectionNum: "SECTION 02",
            sectionTitle: "온디바이스 STT 및 LLM 위험 태깅",
            content: "Qualcomm AI Hub 기반 Whisper BASE 모델로 음성 데이터를 기기 내부에서 STT 처리하여 개인정보 유출을 방지하고, 변화 감지 시에만 gpt-5-mini를 조건부 호출하여 실시간 보이스피싱 대화 위험 키워드 태그 생성.",
            gif: "process"
          },
          {
            sectionNum: "SECTION 03",
            sectionTitle: "시뮬레이터를 활용한 데이터 증강 송출",
            content: "GPU 서버를 통해 inswapper_128 모델로 실시간 페이스 스왑 딥페이크 영상을 제작하여 아고라(Agora) 기반의 웹 RTC 가상 수신 환경을 연동하고 실전 탐지 시연 기능 구현.",
            image: "demohome"
          },
        ],
      },
      {
        part: "Part II",
        title: "Engineering Deep Dive",
        subtitle: "Grafana 실시간 텔레메트리 기반 하드웨어 병목 프로파일링 및 한계 극복",
        items: [
          {
            sectionNum: "SECTION 04",
            sectionTitle: "Avg Latency: 순수 CPU 스레드 연산 임계 도출 및 초기 웜업 지연 제어",
            content: "대시보드 상단에 기록된 8,050ms의 연산 임계를 극복하기 위해, 통화 시동과 동시에 즉각 추론이 가능하도록 앱 설치 시점에 모델 런타임 웜업 및 선적재 아키텍처를 설계하여 런칭 딜레이를 무력화했습니다."
          },
          {
            sectionNum: "SECTION 05",
            sectionTitle: "Device Temperature: 모델 크기 경량화 및 단말 발열 제어를 위한 INT8 가속",
            content: "연산 집중에 의한 그라파나 Device Temperature 임계선 돌파 현상을 방지하기 위해, FP32 런타임 모델을 ONNX 런타임 기반 INT8로 경량화 양자화하여 단말 가용 리소스를 확보하고 모델 추론 속도를 약 40% 선제 감축했습니다."
          },
          {
            sectionNum: "SECTION 06",
            sectionTitle: "Avg Latency by Model Type: Qualcomm QNN 아키텍처 및 HTP 단독 가속 최적화",
            content: "그라파나 메트릭에 기록된 가속 전후 지표(8,050ms ➔ 748ms)를 달성한 핵심 엔지니어링 파트입니다. 스냅드래곤 칩셋 하드웨어 계층에 연동되는 QNN 및 NNAPI 가속 엔진 파이프라인을 커스텀 빌드하여 최고속 연산 가속 장치인 HTP를 완전 선점하고, 가용 실패 시 GPU/CPU로 복원되는 폴백 시스템을 완성하여 최종 레이턴시 90.7% 단축을 달성했습니다.",
            interactive: "latency_sim"
          },
          {
            sectionNum: "SECTION 07",
            sectionTitle: "Android Security Constraints: 커널 오디오 수음 정책 우회 및 접근성 권한 제어",
            content: "안드로이드 미디어 오디오 패킷 획득 불가 한계를 해결하기 위해 통화 자동녹음 저장소 후킹 파이프라인을 우회 설계했으며, 위조 탐지 즉시 금융앱(우리WON, 신한 SOL) 인앱 세션을 실시간 후킹하여 강제 백그라운드 종료 조치 락 루프를 구현했습니다."
          },
        ],
      },
    ],
  },
  {
    id: "sarvis",
    index: "03",
    title: "SARVIS",
    subtitle: "Smart Monitor Arm with Voice & AI",
    tags: ["C++", "Python", "On-Device AI", "TensorRT", "Jetson Orin Nano", "STM32"],
    accentColor: "#2D6BE4",
    accentLight: "#EBF1FD",
    category: "CASE STUDY · EMBEDDED AI",
    headline: "얼굴 인식 기반 사용자 추적과 음성 명령 제어를 결합한 AIoT 스마트 모니터 암 시스템",
    description: "손이 자유롭지 않은 상황에서도 화면을 원하는 위치에서 볼 수 있도록, 딥러닝 얼굴 인식으로 사용자를 실시간 추적하고 모니터 암을 자동 제어하는 임베디드 AI 시스템입니다. AI 추론부터 하드웨어 제어까지 전 계층 파이프라인을 직접 설계하고 구현했으며, 이동 평균 기반 위치 보정 알고리즘과 미인식 구간 추적 보완 로직으로 시스템 안정성을 확보했습니다. SSAFY 공통 프로젝트 우수상 수상 및 베스트멤버 선정.",
    stats: [
      { label: "주요 스택", value: "C++ / Python / TensorRT" },
      { label: "하드웨어", value: "Jetson Orin Nano / RPi5 / STM32" },
      { label: "모터 떨림 감소", value: "35% 감소 (이동 평균 알고리즘)" },
      { label: "얼굴 인식 정확도", value: "87% 안정적 유지" },
    ],
    features: [
      {
        icon: "■",
        title: "3계층 AI→HW 제어 파이프라인",
        desc: "Jetson Orin Nano에서 딥러닝 얼굴 인식 추론 → Raspberry Pi 5에서 제어 신호 변환 → STM32 모터 구동으로 이어지는 AI 추론·시스템 제어·하드웨어 제어의 3계층 구조를 설계했습니다.",
        badge: "On-Device AI"
      },
      {
        icon: "■",
        title: "이동 평균 기반 위치 보정 알고리즘",
        desc: "최근 5프레임 얼굴 좌표를 평균화하고 20px 임곗값 필터링을 적용하여 불필요한 모터 동작을 35% 감소시키고 시스템 안정성을 개선했습니다.",
        badge: "Optimization"
      },
      {
        icon: "■",
        title: "얼굴 미인식 구간 추적 보완",
        desc: "얼굴이 일시적으로 인식되지 않는 구간에서 이전 프레임 위치와 카메라 이탈 방향을 활용한 보완 로직으로 인식 정확도 87%를 안정적으로 유지했습니다.",
        badge: "Firmware"
      },
    ],
    sections: [
      {
        part: "Part I",
        title: "Product Walkthrough",
        subtitle: "시스템 아키텍처 및 구동 메커니즘",
        items: [
          {
            sectionNum: "SECTION 01",
            sectionTitle: "3계층 하드웨어 파이프라인 설계",
            content: "Jetson Orin Nano의 딥러닝 얼굴 인식 결과(픽셀 좌표)를 Raspberry Pi 5가 수신하여 모터 제어 각도로 변환하고, UART 통신으로 STM32에 전달해 실제 모터를 구동하는 AI 추론→시스템 제어→하드웨어 제어의 전 계층 파이프라인을 직접 설계 및 구현."
          },
          {
            sectionNum: "SECTION 02",
            sectionTitle: "음성 명령 제어 연동",
            content: "얼굴 인식 추적 외에 음성 명령으로도 모니터 암을 제어할 수 있도록 음성 인식 모델을 엣지 환경에 탑재하고, 얼굴 추적 모드와 음성 명령 모드를 전환하는 제어 로직을 구현."
          },
        ],
      },
      {
        part: "Part II",
        title: "Architecture Deep Dive",
        subtitle: "엣지 환경 제약 극복을 위한 알고리즘 설계 및 최적화",
        items: [
          {
            sectionNum: "SECTION 03",
            sectionTitle: "TensorRT 기반 모델 경량화 및 추론 가속",
            content: "Jetson Orin Nano의 제한된 컴퓨팅 자원에서 딥러닝 모델을 실시간으로 실행하기 위해 TensorRT를 활용한 FP16 양자화를 적용하고, 호스트-디바이스 간 비동기 메모리 복사(Async Memcpy)로 추론 속도를 향상시켰습니다."
          },
          {
            sectionNum: "SECTION 04",
            sectionTitle: "이동 평균 기반 위치 보정 및 임곗값 필터링",
            content: "얼굴 위치가 프레임마다 미세하게 변화하여 모터가 반복적으로 진동하는 떨림 현상을 해결하기 위해, 최근 5프레임의 얼굴 좌표를 평균화하는 이동 평균 알고리즘을 적용하고 중심 좌표가 임곗값 20px 이상 이동했을 때만 모터 제어 신호가 갱신되도록 설계하여 불필요한 모터 동작을 35% 감소시켰습니다."
          },
          {
            sectionNum: "SECTION 05",
            sectionTitle: "얼굴 미인식 구간 추적 보완 로직",
            content: "조명 변화나 급격한 움직임으로 얼굴이 일시적으로 인식되지 않는 구간에서도 추적이 유지되도록, 이전 프레임의 위치와 카메라 영역 이탈 방향을 활용한 보완 로직을 구현하여 전체 얼굴 인식 정확도 87%를 안정적으로 유지했습니다."
          },
          {
            sectionNum: "SECTION 06",
            sectionTitle: "멀티스레딩 데이터 큐 및 통신 안정화",
            content: "영상 프레임 캡처, AI 추론, 모터 시리얼 통신 스레드를 분리하고 Lock-Free 큐로 스레드 간 데이터를 동기화하여 파이프라인 처리 효율을 최적화했습니다. 엣지 디바이스와 모터 제어 보드 간 실시간 데이터 통신에서 발생한 간헐적 패킷 유실 오류는 오실로스코프와 로그 분석으로 원인을 추적하고 예외 처리 로직을 구축하여 해결했습니다."
          },
        ],
      },
    ],
  }
];