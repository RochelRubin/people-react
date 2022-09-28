import React from 'react';

class PersonForm extends React.Component {
    render() {
        const { firstName,lastName,age, firstNameTextChange, lastNameTextChange, ageTextChange,addButton, clearButton} = this.props;
        return (
            <div className='jumbotron'>
            <div className='row'>
                    <div className='col-md-2'>
                        <input value={firstName} onChange={firstNameTextChange} className='form-control' placeholder='First Name' />
                    </div>
                <div className='col-md-2'>
                    <input value={lastName} onChange={lastNameTextChange} className='form-control' placeholder='Last Name' />
                </div>
                    <div className='col-md-2'>
                        <input value={age} onChange={ageTextChange} className='form-control' placeholder='Age' />
                    </div>
                <div className='col-md-2'>
                    <button onClick={addButton} className='btn btn-primary btn-block'>Add</button>
                </div>
                <div className='col-md-2'>
                    <button onClick={clearButton} className='btn btn-danger btn-block'>Clear All</button>
                </div>
            </div>
            </div>
        )
    }
}

export default PersonForm;
