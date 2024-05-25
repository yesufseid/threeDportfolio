
import styled from 'styled-components'
import { Canvas } from "@react-three/fiber"
import { OrbitControls} from "@react-three/drei"
import Cube from "./Cube"
   const Section=styled.div`
    height:100vh;
    scroll-snap-align:center;

   `
export default function Who() {
  return (
      <Section className='flex justify-betwee items-center w-[1000px] mx-auto'>
         <Canvas  camera={{fov:40,position:[5,5,5]}} >
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight  intensity={1}/>
            <directionalLight position={[3,2,1]}  />
           <Cube />
    </Canvas>
        <div className='flex flex-col gap-2'> 
          <h1 className='text-5xl font-sans font-bold'>Think OutSide The  <span className='block'>Square space</span></h1>
          <p>-<span className='text-pink-700'> What we do</span></p>
          <p>we enjoy creating delightfull,human-center digital expriance </p>
          <button className='w-fit py-2 px-4 bg-pink-600 rounded-md'>see our workes</button>
        </div>
      </Section>
  )
}
