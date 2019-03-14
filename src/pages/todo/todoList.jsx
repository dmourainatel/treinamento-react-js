import React from 'react'

import IconButton from '../../components/iconButton'

export default props => {

    const renderRows = ()=>{
        const list = props.list || []
        
        return list.map( (todo)=>(
            <tr key={todo._id}>
                <td className={ todo.done ? 'markedAsDone' : '' }>{todo.description}</td>
                <td className="btns-column">
                    <IconButton style="success" icon="check" onClick={ ()=> props.handleSetAsDone(todo) } hide={todo.done}></IconButton>
                    <IconButton style="warning" icon="undo" onClick={ ()=> props.handleSetAsPending(todo) } hide={ !todo.done }></IconButton>
                    <IconButton style="danger" icon="trash-o" onClick={ ()=> props.handleDelete(todo) }></IconButton>
                </td>
            </tr>
        ))
    }

    return (
        <table className="table table-dark table-hover">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                { renderRows() }
            </tbody>
        </table>
    )
}