interface data {
  id: string;
  tl: string | number;
  tagLine: string;
  tag: string;
  title: string;
  content: Array<string>;
  img: string;
  domain: string;
  by: string;
  des: string;
  hash: Array<string>;
  rating: string | number;
  type: string;
}
const trueData: data[] = [];
interface tagin {
  [key: string]: Array<string>;
}
const tags: tagin = {
  technology: ["tech", "web", "app"],
  finance: ["fin", "fintech", "money", "economic"],
  design: ["ui", "ux", "things", "graphic"],
};
export { tags, trueData };
/*[
 {
    id: "1",
    tl: 1,
    tagLine: "The biggest in tech blog",
    tag: "Trending",
    title: "State of mobile apps",
    content: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iste! Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iste!",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iste! Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iste!",
    ],
    img: "https://nhhfwmgerhjxhljmmeii.supabase.co/storage/v1/object/public/blogImage/mobile.svg",
    by: "Harsh",
    des: "Web Developer",
    hash: [
      "tech",
      "web",
      "mobile",
      "trends",
      "fin",
      "fintech",
      "money",
      "economic",
    ],
    rating: 1001,
    type: "N",
  },
  {
    id: "2",
    tl: 1,
    tagLine: "The biggest in tech blog",
    tag: "Trending",
    title: "State of mobile apps",
    content: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iste! Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iste!",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iste! Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iste!",
    ],
    img: "https://nhhfwmgerhjxhljmmeii.supabase.co/storage/v1/object/public/blogImage/postimg.svg",
    by: "Harsh",
    des: "Web Developer",
    hash: [
      "tech",
      "web",
      "mobile",
      "trends",
      "fin",
      "fintech",
      "money",
      "economic",
    ],
    rating: 1000,
    type: "N",
  },
  {
    id: "3",
    tl: 2,
    tagLine: "The biggest in tech blog",
    tag: "New",
    title: "State of mobile apps",
    content: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iste! Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iste!",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iste! Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iste!",
    ],
    img: "https://nhhfwmgerhjxhljmmeii.supabase.co/storage/v1/object/public/blogImage/postimg.svg",
    by: "Harsh",
    des: "Web Developer",
    hash: [
      "tech",
      "web",
      "mobile",
      "trends",
      "fin",
      "fintech",
      "money",
      "economic",
    ],
    rating: 1000,
    type: "N",
  },
  {
    id: "4",
    tl: 3,
    tagLine: "The biggest in tech blog",
    tag: "Recommended",
    title: "State of mobile apps",
    content: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iste! Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iste!",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iste! Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iste!",
    ],
    img: "https://nhhfwmgerhjxhljmmeii.supabase.co/storage/v1/object/public/blogImage/postimg.svg",
    by: "Harsh",
    des: "Web Developer",
    hash: [
      "tech",
      "web",
      "mobile",
      "trends",
      "fin",
      "fintech",
      "money",
      "economic",
    ],
    rating: 1000,
    type: "T",
  },
  {
    id: "5",
    tl: 2,
    tagLine: "The biggest in tech blog",
    tag: "New",
    title: "State of mobile apps",
    content: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iste! Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iste!",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iste! Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iste!",
    ],
    img: "https://nhhfwmgerhjxhljmmeii.supabase.co/storage/v1/object/public/blogImage/postimg.svg",
    by: "Harsh",
    des: "Web Developer",
    hash: [
      "tech",
      "web",
      "mobile",
      "trends",
      "fin",
      "fintech",
      "money",
      "economic",
    ],
    rating: 1001,
    type: "F",
  },
  {
    id: "6",
    tl: 1,
    tagLine: "The biggest in tech blog",
    tag: "Trending",
    title: "State of mobile apps",
    content: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iste! Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iste!",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iste! Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iste!",
    ],
    img: "https://nhhfwmgerhjxhljmmeii.supabase.co/storage/v1/object/public/blogImage/postimg.svg",
    by: "Harsh",
    des: "Web Developer",
    hash: [
      "tech",
      "web",
      "mobile",
      "trends",
      "fin",
      "fintech",
      "money",
      "economic",
    ],
    rating: 1000,
    type: "T",
  },
  {
    id: "7",
    tl: 3,
    tagLine: "The biggest in tech blog",
    tag: "Recommended",

    title: "State of mobile apps",
    content: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iste! Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iste!",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iste! Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iste!",
    ],
    img: "https://nhhfwmgerhjxhljmmeii.supabase.co/storage/v1/object/public/blogImage/postimg.svg",
    by: "Harsh",
    des: "Web Developer",
    hash: [
      "tech",
      "web",
      "mobile",
      "trends",
      "fin",
      "fintech",
      "money",
      "economic",
    ],
    rating: 1001,
    type: "F",
  },
]*/
