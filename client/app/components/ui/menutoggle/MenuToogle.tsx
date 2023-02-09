import React, { Fragment } from 'react'
import cx from 'classnames'
import styleNavbar from './MenuToggle.module.scss'

const MenuToogle = ({ isActive, toggle }: any) => {

     return (
          <div className={cx(styleNavbar.menu_toggle, { [styleNavbar.menu_toggle_active]: isActive })} onClick={toggle}>
               <span />
               <span />
               <span />
          </div>
     )
}

export default MenuToogle