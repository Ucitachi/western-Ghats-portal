import Main from "./main";
import NatureNavbar from "./Navbar";
import TigerComponent from "./tiger";
import Game from "./Game";
import Contact from "./Contact";

function Home(){
   return( <>
     <div>
                <NatureNavbar />
                <div className='ak'>
                  <TigerComponent/>
                  <Main />
                  <Contact /></div>
          </div>
    </>);
}

export default Home;