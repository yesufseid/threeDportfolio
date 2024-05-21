import logo from "/img/logo.png"
import searche from "/img/search.png"

export default function Navbar() {
  return (
    <div className="flex justify-center py-2">
       <nav className="w-[1000px]  flex justify-between items-center">
           <div className="flex justify-start gap-10 items-center ">
             <img src={logo} width={70} height={70} alt="logo" />
               <div className="flex justify-center gap-5">
                <h1>Home</h1>
                <h1>Studio</h1>
                <h1>Workes</h1>
                <h1>Contacts</h1>
               </div>
           </div>
           <div className="flex gap-5 justify-center">
             <img src={searche} width={20} height={10} alt="searche" />
             <button className="w-fit py-2 px-4 rounded-md bg-pink-700 ">Hire Now</button>
           </div>
       </nav>
    </div>
  )
}
