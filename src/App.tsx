import styled from "styled-components";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  const x = useMotionValue(0); //애니메이션의 값의 상태와 속도 추적
  //usetransform은 한 값 범위에서 다른 값으로 범위를 매핑
  const scaleValue = useTransform(x, [-800, 0, 800], [2, 1, 0.1]);

  //useEffect 대신 useMotionValueEvent를 사용해야한다.
  useMotionValueEvent(scaleValue, "change", (el) => console.log(el));
  return (
    <Wrapper>
      <Box style={{ x, scale: scaleValue }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
