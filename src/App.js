import React from "react";
import Draggable from "react-draggable";
import "./App.css";

class App extends React.Component {
	render() {
		return (
			<div className="parent">
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
					// bounds={{ left: 0, top: 0, right: 500, bottom: 500 }}
					bounds="parent"
					defaultClassNameDragged="dragged"
					defaultClassNameDragging="dragging"
				>
					<div className="App handle">
						<div>Drag from here</div>
						<div>This readme is really dragging on...</div>
					</div>
				</Draggable>
			</div>
		);
	}
}

export default App;
