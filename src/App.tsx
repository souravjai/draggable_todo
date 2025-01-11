import { useRef, useState } from "react";

import data from "./data/default_todo";
import { TAGS, STATUS } from "./data/META_DATA";

import AddTask from "./component/AddTask.tsx";
import DisplayTask from "./component/DisplayTask.tsx";

import Todo from "./interfaces/Todo.ts";
import Status from "./interfaces/Status.ts";
import DraggingCardType from "./interfaces/DraggingCard.ts";

import "./index.css";

const App = () => {
	const [todoList, setTodoList] = useState<Todo[]>(data);
	const draggingCard = useRef<DraggingCardType>(null);

	function onDrop(index: number, status: Status) {
		const currentDragCard = todoList.find(
			(it) => it.id === draggingCard.current
		) as Todo;

		const currentStatusList = todoList
			.filter((it) => it.status === status)
			.filter((it) => it.id !== currentDragCard.id);
		const excludedList = todoList
			.filter((it) => it.status !== status)
			.filter((it) => it.id !== currentDragCard.id);

		currentDragCard.status = status;

		currentStatusList.splice(index, 0, currentDragCard);
		setTodoList([...excludedList, ...currentStatusList]);
	}

	return (
		<>
			<AddTask
				tags={TAGS}
				status={STATUS}
				addTodo={(todo: Todo) => setTodoList((prev) => [...prev, todo])}
			/>
			<hr />
			<div className='display'>
				{STATUS.map((currentStatus) => (
					<DisplayTask
						key={currentStatus}
						heading={currentStatus}
						status={currentStatus}
						list={todoList.filter((todo) => todo.status === currentStatus)}
						onDrop={(index) => onDrop(index, currentStatus)}
						onCardDrag={(id: DraggingCardType) => (draggingCard.current = id)}
						deleteTodo={(id: number) =>
							setTodoList((prev) => prev.filter((it) => it.id !== id))
						}
					/>
				))}
			</div>
		</>
	);
};

export default App;
