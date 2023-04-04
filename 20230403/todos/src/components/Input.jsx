import { useState } from "react";

export default function Input() {
  const [text, setText] = useState("");

  /* form submit 이벤트  */
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  /* input 값 가져오기 */
  const handleInput = (e) => {
    setText(e.target.value);
    console.log(text); // 테스트
  };
  /* // btn 클릭 이벤트
  const handlebtnClick = (e) => {
    e.target.innerText = "Submit";
  }; */

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="해야할 일을 입력해주세요."
          onChange={handleInput}
        />
        <div>
          <button /* onClick={handlebtnClick} */>Add</button>
        </div>
      </form>
    </>
  );
}
