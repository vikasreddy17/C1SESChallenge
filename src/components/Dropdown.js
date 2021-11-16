import React, { useState } from 'react';
import './Dropdown.css';

function Dropdown({ title, items}) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const toggle = () => setOpen(!open);
  Dropdown.handleClickOutside = () => setOpen(false);

  function handleOnClick(item) {
    if (!selection.some(current => current.id === item.id)) {
        setSelection([item]);
    } else {
        let selectionAfterRemoval = selection;
        selectionAfterRemoval = selectionAfterRemoval.filter(current => current.id !== item.id);
        setSelection([...selectionAfterRemoval]);
    }
  }

  function isItemInSelection(item) {
    if (selection.some(current => current.id === item.id)) {
        return true;
    }
    return false;
  }

  function arrayToString(array) {
    var returnVal = "";
    for (var i=0; i<array.length; i++){
        if (i<array.length-1){
            returnVal += array[i].fullName + "";
        } else {
            returnVal += array[i].fullName;
        }
      }
      return returnVal;
  }


  return (
    <div className="dd-wrapper">
        <div
            tabIndex={0}
            className="dd-header"
            role="button"
            onKeyPress={() => toggle(!open)}
            onClick={() => toggle(!open)}
        >
            <div className="dd-header__title">
                <p className="dd-header__title--bold">{title}</p>
            </div>
             <div className="dd-header__action">
                <p>{open ? 'Close' : 'Open'}</p>
            </div>
        </div>
      {open && (
            <ul className="dd-list">
                {items.map(item => (
                    <li className="dd-list-item" key={item.id}>
                        <button type="button" onClick={() => handleOnClick(item)}>
                            <h1>{item.name}</h1>
                            <p1 className = "Dropdown">{isItemInSelection(item) && arrayToString(item.parks)}</p1>
                        </button>
                    </li>
                ))}
             </ul>
        )}
    </div>
    );
}

export default Dropdown;