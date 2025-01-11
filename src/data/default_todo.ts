import Todo from "../interfaces/Todo";

const data: Todo[] = [
    {
        "id": 1001,
        "task": "Learn HTML & CSS",
        "status": "Done",
        "tags": [
            {
                "name": "CSS",
                "color": "orange"
            },
            {
                "name": "HTML",
                "color": "aqua"
            }
        ]
    },
    {
        "id": 1002,
        "task": "Learn JavaScript",
        "status": "Done",
        "tags": [
            {
                "name": "JavaScript",
                "color": "yellow"
            }
        ]
    },
    {
        "id": 1003,
        "task": "Implement Drag & Drop",
        "status": "Doing",
        "tags": [
            {
                "name": "React",
                "color": "tomato"
            }
        ]
    },
    {
        "id": 1004,
        "task": "Water The Plant!",
        "status": "To Do",
        "tags": []
    },
    {
        "id": 1005,
        "task": "Add All Tags.",
        "status": "To Do",
        "tags": [
            {
                "name": "HTML",
                "color": "aqua"
            },
            {
                "name": "CSS",
                "color": "orange"
            },
            {
                "name": "JavaScript",
                "color": "yellow"
            },
            {
                "name": "React",
                "color": "tomato"
            }
        ]
    },
    {
        "id": 1006,
        "task": "Make Page more Asthetic?",
        "status": "To Do",
        "tags": [
            {
                "name": "CSS",
                "color": "orange"
            }
        ]
    }
]

export default data;