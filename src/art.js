import Masonry from './Masonry';
import a1 from './static/a1.jpg'
import a2 from './static/a2.jpg'
import a3 from './static/a3.jpg'
import a4 from './static/a4.jpg'
import a5 from './static/a5.jpg'
import a6 from './static/a6.jpg'
import a7 from './static/a7.jpg'
import a8 from './static/a8.jpg'
import a9 from './static/a9.jpg'
import a10 from './static/a10.HEIC'
import a11 from './static/a11.HEIC'
import a12 from './static/a12.HEIC'
import a13 from './static/a13.jpeg'
import a18 from './static/a18.jpeg'
import a24 from './static/a24.jpeg'
import a25 from './static/a25.jpeg'
import a26 from './static/a26.jpeg'
import a14 from './static/a14.jpg'
import a15 from './static/a15.png'
import a16 from './static/a16.jpg'
import a17 from './static/a17.jpg'
import a19 from './static/a19.jpg'
import a20 from './static/a20.jpg'
import a21 from './static/a21.jpg'
import a22 from './static/a22.jpg'
import a23 from './static/a23.jpeg'
const items = [
    {
      id: "1",
      img: a1,
    //   url: "",
      height: 500,
    },
    {
      id: "2",
      img: a2,
    //   url: "",
      height: 700,
    },
    {
      id: "3",
      img: a3,
    //   url: "",
      height: 400,
    },
    {
        id: "4",
        img: a4,
      //   url: "",
        height: 900,
      },
      {
        id: "5",
        img: a5,
      //   url: "",
        height: 700,
      },
      {
        id: "6",
        img: a6,
      //   url: "",
        height: 700,
      },
      {
        id: "7",
        img: a7,
      //   url: "",
        height: 600,
      },
      {
        id: "8",
        img: a8,
      //   url: "",
        height: 700,
      },
      {
        id: "9",
        img: a9,
      //   url: "",
        height: 700,
      },
      {
        id: "10",
        img: a10,
      //   url: "",
        height: 700,
      },
      {
        id: "11",
        img: a11,
      //   url: "",
        height: 700,
      },
      {
        id: "12",
        img: a12,
      //   url: "",
        height: 700,
      },
      {
        id: "13",
        img: a13,
      //   url: "",
        height: 400,
      },
      {
        id: "14",
        img: a14,
      //   url: "",
        height: 700,
      },
      {
        id: "15",
        img: a15,
      //   url: "",
        height: 500,
      },
      {
        id: "16",
        img: a16,
      //   url: "",
        height: 400,
      },
      {
        id: "17",
        img: a17,
      //   url: "",
        height: 400,
      },
      {
        id: "18",
        img: a18,
      //   url: "",
        height: 550,
      },
      {
        id: "19",
        img: a19,
      //   url: "",
        height: 500,
      },
      {
        id: "20",
        img: a20,
      //   url: "",
        height: 500,
      },
      {
        id: "21",
        img: a21,
      //   url: "",
        height: 600,
      },
      {
        id: "22",
        img: a22,
      //   url: "",
        height: 500,
      },
      {
        id: "23",
        img: a23,
      //   url: "",
        height: 700,
      },
      {
        id: "24",
        img: a24,
      //   url: "",
        height: 700,
      },
      {
        id: "25",
        img: a25,
      //   url: "",
        height: 700,
      },
      {
        id: "26",
        img: a26,
      //   url: "",
        height: 700,
      },


    // ... more items
];
export default function Art() {
  return (
    <Masonry
    items={items}
    ease="power3.out"
    duration={0.6}
    stagger={0.05}
    animateFrom="bottom"
    scaleOnHover={true}
    hoverScale={0.95}
    blurToFocus={true}
    colorShiftOnHover={false}
    renderItem={(item) => (
        <img src={item.img} alt="" style={{ width: '100%' }} />
      )}
  />
  );
}

