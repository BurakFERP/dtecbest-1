import TimeTagWatch from "../../views/portfolio/TimeTagWatch";
import UnderArmour from "../../views/portfolio/UnderArmour";
import ReStyling from "../../views/portfolio/ReStyling";
import ToastReel from "../../views/portfolio/ToastReel";
import WhatIfGold from "../../views/portfolio/WhatIfGold";
import NileKabutha from "../../views/portfolio/NileKabutha";
import SleepWalker from "../../views/portfolio/SleepWalker";
import NovaraConic from "../../views/portfolio/NovaraConic";
import BastianBux from "../../views/portfolio/BastianBux";

const data = [
    {
        id: 1,
        title: "Time Tage Watch",
        slug: 'time-tag-watch',
        category: ['Brand'],
        description: 'Sometimes, we need to check the time, wondering when our work or meeting will finish, without getting caught by others.',
        src: '/assets/img/project/project1/1.jpg',
        srcSlider: '/assets/img/project/project1/13.jpg',
        overlay: 2,
        component: (props) => <TimeTagWatch {...props} />
    },
    {
        id: 2,
        title: "Under Armour",
        slug: 'under-armour',
        src: '/assets/img/project/project2/1.jpg',
        srcSlider: '/assets/img/project/project2/10.jpg',
        category: ['Brand'],
        description: 'Cal was first. The first public university in the great state of California. They are the pioneers. They are the trailblazers who started it all.',
        overlay: 2,

        component: (props) => <UnderArmour {...props}/>
    },
    {
        id: 3,
        title: "Re Styling",
        slug: 're-styling',
        src: '/assets/img/project/project3/1.jpg',
        srcSlider: '/assets/img/project/project3/3.jpg',
        category: ['Photography'],
        description: 'Once the brand strategy was sharp and real for everyone inside of the company, all the brand behavior started to roll out as stationary material.',
        overlay: 2,
        component: (props) => <ReStyling {...props}/>
    },
    {
        id: 4,
        title: "Toast 2019 Reel",
        slug: 'toast-2019-reel',
        category: ['Video'],
        src: 'https://rr4---sn-nv47znee.googlevideo.com/videoplayback?expire=1683987132&ei=XEZfZKu0GY6vgAem8qPQDg&ip=88.238.181.103&id=o-AGLJMaf2gHjnA8jTg9br322C_mZJrsWsK9bpCpBRGfdB&itag=18&source=youtube&requiressl=yes&gcr=tr&spc=qEK7B_tn_qfIq9Uyxb19D9iBdg6jOrN_AmTa0-7r5Q&vprv=1&svpuc=1&mime=video%2Fmp4&ns=vOdcdMsTfzXEj_yz0vx-7N8N&cnr=14&ratebypass=yes&dur=238.259&lmt=1681755072471763&fexp=24007246,24363391,51000014&c=WEB&txp=4530434&n=kLncF4VUeCNlxQ&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cgcr%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgS9Qf65Pg16ezQlnX8ydvOpJyCm1WdGOrl-6q0W_omJ8CIAmgFJeRNrrEusUModjvdZNXuD_R2NMUhLq6H5LXNCkM&redirect_counter=1&rm=sn-u0g3uxax3-xncz7z&req_id=47aeabade892a3ee&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=3g&mm=29&mn=sn-nv47znee&ms=rdu&mt=1683965823&mv=m&mvi=4&pl=19&lsparams=ipbypass,mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAIQ0qxwzDqpJDDn3FEyoew9do4Z5aYaPh4ZsG8kwI1dPAiBXNlHFaFv3J4c5-RiLPXdlTm8qWM7UlsDnIOppU4RFbQ%3D%3D',
        video: {
            poster: '/assets/img/project/project4/1.jpg',
            loop: true
        },
        description: 'We are thrilled to share our new reel with you all! Special thanks to all of our talented friends.',
        overlay: 2,
        component: (props) => <ToastReel {...props}/>
    },
    {
        id: 5,
        title: "What If Gold",
        slug: 'what-if-gold',
        src: '/assets/img/project/project5/1.jpg',
        srcSlider: '/assets/img/project/project5/2.jpg',
        category: ['Brand', 'Photography'],
        description: 'Cal was first. The first public university in the great state of California. They are the pioneers. They are the trailblazers who started it all.',
        overlay: 2,
        component: (props) => <WhatIfGold {...props}/>
    },
    {
        id: 6,
        title: "Nile - Kabutha",
        slug: 'nile-kabutha',
        category: ['Photography', "Brand"],
        src: '/assets/img/project/project6/1.jpg',
        srcSlider: '/assets/img/project/project6/2.jpg',
        description: 'Striking and powerful Aston Martin Vantage captivates you at the first sight.',
        overlay: 2,
        component: (props) => <NileKabutha {...props}/>
    },
    {
        id: 7,
        title: "Sleep Walker",
        slug: 'sleep-walker',
        category: ['Photography'],
        src: '/assets/img/project/project7/1.jpg',
        srcSlider: '/assets/img/project/project7/4.jpg',
        description: 'Cal was first. The first public university in the great state of California. They are the pioneers. They are the trailblazers who started it all.',
        overlay: 2,
        component: (props) => <SleepWalker {...props}/>
    },
    {
        id: 8,
        title: "Novara Conic",
        slug: 'novara-conic',
        src: '/assets/img/project/project8/1.jpg',
        srcSlider: '/assets/img/project/project8/4.jpg',
        category: ['Architecture'],
        description: 'Cal was first. The first public university in the great state of California. They are the pioneers.',
        overlay: 2,
        component: (props) => <NovaraConic {...props}/>
    },
    {
        id: 9,
        title: "Bastian Bux",
        slug: 'bastian-bux',
        category: ['Photography'],
        description: 'Bastian bux is the consequence of reducing everything surrounding a dj and producer to its essential element: the music.',
        src: '/assets/img/project/project9/1.jpg',
        srcSlider: '/assets/img/project/project9/3.jpg',
        overlay: 2,
        component: (props) => <BastianBux {...props}/>
    },
]

export const getPortfolioData = () => data;

export const getPortfolioItem = (value, whereName = "id") => {
    return data.find(item => {
        if (item[whereName] === value) return item;
        return null;
    });
};
export const getPortfolioLink = (item) => {
    if (item)
        return item.slug && '/portfolio/' + item.slug;

    return '';
};