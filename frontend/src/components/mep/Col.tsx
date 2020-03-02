import * as React from 'react';
import styled from 'styled-components'
import Task from './Task';
import { Droppable } from 'react-beautiful-dnd';



interface props{
    column: {
        id:string,
        title:string}
    // isDropDisabled:boolean
    tasks:[] ;
    
}


const Container = styled.div`
    margin: 8px;
    border-radius: 2px;
    border: 1px solid lightgrey;
    width: 200px;

    display:flex;
    flex-direction: columns
`

const Title = styled.div`
    padding: 8px;

`
const TaskList = styled.div`
    padding: 8px;
    background-color: ${props => (props.isDraggingOver? "pink":"white")}
    flex-grow: 1;
    min-height: 200px;
`


class Column extends React.Component<props, {}>{


    public render(){

        return (
            
            <Container className = "column">
            <Title>{this.props.column.title}</Title> 
            <Droppable  droppableId={this.props.column.id} 
            // type={this.props.column.id === "column-3" ? "done" : "active"}
            // isDropDisabled = {this.props.isDropDisabled}
            > 
                {(provided, snapshot)=> (
                    <TaskList
                        className ="task_list"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        isDraggingOver={snapshot.isDraggingOver}
                    >
                        { this.props.tasks.map((task, i) => <Task key={i} task={task} index={i}/> )}
                        {provided.placeholder}
                    </TaskList>
                )}
               </Droppable>

            </Container>
        )
    }

}

export default Column