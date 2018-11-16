import React from 'react';

const Option = (props) => (
        <div className = "option">
           <p className ="option__messgae">
              {props.count}. {props.optionTitle}
           </p>
           
            <button 
               className = "button button--link"
               onClick = {(e) => {props.handleDeleteOption(props.optionTitle)}}>Remove
            </button>
        </div>
    );
    
export default Option;