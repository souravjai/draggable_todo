import React from "react";
import { Tag as TagType } from "../interfaces/Tag";

interface Props {
	tag: TagType;
	isActive: boolean;
	isEditable: boolean;
	onClickHandler?: (tag: TagType) => void;
}

const Tag: React.FC<Props> = (props) => {
	const handleOnClick = (tag: TagType) => {
		props.onClickHandler?.(tag);
	};
	return (
		<span
			key={props.tag.name}
			className={["tag", props.isActive ? "active" : ""].join(" ")}
			onClick={() => handleOnClick(props.tag)}
			style={{
				...(props.isActive ? { backgroundColor: props.tag.color } : {}),
				...(props.isEditable ? { cursor: "pointer" } : {}),
			}}>
			{props.tag.name}
		</span>
	);
};

export default Tag;
