
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import style from './Style.module.css'

const Gay = () => {
    return(
        <>
        <div>
        <Header />
        <div className={style.container}>
        <img
      src="https://raw.githubusercontent.com/Jefrey256/imgs/main/page7/001.jpg"
      alt="" />
         </div> 
        <Footer />
        </div>
        </>
    )
}
export default Gay;