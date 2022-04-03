export const header = {
    name: '이민훈',
    desc: '웹 개발자',
    email: 'hackids@naver.com',
    github: 'https://github.com/Lee-Minhoon',
    blog: 'https://hackids.tistory.com/',
};

export const intro = {
    subject: 'Introduce',
    profile: 'profile.png',
    intro: `
    안녕하세요. 웹 개발자 이민훈입니다.

    
    웹 개발자로 취업하기 위해 공부하고 있지만, 어떤 프로젝트를 진행하던 나름대로의 재미와
    매력이 있었기 때문에 개발이라면 어떤 언어와 환경이던 크게 마다치 않는 제너럴리스트의 성향을 가지고 있습니다.
    이런 성향 덕에 학부 시절에는 안드로이드 애플리케이션 개발, 웹 개발 등의 여러 프로젝트에 프론트엔드와
    백엔드, 풀스택 가리지 않고 참여하였습니다.


    현재는 웹 개발이라는 분야를 정해 깊이감 있는 기술을 보유하기 위해 공부 중입니다. React, NextJS, Spring과 같은
    프레임워크와 라이브러리들을 사용해 프로젝트를 진행하고 있고 자격증 취득과 자료구조와 알고리즘 공부 등을 통해
    디테일도 놓치지 않기 위해 노력 중입니다.`,
};

export const skills = {
    subject: 'Skills',
    contents: [
        {
            category: 'Frontend',
            desc: '재사용 가능한 컴포넌트와 커스텀 훅을 만들 수 있고, CSS를 사용해 원하는 UI 디자인을 할 수 있습니다.',
            names: [
                'HTML, CSS(SCSS), JavaScript',
                'React, NextJS, React-native',
                'Redux, Zustand, React Query',
                'EmotionJS, TailwindCSS',
                'Visual Studio Code',
            ],
        },
        {
            category: 'Backend',
            desc: `간단한 REST API 서버를 개발할 수 있고, 서비스에 필요한 DB를 구축하고 Query를 정의할 수 있습니다.`,
            names: ['Java, NodeJS, PHP, Python', 'Spring Boot, Spring Security, Spring Data JPA', 'Gradle', 'IntelliJ'],
        },
        // {
        //     category: 'DevOps',
        //     desc: '',
        //     names: ['MySQL, H2', 'Git'],
        // },
    ],
};

export const experience = {
    subject: 'Experience',
    contents: [
        {
            title: '플레져',
            subtitle: '프론트엔드 개발자',
            period: '2022.03 ~ ing',
            link: '',
            desc: [
                {
                    main: 'Client App, Back Office 등을 개발 중입니다.',
                    sub: [],
                },
            ],
            keywords: ['React-native', 'React-Query', 'Zustand', 'EmotionJS'],
            folder: '',
            images: [],
            pdfs: [],
        },
        {
            title: '(주)서르 인턴 근무',
            subtitle: '동서대학교 2020학년도 하계 국내인턴십',
            period: '2020.07 ~ 2020.08',
            link: '',
            desc: [
                {
                    main: 'Python을 이용해 AI 데이터 라벨링 툴을 제작하였습니다.',
                    sub: [],
                },
                {
                    main: `사용자는 이미지를 넘기며 이미지에 맞는 라벨링 작업을 진행하고, 모든 작업이 완료되면
                    해당 작업은 선택한 파일 포맷(csv, json 등)으로 자동 추출됩니다.`,
                    sub: [],
                },
                {
                    main: `데이터 조작을 위해 Pandas, NumPy와 같은 라이브러리들을 사용하며 데이터를 다루는
                    방법에 대해 익힐 수 있었고, 추후 교내의 데이터 관련 수업(R, Matlab)에 좋은 기반으로 작용하였습니다.`,
                    sub: [],
                },
                {
                    main: `라벨링을 쉽게 하기 위한 GUI 프로그램이 목적이었기에 PyQt5 라이브러리를 사용해
                    사용자의 접근성과 사용성을 높일 수 있도록 하였습니다.`,
                    sub: [],
                },
                {
                    main: `수월한 데이터 라벨링을 위해 마우스 휠을 통한 이미지 확대/축소 기능, 드래그를 통한
                    이미지 이동 기능 등을 구현해 보고 이미지 조작에 대해 경험할 수 있었습니다.`,
                    sub: [],
                },
                {
                    main: `Python을 통해 개발한 간단한 GUI 프로그램이었지만 좋은 사수를 만나 서로의 코드를
                    리뷰해 주고 변수명 규칙, 코드 구조, 프로그램의 방향 등을 주석 첨가, 문서화 하며 협업에 대해
                    경험할 수 있었습니다.`,
                    sub: [],
                },
            ],
            keywords: ['Python', 'PyQt5', 'Pandas', 'Numpy'],
            folder: 'seoreu',
            images: ['1.png', '2.png'],
            pdfs: [],
        },
    ],
};

