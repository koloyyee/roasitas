import * as React from 'react';
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd';
interface props{

    task: {
        id:string
        content:string
    }
    index: number
}

const Container = styled.div`
    border :1px solid lightgrey;
    padding: 8px;
    margin-botton: 8px;
    border-radius: 2px;
    background-color: ${props => (
        props.isDragDisabled? 
        "lightgrey" : props.isDragging? 
        'lightgreen': 'white')}
`

// const Handle = styled.div`
//     width:20px;
//     height: 20px;
//     background-color: orange;
//     border-radius: 4px;
//     margin-right:8px;
// `


class Task extends React.Component<props, {}>{
    
    
    public render(){
        // const isDragDisabled = this.props.task.id === 'task-1';
        
        return (

        <Draggable draggableId={this.props.task.id} index={this.props.index}>
            {(provided, snapshot)=>(
                <Container
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref = {provided.innerRef}
                isDragging = {snapshot.isDragging}

                // isDragDisabled = {isDragDisabled}
                >
                    {/* <Handle {...provided.dragHandleProps}  /> */}
                    {this.props.task.content}
                </Container>

            )}
        </Draggable>

    )
    
    }
}

export default Task