import React from 'react'

import IconButton from '../../components/iconButton'

export default props => {
    
    const keyHandler = (event)=>{
        if(event.key === 'Enter' ) props.handleAdd()
    }

    return (
        <div role="form" className="row mrg-b">
            <div className="col-xs-12 col-sm-9 col-md-11" >
                <input id="description" className="form-control" placeholder="Adicione uma tarefa" value={ props.description } onChange={ props.handleChange } onKeyUp={ keyHandler }></input>
            </div>
            <div className="col-xs-12 col-sm-3 col-md-1">
                <IconButton style="info" icon="plus" onClick={ props.handleAdd }></IconButton>
            </div>
        </div>
    )
}