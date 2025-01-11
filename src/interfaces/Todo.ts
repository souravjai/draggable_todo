import Status from "./Status";
import { Tag } from "./Tag";


interface Todo {
    id: number
    task: string,
    status: Status
    tags: Tag[]
}

export default Todo;