import React from 'react';

function Aside(){
    return(
        <aside className='aside-pane'>
            <h1 className='logo'>devFinder</h1>
            <ul className='aside-navigations'>
                <li className='active-aside'>Overview</li>
                <li>Resume</li>
                <li>Github</li>
                <li>LinkedIn</li>
                <li>Behance</li>
                <li>Contact</li>
            </ul>
        </aside>
    )
}

export default Aside;