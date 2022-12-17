import React from 'react';
import menuItems from '../menuItems';
import { NavLink } from 'react-router-dom';
// import IoIosMenu from 'react-icons/io'


function Aside({children}){
    return(
        <div>
            <aside className='aside-pane'>
                <h1 className='logo'>devFinder</h1>
                <ul className='aside.navigations'>
                    { menuItems.map((item, index)=>(
                        <NavLink to={item.path} key={index} className="link" activeClassName="active">
                            <div className='icon'>{item.icon}</div>
                            <div className='link_text'>{item.name}</div>
                        </NavLink>
                        ))
                    }
                </ul>
            </aside>
            <main>{children}</main>
        </div>
    )
}

export default Aside;