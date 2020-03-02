
export interface ITask{
    id:number
    task: string,
    created_date?: string,
    updated_date?: string

}

export interface IMepState {
    mep: ITask[]
}