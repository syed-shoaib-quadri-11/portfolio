import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.jpg';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import nf_icon from './nf-icon.png';
import listen_icon from'./Listen-icon.ico';
import Docker_icon from'./docker-icon.png';
import Docker_logo from './Docker-logo.png';
import jenkins from './Jenkins.png';
import k8s from './k8s.jpg'
import colab from './GoogleColab.png'



export const assets = {
    colab,
    Docker_logo,
    jenkins,
    k8s,
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    nf_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    listen_icon,
    Docker_icon
};

export const CertificationImages= [
    {
        title: 'Frontend project',
        description: 'Web Design',
        bgImage: '/IBM-AI.jpg',
    },
    {
        title: 'Geo based app',
        description: 'Mobile App',
        bgImage: '/Google-IT.jpg',
    },
    {
        title: 'Photography site',
        description: 'Web Design',
        bgImage: '/AWS.jpg',
    },
    // {
    //     title: 'UI/UX designing',
    //     description: 'UI/UX Design',
    //     bgImage: '/SYS.jpg',
    // },
    // {
    //     title: 'UI/UX designing',
    //     description: 'UI/UX Design',
    //     bgImage: '/Acharya-1.jpg',
    // },
    // {
    //     title: 'UI/UX designing',
    //     description: 'UI/UX Design',
    //     bgImage: '/ABAP.jpg',
    // },
    
]

export const projectData = [
    // { icon: assets.nf_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.Docker_icon, title: 'Dockerized App Deployment', description: 'My full-stack Node.js application packaged using Docker to ensure consistent and portable deployment.This project demonstrates the use of Dockerfile and Docker Compose to containerize both the backend and frontend services, allowing easy local development and production deployment', link: '', bgImage: '/docker-bg.webp' },
    { icon: assets.listen_icon, title: 'ListenME – Music Web Application', description: 'A browser-based music application built using HTML, CSS, and JavaScript.This project demonstrates your ability to work with DOM manipulation, event handling, and UI responsiveness, while delivering a smooth user experience in a custom audio player interface.', link: 'https://syeds-listenme.netlify.app/', bgImage: '/listenMe.jpg' },
    { icon: assets.nf_icon, title: 'Netflix Clone', description: 'A fully responsive frontend project built using HTML and CSS, inspired by the original Netflix layout. This clone replicates key UI components such as the hero banner, movie rows, and footer, while showcasing proficiency in layout structuring, responsive design, and visual alignment. Ideal for demonstrating frontend fundamentals with a real-world design.', link: 'https://streamflix-syed.netlify.app/', bgImage: '/netflix-bg.webp' },

]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'Python, Java, SQL, C/C++, React Js, Next Js' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Bachelor of Computer Applications' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.vscode, assets.Docker_logo, assets.mongodb, assets.jenkins, assets.git,assets.k8s, assets.colab
];