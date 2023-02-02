import Image from "next/image";
import Navbar from "./navbar";
import style from "./style.module.scss";
import { logoPNG } from "@/assets";
import Link from "next/link";
import { AddressData, PhoneData } from "./data";
import { MaterialIcon } from "@/components/ui/icons/MaterialIcon";

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
            <div className={style.adressFlex}>
              <div><MaterialIcon name={item.icon} /></div>
              <div>{item.title}</div>
            </div>
          ))}
        </div>
        <div className={style.phone}>
        {PhoneData.map((item) => (
            <div className={style.adressFlex}>
              {item.icon ? <div><MaterialIcon name={item.icon} /></div> : ""}
              <div>{item.title}</div>
            </div>
          ))}
        </div>
      </div>
      <Navbar />
      <div>SLider</div>
    </header>
  );
}
