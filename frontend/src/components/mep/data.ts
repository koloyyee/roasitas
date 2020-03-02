export interface ITask{
    id: string;
    content: string;
}

export interface ITasksState{
    tasks :  ITask[]
}

export interface IColumn{
    id: string;
    title: string;
    taskIds: ITasksState
}

export interface initialDataState{
    tasks: ITasksState;
    columns: IColumn;
    columnOrder: IColumn[];

}



const initialData = {

    tasks:{
        "task-1" : { id: "task-1", content: "Take out the garbage"},
        "task-2" : { id: "task-2", content: "Watch the dog"},
        "task-3" : { id: "task-3", content: "Video editing"},
        "task-4" : { id: "task-4", content: "Create drag and drop app"},
    },

    columns:{
        'column-1':{
            id: "column-1",
            title: "To do",
            taskIds: ["task-1","task-2","task-3","task-4"],
        },
        'column-2':{
            id: "column-2",
            title: "In Progress",
            taskIds: [],
        },
        'column-3':{
            id: "column-3",
            title: "Done",
            taskIds: [],
        }
    },

    columnOrder: ['column-1','column-2','column-3']
    
}

export default initialData;