import React from "react";

import DropArea from "./DropArea";

import DraggingCardType from "../interfaces/DraggingCard";
import Status from "../interfaces/Status";
import Todo from "../interfaces/Todo";
import TodoComponent from "./TodoComponent";

interface Props {
	heading: string;
	list: Todo[];
	status: Status;
	onCardDrag: (id: DraggingCardType) => void;
	onDrop: (id: number) => void;
	deleteTodo: (id: number) => void;
}

const DisplayTask: React.FC<Props> = (props) => {
	return (
		<div className='display-task'>
			{/* Heading */}
			<div className='heading'>
				<span id={props.heading.replace(" ", "")}>{props.heading}</span>
			</div>
			<div className='todos'>
				{props.list.map((item, idx) => (
					<div key={item.id}>
						{/* DROP AREA */}
						<DropArea onDrop={() => props.onDrop(idx)} />

						{/* TODO CARD */}
						<TodoComponent
							todo={item}
							deleteTodo={() => props.deleteTodo(item.id)}
							dragStart={() => props.onCardDrag(item.id)}
							dragEnd={() => props.onCardDrag(null)}
						/>
					</div>
				))}
			</div>

			{<DropArea onDrop={() => props.onDrop(props.list.length)} isEnd={true} />}
		</div>
	);
};
export default DisplayTask;
