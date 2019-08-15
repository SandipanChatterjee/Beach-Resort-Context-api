import React,{useContext} from 'react'
import Roomlist from './Roomlist';
import Roomfilter from './Roomfilter';
import {RoomContext} from '../context'
import Loading from './Loading';
function RoomContainer() {
    const context = useContext(RoomContext)
    const {rooms,sortedRooms,loading} = context
    if(loading){
        return(
            <Loading />
        )
    }
    return (
        <div>
            
            <Roomfilter rooms={rooms}/>
            <Roomlist rooms={sortedRooms}/>
        </div>
    )
}

export default RoomContainer
