import Image from "next/image";
import Navbar from "./navbar";
import style from "./style.module.scss";
import { logoPNG } from "@/assets";
import Link from "next/link";
import { AddressData} from "./data";
import { MaterialIcon } from "@/components/ui/icons/MaterialIcon";
import SliderPage from "@/components/library/slider";



export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.headerTop}>
        <div className={style.logo}>
          <Link href="/">
            <Image src={logoPNG} width={150} alt="png" priority />
          </Link>
        </div>
        <div className={style.adress}>
          {AddressData.map((item) => (
            <div className={style.adressFlex} key={item.id}>
              <MaterialIcon name={item.icon} />
              <div>{item.title}</div>
            </div>
          ))}
        </div>
        <div className={style.phone}>
        </div>
      </div>
      <Navbar />
      <div>
          <SliderPage />    
      </div>
    </header>
  );
}
