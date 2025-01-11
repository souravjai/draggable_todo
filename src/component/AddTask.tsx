import { useRef, useState } from "react";
import { Tag as TagType } from "../interfaces/Tag";
import Todo from "../interfaces/Todo";
import Status from "../interfaces/Status";
import Tag from "./Tag";

import { TAGS, STATUS } from "../data/META_DATA";

interface Props {
	tags: TagType[];
	status: Status[];
	addTodo: (todo: Todo) => void;
}

const AddTask: React.FC<Props> = (props) => {
	const [todo, setTodo] = useState<string>("");
	const [status, setStatus] = useState<Status>(STATUS[0]);
	const [tags, setTags] = useState<TagType[]>([]);

	const inputRef = useRef<HTMLInputElement>(null);

	function handleAddTask(e: React.FormEvent<HTMLFormElement>): void {
		e.preventDefault();

		if (todo === "") {
			inputRef.current?.focus();
			return;
		}

		props.addTodo({
			id: Math.trunc(Math.random() * 10000),
			task: todo,
			status,
			tags,
		});
		setTodo("");
		setStatus(STATUS[0]);
		setTags([]);
	}

	function toggleTag(tag: TagType) {
		setTags((previousTags) => {
			if (previousTags.includes(tag)) {
				return previousTags.filter((tg) => tg !== tag);
			} else {
				return [...previousTags, tag];
			}
		});
	}

	return (
		<form className='addtask' onSubmit={handleAddTask}>
			<input
				type='text'
				className='addtask__todo'
				placeholder='Enter your Task'
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
				ref={inputRef}
			/>
			<div className='addtask__meta'>
				<div className='tags'>
					{TAGS.map((tag, idx) => (
						<Tag
							key={idx}
							tag={tag}
							isActive={!!tags.find((it) => it.name === tag.name)}
							isEditable={true}
							onClickHandler={() => toggleTag(tag)}
						/>
					))}
				</div>
				<div className='addtask__add'>
					<select
						name='status'
						className='addtask__status'
						value={status}
						onChange={(e) => setStatus(e.target.value as Status)}>
						{STATUS.map((st) => (
							<option key={st} value={st}>
								{st}
							</option>
						))}
					</select>
					<input type='submit' className='addtask__submit' value='+ Add Task' />
				</div>
			</div>
		</form>
	);
};

export default AddTask;
