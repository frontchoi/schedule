export const dronDome = {
    name: '드론돔',
    header: ['화면명', '경로', '구성 및 기능', '예상 일정', '완료 여부'],
    section: [
        {
            sectionName: '레이아웃',
            path: '',
            pageList: [
                {
                    pageName: '로그인 화면 레이아웃',
                    detail: [],
                    link: '',
                    day: '',
                    end: '완료',
                },
                {
                    pageName: '관리자 화면 레이아웃',
                    detail: ['상단 메뉴 완료', '좌측 메뉴 완료', '레이어 팝업 완료'],
                    link: '',
                    day: '',
                    end: '완료',
                },
            ],
        },
        {
            sectionName: '로그인 화면',
            path: '/login',
            pageList: [
                {
                    pageName: '로그인 화면',
                    detail: ['비밀번호 보이기 / 안보이기 기능 완료'],
                    link: '/login',
                    day: '',
                    end: '완료',
                },
            ],
        },
        {
            sectionName: '대시보드',
            path: '/dashboard',
            pageList: [
                {
                    pageName: '기본상태',
                    detail: ['다양한 지도 샘플 기능 추가 필요', '좌측 메뉴 디자인 변경 필요'],
                    link: '/dashboard/home',
                    day: '',
                    end: '',
                },
                {
                    pageName: '기본상태',
                    detail: ['일반 지도 / 위성지도 구현 필요'],
                    link: '',
                    day: '',
                    end: '',
                },
                {
                    pageName: '기본상태',
                    detail: ['드론 및 중심 원 구현 필요'],
                    link: '',
                    day: '',
                    end: '',
                },
                {
                    pageName: '기본상태',
                    detail: ['드론 유도 좌표 구현 필요'],
                    link: '',
                    day: '',
                    end: '',
                },
                {
                    pageName: '연결대기 상태',
                    detail: ['드론 마우스 오버시 설명 창 구현 필요'],
                    link: '',
                    day: '',
                    end: '',
                },
                {
                    pageName: '스캐너 탐지 기록',
                    detail: ['경로보기 필요'],
                    link: '',
                    day: '',
                    end: '',
                },
                {
                    pageName: '스캐너 탐지 기록',
                    detail: ['출현 각도 구현 필요'],
                    link: '',
                    day: '',
                    end: '',
                },
                {
                    pageName: '드론 탐지된 상태',
                    detail: ['좌표 및 식별 팝업 창 구현 필요'],
                    link: '',
                    day: '',
                    end: '',
                },
                {
                    pageName: '드론 탐지된 상태',
                    detail: ['출현 각도 구현 필요'],
                    link: '',
                    day: '',
                    end: '',
                },
                {
                    pageName: '드론돔 설정',
                    detail: ['세기 설정(Virtual scroller) 구현 필요'],
                    link: '',
                    day: '',
                    end: '',
                },
                {
                    pageName: '드론 관련 팝업',
                    detail: ['총 7개 구현 필요 및 관계 설정 필요'],
                    link: '',
                    day: '',
                    end: '',
                },
            ],
        },
        {
            sectionName: '히스토리',
            path: '/history',
            pageList: [
                {
                    pageName: '탐지내용 - 디지털',
                    detail: ['경로보기 구현 필요'],
                    link: '/history/detection',
                    day: '',
                    end: '완료',
                },
                {
                    pageName: '탐지내용 - 디지털',
                    detail: ['재생 기능 구현 필요'],
                    link: '/history/detection',
                    day: '',
                    end: '완료',
                },
                {
                    pageName: '탐지내용 - 아날로그',
                    detail: [],
                    link: '/history/detection',
                    day: '',
                    end: '완료',
                },
                {
                    pageName: '로그',
                    detail: ['선택한 카테고리에 맞게 리스트 내용 노출 기능 완료'],
                    link: '/history/log',
                    day: '',
                    end: '완료',
                },
                {
                    pageName: '통계',
                    detail: ['통계 구현 필요'],
                    link: '/history/statistics',
                    day: '',
                    end: '',
                },
            ],
        },
        {
            sectionName: '설정',
            path: '/setting',
            pageList: [
                {
                    pageName: '연결',
                    detail: ['연결 추가 / 수정 팝업 필요'],
                    link: '/setting/connection',
                    day: '',
                    end: '',
                },
                {
                    pageName: '지도 - 울타리',
                    detail: ['투명 설정(Virtual scroller) 구현 필요', '맵에 도형 그리기 기능 구현 필요'],
                    link: '/setting/map/fence',
                    day: '',
                    end: '',
                },
                {
                    pageName: '지도 - 사용자(중심)',
                    detail: ['투명 설정(Virtual scroller) 구현 필요'],
                    link: '/setting/map/circle',
                    day: '',
                    end: '',
                },
                {
                    pageName: '지도 - 레이더',
                    detail: ['채우기 설정(Virtual scroller) 구현 필요'],
                    link: '/setting/map/radar',
                    day: '',
                    end: '',
                },
                {
                    pageName: '지도 - 스캐너',
                    detail: ['채우기 설정(Virtual scroller) 구현 필요'],
                    link: '/setting/map/scanner',
                    day: '',
                    end: '',
                },
                {
                    pageName: '지도 - 드론 탐지 창',
                    detail: ['투명 설정(Virtual scroller) 구현 필요'],
                    link: '/setting/map/detection',
                    day: '',
                    end: '',
                },
                {
                    pageName: '경고',
                    detail: ['알림음 관련 mp3 재생 구현 필요'],
                    link: '/setting/warning',
                    day: '',
                    end: '',
                },
                {
                    pageName: '피아식별',
                    detail: ['드론 추가 팝업 필요'],
                    link: '/history/identify',
                    day: '',
                    end: '',
                },
                {
                    pageName: '장비 별 설정 - 스캐너',
                    detail: ['스캐너 설정 팝업 필요'],
                    link: '/setting/device/scanner',
                    day: '',
                    end: '',
                },
                {
                    pageName: '장비 별 설정 - 드론돔',
                    detail: ['드론돔 설정 팝업 필요'],
                    link: '/setting/device/dronedome',
                    day: '',
                    end: '',
                },
                {
                    pageName: '장비 별 설정 - 스푸퍼',
                    detail: ['지도에 좌표 입력하는 기능 구현 필요'],
                    link: '/setting/device/spoofer',
                    day: '',
                    end: '',
                },
                {
                    pageName: '식별 라이브러리',
                    detail: [],
                    link: '/setting/library',
                    day: '',
                    end: '',
                },
                {
                    pageName: '업데이트',
                    detail: ['업데이트 진행 상황 프로그래스바 구현 필요'],
                    link: '/setting/update',
                    day: '',
                    end: '',
                },
            ],
        },
        {
            sectionName: '계정관리',
            path: '/auth',
            pageList: [
                {
                    pageName: '대시보드 화면',
                    detail: ['계정 정보 수정 팝업 필요'],
                    link: '/auth/account',
                    day: '',
                    end: '',
                },
            ],
        },
    ],
};
