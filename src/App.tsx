import styled from "styled-components";
import { motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";

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
  useEffect(() => {
    x.on("change", () => console.log(x.get())); //get 메서드는 x값 읽기
  }, [x]);
  return (
    <Wrapper>
      {/* set 메서드로 값 업데이트 */}
      <button onClick={() => x.set(200)}>click me</button>
      <Box style={{ x }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
