import React, {ChangeEvent, KeyboardEvent, useCallback, useState} from 'react';
import './TodoEditor.scoped.scss';
import {Todo} from "@store/todo/TodoType";
import {useDispatch} from 'react-redux';
import {addTodo, resetTodo} from '@store/todo/TodoAction';

const TodoEditor: React.FC = () => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState<string>('');

  const addItem = useCallback(() => {
    const newTodo: Todo = {
      key: Date.now(),
      text: inputText
    };
    dispatch(addTodo(newTodo));
    setInputText('');
  }, [inputText, dispatch]);

  const handleText = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  }, []);

  const handleEnter = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    if (inputText && e.keyCode === 13) {
      addItem();
    }
  }, [addItem, inputText]);

  return (
      <div className="todoEditor">
        <input
            type='text'
            placeholder='Enter task'
            onChange={handleText}
            onKeyDown={handleEnter}
            value={inputText}
        />
        <button onClick={() => addItem()}>
          add
        </button>

        <button onClick={() => dispatch(resetTodo())}>
          reset
        </button>
      </div>
  );
};

export default TodoEditor;
