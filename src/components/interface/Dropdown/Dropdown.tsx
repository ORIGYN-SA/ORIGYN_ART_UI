//css

.dropdown-container {
  text-align: left;
  border: 1px solid #ccc;
  position: relative;
  border-radius: 5px;
}

.dropdown-input {
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
}

const Dropdown = ({ placeHolder }) => {
  const getDisplay = () => {
    return placeHolder;
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-input">
        <div className="dropdown-selected-value">{getDisplay()}</div>
        <div className="dropdown-tools">
          <div className="dropdown-tool">
            <Icon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown