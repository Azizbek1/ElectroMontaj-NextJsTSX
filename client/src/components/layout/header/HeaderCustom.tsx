import Image from "next/image";
import style from "./style.module.scss";
import { logoPNG } from "@/assets";
import Link from "next/link";
import { AddressData } from "./data";
import { MaterialIcon } from "@/components/ui/icons/MaterialIcon";
import NavbarCustoms from "../navbar/NavbarCustoms";
import Slider from "@/components/library/Slider";

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.headerTop}>
        <div>
          <Link href="/">
            <Image src={logoPNG} width={150} alt="png" priority />
          </Link>
        </div>
        <div >
          {AddressData.map((item) => (
            <div className={style.adressFlex} key={item.id}>
              <MaterialIcon name={item.icon} />
              <div>{item.title}</div>
            </div>
          ))}
        </div>
        <div className="navbar">
        <NavbarCustoms/>
        </div>
        <div className="slider">
       
        </div>
      </div>
    </header>
  );
}
