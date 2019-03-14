import React, { Component } from 'react'

import PageHeader from '../../components/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component {

    constructor(props){
        super(props)

        this.state = { description: '', list: [] }

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleSetAsDone = this.handleSetAsDone.bind(this)
        this.handleSetAsPending = this.handleSetAsPending.bind(this)

        this.refresh()
    }

    handleChange(event){
        this.setState( { ...this.state, description:  event.target.value } ) 
    }

    refresh(){ }

    handleAdd(){ }

    handleDelete(todo){ }

    handleSetAsDone(todo){ }

    handleSetAsPending(todo){ }


    render(){
        return (
            <div>
               <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
               <TodoForm description={ this.state.description } handleAdd={ this.handleAdd } handleChange={ this.handleChange }></TodoForm>
               <TodoList list={ this.state.list } handleDelete={ this.handleDelete } handleSetAsDone={ this.handleSetAsDone } handleSetAsPending={ this.handleSetAsPending }></TodoList>
            </div>
        )
    }
}
