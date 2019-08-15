import React,{useContext} from 'react'
import Room from './Room';
import {RoomContext} from '../context'
import Title from './Title'
function Roomfilter(props) {
    const context = useContext(RoomContext)
    console.log(`useContext ${context}`)
    // getUnique check..
    const getUnique = (items,value) => {
        // return rooms.filter((item,type)=>{return rooms.indexOf(item) == type})
        return [...new Set(items.map(item => item[value]))]
    }

    const{
        type,capacity,price,minPrice,maxPrice,minSize,maxSize,breakfast,pets,changeHandler
    } = context

    let types = getUnique(props.rooms,'type');
    //add all
    types = ['all',...types]
    //
    types = types.map((item,index)=>{ 
        return(
            <option value={item} key={index}>{item}</option>
        )

    })
    let people = getUnique(props.rooms,'capacity')
    people = people.map((item,index)=>{ 
        return(
            <option value={item} key={index}>{item}</option>
        )

    })
    return (
       <>
        <section className="filter-container">
            <Title title="search rooms" />
            <form className="filter-form">
                {/* select type */}
                <div className='form-group'>
                    <label htmlFor="type">room type</label>
                    <select
                        name="type"
                        id="type"
                        value={type}
                        className="form-control"
                        onChange={changeHandler}>
                            {types}
                    </select>
                </div>
                {/* end of select type */}
                <div className='form-group'>
                    <label htmlFor="type">capacity</label>
                    <select
                        name="capacity"
                        id="capacity"
                        value={capacity}
                        className="form-control"
                        onChange={changeHandler}>
                            {people}
                    </select>
                </div>
            </form>
        </section>
       </>
    )
}
export default Roomfilter
