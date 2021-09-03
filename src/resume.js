import { icons } from './icons';

export const resume = {
    header: {
        name: '이민훈',
        desc: '프로그래머 지망생',
        email: 'hackids@naver.com',
        github: 'https://github.com/',
        blog: 'https://hackids.tistory.com/'
    },
    summary: {
        subject: 'Summary',
        profile: 'profile.jpg',
        intro: `
        안녕하세요! 개발자 지망생 이민훈입니다. 뭔가를 만드는 것, 문제를 해결하는 것을
        좋아하다 보니 어릴 때 부터 자연스레 개발자를 꿈꾸게 되었습니다. 그 꿈이 변치않아
        현재도 개발자로 일하기위해 다양한 준비들을 하고 있습니다. 대학 생활 중 안드로이드
        어플리케이션 개발, 웹 개발 등의 여러 프로젝트에 프론트엔드와 백엔드 가리지 않고
        열심히 참여하였으며, 졸업후에는 알고리즘 공부, 자격증 취득, 안해봤던 기술 공부 등을
        하고 있습니다. \n프로그래머라는
        `
    },
    education: {
        subject: 'Education',
        contents: [
            {
                title: '동서대학교 졸업',
                subtitle: '전 : 컴퓨터공학전공 / 부 : AI공학전공',
                period: '2014.03 ~ 2021.02',
                desc: [],
                keywords: []
            },
            {
                title: '부산남일고등학교 졸업',
                subtitle: '부산광역시 수영구 망미동',
                period: '2011.03 ~ 2014.02',
                desc: [],
                keywords: []
            }
        ]
    },
    skills: {
        subject: 'Skills',
        contents: [
            { category: 'Frontend', techs: ['Java', 'C++'] },
            { category: 'Backend', techs: ['Java', 'C++'] },
            { category: 'DevOps', techs: ['Java', 'C++'] }
        ]
    },
    experience: {
        subject: 'Experience',
        contents: [
            {
                title: '제목1', link: 'https://github.com/Lee-Minhoon', period: '2014.07~',
                desc: ['~~한 프로젝트', '2223'],
                keywords: [icons.Cpp, icons.Cpp]
            },
            {
                title: '제목1', link: 'https://github.com/Lee-Minhoon', period: '2014.07~',
                desc: ['~~한 프로젝트', '222'],
                keywords: [icons.Cpp, icons.Cpp]
            },
            {
                title: '제목1', link: 'https://github.com/Lee-Minhoon', period: '2014.07~',
                desc: ['~~한 프로젝트', '222'],
                keywords: [icons.Cpp, icons.Cpp]
            },
            {
                title: '제목1', link: 'https://github.com/Lee-Minhoon', period: '2014.07~',
                desc: ['~~한 프로젝트', '222'],
                keywords: [icons.Cpp, icons.Cpp]
            },
        ]
    },
    projects: {
        subject: 'Projects',
        contents: [
            {
                title: '광학음악인식 기반 자동 편곡 시스템',
                subtitle: '캡스톤디자인1, 2 교과목 연계 프로젝트',
                link: 'https://github.com/Lee-Minhoon/capstone-design',
                period: '2020.03 ~ 2020.12',
                desc: [
                    '비전문가들도 악보를 데이터화하여 쉽게 편집하고 음악 파일로 출력할 수 있는 악보 인식 기반 편곡 장치를 제공하고자 함',
                    '사용자는 편곡하고자 하는 음악의 악보를 입력하고 편곡된 음악 파일을 제공 받음',
                    '크게 광학 음악 인식 모듈과 자동 편곡 모듈로 구성',
                    '광학 음악 인식 모듈에 OpenCV 라이브러리를 사용하였으며, 속도를 위해 jni + ndk를 사용함',
                    '클라이언트는 안드로이드 애플리케이션, 서버는 파이썬으로 구현'
                ],
                keywords: [icons.C, icons.Cpp, icons.Java, icons.Python, icons.OpenCV, icons.Android],
                images: ['./projects/1-1.png', './projects/1-2.png', './projects/1-3.png', './projects/1-4.png']
            },
            {
                title: 'PC 견적 관리 시스템',
                subtitle: '데이터베이스설계 교과목 연계 프로젝트',
                link: 'https://github.com/Lee-Minhoon/PC-auction',
                period: '2019.09 ~ 2019.12',
                desc: [
                    'PC부품에 대한 지식 없이 조립형 PC를 구매할 수 있는 PC견적 및 경매 사이트',
                    '로그인, 로그아웃, 회원가입, 역경매/입찰, 페이징, 관리자 페이지 등의 기능 제공',
                    'HTML + CSS + JavaScirpt로 클라이언트, Apache + PHP로 로컬서버 구현'
                ],
                keywords: [icons.HTML, icons.CSS, icons.JavaScript, icons.PHP, icons.MySQL],
                images: []
            },
            {
                title: '플리마켓 통합 관리 시스템',
                subtitle: '소프트웨어분석및설계 교과목 연계 프로젝트',
                link: 'https://github.com/Lee-Minhoon',
                period: '2019.09 ~ 2019.12',
                desc: ['~~한 프로젝트', '222'],
                keywords: [],
                images: []
            },
            {
                title: 'TAPC(2)',
                subtitle: '소프트웨어개발실습4 교과목 연계 프로젝트',
                link: 'https://github.com/Lee-Minhoon/tap-the-taxi-2',
                period: '2019.09 ~ 2019.12',
                desc: ['~~한 프로젝트', '222'],
                keywords: [icons.Java, icons.JavaScript, icons.Nodejs, icons.MySQL, icons.Android],
                images: []
            },
            {
                title: 'TAPC',
                subtitle: '소프트웨어개발실습3 교과목 연계 프로젝트',
                link: 'https://github.com/Lee-Minhoon/tap-the-taxi-2',
                period: '2019.03 ~ 2019.06',
                desc: ['~~한 프로젝트', '222'],
                keywords: [icons.Java, icons.Firebase, icons.Android],
                images: []
            },
            {
                title: '프로그래밍 포럼',
                subtitle: '소프트웨어개발실습2 교과목 연계 프로젝트',
                link: 'https://github.com/Lee-Minhoon/programming-forum',
                period: '2018.03 ~ 2018.06',
                desc: ['~~한 프로젝트', '222'],
                keywords: [icons.HTML, icons.CSS, icons.JavaScript],
                images: []
            },
            {
                title: '눈걸이',
                subtitle: '소프트웨어기초프로젝트 교과목 연계 프로젝트',
                link: 'https://github.com/Lee-Minhoon/tap-the-taxi-2',
                period: '2018.03 ~ 2018.06',
                desc: ['~~한 프로젝트', '222'],
                keywords: [icons.C, icons.Arduino],
                images: []
            },
        ]
    },
    awards: {
        subject: 'Awards',
        contents: [
            {
                title: '2020년도 온택트기반 동서인 FAIR - 최우수상',
                link: 'https://blog.naver.com/PostView.nhn?blogId=dongseo_aisw&logNo=222199685902&categoryNo=6&parentCategoryNo=1&viewDate=&currentPage=1&postListTopCurrentPage=1&from=postView',
                period: '2020.12.17',
                desc: ['~~한 프로젝트', '222'],
                keywords: [icons.Cpp, icons.Cpp]
            },
            {
                title: '한국지능시스템학회 30주년 기념 2020 추계학술대회 - 우수논문상',
                link: 'https://blog.naver.com/PostView.nhn?blogId=dongseo_aisw&logNo=222199685902&categoryNo=6&parentCategoryNo=1&viewDate=&currentPage=1&postListTopCurrentPage=1&from=postView',
                period: '2020.11.28',
                desc: ['~~한 프로젝트', '222'],
                keywords: [icons.Cpp, icons.Cpp]
            },
            {
                title: '동서인 AI해커톤 경진대회 - 장려상',
                link: 'https://www.dongseo.ac.kr/kr/?pCode=MN2000192&mode=view&idx=82307',
                period: '2020.08.08',
                desc: ['~~한 프로젝트', '222'],
                keywords: [icons.Cpp, icons.Cpp]
            },
            {
                title: '2020년도 동서 AI·SW 아이디어 경진대회 - 장려상',
                link: 'https://uni.dongseo.ac.kr/sw/index.php?pCode=MN1000014&pg=2&mode=view&idx=442',
                period: '2020.06.08',
                desc: ['~~한 프로젝트', '222'],
                keywords: [icons.Cpp, icons.Cpp]
            },
            {
                title: '기초프로그래밍 경진대회 - 우수상',
                link: 'https://m.blog.naver.com/computer_ck/221128532267',
                period: '2017.10.27',
                desc: ['~~한 프로젝트', '222'],
                keywords: [icons.Cpp, icons.Cpp]
            }
        ]
    },
    research: {
        subject: 'Research',
        contents: [
            {
                title: 'Journal of The Korean Institute of Intelligent Systems',
                subtitle: 'Optical Music Recognition-based Auto Arrangement System',
                link: 'https://m.blog.naver.com/computer_ck/221128532267',
                period: '2020.01.18',
                desc: [
                    '구분 : Journal',
                    '논문명 : Optical Music Recognition-based Auto Arrangement System'
                ],
                keywords: [icons.Cpp, icons.Cpp]
            },
            {
                title: '컴퓨터공학부졸업논문집',
                subtitle: '광학음악인식 기반 자동 편곡 시스템',
                link: 'https://m.blog.naver.com/computer_ck/221128532267',
                period: '2020.11.28',
                desc: [
                    '구분 : Thesis',
                    '논문명 : 광학음악인식 기반 자동 편곡 시스템'
                ],
                keywords: [icons.Cpp, icons.Cpp]
            },
            {
                title: '한국지능시스템학회 30주년 기념 2020 추계학술대회',
                subtitle: '광학음악인식 기반 자동 편곡 시스템',
                link: 'https://m.blog.naver.com/computer_ck/221128532267',
                period: '2020.11.28',
                desc: [
                    '구분 : Conference',
                    '논문명 : 광학음악인식 기반 자동 편곡 시스템'
                ],
                keywords: [icons.Cpp, icons.Cpp]
            },
            {
                title: '발명 특허 출원',
                subtitle: '악보 인식 기반 편곡 장치 및 악보 인식 기반 편곡 방법',
                link: 'https://m.blog.naver.com/computer_ck/221128532267',
                period: '2020.11.10',
                desc: [
                    '특허명 : 악보 인식 기반 편곡 장치 및 악보 인식 기반 편곡 방법'
                ],
                keywords: [icons.Cpp, icons.Cpp]
            },
            {
                title: 'ICCT2020 SCOPUS',
                subtitle: 'Computer-Vision-based Advanced Optical Music Recognition System',
                link: 'https://m.blog.naver.com/computer_ck/221128532267',
                period: '2020.08.31',
                desc: [
                    '구분 : SCOPUS',
                    '논문명 : Computer-Vision-based Advanced Optical Music Recognition System'
                ],
                keywords: [icons.Cpp, icons.Cpp]
            },
            {
                title: 'The 10th International Conference on Convergence Technology in 2020',
                subtitle: 'Advanced Optical Music Recognition System for Automatic Arrangement',
                link: 'https://m.blog.naver.com/computer_ck/221128532267',
                period: '2020.07.09',
                desc: [
                    '구분 : Conference',
                    '논문명 : Advanced Optical Music Recognition System for Automatic Arrangement'
                ],
                keywords: [icons.Cpp, icons.Cpp]
            }
        ]
    },
    certificate: {
        subject: 'Certificate',
        contents: [
            {
                title: '정보처리기사',
                subtitle: '한국산업인력공단',
                period: '2021.06.02',
                desc: [],
                keywords: []
            },
            {
                title: '컴퓨터활용능력 1급',
                subtitle: '대한상공회의소 자격평가사업단',
                period: '2020.03.13',
                desc: [],
                keywords: []
            },
            {
                title: '워드프로세서',
                subtitle: '대한상공회의소 자격평가사업단',
                period: '2020.02.07',
                desc: [],
                keywords: []
            }
        ]
    },
    footer: 'Createad by React'
}