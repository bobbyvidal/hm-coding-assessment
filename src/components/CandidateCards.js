import React from 'react'
import Row from 'react-bootstrap/Row';
import '../candidateCards.css'

function CandidateCards(props) {
    const filteredData = props.filteredData
    const searchInput = props.searchInput
    
    //function responsible for holding the finished candidate cards using bootstrap
    const listItems = filteredData.map(
        (candidate) => {
            return (
                <div class="card" style={{width: '22rem', margin: '0.8rem'}}>
                    <div class="card-header" style={{textAlign: 'center'}}>
                        {candidate.firstName} {candidate.lastName}
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Email: {candidate.email}</li>
                        <li class="list-group-item">Address: {candidate.address}</li>
                        <li class="list-group-item">Zip Code: {candidate.zipCode}</li>
                        <li class="list-group-item">Phone: {candidate.phoneNumber}</li>
                    </ul>
                </div>
            )
        }
    )

//responsible for handling the conditional rendering of the results input, displayed on line 46
    const searchDiv = function() {
        if (searchInput.length > 0){
            return(
                <h2>Results for: {searchInput}</h2>
            )
        }
        else {
            return (
                <h2>Results for: All candidates</h2>
            )
        }
    }

    //layout for the search result
    //conditional rendering on line 45 based on the results of the function on line 27
    return (
        <div>
            <div className='container'>
                {searchDiv()}
            </div>
            <div className='container'>
                <Row>{listItems}</Row>
            </div>
        </div>
    )
}

export default CandidateCards;