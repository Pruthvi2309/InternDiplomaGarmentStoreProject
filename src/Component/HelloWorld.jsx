import React from 'react'
import styled from 'styled-components'

const HelloWorld = () => {
  return (
    <Wrapper>
    <div>
      <h1> Hello World</h1>
    </div>
    </Wrapper>
  )
}

const Wrapper=styled.div`
h1{
    color:red;
}`;

export default HelloWorld
