import { useState, useEffect } from "react";
import styled from "styled-components";
const imageList = [
  {
    image:
      "https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg",
  },
  {
    image:
      "https://www.instagram.com/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg",
  },
  {
    image:
      "https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg",
  },
  {
    image:
      "https://www.instagram.com/static/images/homepage/screenshot4.jpg/842fe5699220.jpg",
  },
  {
    image:
      "https://www.instagram.com/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg",
  },
];
const LoginLeft = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const changeIndex = () => {
      const nextIndex =
        imageList.length - 1 === activeIndex ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    };
    setTimeout(changeIndex, 4000);
  }, [activeIndex]);

  return (
    <Wrapper>
      <ImageList>
        {imageList.map(({ image }, i) => (
          <Image key={image} src={image} active={activeIndex === i} />
        ))}
      </ImageList>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  height: 618px;
  width: 454px;
  background-image: url("https://www.instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png");
`;
const ImageList = styled.div`
  position: relative;
`;
const Image = styled.img`
  position: absolute;
  top: 100px;
  left: 150.5px;
  opacity: ${({ active }) => (active ? "1" : "0")};
  transition: 1.7s opacity ease-in;
`;
export default LoginLeft;
