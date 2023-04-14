import React from "react";
import Draggable from "react-draggable";
import "./App.css";
import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";

const DraggableBox = ({ id }) => {
	const updateArrow = useXarrow();
	return (
		<Draggable
			axis="both"
			handle=".handle"
			defaultPosition={{ x: 0, y: 0 }}
			position={null}
			grid={[100, 25]}
			scale={1}
			onDrag={updateArrow}
			onStop={updateArrow}
			bounds="parent"
			defaultClassNameDragged="dragged"
			defaultClassNameDragging="dragging"
		>
			<div id={id} className="App handle">
				<div>Box: {id}</div>
			</div>
		</Draggable>
	);
};

const App = () => {
	return (
		<div className="parent">
			<Xwrapper>
				<DraggableBox id={"elem1"} />
				<DraggableBox id={"elem2"} />
				<Xarrow
					start={"elem1"}
					end={"elem2"}
					lineColor={"green"}
					headColor={"green"}
				/>
			</Xwrapper>
		</div>
	);
};

export default App;
