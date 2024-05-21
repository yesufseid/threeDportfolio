
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
const H=styled.h1`
  color: transparent;
  -webkit-text-stroke:1px white ;
  cursor: pointer;
  position:relative;
 &:hover{
  animation:moveText 0.5s linear;
   @keyframes moveText {
       to{
        width: 100%;
       }
   } 

 }

`


export default function Workes() {
  return (
      <Section className='flex justify-betwee items-center w-[1000px] mx-auto'>
        <div className='flex flex-col gap-3'> 
         <H   className='text-5xl font-serif font-bold  '>Web Design</H>
         <H className='text-5xl font-serif font-bold '>Developemnt</H>
         <H className='text-5xl font-serif font-bold '>Illustration</H>
         <H className='text-5xl font-serif font-bold '>Product design</H>
         <H className='text-5xl font-serif font-bold '>Social media</H>
        </div>
        <Img src={moon} width={450} height={450} alt="moon" />
      </Section>
  )
}
