import styled from 'styled-components'
import emailjs from '@emailjs/browser';
import {useRef,useState} from 'react';
import Map from './Map'
   const Section=styled.div`
    height:100vh;
    scroll-snap-align:center;

   `

export default function Contact() {
  const ref=useRef("");
  const [succes,setSucces]=useState<null |true |false>(null)

  const HandleSubmit=(e:any)=>{
     e.preventDefault()
     emailjs
     .sendForm('service_ekfxobw', 'template_qxrxa9x',e.target.value, {
       publicKey: 'CHwp1BAuOFSw0iVTT',
     })
     .then(
       () => {
         console.log('SUCCESS!');
         setSucces(true)
       },
       (error) => {
         console.log('FAILED...', error.text);
         setSucces(false)
       },
     );
  }
  return (
    <Section   className=' mx-auto grid grid-cols-2 items-center '>
         <div className='ml-56 flex-col justify-center gap-5 items-center'>
           <h1 className='text-2xl font-sans font-bold text-white capitalize'>contact us</h1>
           <form  ref={ref} onSubmit={HandleSubmit}>
             <input type="text" name='name' placeholder='name' className='block h-10 my-5 border-2 rounded-md focus:border-green-400 w-80 ' />
             <input type="email" name='email' placeholder='email' className='block h-10 my-5 border-2 rounded-md focus:border-green-400 w-80 ' />
             <textarea name="message" id="message"  placeholder="write your message" rows={5} className='block 
             my-5 border-2 rounded-md focus:border-green-400 w-80 text-black '  />
             <button type='submit' className='w-80 py-3 rounded-md bg-pink-500 '>send</button>
             {succes&&(<p>your massage has been sent. we will get back to you soon :)</p>)}
             </form>
         </div>
         <Map/>
    </Section>
  )
}
