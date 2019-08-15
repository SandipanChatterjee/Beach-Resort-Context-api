import React, { Component } from 'react'
import items from './data'


const  RoomContext = React.createContext()

class RoomProvider extends Component {
    state={
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: 'all',
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    }
    componentDidMount(){
        let rooms = this.formatData()
        console.log(rooms)
        let featuredRooms = rooms.filter(items => items.featured === true )
        const maxPrice = Math.max(...rooms.map(item => item.price))
        const maxSize = Math.max(...rooms.map(item => item.size))
        console.log(`maxPrice ${maxPrice}`)
        console.log(`maxSize ${maxSize}`);
        
        this.setState({
            rooms : rooms,
            sortedRooms : rooms,
            featuredRooms : featuredRooms,
            loading: false,
            maxPrice,
            maxSize
        })
    }
    getRoom = (slug) => {
        let tempRooms = [...this.state.rooms]
        const room = tempRooms.find(room => room.slug === slug)
        return room
    }
    changeHandler = event => {
        
        const value = event.type === 'checkbox' ? event.target.checked : event.target.value
        this.setState({
            [event.target.name] : value
        },this.roomFilter)
    }
    roomFilter = () => {
        let {type,rooms,capacity} = this.state
        //sorting by rooms
        let tmproom = [...rooms]
        if(type !== 'all'){
            tmproom = tmproom.filter(room => room.type === type)
        }
        //sorting by capavity
        capacity = parseInt(capacity)
        if(capacity !== 1){
            tmproom = tmproom = tmproom.filter(room => room.capacity == capacity)
        }
        this.setState({
            sortedRooms : tmproom
        })
    }
    formatData = () =>{
        let tempItems = items.map(items=>{
            let id = items.sys.id
            let images = items.fields.images.map(items =>{
                return items.fields.file.url
            })
          
            let room = {...items.fields,images,id}
            // console.log(room)
            return room
        })
        return tempItems
    }
    render() {
        return (
            <RoomContext.Provider value={{...this.state,getRoom :this.getRoom,changeHandler :this.changeHandler}}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomsConsumer = RoomContext.Consumer

export {RoomProvider,RoomsConsumer,RoomContext}

