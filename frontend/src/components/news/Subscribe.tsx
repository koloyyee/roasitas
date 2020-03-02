import React from 'react';

interface state{
    name: string
    email: string
}

class Subscribe extends React.Component<{},state>{
    constructor(props:any){
        super(props);
        this.state = {
            name: '',
            email: ''
        }
    }

    private nameOnChange =(event:React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({
            name: event.currentTarget.value
        })
    }
    private emailOnChange =(event:React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({
            email: event.currentTarget.value
        })
    }
    private onSubmit=(event:React.MouseEvent<HTMLFormElement>)=>{
        alert('Thank You For Subscribing!')
        event.preventDefault();
        this.setState({
            name: '',
            email: ""
        })
    }



    public render(){
        return(
            <form onSubmit = {this.onSubmit}>
                <label> Name </label>
                <input ref="name" value = {this.state.name} onChange={this.nameOnChange}/>
                <label> Email </label>
                <input ref="email" value = {this.state.email} onChange={this.emailOnChange}/>
                <input type='submit' value = "Subscribe"/>
            </form>
        )
    }
}

export default Subscribe