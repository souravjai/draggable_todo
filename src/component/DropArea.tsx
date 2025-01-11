import { useState } from "react";

interface Props {
	onDrop: () => void;
	isEnd?: boolean;
}

const DropArea: React.FC<Props> = (props) => {
	const [showDrop, setShowDrop] = useState<boolean>(false);

	return (
		<>
			<div
				onDragEnter={() => setShowDrop(true)}
				onDragLeave={() => setShowDrop(false)}
				onDrop={() => {
					props.onDrop();
					setShowDrop(false);
				}}
				onDragOver={(e) => e.preventDefault()}
				className='hide_drop'
				style={props.isEnd || showDrop ? { height: "100px" } : {}}></div>
			{showDrop && <div className='drop_area'>Drop card here...</div>}
		</>
	);
};
export default DropArea;
