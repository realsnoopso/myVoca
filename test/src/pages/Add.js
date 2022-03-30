import { useRef } from "react";

function Add() {
  const refVoca = useRef('단어를 입력');
  const refDescription = useRef('설명을 입력');
  const refExample = useRef('예시를 입력');
  return (
    <div className="Add">
      <div>
        <label for="voca">단어</label>
        <input type="text" id="voca" ref={refVoca}/>
      </div>
      <div>
        <label for="description">설명</label>
        <input type="text" id="description" ref={refDescription}/>
      </div>
      <div>
        <label for="example">예시</label>
        <input type="text" id="example" ref={refExample}/>
      </div>
      <button>추가하기</button>
    </div>
  );
}

export default Add;