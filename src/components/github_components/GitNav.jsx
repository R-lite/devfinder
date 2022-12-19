import React from "react";
import menuItemsGit from "../../menuItemsGit";
import { NavLink } from "react-router-dom";

function GitNav({children}){
    return(
        <>
            <nav className="git-nav">
                { menuItemsGit.map((item, index)=>(
                        <NavLink to={item.path} key={index} className="link link-git" >{/* activeClassName="active" */}
                            <div className='icon'>{item.icon}</div>
                            <div className='link-text'>{item.name}</div>
                        </NavLink>
                    ))
                }
            </nav>
            <div className="git-content">
                {children}
            </div>
            </>
    )
}

export default GitNav;