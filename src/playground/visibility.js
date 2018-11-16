class VisibilityToggle extends React.Component
{
    constructor(props)
    {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            visibility : false
        };
    }
    toggleVisibility()
    {
        this.setState( (prevState) => {
            return {
                visibility : !prevState.visibility
            } ;
        }); 
    }
    render()
    {
        return(
        <div>
            <h4>Visibility Toggle</h4>
            <button onClick={this.toggleVisibility}>
                {this.state.visibility ? 'Hide Details' : 'Show Details' }
            </button>
            {this.state.visibility && (
                <div>
                    <p>These are the hidden details . Now you can see !...</p>    
                </div>
            )}
        </div>
        );
    }
}
ReactDOM.render(<VisibilityToggle />,document.getElementById('three'));




let visibility = false;
 
const toggleVisibility = () =>
{
    visibility = ! visibility;
    render3();
};

const render3 = () =>
{
    const templateToggle = (
        <div>
            <h4>Visibility Toggle</h4>
            <button onClick={toggleVisibility}>
                {visibility ? 'Hide Details' : 'Show Details' }
            </button>
            {visibility && (
                <div>
                    <p>These are the hidden details . Now you can see !...</p>    
                </div>
            )}
        </div>
    );
    ReactDOM.render(templateToggle,document.getElementById('three'));
}
render3();