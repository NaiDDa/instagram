import styled from "styled-components";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <PageWrapper>
        <Carousel></Carousel>
        <Main>
          <Logo>Instagram</Logo>
          <Form>
            <Input
              name="email"
              placeholder="전화번호,사용자 이름 또는 이메일"
              type="email"
            />
            <Input name="password" placeholder="비밀번호" type="password" />
            <SubmotBtn>로그인</SubmotBtn>
            <LineBox>
              <LineText>또는</LineText>
            </LineBox>
            <FbBtn>
              <FbLogin>Facebook으로 로그인</FbLogin>
            </FbBtn>
            <FindPw>비밀번호를 잊으셨나요?</FindPw>
          </Form>
          <JoinBox>
            <JoinText>
              계정이 없으신가요? <Join>가입하기</Join>
            </JoinText>
          </JoinBox>
          <AppDownload>
            <AppText>앱을 다운로드하세요.</AppText>
            <AppImg src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png" />
            <AppImg src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png" />
          </AppDownload>
        </Main>
        <Footer>asdasd</Footer>
      </PageWrapper>
    </>
  );
};

const PageWrapper = styled.body`
  background: #fafafa;
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`;
const Carousel = styled.div`
  height: 618px;
  width: 420px;
  background-image: url("https://www.instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png");
`;

const Main = styled.div`
  max-width: 350px;
  border: 1px solid #ddd;
  background: #fff;
  display: flex;
  flex-direction: column;
`;
const Logo = styled.h1`
  text-align: center;
`;
const Input = styled.input`
  width: 258px;
  padding: 10px;
  border: 1px solid #ddd;
  margin: 2px auto;
  border-radius: 4px;
  font-size: 11px;
  background: #fafafa;
`;
const SubmotBtn = styled.button`
  width: 268px;
  height: 30px;
  margin: 8px 40px;
  background: #0095f6;
  border: 1px solid transparent;
  border-radius: 4px;
  color: #fff;
  padding: 5px 9px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const LineBox = styled.div`
  text-align: center;
  margin: 10px 40px 18px;
`;

const LineText = styled.div`
  font-size: 13px;
  font-weight: 600;
  line-height: 15px;
  margin: 0 18px;
  text-transform: uppercase;
  color: #adaaaa;
`;
const FbBtn = styled.button`
  border: none;
  background: #fff;
  color: #385185;
  font-weight: 700;
  cursor: pointer;
`;
const FbLogin = styled.span``;
const FindPw = styled.a`
  text-align: center;
  color: #385185;
  font-size: 11px;
  margin-top: 12px;
  padding-bottom: 15px;
`;
const JoinBox = styled.div`
  padding: 10px 0;
  margin-top: 10px;
`;
const JoinText = styled.p`
  text-align: center;
  font-size: 13px;
`;
const Join = styled.span`
  cursor: pointer;
  color: #0095f6;
  font-weight: 900;
`;
const AppDownload = styled.div`
  max-width: 350px;
  text-align: center;
  font-size: 13px;
  margin-top: 10px;
`;
const AppText = styled.p``;
const AppImg = styled.img`
  width: 136px;
  height: 40px;
`;
const Footer = styled.div``;
export default Login;
