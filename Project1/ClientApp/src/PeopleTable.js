import React from 'react';
import PersonForm from "./PersonForm";
import PersonRow from "./PersonRow";


class PeopleTable extends React.Component {
    state = {
       firstName: '',
       lastName: '',
       age: '',
        persons:[]
    }
   firstNameTextChange = e => {
        this.setState({ firstName: e.target.value });
    }
    lastNameTextChange = e => {
        this.setState({ lastName: e.target.value });
    }
    ageTextChange = e => {
        this.setState({ age: e.target.value });
    }
    addButton = () =>{
        const{firstName,lastName,age,persons}=this.state;
        const person={
            firstName,
            lastName,
            age
        }
        const copy=[person,...persons];
        this.setState({persons:copy,firstName:'',lastName:'',age:''});
    }
    clearButton =()=>{
        this.setState({persons:[],firstName:'',lastName:'',age:''})
    }
    generateTable =()=> {
        const {persons}=this.state;
        if(persons.length===0){
            return<h1 className="text-center">No people added!! Be the first to enter!!</h1>
        }
        else{
            return(
            <div>
            <table className="table table-hover table-bordered table-striped">
                <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            <PersonRow persons={persons} />
                        </tbody> 
            </table>
            </div>
            )
        }
        
        
    }
    render(){
        return(
            <div className="container mt-5">
<div className=''>
                    <PersonForm
                        firstNameTextChange={this.firstNameTextChange}
                        lastNameTextChange={this.lastNameTextChange}
                        ageTextChange={this.ageTextChange}
    firstName={this.state.firstName}
    lastName={this.state.lastName}
    age={this.state.age}
    
    addButton={this.addButton}
    clearButton={this.clearButton}/>
</div>
{this.generateTable()}
            </div>
        )
    }

}
export default PeopleTable;