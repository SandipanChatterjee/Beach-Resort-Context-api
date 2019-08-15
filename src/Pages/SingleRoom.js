import React, { Component } from 'react'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'
import {Link} from 'react-router-dom'
import {RoomContext} from '../context'
import defaultBcg from '../images/defaultBcg.jpeg'
import StyledHero from '../Components/StyledHero'
export default class SingleRoom extends Component {
    constructor(props){
        super(props)
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        }
    }
    static contextType = RoomContext
    render() {
        const {getRoom} = this.context
        const room = getRoom(this.state.slug)
        console.log(room)
       
        if(!room){
            return(
                <div className="error">
                    <h3>No such room found..</h3>
                    <Link to="/rooms" className="btn-primary">
                        Back to rooms
                    </Link>
                </div>
            )
        }else{
            const {name,breakfast,capacity,description,pets,price,size,images,extras} = room
            return (
                <>
                    <StyledHero img={images[0]}>
                        <Banner title={`${name} room`}>
                            <Link to="/rooms" className="btn-primary">back to rooms </Link>
                        </Banner>
                    </StyledHero>
                    <section className="single-room">
                        <div className="single-room-images">
                            {
                                images.map((item,id)=>{
                                    return(
                                        <div key={id}>
                                            <img src={item} />
                                        </div>
                                    )
                                
                                })
                            }
                        </div>
                        <div className="single-room-info">
                            <article className="desc"> 
                                <h3>Details</h3>
                                <p>{description}</p>
                            </article>
                            <article className="info">
                                <h3>info</h3>
                                <h6>price : ${price}</h6>
                                <h6>szie : {size} SQFT</h6>
                                <h6>capacity : {capacity} people</h6>
                                <h6>{pets ? 'Pets Allowed' : 'Not Allowed'}</h6>
                                <h6>{breakfast && 'breakfast included'}</h6>
                            </article>                 
                        </div>
                    </section>
                    <section className="room-extras">
                        <h6>extras</h6>
                        <ul className="extras">
                            {
                                extras.map((item,id)=>{
                                    return(
                                        <div key={id}>
                                            <p>-{item}</p>
                                        </div>
                                    )
                                    
                                })
                            }
                        </ul>
                    </section>
                </>
            )
        }
       
    }
}
