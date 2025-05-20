export interface Project {
  id: number;
  title : string;
  exPage: string;
  skill:  string[] ; 
  startexPage: string;
  endexPage: string;
  content: string; 
}

export const project: Project[] = [
  {
    id: 1,
    title: "Mingle",
    exPage: "mingle_img",
    skill: [
      "Css 3",
      "Html 5",
      "Js",
    ],
    startexPage: "2023-12-01",
    endexPage: "2023-12-01",
    content: "관심있는 관심사를 기반으로 사용자가 만들어가는 모임 웹페이지로 오프라인 모임의 한계를 깨고 온라인과 오프라인을 연결하는 웹페이지를 만들어 모임을 더 다양하고 다채로운 사람을 마주할 수 있고, 그 중 나와같은 관심사를 가진 사람들을 간단하게 찾고 모임활동을 쉽게 즐길 수 있도록 하기위해 만들어졌다.",

  },
 
];
