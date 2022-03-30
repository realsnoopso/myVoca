import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { addBucketFB } from "../redux/modules/bucket";
import styled from "styled-components";



function Add() {
  const refVoca = useRef(null);
  const refDescription = useRef(null);
  const refExample = useRef(null);

  const my_lists = useSelector((state) => state.bucket.list);
  const dispatch = useDispatch();

  const addBucketList = () => { 
    console.log(typeof(refVoca.current.value), refVoca.current.value)
    if (refVoca.current.value === ""|| refDescription.current.value === "" || refExample.current.value === "") {
      alert('빈칸을 모두 입력하세요.');
    } else {
      dispatch(addBucketFB({ 
        voca: refVoca.current.value,
        description: refDescription.current.value,
        example: refExample.current.value,
        }));
      alert('단어 추가 완료!');
      window.location.href = "/";
    }
  };

  return (
    <div className="Add">
      <Form>
        <div>
          <Label for="voca">단어</Label>
          <Input type="text" id="voca" placeholder="ex) snoop" ref={refVoca}/>
        </div>
        <div>
          <Label for="description">설명</Label>
          <Input type="text" id="description" placeholder="단어에 대한 설명을 입력하세요." ref={refDescription}/>
        </div>
        <div>
          <Label for="example">예시</Label>
          <Input type="text" id="example" placeholder="사용되는 예시를 입력하세요." ref={refExample}/>
        </div>
        <AddBtn onClick={addBucketList}>추가하기</AddBtn>
      </Form>
    </div>
  );
}

const padding = '12px';

const Hover = `
  &:hover {
    opacity: 0.8
  }
`;

const Form = styled.div`
  max-width: 400px;
  margin: 0 auto;
  border: 1px solid rgba(255,255,255, 0.15);
  border-radius: 6px;
  background-color: black;
  padding: 48px;
`;

const Label = styled.label`
  width: 100%;
  margin-bottom: 4px;
  display: block;
  font-size: 11pt;
  opacity: 0.6;
`

const Input = styled.input`
  display: block;
  width: calc(100% - 16px);
  height: calc(1em + ${padding});
  padding: ${padding};
  font-size: 13pt;
  margin-bottom: 16px;
  background-color: rgba(255,255,255,0.1);
  border: none;
  border-radius: 4px;
  color: white;
  &::placeholder {
    opacity: 0.5;
  }
`;

const AddBtn = styled.button`
  background-color: blue;
  color: white;
  border: none;
  padding: 16px;
  width: 100%;
  border-radius: 24px;
  font-size: 12pt;
  margin-top: 24px;
  cursor: pointer;
  ${Hover}
`;


export default Add;