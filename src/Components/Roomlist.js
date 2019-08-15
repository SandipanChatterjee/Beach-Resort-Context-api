import React from 'react'
import Room from './Room';

function Roomlist(props) {
    if(props.rooms.length === 0){
        return(
            <div className="empty-search">
                <h3>unfortunately no rooms matched your seacrh parameters</h3>
            </div>
        )
    }
    return (
        <div>
              <section className="roomslist">
                <div className="roomslist-center">
                    {
                        props.rooms.map(item => <Room key={item.id} room={item}/>)
                    }
                </div>
            </section>  
        </div>
    )
}

export default Roomlist
