'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(prpos) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, prpos));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        _this.state = {
            options: []
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            try {
                console.log('componentDidMount!');
                var json = localStorage.getItem('options');
                var options = JSON.parse(json);
                if (options) {
                    this.setState(function () {
                        return { options: options };
                    });
                }
            } catch (error) {
                console.log(error);
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length !== this.state.options.length) {
                console.log('componentDidUpdate!');
                var json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);
            }
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            var random = Math.floor(Math.random() * this.state.options.length);
            alert('Your decision : ' + this.state.options[random]);
        }
    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption(optionToRemove) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return optionToRemove !== option;
                    })
                };
            });
        }
    }, {
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            if (!option) {
                return 'Enter a valid value to add ';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'This value already exist';
            }
            this.setState(function (prevState) {
                return { options: prevState.options.concat(option) };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var title = 'Indecision App';
            var subtitle = 'Put your life in the hands of a computer';
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    handlePick: this.handlePick
                }),
                React.createElement(Options, {
                    option: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions,
                    handleDeleteOption: this.handleDeleteOption
                }),
                React.createElement(AddOption, {
                    handleAddOption: this.handleAddOption
                })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};
var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                onClick: props.handlePick,
                disabled: !props.hasOptions
            },
            'What should I Do ?'
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleDeleteOptions },
            'RemoveAll'
        ),
        props.option.length === 0 && React.createElement(
            'p',
            null,
            'Please enter an item to get started'
        ),
        props.option.map(function (optn) {
            return React.createElement(Option, {
                key: optn,
                optionTitle: optn,
                handleDeleteOption: props.handleDeleteOption
            });
        })
    );
};

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        props.optionTitle,
        React.createElement(
            'button',
            {
                onClick: function onClick(e) {
                    props.handleDeleteOption(props.optionTitle);
                } },
            'Remove'
        )
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            e.preventDefault();
            var optn = e.target.elements.option.value.trim();
            var error = this.props.handleAddOption(optn);
            if (!error) {
                e.target.elements.option.value = ' ';
            }
            this.setState(function () {
                return { error: error };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    ' ',
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), one);

var Counter = function (_React$Component3) {
    _inherits(Counter, _React$Component3);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this3 = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this3.handleAddOne = _this3.handleAddOne.bind(_this3);
        _this3.handleMinusOne = _this3.handleMinusOne.bind(_this3);
        _this3.handleReset = _this3.handleReset.bind(_this3);
        _this3.state = {
            count: 0
        };
        return _this3;
    }

    _createClass(Counter, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var json = localStorage.getItem('count');
            var count = JSON.parse(json);
            this.setState(function () {
                return { count: count };
            });
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.count !== this.state.count) {
                var json = JSON.stringify(this.state.count);
                localStorage.setItem('count', json);
            }
        }
    }, {
        key: 'handleAddOne',
        value: function handleAddOne() {
            this.setState(function (prevState) {
                return {
                    count: prevState.count + 1
                };
            });
        }
    }, {
        key: 'handleMinusOne',
        value: function handleMinusOne() {
            this.setState(function (prevState) {
                return {
                    count: prevState.count - 1
                };
            });
        }
    }, {
        key: 'handleReset',
        value: function handleReset() {
            this.setState(function () {
                return {
                    count: 0
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Count : ',
                    this.state.count
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleAddOne },
                    '+1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleMinusOne },
                    '-1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleReset },
                    'Reset'
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, null), document.getElementById('two'));
