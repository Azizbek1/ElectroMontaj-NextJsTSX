import { FC } from "react";
import MenuItem from "./nav.item";
import {  IMenuAddrePhone } from "@/components/fakeData/navigations/nav.types";

const NavigationsTop: FC<{ menu: IMenuAddrePhone }> = ({ menu: { items } }) => {
  return (
    <div >
      <ul>
        {items.map((item: any) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default NavigationsTop;
