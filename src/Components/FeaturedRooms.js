import React, { Component } from 'react'
import {RoomContext} from '../context'
import Loading from './Loading';
import Room from './Room'
import Title from './Title'
class FeaturedRooms extends Component {
    static contextType = RoomContext
    render() {
        // const {name,greeting} = this.context
        const {featuredRooms : Rooms,loading} = this.context
        // console.log(Rooms)
        const rooms = Rooms.map(room =>(
            <Room key={room.id} room={room} />
        ))
        console.log(rooms)
        return (
        //    <div>{name} {greeting}</div>
            <section className="featured-rooms">
                <Title title="featured rooms" />
                <div className="featured-rooms-center">
                    {loading ? <Loading /> : rooms}
                </div>
            </section>
        )
    }
}

export default FeaturedRooms
