import { useState } from "react";
import ReactDOM from "react-dom";

export default function DevInjection() {
	const [isDevMode, setDevMode] = useState(false);

	const ElEMENT = (
		<>
			<button
				id='devButton'
				onClick={() => {
					document.body.classList.toggle("dev");
					setDevMode((prev) => !prev);
				}}>
				{isDevMode ? "Switch off development" : "Switch on development"}
			</button>
			{!isDevMode && <p>TURN ON DEV MODE TO CHECK DROP AREA</p>}
			{isDevMode && <p>RED AREA ARE DROP AREA!</p>}
		</>
	);
	return <>{ReactDOM.createPortal(ElEMENT, document.getElementById("DEV")!)}</>;
}
