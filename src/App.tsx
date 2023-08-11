import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 50vw;
  gap: 10px;
`;

const Box = styled(motion.div)`
  height: 200px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled(motion.div)`
  background-color: white;
  height: 100px;
  width: 100px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.5), 0 10px 20px rgba(0, 0, 0, 0.3);
`;

const Button = styled(motion.div)`
  font-size: 20px;
  font-weight: 600;
  border-radius: 5px;
  padding: 5px 10px;
  background-color: white;
  color: blue;
  text-align: center;
  cursor: pointer;
`;

function App() {
  const [id, setId] = useState<null | string>(null);
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);

  return (
    <Wrapper>
      <Grid>
        {["1", "2", "3", "4"].map((n) => (
          <Box
            onClick={() => setId(n)}
            key={n}
            layoutId={n}
            whileHover={{
              scale: 1.1,
              y: n === "1" || n === "2" ? -20 : 20,
              x: n === "2" || n === "4" ? 20 : -20,
              transition: {
                delay: 0.2,
                duration: 0.3,
                type: "tween",
              },
            }}
          >
            {n === "2" && !clicked ? (
              <Circle layoutId="circle" style={{ borderRadius: "50px" }} />
            ) : null}
            {n === "3" && clicked ? (
              <Circle layoutId="circle" style={{ borderRadius: "50px" }} />
            ) : null}
          </Box>
        ))}
      </Grid>
      <Button
        onClick={toggleClicked}
        whileTap={{
          scale: 1.2,
          color: "tomato",
        }}
      >
        Switch
      </Button>
      <AnimatePresence>
        {id ? (
          <Overlay
            onClick={() => setId(null)}
            initial={{ backgroundColor: "rgba(0,0,0,0)" }}
            animate={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            exit={{ backgroundColor: "rgba(0,0,0,0)" }}
          >
            <Box
              layoutId={id}
              style={{ width: 400, height: 200, backgroundColor: "white" }}
            />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
