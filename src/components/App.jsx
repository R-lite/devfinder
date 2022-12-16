import React from 'react';
import SearchBar from './SearchBar';
import Aside from './Aside';

function App(){
    return (
        <div className='primary-layout'>
            <Aside />
            <div className='detail-section'>
                <SearchBar />
            </div>
        </div>
    )
}

export default App;