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
  name: "홍길동",
  bio: "웹 개발자",
  imageUrl: "/profile.svg",
  links: [
    { id: "github", title: "GitHub", url: "https://github.com/" },
    { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com/" },
    { id: "blog", title: "Blog", url: "https://example.com/" },
  ],
};
