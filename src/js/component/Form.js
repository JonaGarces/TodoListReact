import React from "react";


const Form = ({ setInputText, setTodos, todos, inputText,setStatus }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    if(inputText == ''){
      alert('Introduce tu tarea')
    }else
    {setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);}
    setInputText("");
  };

  return (
    <>
      <form>
        <input
          placeholder="¿Qué hay que hacer?"
          value={inputText}
          onChange={inputTextHandler}
          type="text"
          className="todo-input"
        />
        <button
          onClick={submitTodoHandler}
          className="todo-button"
          type="submit"
        >
          <i className="fas fa-plus-square"></i>
        </button>
      </form>
    </>
  );
};

export default Form;
