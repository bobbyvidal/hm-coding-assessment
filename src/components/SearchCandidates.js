import React from 'react'
import CandidateCards from './CandidateCards'

function SearchCandidates(props) {
    const candidateInformation = props.candidateInformation
    const searchInput = props.searchInput
    let filteredData

    //case insensitive filtering
    function filterIt(arr, searchKey) {
        filteredData = arr.filter(obj => Object.keys(obj).some(key => obj[key].toLowerCase().includes(searchKey.toLowerCase())));
        return filteredData;
    }
    
    filterIt(candidateInformation, searchInput);

    //taking the filtered data and passing it to the card generating class
    return (
        <div>
            {console.log(filteredData)}
            <CandidateCards filteredData = {filteredData} searchInput = {searchInput}/>
        </div>
    )
}

export default SearchCandidates;