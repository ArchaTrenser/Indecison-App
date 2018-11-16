/*

//***Using JSX Expression***\\

console.log('App.js is running');
var obj = {
    title : 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options:[]
};

var app1 = document.getElementById('one');

const addOptions = (e) =>
{
    e.preventDefault();
    const text = e.target.elements.option.value;
    if(text)
    {
        obj.options.push(text);
        e.target.elements.option.value = '';
        render();
    }
};

const removeAll = () =>
{
    obj.options=[];
    render();
};

const makeDecision =() =>
{
    const random = Math.floor(Math.random() * obj.options.length);
    alert(`Your decision : ${obj.options[random]}`);
};

const number = [1,2,3,4];

const render = () =>
{
    const template = (
        <div>
            <h1>{obj.title}</h1>
            {obj.subtitle && <p> {obj.subtitle} </p>}
            <p>{obj.options.length > 0 ?  'Here are your options' : 'No options' }</p>
            <p>{obj.options.length}</p>
            <button disabled={obj.options.length === 0} onClick={makeDecision}>What should I do ?</button>
            <button onClick={removeAll}>RemoveAll</button>
            <ul>
            {
                 obj.options.map((opt) => <li key="opt"> {opt} </li>)
            }
            </ul>
            <form onSubmit={addOptions}>
                <input type="text" name="option"></input>
                <button>Add Options</button>
            </form>
        </div> 
    );
    ReactDOM.render(template,app1);
}
render();
*/

//**Using REACT Component**\\

/*
var app1 = document.getElementById('one');

class IndecisionApp extends React.Component
{
    constructor(prpos)
    {
        super(prpos);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption= this.handleAddOption.bind(this);
        this.state = {
            options : []
        };
    };

    handlePick()
    {
        const random = Math.floor(Math.random() * this.state.options.length);
        alert(`Your decision : ${this.state.options[random]}`);
    };

    handleDeleteOptions()
    {
        this.setState ( () =>({ options :[] });
    };

    handleAddOption(option)
    {
        if(!option)
        {
            return 'Enter a valid value to add ';
        }
        else if(this.state.options.indexOf(option) > -1)
        {
            return 'This value already exist';
        }
        this.setState ( (prevState) =>
       {
           return {
                options : prevState.options.concat(option)
                };
       })
    };

    render()
    {
        const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of a computer';
        return(
        <div>
            <Header title = {title} subtitle = {subtitle}/>
            <Action 
                hasOptions = {this.state.options.length > 0}
                handlePick = {this.handlePick}
            />
            <Options 
                option={this.state.options}
                handleDeleteOptions = {this.handleDeleteOptions}
            />
            <AddOption 
                handleAddOption = {this.handleAddOption}
            />
        </div>
        );
    }
}

class Header extends React.Component
{
    render()
    {
       return(
            <div>
                 <h1>{this.props.title}</h1>
                 <h2>{this.props.subtitle}</h2>
            </div>
       );
    }
}

class Action extends React.Component
{
    render()
    {
        return (
            <div>
                <button 
                     onClick = {this.props.handlePick}
                     disabled = {!this.props.hasOptions} 
                >What should I Do ?
                </button>
            </div>
        );
    }
}

class Options extends React.Component
{
    render()
    {
        return (
            <div>
              <button onClick={this.props.handleDeleteOptions}>RemoveAll</button>
              {this.props.option.map((optn) => <Option key={optn} optionTitle={optn}/>)}
            </div>
        );
    }
}

class Option extends React.Component
{
    render()
    {
        return (
            <div>
                {this.props.optionTitle}
            </div>
        );
    }
}

class AddOption extends React.Component
{
    constructor(props)
    {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error : undefined
        };
    }
    handleAddOption(e)
    {
        e.preventDefault();
        const optn = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(optn);
        this.setState ( () => {
            return {error};
        });
       
    }
    render()
    {
        return (
            <div>
                {this.state.error && <p> {this.state.error }</p>}
               <form onSubmit={this.handleAddOption}>
                     <input type="text" name="option"></input>
                     <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />,one);
*/

//**Using Stateless Function Component**\\

class IndecisionApp extends React.Component
{
    constructor(prpos)
    {
        super(prpos);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options : []
        };
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

    handlePick()
    {
        const random = Math.floor(Math.random() * this.state.options.length);
        alert(`Your decision : ${this.state.options[random]}`);
    };
    handleDeleteOption(optionToRemove)
    {
        this.setState ( (prevState) => ({
            options : prevState.options.filter( (option) => {
                return optionToRemove !== option;
            })
        }));
    };

    handleDeleteOptions()
    {
        this.setState ( () => ({ options :[] }));
    };

    handleAddOption(option)
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
    };

    render()
    {
        const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of a computer';
        return(
        <div>
            <Header title = {title} subtitle = {subtitle}/>
            <Action 
                hasOptions = {this.state.options.length > 0}
                handlePick = {this.handlePick}
            />
            <Options 
                option={this.state.options}
                handleDeleteOptions = {this.handleDeleteOptions}
                handleDeleteOption = {this.handleDeleteOption}
            />
            <AddOption 
                handleAddOption = {this.handleAddOption}
            />
        </div>
        );
    }
}

const Header =(props) =>
{
    return(
        <div>
             <h1>{props.title}</h1>
             <h2>{props.subtitle}</h2>
        </div>
   );
}
const Action = (props) =>
{
    return (
        <div>
            <button 
                 onClick = {props.handlePick}
                 disabled = {!props.hasOptions} 
            >What should I Do ?
            </button>
        </div>
    );
}

const Options =(props) =>
{
    return (
        <div>
          <button onClick={props.handleDeleteOptions}>RemoveAll</button>
          {props.option.length === 0 && <p>Please enter an item to get started</p> }
          {props.option.map((optn) => (
            <Option
                 key={optn}
                 optionTitle={optn}
                 handleDeleteOption = {props.handleDeleteOption}
            />))} 
        </div>
    );
}

const Option = (props) =>
{
    return (
        <div>
            {props.optionTitle}
            <button 
               onClick = {(e) => {props.handleDeleteOption(props.optionTitle)}}>Remove
            </button>
        </div>
    );
}

class AddOption extends React.Component
{
    constructor(props)
    {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error : undefined
        };
    }
    handleAddOption(e)
    {
        e.preventDefault();
        const optn = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(optn);
        if(!error)
        {
            e.target.elements.option.value=' ';
        }
        this.setState ( () => ( {error} ) );
    }
    render()
    {
        return (
            <div>
                {this.state.error && <p> {this.state.error }</p>}
               <form onSubmit={this.handleAddOption}>
                     <input type="text" name="option"></input>
                     <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />,one);


class Counter extends React.Component
{
    
    constructor(props)
    {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count : 0
        };
    }
    componentDidMount()
    {
        const json = localStorage.getItem('count');
        const count = JSON.parse(json);
        this.setState ( () => ({count}))
    };

    componentDidUpdate(prevProps , prevState)
    {
        if(prevState.count !== this.state.count)
        {
            const json = JSON.stringify(this.state.count);
            localStorage.setItem('count' , json);
        }
    };

    handleAddOne()
    {
       this.setState( (prevState) =>{
           return {
               count : prevState.count + 1
           };
       });
    }
    handleMinusOne()
    {
        this.setState( (prevState) =>{
            return {
                count : prevState.count - 1
            };
        });
    }
    handleReset()
    {
        this.setState(() =>{
            return {
                count : 0
            };
        });
    }
    render()
    {
        return(
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}
ReactDOM.render(<Counter />,document.getElementById('two'));