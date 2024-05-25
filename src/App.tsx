import Who from './component/Who'
import Contact from './component/Contact'
import Works from './component/Works'
import Hero from './component/Hero'
import Test  from "./component/Test"
import './index.css'
import styled from 'styled-components'

   const Container=styled.div`
    height:100vh;
    scroll-snap-type:y mandatory;
    scroll-behavior:smooth;
    overflow-y:auto;
    scrollbar-width: none;
    color: white;
    background:url("./img/bg.jpeg");
   `
function App() {
 

  return (
   <Container>
       <Hero />
       <Who />
       <Works />
       <Contact />
       <Test />
   </Container>
  )
}

export default App
