import React, {Component}  from 'react'

class FilterString extends Component {
    constructor() {
        super();
    
        this.state = {
          names: ['Ryan', 'Kevin', 'Riss', 'Lisa', 'Aaron', 'Jess', 'Skyler', 'Garrett'],
          userInput: '',
          filteredNames: []
        };
      }

      handleChange(val){
          this.setState({userInput: val})
      }

      filterNames(userInput){
          
      }


    render(){
        return ( 
        <div className="puzzleBox filterStringPB">
            <h4> Filter String </h4>
            <span className="puzzleText"></span>
            <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }/>
            <button className="confirmationButton"> Filter </button>
        <span className="resultsBox filterStringRB">Filtered: {(this.state.filteredNames)}</span>
      </div>
            )
    }

}
export default FilterString