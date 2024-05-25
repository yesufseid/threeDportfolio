import Navbar from './Navbar'
import styled from 'styled-components'
import moon from "/img/moon.png"
import { Canvas } from "@react-three/fiber"
import { OrbitControls,Sphere ,MeshDistortMaterial} from "@react-three/drei"
   const Section=styled.div`
    height:100vh;
    scroll-snap-align:center;

   `
const Img=styled.img`
  animation:animate 2s infinite ease alternate;
  margin:auto;
  @keyframes animate {
     to{
      transform: translateY(20px);
     }
  }
`
export default function Hero() {
  return (
    <Section className='flex flex-col justify-center'>
      <Navbar />
      <div className='flex  items-center w-[1000px] mx-auto'>
        <div className='flex flex-col gap-2 h-96 mt-32 w-fit'> 
          <h1 className='text-5xl font-sans font-bold'>Think.Make  <span className='block'>.Solve</span></h1>
          <p>-<span className='text-pink-700'> What we do</span></p>
          <p>we enjoy creating delightfull,human-center digital expriance </p>
          <button className='w-fit py-2 px-4 bg-pink-600 rounded-md'>learn more</button>
        </div>
        <div className='h-full relative w-full'>
        <Canvas>
            <OrbitControls enableZoom={false}  />
            <ambientLight  intensity={1}/>
            <directionalLight position={[3,2,1]}  />
            <Sphere  args={[1,100,200]} scale={3}>
            <MeshDistortMaterial  color="#8147ad"  attach="material" distort={0.5}  speed={1}/>
            </Sphere>   
    </Canvas>
    <Img src={moon} width={400} height={400} alt="moon"   className='absolute bottom-10 right-20' />
        </div>
      </div>
    </Section>
  )
}
