import React from 'react';
import {DropdownItem, ButtonToolbar, DropdownButton} from "react-bootstrap";

class Buttons extends React.Component {
    handleSelect = eventKey => {
      this.props.gridSize(eventKey);
    };
  
    render() {
      return (
        <div className="center">
          <ButtonToolbar>
            <button className="btn btn-default" onClick={this.props.playButton}>
              Play
            </button>
            <button className="btn btn-default" onClick={this.props.pauseButton}>
              Pause
            </button>
            <button className="btn btn-default" onClick={this.props.clear}>
              Clear
            </button>
            <button className="btn btn-default" onClick={this.props.slow}>
              Slow
            </button>
            <button className="btn btn-default" onClick={this.props.fast}>
              Fast
            </button>
            <button className="btn btn-default" onClick={this.props.seed}>
              Seed
            </button>
            <DropdownButton
              title="Grid Size"
              id="size-menu"
              onSelect={this.handleSelect}
            >
              <DropdownItem eventKey="1">20x10</DropdownItem>
              <DropdownItem eventKey="2">50x30</DropdownItem>
              <DropdownItem eventKey="3">70x50</DropdownItem>
            </DropdownButton>
          </ButtonToolbar>
        </div>
      );
    }
  }

  export default Buttons;