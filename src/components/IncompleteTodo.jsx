import React from "react";

export const IncompleteTodos = (props) => {
    const {todo, onClickComplete, onClickDelete} = props;
    return (
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          <li>
            {todo.map((todo, index) => {
              return(
                <div key={todo} className="list-row">  
                  <p>{todo}</p>
                  <button onClick={() => onClickComplete(index)}>完了</button>
                  <button onClick={() => onClickDelete(index)}>削除</button>
                </div>  
              );  
            })}  
          </li>
        </ul>
      </div>
    );
}