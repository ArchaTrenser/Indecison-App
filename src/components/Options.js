import React from 'react';
import Option from './Option'; 

const Options =(props) => (
      <div>
           <div className = "widgetcontainer">
               <h3 className = "widgetcontainer__title">Your Options</h3>
               <button 
                   className = "button button--link"
                   onClick={props.handleDeleteOptions}>
                   RemoveAll
               </button>
            </div>

            {props.option.length === 0 && <p className = "widget__message">Please enter an item to get started</p> }
            {props.option.map((optn ,index) => (
                 <Option
                    key = {optn}
                    optionTitle = {optn}
                    count = {index +1}
                    handleDeleteOption = {props.handleDeleteOption}
                  />))
            } 

      </div>
    );

export default Options;