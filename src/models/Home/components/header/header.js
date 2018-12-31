import React from 'react';
import {Link} from 'react-router-dom'

const header = ()=>{
    return(
        <div>
            <ul>
                <Link to="/todayBeer">Today Beer</Link>
                <Link to="/YourFriends">Your friends</Link>

            </ul>
        </div>
    );
};

export default header;