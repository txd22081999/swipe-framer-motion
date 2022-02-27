import React, { useState } from 'react'
import './styles.css'
import { Stack } from './components/stack'
import styled from '@emotion/styled'

export default function App() {
  const [triggerId, setTriggerId] = useState(0)
  const Wrapper = styled(Stack)`
    background: #1f2937;
  `

  const Item = styled.div`
    background: #f9fafb;
    width: 200px;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 80px;
    text-shadow: 0 10px 10px #d1d5db;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    /* transform: ${() => {
      let rotation = Math.random() * (5 - -5) + -5
      return `rotate(${rotation}deg)`
    }}; */
  `

  function triggerSwipe(id) {
    setTriggerId(id)
  }

  return (
    <div className='App'>
      <Wrapper
        onVote={(item, vote) => console.log(item.props, vote)}
        triggerId={triggerId}
      >
        <Item id='1' data-value='waffles' whileTap={{ scale: 1.15 }}>
          🧇
        </Item>
        <Item id='2' data-value='pancakes' whileTap={{ scale: 1.15 }}>
          🥞
        </Item>
        <Item id='3' data-value='donuts' whileTap={{ scale: 1.15 }}>
          🍩
        </Item>
      </Wrapper>
      <button onClick={() => triggerSwipe('1')}>Trigger</button>
    </div>
  )
}
