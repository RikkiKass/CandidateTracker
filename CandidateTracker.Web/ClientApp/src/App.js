import React from 'react';
import { Route } from 'react-router-dom';
import Layout from './Layout';
import { TrackerContextComponent } from './TrackerContext';
import Home from './Pages/Home';
import AddCandidate from './Pages/AddCandidate';
import Refused from './Pages/Refused';
import Pending from './Pages/Pending';
import Confirmed from './Pages/Confirmed';
import Details from './Components/Details';
const App = () => {
    return (
        <TrackerContextComponent>
            <Layout>
                <Route exact path='/' component={Home} />
                <Route exact path='/addcandidate' component={AddCandidate} />
                <Route exact path='/refused' component={Refused} />
                <Route exact path='/pending' component={Pending} />
                <Route exact path='/confirmed' component={Confirmed} />
                <Route exact path='/Details/:id' component={Details} />
            </Layout>
        </TrackerContextComponent>
    )
}
export default App;