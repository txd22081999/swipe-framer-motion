import React, { useState, Children, useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import { Card } from './card'

// basic default styles for container
const Frame = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const Stack = ({ onVote, triggerId, children, ...props }) => {
  const [stack, setStack] = useState(Children.toArray(children))
  const parentRef = useRef(null)
  console.log(triggerId)

  // return new array with last item removed
  const pop = (array) => {
    return array.filter((_, index) => {
      return index < array.length - 1
    })
  }

  const handleVote = (item, vote) => {
    // update the stack
    let newStack = pop(stack)
    setStack(newStack)

    // run function from onVote prop, passing the current item and value of vote
    onVote(item, vote)
  }

  return (
    <>
      <Frame {...props} ref={parentRef}>
        {stack.map((item, index) => {
          let isTop = index === stack.length - 1
          return (
            <Card
              drag={isTop} // Only top card is draggable
              key={item.key || index}
              onVote={(result) => handleVote(item, result)}
              cardId={item.props.id}
              triggerId={triggerId}
              parentRef={parentRef}
            >
              {item}
            </Card>
          )
        })}
      </Frame>
    </>
  )
}
