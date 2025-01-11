import Status from "../interfaces/Status";
import { Tag } from "../interfaces/Tag";

const TAGS: Tag[] = [
    {
        name: "HTML",
        color: "aqua",
    },
    {
        name: "CSS",
        color: "orange",
    },
    {
        name: "JavaScript",
        color: "yellow",
    },
    {
        name: "React",
        color: "tomato",
    },
];

const STATUS: Status[] = ["To Do", "Doing", "Done"];

export { TAGS, STATUS };