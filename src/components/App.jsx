import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aside from './Aside';
import Overview from '../pages/overview';
import Resume from '../pages/resume';
import Github from '../pages/github';
import LinkedIn from '../pages/linkedin';
import Behance from '../pages/behance';
import Contact from '../pages/contact';

function App(){
    return (
        <div className='primary-layout'>
            <BrowserRouter>
                <Aside>
                    <Routes>
                        <Route path="/overview" element = {<Overview />} />
                        <Route path="/resume" element = {<Resume />} />
                        <Route path="/github/*" element = {<Github />} />
                        <Route path="/linkedin" element = {<LinkedIn />} />
                        <Route path="/behance" element = {<Behance />} />
                        <Route path="/contact" element = {<Contact />} />
                    </Routes>
                </Aside>
            </BrowserRouter>
        </div>
    )
}

export default App;