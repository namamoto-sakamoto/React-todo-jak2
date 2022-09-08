import React from "react";

export const CompleteTodos = (props) => {
    const {todo, onClickBack} = props;
    return (
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          <li>
            {todo.map((todo, index) => {
              return (
                <div key={todo} className="list-row">
                  <p>{todo}</p>
                  <button onClick={() => onClickBack(index)}>戻す</button>
                </div>
              );  
            })}  
          </li>
        </ul>
      </div>  
    );
}