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
    des: "bra",
    link: "www.google.com",
  },
  {
    id: 2,
    name: "jaijaoni",
    type: "mobile",
    des: "",
    web: "https://jaijaoni.pspgun.com/",
  },
  {
    id: 3,
    name: "BackdropSIT hackathon 2023",
    type: "web",
    des: "",
    link: "https://github.com/fxhPhxrxchxyx/BackdropSIThackathon2023.git",
  },
  {
    id: 4,
    name: "detectiveXXIII",
    type: "web",
    des: "",
    link: "https://github.com/fxhPhxrxchxyx/detectiveXXIII-frontend.git",
  },
  {
    id: 5,
    name: "PPS Water",
    type: "web",
    des: "",
    web: "https://pps-water.web.app/",
  },
  {
    id: 6,
    name: "shepherdBoy",
    type: "web",
    des: "",
    web: "https://shepherd-boy.web.app/",
  },
];