export const projects = {
    subject: 'Projects',
    contents: [
        {
            title: 'Daily View',
            subtitle: '2인 사이드 프로젝트(Frontend로 참여)',
            period: '2022.01 ~ ing',
            link: 'https://github.com/eyelighting',
            demo: 'https://drive.google.com/file/d/1opbtimmilT_dh4fBFJW_nEqkfpW8t-YQ/view?usp=sharing',
            desc: [
                {
                    main: `완성도가 많이 낮은 개발 초기 단계입니다.`,
                    sub: [],
                },
                {
                    main: `익명으로 다른 유저들과 소통할 수 있는 SNS 사이트입니다.`,
                    sub: [],
                },
                {
                    main: `랜덤으로 추천된 익명의 유저와 채팅을 즐길 수 있고, 채팅을 하는 동안엔 익명 프로필을 사용하지만
                    서로 팔로우를 하면 실제 프로필을 볼 수 있습니다.`,
                    sub: [],
                },
                {
                    main: `추천된 유저들이 좀 더 동적인 느낌을 줄 수 있도록 HTML Canvas를 이용해 계속
                    움직이는 형태로 개발하였습니다.`,
                    sub: [],
                },
            ],
            keywords: ['NextJS', 'React-Query', 'Redux', 'SCSS', 'Spring', 'JPA', 'H2', 'Firebase'],
            folder: 'daily-view',
            images: ['1.png', '2.png', '3.png'],
            pdfs: [],
        },
        {
            title: 'Wonder',
            subtitle: '개인 사이드 프로젝트',
            period: '2021.11 ~ ing',
            link: 'https://github.com/Lee-Minhoon/wonder',
            demo: 'https://drive.google.com/file/d/10hj5m2JfQja0b9hMLBQfl5-6aSN7bQrS/view?usp=sharing',
            desc: [
                {
                    main: '서버가 없이 개발된 프로그래밍 포럼과 같은 맥락으로 개발한 사이트입니다.',
                    sub: [],
                },
                {
                    main: `비동기 통신의 구현을 최초에 axios 기본 함수 호출 → React Query 도입 → 훅으로 추출 과정을
                    거치며 함수형 컴포넌트에 걸맞은 형태로 최적화하였습니다.`,
                    sub: [],
                },
                {
                    main: `JWT 토큰을 이용한 로그인 방식을 구현하고, 유저 데이터가 사라지면 JWT 토큰을
                    이용해 서버로부터 유저 정보를 받아와 유지하는 로그인 디펜던시를 구현하였습니다.`,
                    sub: [],
                },
                {
                    main: `단순히 Textarea에 글을 작성하고 저장하는 것이 아닌, 에디터 라이브러리를 사용하여
                    html 형태로 글을 저장/수정할 수 있게 구현하였습니다.`,
                    sub: [],
                },
                {
                    main: `발생할 수 있는 다양한 사용자 정의 Exception과, Exception을 Http Error로 변환해
                    반환하는 핸들러를 미리 정의하여, 서버에서 클라이언트로 일관된 형식의 에러 응답, 디테일한
                    에러 내용을 반환하도록 하였습니다.`,
                    sub: [],
                },
                {
                    main: `팔로우, 쪽지 등 셀프 참조로 이루어진 테이블, 복합키를 쓰는 추천 테이블 등을 구현하며,
                    JPA의 엔티티 매핑, 연관관계 매핑 등에 대해 이해할 수 있었습니다.`,
                    sub: [],
                },
                {
                    main: `사용자 프로필 이미지와 같은 데이터를 Blob 포맷으로 저장하고, 클라우드 서버에 File로 올린 뒤
                    주솟값만을 저장해 보며 DB에 바로 넣기 힘든 큰 데이터를 어떻게 관리할지 고민해 보았습니다.`,
                    sub: [],
                },
            ],
            keywords: ['NextJS', 'React Query', 'Redux', 'SCSS', 'Spring', 'JPA', 'H2', 'Firebase'],
            folder: 'wonder',
            images: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png'],
            pdfs: [],
        },
        {
            title: 'Simple React Resume Teaplate',
            subtitle: '개인 사이드 프로젝트',
            period: '2021.09 ~ 2021.10',
            link: 'https://github.com/Lee-Minhoon/simple-react-resume-template',
            demo: '',
            desc: [
                {
                    main: '리액트로 만든 심플한 웹 이력서 템플릿입니다.',
                    sub: [],
                },
                {
                    main: '단순한 웹페이지이지만 반응형 CSS, 애니메이션 등을 추가하여 인터랙티브한 웹을 만들고자 하였습니다.',
                    sub: [],
                },
                {
                    main: '썸네일을 클릭하면 열리는 이미지 모달 기능, PDF Viewer 기능을 구현하였습니다.',
                    sub: [],
                },
                {
                    main: '해당 이력서를 위해 제작되었지만, 추후 더미 데이터를 넣고 오픈소스로 배포하였습니다.',
                    sub: [],
                },
            ],
            keywords: ['React', 'SCSS'],
            folder: 'OMR-based-automatic-arrangement-system',
            images: [],
            pdfs: [],
        },
        {
            title: '광학 음악 인식 기반 자동 편곡 시스템',
            subtitle: '캡스톤디자인1, 2 교과목 연계 프로젝트',
            period: '2020.03 ~ 2020.12',
            link: 'https://github.com/Lee-Minhoon/capstone-design',
            demo: 'https://drive.google.com/file/d/1xN1I3b-YPznTq2HovqsE6fMaPNKDjFc1/view?usp=sharing',
            desc: [
                {
                    main: '악보를 입력하여 편곡된 음악 파일을 출력 및 저장할 수 있는 애플리케이션입니다.',
                    sub: [],
                },
                {
                    main: '비전문가들도 쉽게 음악을 편곡할 수 있게끔 하고자 개발하였습니다.',
                    sub: [],
                },
                {
                    main: '사용자는 편곡하고자 하는 음악의 악보를 입력하고 편곡된 음악 파일을 제공받을 수 있습니다.',
                    sub: [],
                },
                {
                    main: `단순한 이미지 속에서 고전적 패턴인식을 통해 악보의 구성요소들이 가진 특징점들을 하나하나
                    분석해 객체를 분류하였습니다.`,
                    sub: [],
                },
                {
                    main: `패턴인식 알고리즘을 좀 더 빠르게 수행하기 위해 JNI(Java Native Interface)를 택하였습니다.`,
                    sub: [],
                },
                {
                    main: `서버는 소켓을 통해 데이터를 전달받고 음악 파일을 만들어, 바이트 형태로 전송합니다.`,
                    sub: [],
                },
                {
                    main: `멜로디를 기반으로 화성을 생성하기 위해 공개된 악곡들을 원하는 데이터로 변환,
                    학습하여 정확도 55% 이상의 신경망을 구축하였습니다.`,
                    sub: [],
                },
            ],
            keywords: ['Android', 'JNI', 'OpenCV', 'Python', 'Tensorflow', 'Socket'],
            folder: 'OMR-based-automatic-arrangement-system',
            images: ['1.png', '2.png', '3.png', '4.png'],
            pdfs: [],
        },
        {
            title: 'PC 견적 관리 시스템',
            subtitle: '데이터베이스설계 교과목 연계 프로젝트',
            period: '2019.09 ~ 2019.12',
            link: 'https://github.com/Lee-Minhoon/PC-auction',
            demo: 'https://drive.google.com/file/d/1Z_zCdbaDWm9tRLvGgdKem24aW8ke_vfO/view?usp=sharing',
            desc: [
                {
                    main: `컴퓨터 부품이나 조립 PC 관련하여 가격을 비교하고 구매할 수 있는 다나와 사이트를 레퍼런스로
                    개발한 PC를 구매를 위한 PC 견적 및 경매 사이트입니다.`,
                    sub: [],
                },
                {
                    main: `PC 부품에 대한 지식 없이 컴퓨터 부품을 고르고 어떤 프로그램을 사용할지 선택하면,
                    부품 간의 호환성, PC와 사용할 프로그램의 사양 비교 등을 자동으로 체크해 줍니다.`,
                    sub: [],
                },
                {
                    main: `도메인 정의, 엔티티 기술서 등 관계형 데이터베이스를 직접 설계하고 여러 관계 종류를 직접 구현해 보았습니다.`,
                    sub: [],
                },
                {
                    main: `로그인/로그아웃, 회원가입과 같은 기본적인 기능을 제외하고 관리자 페이지, 역경매/입찰, 주문
                    등의 기능들을 구현하였습니다.`,
                    sub: [],
                },
                {
                    main: `페이징 처리와, 경매 마감을 위한 이벤트 스케줄러 등 다양한 SQL 쿼리문을 만들어보았습니다.`,
                    sub: [],
                },
            ],
            keywords: ['PHP', 'MySQL'],
            folder: 'PC-auction',
            images: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png'],
            pdfs: [],
        },
        {
            title: '인터넷 도서 구매 시스템',
            subtitle: '데이터베이스설계 교과목 연계 프로젝트',
            period: '2019.09 ~ 2019.12',
            link: 'https://github.com/Lee-Minhoon/online-book-purchase-system',
            demo: 'https://drive.google.com/file/d/1ACYi2uwHS57S0cE4PRxLkIijtVn6_Zxc/view?usp=sharing',
            desc: [
                {
                    main: `로그인/로그아웃, 회원가입, 마이페이지, 주문, 리뷰 등의 간단한 기능을 구현한
                    온라인 도서 구매 사이트입니다.`,
                    sub: [],
                },
            ],
            keywords: ['PHP', 'MySQL'],
            folder: 'database-practice',
            images: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png'],
            pdfs: [],
        },
        {
            title: '플리마켓 통합 관리 시스템',
            subtitle: '소프트웨어분석및설계 교과목 연계 프로젝트',
            period: '2019.09 ~ 2019.12',
            link: '',
            demo: '',
            desc: [
                {
                    main: `플리마켓이 SNS와 결합하여 사회적 트렌드로 자리 잡고 규모가 커짐에 따라,
                    플리마켓의 셀러와 주최자, 참가자를 매칭해주는 B2C 애플리케이션을 설계해 보았습니다.`,
                    sub: [],
                },
                {
                    main: `셀러는 주최가 셀러를 모집하는 시스템이 아닌 주도적으로 셀러 그룹을 형성하고,
                    자신들의 요구사항을 수용할 수 있는 주최자를 구할 수 있도록 하였습니다.`,
                    sub: [],
                },
                {
                    main: `주최자 또한 이미 그룹으로 형성된 셀러들을 선택하기 때문에, 번거롭지 않게
                    셀러들을 구할 수 있고, 참가자는 자신에게 필요한 플리마켓 정보를 찾지 못하는 상황 속에서
                    애플리케이션을 통해 참가자의 위치, 일정, 원하는 물품 등을 기반으로 하여 기호에 맞는
                    플리마켓에 참여할 수 있습니다.`,
                    sub: [],
                },
                {
                    main: `개발 직전 단계까지의 설계를 목표로 두고 진행한 프로젝트이며, 다양한 설계 문서 등을
                    작성하면서 만들고자 하는 소프트웨어를 분석하고 설계하는 법을 익힐 수 있었습니다.`,
                    sub: [],
                },
            ],
            keywords: ['StarUML'],
            folder: 'flea-market-integrated-management-system',
            images: [],
            pdfs: [
                { pdf: '1.pdf', thumbnail: '1-thumbnail.png' },
                { pdf: '2.pdf', thumbnail: '2-thumbnail.png' },
                { pdf: '3.pdf', thumbnail: '3-thumbnail.png' },
                { pdf: '4.pdf', thumbnail: '4-thumbnail.png' },
                { pdf: '5.pdf', thumbnail: '5-thumbnail.png' },
            ],
        },
        {
            title: 'TAPC(2)',
            subtitle: '소프트웨어개발실습4 교과목 연계 프로젝트',
            period: '2019.09 ~ 2019.12',
            link: 'https://github.com/Lee-Minhoon/tap-the-taxi-2',
            demo: 'https://drive.google.com/file/d/1XUmDZE-aRhG5vczr_8cafsUA6OMYkjtT/view?usp=sharing',
            desc: [
                {
                    main: 'TAPC의 후속 애플리케이션입니다.',
                    sub: [],
                },
                {
                    main: `GPS를 통해 버튼 하나로 근거리의 유저들을 매칭시켜주도록 시스템을 변경하였고,
                    소켓을 이용한 채팅 시스템, 더미 데이터를 활용해 송금 API 등을 구현하였습니다.`,
                    sub: [],
                },
            ],
            keywords: ['Android', 'Retrofit', 'NodeJS', 'Express', 'Socket.io', 'MySQL'],
            folder: 'tap-the-taxi-2',
            images: ['1.png', '2.png', '3.png', '4.png'],
            pdfs: [],
        },
        {
            title: 'TAPC',
            subtitle: '소프트웨어개발실습3 교과목 연계 프로젝트',
            period: '2019.03 ~ 2019.06',
            link: 'https://github.com/Lee-Minhoon/tap-the-taxi-1',
            demo: 'https://drive.google.com/file/d/1chtZOzySk6AXH3Zbhgv_789-6C6JYaZu/view?usp=sharing',
            desc: [
                {
                    main: '같은 목적지의 택시 탑승자를 매칭해주기 위한 택시 합승 애플리케이션입니다.',
                    sub: [],
                },
                {
                    main: `백엔드 서버를 구성할 수 있는 기술이 없어서 Firebase에서 지원 해주는
                    Realtime Database를 이용하여 채팅 구현을 구현해 보았습니다.`,
                    sub: [],
                },
            ],
            keywords: ['Android', 'Firebase'],
            folder: 'tap-the-taxi-1',
            images: ['1.png', '2.png', '3.png', '4.png', '5.png'],
            pdfs: [],
        },
        {
            title: '프로그래밍 포럼',
            subtitle: '소프트웨어개발실습2 교과목 연계 프로젝트',
            period: '2018.03 ~ 2018.06',
            link: 'https://github.com/Lee-Minhoon/programming-forum',
            demo: 'https://drive.google.com/file/d/1DCt0lIiR6yJxuVV6SLROj3sjHMdGSmUD/view?usp=sharing',
            desc: [
                {
                    main: '한국에 대형 프로그래밍 커뮤니티가 부족하다고 생각하여 만든 사이트입니다.',
                    sub: [],
                },
                {
                    main: '서버가 없이 개발된 정적 웹 페이지입니다.',
                    sub: [],
                },
            ],
            keywords: ['HTML', 'CSS', 'JavaScript'],
            folder: 'programming-forum',
            images: ['1.png', '2.png', '3.png', '4.png', '5.png'],
            pdfs: [],
        },
        {
            title: '눈걸이',
            subtitle: '소프트웨어기초프로젝트 교과목 연계 프로젝트',
            period: '2018.03 ~ 2018.06',
            link: '',
            demo: '',
            desc: [
                {
                    main: `시각장애인을 위해 만들어진 장애물과의 거리를 알려주는 목걸이입니다.`,
                    sub: [],
                },
                {
                    main: `초음파센서를 통해 거리를 측정하고 부저와 진동 모터로 거리를 알려줍니다.`,
                    sub: [],
                },
            ],
            keywords: ['Arduino'],
            folder: 'eyelace',
            images: ['1.png', '2.png'],
            pdfs: [],
        },
    ],
};

