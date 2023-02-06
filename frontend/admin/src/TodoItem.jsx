import { useState } from 'react';
const styles = {
  check: {
    marginRight: 15,
  },
  editingInput: {
    width: '100%',
    padding: '5px 20px',
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
};

export default function TodoItem({ todo, index, onCheck, onRemove }) {
  let clicks = 0;
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(todo.value);

  const handleTextClick = () => {
    if (!editing) {
      clicks++;
      if (clicks === 2) {
        setEditing(true);
      }
    }
  };

  if (editing)
    return (
      <input
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            setEditing(false);
            clicks = 0;
          }
        }}
        style={styles.editingInput}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    );

  return (
    <>
      <div>
        <input
          type="checkbox"
          style={styles.check}
          checked={todo.checked}
          onChange={() => {
            onCheck(index);
          }}
        />
        <span onClick={handleTextClick} style={{ textDecoration: todo.checked ? 'line-through' : '' }}>
          {value}
        </span>
      </div>
      <div
        onClick={() => {
          onRemove(index);
        }}
      >
        🗑️
      </div>
    </>
  );
}
