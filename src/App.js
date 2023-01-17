import React from 'react'
import CandidateInput from './components/CandidateInput';
import TopBar from './components/TopBar'
import { candidateInformation } from './data';
import SearchCandidates from './components/SearchCandidates';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {searchInput: '', 
                  searchReady: false};
    this.handleChange = this.handleChange.bind(this)
  }

//changes the value of the search input based using setState and onChange
  handleChange = event => {
    this.setState({
      searchInput: event.target.value, 
      searchReady: false
    })
  }

//used below to conditionally render the searched candidates on line 40
  handleSubmit = event => {
    event.preventDefault()
    this.setState({
      searchReady: !this.state.searchReady
    })
  }
  
  //calls the two initially visible components of the navbar and form
  render(){
    console.log(this.state.searchReady)
    console.log(this.state.searchInput)
    return (
      <div >
        <TopBar handleChange = {this.handleChange} handleSubmit = {this.handleSubmit}/>
        <CandidateInput />
        {this.state.searchReady ? <SearchCandidates searchInput = {this.state.searchInput} candidateInformation = {candidateInformation} /> : ''}
      </div>
    )
  }
}

export default App;
