import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options'; 
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component
{
    state = {
        options : [],
        selectedOption : undefined
    };

    componentDidMount()
    {
        try{
            console.log('componentDidMount!');
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options)
            {
                this.setState (() => ({options}));
            }
        }catch(error)
        {
            console.log(error);
        }
    };

    componentDidUpdate(prevProps , prevState)
    {
        if(prevState.options.length !== this.state.options.length)
        {
            console.log('componentDidUpdate!');
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options' , json);
        }
    };

    handlePick = (() =>
    {
        const random = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[random];
        this.setState( () => ( 
            { 
                selectedOption : option 
            })
        );
    });
    
    handleDeleteOption = ( (optionToRemove) =>
    {
        this.setState ( (prevState) => ({
            options : prevState.options.filter( (option) => {
                return optionToRemove !== option;
            })
        }));
    });

    handleDeleteOptions = ( () =>
    {
        this.setState ( () => ({ options :[] }));
    });

    handleAddOption = ( (option) =>
    {
        if(!option)
        {
            return 'Enter a valid value to add ';
        }
        else if(this.state.options.indexOf(option) > -1)
        {
            return 'This value already exist';
        }
        this.setState ( (prevState) => ({ options : prevState.options.concat(option)}));
    });

    handleDeleteSelectedOption = ( () =>
    {
        this.setState ( () => ( {
            selectedOption : undefined
        }))
    });

    render()
    {
        const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of a computer';
        return(
        <div>
            <Header title = {title} subtitle = {subtitle}/>
            <div className = "container">  
             <Action 
                    hasOptions = {this.state.options.length > 0}
                    handlePick = {this.handlePick}
             />
            <div className = "widget">
                <Options 
                        option={this.state.options}
                        handleDeleteOptions = {this.handleDeleteOptions}
                        handleDeleteOption = {this.handleDeleteOption}
                />
                <AddOption 
                        handleAddOption = {this.handleAddOption}
                /> 
            </div>     
                <OptionModal 
                    selectedOption = {this.state.selectedOption}
                    handleDeleteSelectedOption = {this.handleDeleteSelectedOption}
                />
             </div>
        </div>
        );
    }
}
