import { useRef, useState } from "react";
import styled from "styled-components";

export default function AppTodos() {
  /*----------------------- headaer ------------------------- */
  /* 날짜 */
  const dateStr = new Date().toLocaleDateString("ko-KR", {
    dateStyle: "full",
  });

  /* todo input 값 */
  const [text, setText] = useState("");
  const inputRef = useRef(null);
  const [edit, setEdit] = useState(false);

  /* ------------------ form submit 이벤트 -------------------- */
  const handleSubmit = (e) => {
    e.preventDefault();
    // todo리스트 추가해주기
    AddTodo({ id: Date.now(), text: text, done: false });
    inputRef.current.focus();
    console.log(text);
    setText("");
  };

  /* ----------------- input 값 가져오기 -------------------- */
  const handleInput = (e) => {
    setText(e.target.value);
    setEdit(true);
    //console.log(text); // 테스트
  };
  /*   const handleEdit = () => {
    setEdit(true);
  }; */
  /* ---------------- 리스트 추가하기  -------------------- */
  const [todos, setTodos] = useState([]);

  const AddTodo = (todo) => {
    if (todo.text.trim().length === 0) {
      return;
    }
    setTodos([...todos, todo]);
  };
  /* ---------------리스트 삭제하기 ----------------------- */
  function handleDeleteBtn(todo) {
    setTodos(todos.filter((item) => item.id !== todo.id));
  }

  /*--------------- todo 완료 미완료 ------------------------ */
  //
  /* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!todoList 완료 처리!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
  const handleDone = (todo) => {
    setTodos(
      todos.map((item) =>
        item.id === todo.id ? { ...item, done: !item.done } : item
      )
    );
  };

  return (
    <Container>
      <Header>
        <h2>{dateStr}</h2>
        <p>해야할 일 : {todos.length} 개</p>
      </Header>
      <Ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id} done={todo.done}>
              <span
                style={{ textDecoration: todo.done && "line-through" }}
                onClick={() => handleDone(todo)}
              >
                {todo.text}
              </span>
              <button onClick={() => handleDeleteBtn(todo)}>삭제</button>
            </li>
          );
        })}
      </Ul>
      <Form onSubmit={handleSubmit}>
        {edit && (
          <input
            value={text}
            type="text"
            placeholder="해야할 일을 입력해주세요."
            onChange={handleInput}
            ref={inputRef}
            autoFocus
          />
        )}
        <div>
          <button onClick={() => setEdit(true)}>
            {edit ? "Submit" : "Add"}
          </button>
        </div>
      </Form>
    </Container>
  );
}

/* 스타일 */

/* 헤더 ------------------------------ */

const Container = styled.div`
  flex-direction: column;
  display: flex;
  position: relative;
  margin: 0 auto;
  width: 350px;
  height: 700px;
  border: 1px solid #000;
  border-radius: 8px;
`;

const Header = styled.header`
  padding: 20px 10px;
  border-bottom: 1px solid #000;

  h2 {
    margin: 0;
  }
  p {
    color: #888888;
    font-size: 12px;
    font-weight: 700;
    margin-top: 10px;
    margin-bottom: 0px;
  }
`;

/* ------------- -리스트 ---------------- */
const Ul = styled.ul`
  margin: 0px;
  padding: 0px;
  list-style: none;
  li {
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
    border-bottom: 1px solid #000;
  }
  span {
  }

  button {
    padding: 5px 10px;
    background-color: #ff0000;
    opacity: 50%;
    border: none;
    border-radius: 4px;
    text-decoration: none;
  }
  button:hover {
    opacity: 1;
  }
`;

/* --------------- 폼 ------------------- */
const Form = styled.form`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  input {
    outline: none;
    box-sizing: border-box;
    width: 330px;
  }

  div {
    border-top: 1px solid #000;
    padding: 5px 10px;
  }
  button {
    width: 100%;

    height: 25px;
    background-color: #1d87ff;
    opacity: 50%;
    border: none;
    border-radius: 4px;
  }

  button:hover {
    opacity: 100%;
  }
`;
