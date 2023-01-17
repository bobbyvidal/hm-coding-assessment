import React from 'react'
import picture from '../hm_industrial_epc.png'

function TopBar(props) {
    const handleChange = props.handleChange
    const handleSubmit = props.handleSubmit

    //navbar as well as handling the search bar input values 
    return (
        <nav class="navbar navbar-light" style={{backgroundColor: '#00ccff'}}>
            <img src={picture} style={{width: '60px'}}/>
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li>H+M Industrial EPC Coding Assessment</li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search Candidates" aria-label="Search" onChange={handleChange}/>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={handleSubmit} style={{marginLeft:'1rem'}}>Search</button>
            </form>
        </nav>
    )
}

export default TopBar