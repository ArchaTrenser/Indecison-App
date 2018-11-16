var user = {
    userName: 'Archa',
    userAge : '22',
    userLocation : 'Trivandrum'
};
var getLocation= ((location) =>
{
    if(location)
    {
        return <p>Location : {location}</p>;
    }
    return 'unknown';
});
var templateTwo = (
    <div>
        <h1>Name:  {user.userName ? user.userName : 'Unknown'}</h1>
        {(user.userAge >= 18) && <p>Age  :   {user.userAge}</p> }
        {getLocation(user.userLocation)}
    </div>
);
let count = 0 ;
const addOne = () => {count++; render2()};
const SubOne = () => {count--; render2()};
const Resets = () => {count= 0; render2()};
const render2 =() => {
const templateAdd = (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={SubOne}>-1</button>
        <button onClick={Resets}>reset</button>
    </div>
);
ReactDOM.render(templateAdd,document.getElementById('two'));
};
render2();


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



const mulitipler = {
    numbers : [1,2,3,4,5],
    mulitiplyBy : 3,
    mulitiply() 
   { return   this.numbers.map((num) => num * this.mulitiplyBy);}
};
console.log(mulitipler.mulitiply());