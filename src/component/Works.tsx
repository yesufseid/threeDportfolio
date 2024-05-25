
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
const H=styled.h1<{ $text?:string;}>`
  color: transparent;
  -webkit-text-stroke:1px white ;
  cursor: pointer;
  position:relative;
  ::after{
    content:"${(props)=>props.$text}";
    position: absolute;
    top: 0px;
    left: 0px;
    color: pink;
    width : 0px;
    overflow: hidden;
    white-space: normal;
  }
 &:hover{
  animation:moveText 0.5s linear;
   @keyframes moveText {
       to{
        width: 100%;
       }
   } 

 }

`
const word=["Web Design","Developemnt","Illustration","Product design","Social media"]

export default function Workes() {

  return (
      <Section className='flex justify-betwee items-center w-[1000px] mx-auto'>
        <div className='flex flex-col gap-3'> 
       {word.map((w)=>(
           <H    $text={w}  className='text-5xl font-serif font-bold  hover:text-pink-200 hover:transition-colors hover:duration-50 '>{w}</H>
       ))}
        </div>
        <Img src={moon} width={450} height={450} alt="moon" />
      </Section>
  )
}
