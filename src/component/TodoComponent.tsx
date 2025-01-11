import Todo from "../interfaces/Todo";
import Tag from "./Tag";

const TodoComponent: React.FC<{
	todo: Todo;
	deleteTodo: () => void;
	dragStart: () => void;
	dragEnd: () => void;
}> = (props) => {
	return (
		<div
			className='todo'
			draggable
			onDragStart={props.dragStart}
			onDragEnd={() => props.dragEnd}>
			<span className='todo__delete' onClick={props.deleteTodo}>
				✖
			</span>
			<div className='todo__task'>{props.todo.task}</div>
			<div className='tags'>
				{props.todo.tags.map((tag, index) => (
					<Tag
						key={"tag" + index}
						tag={tag}
						isActive={true}
						isEditable={false}
					/>
				))}
			</div>
		</div>
	);
};

export default TodoComponent;
