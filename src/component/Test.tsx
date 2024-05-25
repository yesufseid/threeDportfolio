import styled from "styled-components"
import { Canvas } from "@react-three/fiber"
import { OrbitControls} from "@react-three/drei"
import Cube from "./Cube"


const Container=styled.div`
    width: 100vh;
    height: 100vh;
    scroll-snap-align:center;
`


export default function Test() {
  return (
    <Container>
    <Canvas>
    <OrbitControls enableZoom={false} />
            <ambientLight  intensity={1}/>
            <directionalLight position={[3,2,1]}  />
        <Cube />
    </Canvas>
    </Container>
  )
}
