export type Project = {
  id: number;
  name: String;
  type: String;
  des: String;
  link?: string;
  web?: string;
};

export const proj: Project[] = [
  {
    id: 1,
    name: "Lass",
    type: "mobile",
    des: "Lass is an application for help people who difficult to access traditional financial institutions. Also achieve SDG goal number 10 Reduced Inequalities.",
    link: "https://github.com/shine-bright-team/LAAS-Frontend.git",
  },
  {
    id: 2,
    name: "jaijaoni",
    type: "mobile",
    des: "Jaijaoni is a mobile application that assists you in reminding your friend to repay you for money they owe you.",
    web: "https://jaijaoni.pspgun.com/",
  },
  {
    id: 3,
    name: "BackdropSIT hackathon 2023",
    type: "web",
    des: "Backdrop chrome cast screen projector. The features are queue list of musics, show next event, show date time and weather, random picture in hackathon event, and countdown.",
    link: "https://github.com/fxhPhxrxchxyx/BackdropSIThackathon2023.git",
  },
  {
    id: 4,
    name: "detectiveXXIII",
    type: "web",
    des: "Detective XXIII project is program which random generate pair of senior and junior code for first and second year of cs sit student.",
    link: "https://github.com/fxhPhxrxchxyx/detectiveXXIII-frontend.git",
  },
  {
    id: 5,
    name: "PPS Water",
    type: "web",
    des: "PPS Water is a website about advertisement of the company and tell the information to the customer.",
    web: "https://pps-water.web.app/",
  },
  {
    id: 6,
    name: "shepherdBoy",
    type: "web",
    des: "This project is a bedtime story for children it about shepherd boy.",
    web: "https://shepherd-boy.web.app/",
  },
  {
    id: 7,
    name: "Malong",
    type: "web",
    des: "This is an idea competition that focuses on using technology to help students and undergraduates achieve the Sustainable Development Goals (SDGs).",
    web: "https://malonghack.com/",
  },
  {
    id: 8,
    name: "ICT Challenge",
    type: "web",
    des: "me and my team(sit) create website for ICT challenge 2023. Using typescript with nextJs, css, mui, tailwind and integrate api to backend. Also design card ID for staff of SIT open house 2023.",
    web: "https://openhouse2023.sit.kmutt.ac.th/",
  },
];