export const awards = {
    subject: 'Awards',
    contents: [
        {
            title: '2020년도 온택트기반 동서인 FAIR - 최우수상',
            subtitle: '광학 음악 인식 기반 자동 편곡 시스템',
            period: '2020.12.17',
            link: 'https://www.dongseo.ac.kr/kr/index.php?pCode=MN2000192&pg=10&mode=view&idx=83639',
            desc: [
                {
                    main: '소프트웨어 관련 학과의 졸업작품 공모전입니다.',
                    sub: [],
                },
            ],
            keywords: [],
            folder: '',
            images: [],
            pdfs: [],
        },
        {
            title: '한국지능시스템학회 30주년 기념 2020 추계학술대회 - 우수논문상',
            subtitle: '광학 음악 인식 기반 자동 편곡 시스템',
            period: '2020.11.28',
            link: '',
            desc: [],
            keywords: [],
            folder: '',
            images: [],
            pdfs: [],
        },
        {
            title: '2020학년도 동서인 AI 해커톤 경진대회 - 장려상',
            subtitle: '컴퓨터 비전을 이용한 악보 인식 기반 자동 편곡 시스템',
            period: '2020.08.31',
            link: 'https://www.dongseo.ac.kr/kr/index.php?pCode=MN2000192&pg=15&mode=view&idx=82307',
            desc: [
                {
                    main: '아이디어 경진대회에서 기획한 소프트웨어를 직접 개발해 선보이는 해커톤입니다.',
                    sub: [],
                },
            ],
            keywords: [],
            folder: '',
            images: [],
            pdfs: [],
        },
        {
            title: '2020년도 동서 AI·SW 아이디어 경진대회 - 장려상',
            subtitle: '광학 음악 인식을 이용한 자동 편곡 시스템',
            period: '2020.06.08',
            link: 'https://uni.dongseo.ac.kr/sw/index.php?pCode=MN1000014&pg=3&mode=view&idx=442',
            desc: [
                {
                    main: 'AI가 융합된 소프트웨어를 기획하고, 그 아이디어를 공모하는 경진대회입니다.',
                    sub: [],
                },
            ],
            keywords: [],
            folder: '',
            images: [],
            pdfs: [],
        },
        {
            title: '2017학년도 컴퓨터공학부 프로그래밍 경진대회 - 우수상',
            subtitle: '기초프로그래밍',
            period: '2017.10.27',
            link: 'https://blog.naver.com/computer_ck/221128532267',
            desc: [
                {
                    main: '간단한 구현 문제들을 Python으로 구현해 모두 맞춘 참가자 순서대로 입상하였습니다.',
                    sub: [],
                },
            ],
            keywords: [],
            folder: '',
            images: [],
            pdfs: [],
        },
    ],
};

