import Navbar from "./navbar";
import style from "./style.module.scss";
export default function Header() {
    return (
      <header className={style.header}>
          <div className="">
            Header
          </div>
        <Navbar/>
        <div>
            SLider
        </div>
      </header>
    )
  }
  