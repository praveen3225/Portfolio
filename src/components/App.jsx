import React from "react";
import HomePage from "./HomePage";
import Resume from "./Resume";
import {HashRouter as Router,Routes,Route} from "react-router-dom";

function App()
{
    return (
    <div>
        <Router>
            <Routes>
                <Route path="/resume" element={<Resume></Resume>}></Route>
                <Route path="/" element={<HomePage></HomePage>}></Route>
            </Routes>
        </Router>
    </div>)
}

export default App;