export const research = {
    subject: 'Research',
    contents: [
        {
            title: 'Journal of The Korean Institute of Intelligent Systems',
            subtitle: '광학 음악 인식 기반 자동 편곡 시스템을 위한 화성 생성 연구',
            period: '2021.01.18',
            link: 'https://www.dbpia.co.kr/Journal/articleDetail?nodeId=NODE10572152',
            desc: [
                {
                    main: '구분 : Journal',
                    sub: [
                        '흔히 음악을 추상적이고 불확실성이 높은 예술 분야라 생각하지만, 엄연히 화성학과 대위법 등 정립된 이론이 존재한다. 컴퓨터와 인공지능이 등장함에 따라 이런 이론들을 바탕으로 음악을 작곡하거나 편곡하려는 시도가 생겨났고, 현재까지도 많은 연구가 진행되고 있다. 본 논문에서는 악보 이미지를 입력받아 알고리즘을 통해 자동 편곡한 음악 파일을 출력할 수 있도록 하는 악보 인식 기반 자동 편곡 시스템을 제안하였다. 광학 음악 인식을 통해 악보를 컴퓨터가 이해하기 쉬운 데이터 형태로 변환하였고, 멜로디를 기반으로 코드를 생성함으로써 편곡 시스템의 일부분을 구현하였다. 코드를 생성하는 작업에는 실제 악곡의 멜로디와 코드를 기반으로 심층 신경망을 사용하였다. 코드를 생성하는 데에는 다양한 선택지가 있음에도 불구, 실제 악곡과의 비교에서 약 55%의 일치율을 보였다.',
                    ],
                },
            ],
            keywords: [],
            folder: '',
            images: [],
            pdfs: [],
        },
        {
            title: '컴퓨터공학부졸업논문집',
            subtitle: '광학 음악 인식 기반 자동 편곡 시스템',
            period: '2020.11.28',
            link: '',
            desc: [
                {
                    main: '구분 : Thesis',
                    sub: [
                        '4차 산업혁명이 진행되며 인공지능이 다양한 분야에서 활용되고 있다. 음악 분야 또한 인공지능과의 융합에 많은 연구가 진행되고 있다. 한편 사회 전반적으로 음악에 대한 수요는 꾸준히 늘고 있으며, 그중에서도 편곡에 대한 관심이 늘고 있다. 다만 편곡 작업은 진입장벽이 높아, 전공자가 아닌 일반인들이 시도하기에는 어려움이 있다. 이에 따라 본 논문에서는 광학 음악 인식 기반 자동 편곡 시스템을 제안한다. 편곡을 위한 데이터 확보를 위해 광학 음악 인식을 사용하였고 편곡 과정 중, 화성 생성의 경우 멜로디에 기반한 신경망 기법을 사용하였다. 제안한 광학 음악 인식 기법은 복잡도 ‘하’에 해당하는 악보 20장에 대해 95%의 인식률을 보였으며 신경망을 통해 생성된 화성들은 화성학에 근거하여 실제 편곡에 적용할 수 있음을 확인하였다.',
                    ],
                },
            ],
            keywords: [],
            folder: '',
            images: [],
            pdfs: [],
        },
        {
            title: '한국지능시스템학회 30주년 기념 2020 추계학술대회',
            subtitle: '광학 음악 인식 기반 자동 편곡 시스템',
            period: '2020.11.28',
            link: '',
            desc: [
                {
                    main: '구분 : Conference',
                    sub: [
                        '인공지능에 대한 관심과 활용이 증가함에 따라 4차 산업혁명의 주요 기술로 각광받고 있다. 음악분야에서도 인공지능과의 융합에 많은 연구가 활발히 진행되고 있다. 본 논문에서는 광학음악인식 기반 자동 편곡 시스템을 제안한다. 편곡에는 템포 조절, 조옮김, 화성 생성과 같은 다양한 과정이 포함된다. 편곡을 위한 데이터 확보를 위해 광학 음악 인식을 사용하였고 멜로디에 어울리는 화성을 생성하기 위해 신경망 기법을 사용하였다. 생성된 화성들은 화성학에 근거하여 실제 편곡에 적용시킬 수 있음을 확인하였다.',
                    ],
                },
            ],
            keywords: [],
            folder: '',
            images: [],
            pdfs: [],
        },
        {
            title: '발명 특허 출원',
            subtitle: '악보 인식 기반 편곡 장치 및 악보 인식 기반 편곡 방법',
            period: '2020.11.10',
            link: '',
            desc: [
                {
                    main: '구분 : Patent',
                    sub: [
                        '본 발명은 악보 인식 기반 편곡 장치 및 방법에 관한 것으로, 더 상세하게는 광학 인식 알고리즘을 이용하여 악보로부터 데이터를 추출하고, 추출된 데이터를 편집함으로써 사용자가 쉽게 악보를 편곡하도록 제공하며, 편곡된 음악을 파일로 제공받도록 하는 악보 인식 기반 편곡 장치 및 방법에 관한 것이다.',
                    ],
                },
            ],
            keywords: [],
            folder: '',
            images: [],
            pdfs: [],
        },
        {
            title: 'ICCT2020 SCOPUS',
            subtitle: 'Computer-Vision-based Advanced Optical Music Recognition System',
            period: '2020.08.31',
            link: 'http://www.aspbs.com/ctn/contents-ctn2021.htm',
            desc: [
                {
                    main: '구분 : SCOPUS',
                    sub: [
                        'Computer vision is an artificial intelligence technology that studies techniques for extracting information from images. Several studies have been performed to identify and edit music scores using computer vision. This study proposes a system to identify musical notes and print arranged music. Music is produced by general rules; consequently, the components of music have specific patterns. There are four approaches in pattern recognition that can be used classify images using patterns. Our proposed method of identifying music sheets is as follows. Several pretreatment processes (image binary, noise and staff elimination, image resizing) are performed to aid the identification. The components of the music sheet are identified by statistical pattern recognition. Applying an artificial intelligence model (Markov chain) to extracted music data aids in arranging the data. From applying the pattern recognition technique, a recognition rate of 100% was shown for music sheets of low complexity. The components included in the recognition rate are signs, notes, and beats. However, there was a low recognition rate for some music sheet and can be addressed by adding a classification to the navigation process. To increase the recognition rate of the music sheet with intermediate complexity, it is necessary to refine the pre-processing process and pattern recognition algorithm. We will also apply neural network-based models to the arrangement process.',
                    ],
                },
            ],
            keywords: [],
            folder: '',
            images: [],
            pdfs: [],
        },
        {
            title: 'The 10th International Conference on Convergence Technology in 2020',
            subtitle: 'Advanced Optical Music Recognition System for Automatic Arrangement',
            period: '2020.07.09',
            link: '',
            desc: [
                {
                    main: '구분 : Conference',
                    sub: [
                        'In general, the demand for music is increasing among them; the demand and interest for remake songs are increasing. However, the skill related to the arrangement is difficult to learn, and its quantity has been recognized only as an expert area. On the other hand, AI (artificial intelligence) is active in many fields, among which music-related AI is also in the spotlight. In this paper, we proposed the contents of the development of a system that makes it easy for the general public who is not a music major to arrange music using computer vision and machine learning technology easily. Initially, a template matching algorithm was applied to score recognition. However, there was a problem with a low recognition rate. In order to solve the problem, we proposed advanced optical music recognition with high versatility.',
                    ],
                },
            ],
            keywords: [],
            folder: '',
            images: [],
            pdfs: [],
        },
    ],
};

