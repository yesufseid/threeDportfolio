import { RenderTexture,Text ,PerspectiveCamera} from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

export default function Cube() {
    const textRef=useRef<any>()
    useFrame(state=>(textRef.current.position.x=Math.sin(state.clock.elapsedTime)))
  return (
    <mesh>
    <boxGeometry args={[2,2,2]} />
    <meshStandardMaterial>
       <RenderTexture  attach="map">
           <PerspectiveCamera
             makeDefault
             position={[0,0,2]}
           />
           <color attach="background" args={["#dc9dcd"]} />
           <Text ref={textRef} color="#555" fontSize={1.5} >
             hellow
           </Text>
       </RenderTexture>
    </meshStandardMaterial>
</mesh> 
  )
}
