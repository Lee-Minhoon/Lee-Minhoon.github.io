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
    안녕하세요. 웹 개발자 지망생 이민훈입니다.

    
    웹 개발자로 취업하기 위해 공부하고 있지만, 어떤 프로젝트를 진행하던 나름대로의 재미와
    매력이 있었기 때문에 개발이라면 어떤 언어와 환경이던 크게 마다치 않습니다.


    학부 시절에는 안드로이드 애플리케이션개발, 웹 개발 등의 여러 프로젝트에 프론트엔드와
    백엔드 가리지 않고 참여하였습니다.


    현재 졸업 후에는 스스로 부족하다고 생각하는 부분을 채우고 있습니다. 자료구조와 알고리즘 공부,
    자격증 취득, 웹 개발자로 취업하기 위한 프레임워크와 라이브러리 경험 등을 해보고 있습니다.
    `,
};

export const skills = {
    subject: 'Skills',
    contents: [
        {
            category: 'Frontend',
            desc: [
                'HTML, CSS(SCSS), JavaScript',
                'React, NextJS',
                'Redux, React Query',
                'TailwindCSS',
                'Visual Studio Code, Sublime Text',
            ],
        },
        {
            category: 'Backend',
            desc: ['Java, NodeJS, PHP, Python', 'Spring Boot, Spring Security, Spring Data JPA', 'Gradle', 'IntelliJ'],
        },
        {
            category: 'DevOps',
            desc: ['MySQL, H2', 'Git'],
        },
    ],
};

export const experience = {
    subject: 'Experience',
    contents: [
        {
            title: '(주)서르 인턴 근무',
            subtitle: '동서대학교 2020학년도 하계 국내인턴십',
            period: '2020.07 ~ 2020.08',
            link: '',
            desc: [
                {
                    main: 'Python을 이용해 AI 데이터 라벨링 툴 제작',
                    sub: [
                        'UI 구현을 위해 PyQt5, 데이터 조작을 위해 Pandas, NumPy 라이브러리를 사용',
                        '마우스 휠을 통한 이미지 확대/축소 기능',
                        '드래그를 통한 이미지 이동 기능',
                        '라벨링이 완료된 후 선택한 파일 포맷(csv, json 등)으로 자동 추출됨',
                    ],
                },
            ],
            keywords: ['Python', 'PyQt5', 'Pandas', 'Numpy'],
            folder: '',
            images: [],
            pdfs: [],
        },
    ],
};

export const projects = {
    subject: 'Projects',
    contents: [
        {
            title: 'eyelighting',
            subtitle: '2인 사이드 프로젝트',
            period: '2022.01 ~ ing',
            link: 'https://github.com/eyelighting',
            desc: [
                {
                    main: 'SNS',
                    sub: [],
                },
            ],
            keywords: ['NextJS', 'React Query', 'Redux', 'SCSS', 'Spring', 'JPA', 'H2', 'Firebase'],
            folder: '',
            images: [],
            pdfs: [],
        },
        {
            title: 'Wonder',
            subtitle: '개인 사이드 프로젝트',
            period: '2021.11 ~ ing',
            link: 'https://github.com/Lee-Minhoon/wonder',
            desc: [
                {
                    main: '한국에 대형 프로그래밍 커뮤니티가 부족하다고 생각하여 만든 사이트입니다.',
                    sub: [],
                },
                {
                    main: `비동기 통신의 구현을 최초에 axios 기본 함수 호출 → React Query 도입 → 훅으로 추출과정을
                    거치며 함수형 컴포넌트에 걸맞는 형태로 최적화하였습니다.`,
                    sub: [],
                },
                {
                    main: `JWT 토큰을 이용한 로그인 방식을 구현하고, 유저 데이터가 사라지면 JWT 토큰을
                    이용해 서버로부터 유저 정보를 받아와 유지하는 로그인 디펜던시를 구현하였습니다.`,
                    sub: [],
                },
                {
                    main: `발생할 수 있는 다양한 사용자 정의 Exception과, Exception을 Http Error로 변환해
                    반환하는 핸들러를 미리 정의하여, 서버에서 클라이언트로 일관된 형식의 에러응답, 디테일한
                    에러 내용을 반환하도록 하였습니다.`,
                    sub: [],
                },
                {
                    main: `팔로우, 쪽지 등 셀프참조로 이루어진 테이블, 복합키를 쓰는 추천 테이블 등을 구현하며,
                    JPA의 엔티티 매핑, 연관관계 매핑 등에 대해 이해할 수 있었습니다.`,
                    sub: [],
                },
                {
                    main: `사용자 프로필 이미지와 같은 데이터를 Blob포맷으로 저장하고, 클라우드 서버에 File로 올린뒤
                    주소값만을 저장해보며 DB에 바로 넣기 힘든 큰 데이터를 어떻게 관리할지 고민해보았습니다.`,
                    sub: [],
                },
            ],
            keywords: ['NextJS', 'React Query', 'Redux', 'SCSS', 'Spring', 'JPA', 'H2', 'Firebase'],
            folder: '',
            images: [],
            pdfs: [],
        },
        {
            title: 'Simple React Resume Teaplate',
            subtitle: '개인 사이드 프로젝트',
            period: '2021.09 ~ 2021.10',
            link: 'https://github.com/Lee-Minhoon/simple-react-resume-template',
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
                    main: `단순한 이미지속에서 악보의 구성요소들이 가진 특징점들을 하나하나 분석해 객체를 분류하였고,
                    이로인해 고전적 패턴인식을 이해하게 되었습니다.`,
                    sub: [],
                },
                {
                    main: `패턴인식 알고리즘을 수행하기 위해 JNI(Java Native Interface)를 택해 경험하였습니다.`,
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
            desc: [
                {
                    main: 'PC를 구매를 위한 PC 견적 및 경매 사이트',
                    sub: [
                        'PC 부품에 대한 지식 없이 조립형 PC를 구매할 수 있게끔 하고자 함',
                        '로그인/로그아웃, 회원가입, 페이징, 관리자 페이지 등 기본적인 기능',
                        '역경매/입찰 기능',
                    ],
                },
                {
                    main: 'Reference : 다나와(danawa)',
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
            desc: [
                {
                    main: '온라인 도서 구매 사이트',
                    sub: ['로그인/로그아웃, 회원가입, 마이페이지, 주문, 리뷰 등 기본적인 기능'],
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
            desc: [
                {
                    main: '플리마켓의 셀러와 주최자, 참가자를 매칭해주는 B2C 애플리케이션',
                    sub: [],
                },
                {
                    main: '개발 직전 단계까지의 설계를 목표로 두고 진행',
                    sub: ['프로젝트 정의서, 요구사항 기술서, 클래스 분석서, UI 설계서, 데이트베이스 설계서 작성'],
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
            desc: [
                {
                    main: '택시 합승 애플리케이션',
                    sub: [
                        '로그인/로그아웃, 회원가입 등을 위한 http 서버',
                        '매칭/채팅을 위한 소켓 서버',
                        'GPS 기반 사용자 매칭, 채팅, 자동 송금 기능(더미)',
                    ],
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
            desc: [
                {
                    main: '택시 합승 애플리케이션',
                    sub: ['로그인/로그아웃, 회원가입, 방 생성/참여, 채팅 기능'],
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
            desc: [{ main: '개발자를 위한 통합 커뮤니티', sub: ['서버가 없는 정적 페이지'] }],
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
            desc: [
                {
                    main: '시각장애인을 위해 만들어진 장애물과의 거리를 알려주는 목걸이',
                    sub: ['초음파센서와 부저, 진동 모터 등이 사용됨'],
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
            desc: [],
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
            desc: [],
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
            desc: [],
            keywords: [],
            folder: '',
            images: [],
            pdfs: [],
        },
        {
            title: '기초프로그래밍 경진대회 - 우수상',
            subtitle: '',
            period: '2017.10.27',
            link: 'https://blog.naver.com/computer_ck/221128532267',
            desc: [],
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

export const footer = { updated: '2022. 02. 17.' };

export const main = [experience, projects, awards, research, education, certificate];