export const education = {
    subject: 'Education',
    contents: [
        {
            title: '동서대학교 졸업',
            subtitle: '전 : 컴퓨터공학전공 / 부 : AI공학전공',
            period: '2014.03 ~ 2021.02',
            link: '',
            desc: [],
            keywords: [],
            folder: '',
            images: [],
            pdfs: [],
        },
        {
            title: '부산남일고등학교 졸업',
            subtitle: '부산광역시 수영구 망미동',
            period: '2011.03 ~ 2014.02',
            link: '',
            desc: [],
            keywords: [],
            folder: '',
            images: [],
            pdfs: [],
        },
    ],
};

export const certificate = {
    subject: 'Certificate',
    contents: [
        {
            title: '정보처리기사',
            subtitle: '한국산업인력공단',
            period: '2021.06.02',
            link: '',
            desc: [],
            keywords: [],
            folder: '',
            images: [],
            pdfs: [],
        },
        {
            title: '컴퓨터활용능력 1급',
            subtitle: '대한상공회의소 자격평가사업단',
            period: '2020.03.13',
            link: '',
            desc: [],
            keywords: [],
            folder: '',
            images: [],
            pdfs: [],
        },
        {
            title: '워드프로세서',
            subtitle: '대한상공회의소 자격평가사업단',
            period: '2020.02.07',
            link: '',
            desc: [],
            keywords: [],
            folder: '',
            images: [],
            pdfs: [],
        },
    ],
};

export const footer = { updated: '2022. 04. 03.' };

export const main = [experience, projects, awards, research, education, certificate];
