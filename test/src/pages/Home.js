import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBucket, loadBucketFB } from "../redux/modules/bucket";
import styled from "styled-components";
import { Link } from "react-router-dom";


function App() {
  const my_lists = useSelector((state) => state.bucket.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBucketFB());
  }, []);
  
  console.log(my_lists)



  return (
    <div className="App">
      <Cards>
        {my_lists.map(voca =>
          <Card key={voca.id}>
            <Title>{voca.voca}</Title>
            <p>{voca.description}</p>
            <Caption>{voca.example}</Caption>
          </Card>
        )}
      </Cards>
      <Link to="/add">
          <AddBtn>
            +
          </AddBtn>
      </Link>
    </div>
  );
}

const sizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
};

const Cards = styled.ul`
  display: flex;
  flex-direction: row;
  display: grid;
  column-gap: 20px;
  row-gap: 20px;
  grid-template-columns: auto;
  padding: 0;

  @media ${devices.tablet} {
    grid-template-columns: auto auto auto;
  }  
`;

const Card = styled.li`
  flex: 1;
  border: 1px solid black;
  list-style: none;
  padding: 20px;
`;

const Title = styled.h5`
  font-size: 24px;
`;

const Caption = styled.p`
  color: blue;
`;

const AddBtn = styled.button`
  background-color: red;
  color: white;
`;

export default App;