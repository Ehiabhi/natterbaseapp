import React from 'react';
import Cards from './cards';
import Content from "./contentFile";


function App() {

    return (
        <div className="rectangle">
            <div className="container">
                {Content.map(function (con) {
                    return <Cards key={con.id} top={con.top} right={con.right} color={con.background} group={con.group} count={con.count} comment={con.content} />
                })}
            </div>
        </div>
    )
}

export default App;