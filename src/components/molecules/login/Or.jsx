import styled from "styled-components";

const Or = () => {
  return (
    <>
      <Orwrapper>
        <OrLine />
        <OrSpan>또는</OrSpan>
        <OrLine />
      </Orwrapper>
    </>
  );
};
const Orwrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 40px 18px;
`;
const OrLine = styled.div`
  height: 1px;
  flex: 1;
`;
const OrSpan = styled.span``;
export default Or;
