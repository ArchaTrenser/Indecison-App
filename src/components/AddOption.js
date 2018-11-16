import React from 'react';

export default class AddOption extends React.Component
{
    state = {
        error : undefined
    };
    
    handleAddOption = ( (e) =>
    {
        e.preventDefault();
        const optn = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(optn);
        if(!error)
        {
            e.target.elements.option.value=' ';
        }
        this.setState ( () => ( {error} ) );
    });

    render()
    {
        return (
            <div>
                {this.state.error && <p className = "addoption-error"> {this.state.error }</p>}
               <form className = "addoption" onSubmit={this.handleAddOption}>
                     <input className = "addoption__input" type="text" name="option"></input>
                     <button className = "button">Add Option</button>
                </form>
            </div>
        );
    }
}
