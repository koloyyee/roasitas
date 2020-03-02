import * as React from 'react';
import initialData from "./data";
import Column from './Col'
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import styled from 'styled-components'
import HorizontalMenu from '../mockAppStoreAPI/HorizontalMenu';
import WPHorizontalMenu from '../mockAppStoreAPI/WithPackage';
// import VerticalMenu from '../mockAppStoreAPI/VerticalMenu';


const DDContainer = styled.div`
    display: flex;
    

`



class Dnd extends React.Component{


    state = initialData
   
    onDragEnd = (result:DropResult)=>{
     
        const{source, destination, draggableId} = result
        if (!destination){return;}
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ){
            return;
        }

        const startColumn = this.state.columns[source.droppableId];
        const finishColumn = this.state.columns[destination.droppableId];

            if(startColumn === finishColumn){

                const newTaskIds = Array.from(startColumn.taskIds);
                newTaskIds.splice(source.index, 1);
                newTaskIds.splice(destination.index, 0, draggableId);
        
                const newColumn = {
                    ...startColumn,
                    taskIds: newTaskIds
                }
        
                const newState = {
                    ...this.state,
                    columns:{
                        ...this.state.columns,
                        [newColumn.id]: newColumn,
                    }
                }
        
                this.setState(newState);
                return;    
            }
        // Moving from list to list
        const startTaskIds = Array.from(startColumn.taskIds)
        startTaskIds.splice(source.index, 1)
        const newStart ={
            ...startColumn,
            taskIds: startTaskIds
        }
        
        const finishTaskIds = Array.from(finishColumn.taskIds)
        finishTaskIds.splice(destination.index, 0, draggableId)
        const newFinish={
            ...finishColumn,
            taskIds: finishTaskIds
        }
        
        const newState = {
            ...this.state,
            columns:{
                ...this.state.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish
            }
        }
        
        this.setState(newState);

        // The current onDragEnd does not update the state
        // on the database or server side
        // in order to do so, use redux thunk function to update the backend.
    }


   

    public render() {
        return (
            <div>
              {/* <HorizontalMenu /> */}


                <DragDropContext
                // onDragStart= {this.onDragStart}
                // onDragUpdate = {this.onDragUpdate}
                onDragEnd={this.onDragEnd}
                >
                    <DDContainer>
                            {this.state.columnOrder.map((columnId,i) =>{
                        const column = this.state.columns[columnId];
                        const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

                        // const isDropDisabled = i < this.state.columnOrder.indexOf(columnId); // homeIndex

                        return <Column key={i} column={column} tasks={tasks}  />
                    })}
                    </DDContainer>
                </DragDropContext>
              {/* <VerticalMenu /> */}
              <WPHorizontalMenu />

            </div>


        )
       
    }
}


export default Dnd;