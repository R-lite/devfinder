import React, { useState } from 'react';
import menuItems from '../menuItems';
import { NavLink } from 'react-router-dom';
import { IoMdSunny, IoMdMoon, IoIosMenu, IoMdShirt } from "react-icons/io";


function Aside({children}){
    const [theme, setTheme] = useState('Bright');
    const [themeImage, setThemeImage] = useState(<IoMdSunny />);
    const [shrinkAside, setShrinkAsideCondition] = useState(false);
    const year = new Date().getFullYear();

    const setAsideWidth = () => {
        setShrinkAsideCondition(!shrinkAside)
    }

    const switchTheme = () => {
        setTheme(theme === 'Bright' ? 'Dark': 'Bright')
        setThemeImage(themeImage === 'IoMdSunny'? <IoMdMoon />: <IoMdSunny />)
    }

    return(
        <>
            <aside className='aside-pane' style={{width: shrinkAside ? '2.7rem': 'max-content', overflow: 'hidden'}}>
                <div className='logo-tab'>
                    <h1 className='logo' style={{display: shrinkAside ? 'none': 'block'}}>devFinder</h1>
                    <IoIosMenu className='hamburger-menu' style={{paddingLeft: shrinkAside ? '.85rem': '0'}} onClick={setAsideWidth}/>
                </div>
                
                <ul className='aside.navigations'>
                    { menuItems.map((item, index)=>(
                        <NavLink to={item.path} key={index} className="link" activeClassName="active">
                            <div className='icon'>{item.icon}</div>
                            <div className='link-text'>{item.name}</div>
                        </NavLink>
                        ))
                    }
                    <div className='theme' style={{height: shrinkAside ? '2rem': 'max-content'}} onClick={switchTheme} >
                        <div className='icon'>{themeImage}</div>
                        <div className='link-text'>{theme}</div>
                    </div>
                </ul>
                <p className='copywrite' style={{display: shrinkAside ? 'none': 'block'}}>&copy; devFinder {year}</p>
            </aside>
            <main className='detail-section' style={{marginLeft: shrinkAside ? '0rem': '11rem'}}>
                {children}
            </main>
        </>
    )
}

export default Aside;