import React, { useState, useEffect } from "react";
import "./styles2.css";

const Icon = () => {
  return (
    <svg height="20" width="20" viewBox="0 0 20 20">
      <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
    </svg>
  );
};

const CloseIcon = () => {
  return (
    <svg height="20" width="20" viewBox="0 0 20 20">
      <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
    </svg>
  );
};

const DropdownSorting = ({ placeHolder, options, isMultiple }: any) => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectValue, setSelectValue] = useState(isMultiple ? [] : null);

  useEffect(() => {
    const handler = () => setShowMenu(false);

    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  });

  const handleClick = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  const getDisplay = () => {
    if (!selectValue || selectValue.length === 0) {
      return placeHolder;
    }
    if (isMultiple) {
      return (
        <div className="dropdown-tags">
          {selectValue.map((option) => (
            <div key={option.value} className="dropdown-tag-item">
              {option.label}
              <span
                onClick={(e) => onTagRemove(e, option)}
                className="dropdown-tag-close"
              >
                <CloseIcon />
              </span>
            </div>
          ))}
        </div>
      );
    }
    return selectValue.label;
  };
  const removeOption = (option) => {
    return selectValue.filter((o) => o.value !== option.value);
  };
  const onTagRemove = (e, option) => {
    e.stopPropagation();
    setSelectValue(removeOption(option));
  };

  const onItemClick = (option) => {
    let newValue;
    if (isMultiple) {
      if (selectValue.findIndex((o) => o.value === option.value) >= 0) {
        newValue = removeOption(option);
      } else {
        newValue = [...selectValue, option];
      }
    } else {
      newValue = option;
    }
    setSelectValue(newValue);
  };

  const isSelected = (option) => {
    if (isMultiple) {
      return selectValue.filter((o) => o.value === option.value).length > 0;
    }
    if (!selectValue) {
      return false;
    }
    return selectValue.value === option.value;
  };

  return (
    <div>
      <div className="dropdown-container">
        <div className="dropdown-menu-1">
          <div onClick={handleClick} className="dropdown-input">
            <div className="dropdown-selected-value">{getDisplay()}</div>

            <Icon />
          </div>
        </div>
        {showMenu && (
          <div className="dropdown-menu-2">
            {options.map((option) => (
              <div className="dropdown-box" key={option.value}>
                <div
                  onClick={() => onItemClick(option)}
                  className={`check-box ${isSelected(option) && "selected"}`}
                >
                  {" "}
                </div>
                <div
                  className={`dropdown-item ${
                    isSelected(option) && "selected"
                  }`}
                >
                  {option.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownSorting;
