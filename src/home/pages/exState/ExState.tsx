import React, {useState} from 'react';
import './ExState.scss';

const ExState: React.FC = () => {
  const [count, setCount] = useState(0);
  const updateCount = (flag) => {
    if (flag === '+') {
      setCount(count + 1);
    } else if (flag === '-') {
      setCount(count - 1);
    }
  };
  const resetCount = () => setCount(0);

  return (
      <div className="exState">
        <b>Counter</b>

        <div className="content">
          <button onClick={() => updateCount('-')}>
            Minus
          </button>

          {count}

          <button onClick={() => updateCount('+')}>
            Plus
          </button>

          <button onClick={resetCount}>
            Reset
          </button>
        </div>
      </div>
  )
};

export default ExState;