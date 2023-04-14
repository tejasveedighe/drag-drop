import React from "react";
import ReactDOM from "react-dom";
import Draggable from "react-draggable";
import "./App.css";

class App extends React.Component {
	render() {
		return (
			<Draggable
				axis="both"
				handle=".handle"
				defaultPosition={{ x: 0, y: 0 }}
				position={null}
				grid={[100, 25]}
				scale={1}
				onStart={this.handleStart}
				onDrag={this.handleDrag}
				onStop={this.handleStop}
				bounds={{ left: 0, top: 0, right: 500, bottom: 500 }}
				defaultClassNameDragged="dragged"
				defaultClassNameDragging="dragging"
			>
				<div className="App">
					<div className="handle">Drag from here</div>
					<div>This readme is really dragging on...</div>
				</div>
			</Draggable>
		);
	}
}

export default App;
