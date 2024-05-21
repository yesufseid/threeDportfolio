import Navbar from './Navbar'
import styled from 'styled-components'
import moon from "/img/moon.png"
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
      <div className='flex justify-betwee items-center w-[1000px] mx-auto'>
        <div className='flex flex-col gap-2'> 
          <h1 className='text-5xl font-sans font-bold'>Think.Make  <span className='block'>.Solve</span></h1>
          <p>-<span className='text-pink-700'> What we do</span></p>
          <p>we enjoy creating delightfull,human-center digital expriance </p>
          <button className='w-fit py-2 px-4 bg-pink-600 rounded-md'>learn more</button>
        </div>
       <Img src={moon} width={450} height={450} alt="moon" />
      </div>
    </Section>
  )
}
