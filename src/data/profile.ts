export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  imageUrl: string;
  links: LinkItem[];
};

// 보여주기용 더미 값입니다. 실제 정보로 교체하세요.
export const profile: Profile = {
  name: "박다솔",
  bio: "작업치료학과 교수 | 인공지능과 작업치료의 만남이라...재밌어지겠네",
  imageUrl: "/profile.jpg",
  links: [
    { id: "github", title: "🦈 GitHub", url: "https://github.com/otdasol" },
    {
      id: "university",
      title: "🏫 University",
      url: "https://occupationaltherapy.donga.ac.kr/occupationaltherapy/CMS/ProfessorMgr/list.do?mCode=MN021",
    },
    { id: "lab", title: "❤️ Lab", url: "https://otdasol.github.io/" },
  ],
};
