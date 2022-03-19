// Rendering Lists
// http://localhost:3000/isolated/exercise/07.js

import * as React from 'react'

const allItems = [
  {id: 'apple', value: '🍎 apple'},
  {id: 'orange', value: '🍊 orange'},
  {id: 'grape', value: '🍇 grape'},
  {id: 'pear', value: '🍐 pear'},
]

function App() {
  const [items, setItems] = React.useState(allItems)

  function addItem() {
    const itemIds = items.map(i => i.id)
    setItems([...items, allItems.find(i => !itemIds.includes(i.id))])
  }

  function removeItem(item) {
    setItems(items.filter(i => i.id !== item.id))
  }

  return (
    <div className="keys">
      <button disabled={items.length >= allItems.length} onClick={addItem}>
        add item
      </button>
      <ul style={{listStyle: 'none', paddingLeft: 0}}>
        {items.map(item => (
          // 🐨 add a key prop to the <li> below. Set it to item.id
          <li key={item.id}>
            <button onClick={() => removeItem(item)}>remove</button>{' '}
            <label htmlFor={`${item.id}-input`}>{item.value}</label>{' '}
            <input id={`${item.id}-input`} defaultValue={item.value} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App

// Personal review

// The problem without 'key' in this exercise is caused by 'defaultValue'. This value is created when the DOM is initialized and is only assigned as the input default value when the input has no initial value. After this phase, the defaultValue will have no any bonds to the input value. The value will be completely controlled by DOM itself. 

// Because the React state in this exercise only controls the defaultValue but not value, how the value will go after initialization is absolutely out of state control.

// If state controls input 'value' directly, even without key, there won't be the problem like above. But it doesn't mean the problem is solved. On the contrary, the problem will persist on other element properties or methods controlled by DOM but not state, such as 
// focus: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus
// and 
// select: https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select
// methods in the extra demo exercise.

// BTW, we can see the input 'value' is controlled by state directly in the extra demo exercise. So the problem here in this exercise won't occur there.

// We can also conclude that React re-rendering is dynamic DOM modification. It won't remove all the elements on the page and create them from scrath again, but update the change on the existing ones.

// If we modify the value as follows
// apple1111
// orange2222
// grape3333
// pear4444
// and remove grape3333,
// grape3333 will be left but pear4444 is gone.

// The same happens if we remove orange2222, we will see orange2222 and grape3333 left but pear4444 is gone again.

// What happened can only be that React controls the DOM to delete the last list element and update other three since React has no ideas which one is actually deleted since no unique identity for each list. 'key' here is just for this reason, building up a unique identity for each list connected with . Then React can know which one is the deleted one.

// The array index as key cannot solve this problem, but just suppresses it, since it still doesn't build a connection between array members in state and list elements in DOM. But it is interesting that the id from the array memeber can be identical with array index but still work fine to solve the proble. That means the key value is not important, but the reference from the state to the list.

// Note, id must be unique. It will be a little confused if the connection is built on reference. But anyway, React doesn't like it.

// In some cases, we can use array index if the list element doesn't need to worry avout DOM controlled status.