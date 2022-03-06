// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle


// Exercise
// const smallBox = <div className='box box--small' style={{ backgroundColor: 'lightblue', fontStyle: 'italic' }}>small lightblue box</div>
// const mediumBox = <div className='box box--medium' style={{ backgroundColor: 'pink', fontStyle: 'italic' }}>medium pink box</div>
// const largeBox = <div className='box box--large' style={{ backgroundColor: 'orange', fontStyle: 'italic' }}>large orange box</div>

// function App() {
//   return (
//     <div>
//       {smallBox}
//       {mediumBox}
//       {largeBox}
//     </div>
//   )
// }


// Extra 1
// See the tutorial to give a default value to className
// const Box = ({ className, style, ...other }) => (
//   <div 
//     className={`box ${className}`} 
//     style={{
//       fontStyle: 'italic', // Good convention: put the default in front
//       ...style
//     }}
//     {...other} /> // Note, other also includes children
// )

// function App() {
//   return (
//     <div>
//       <Box className="box--small" style={{ backgroundColor: 'lightblue' }}>
//         small lightblue box
//       </Box>
//       <Box className='box--medium' style={{ backgroundColor: 'pink' }}>
//         medium pink box
//       </Box>
//       <Box className='box--large' style={{ backgroundColor: 'orange' }}>
//         large orange box
//       </Box>
//     </div>
//   )
// }


// Extra 2
const Box = ({ size, style, ...other }) => {
  // The tutorial has a better solution to define the size class
  const className = size === 'small'
    ? 'box--small'
    : size === 'medium'
      ? 'box--medium'
      : 'box--large'
  
  return (
    <div 
      className={`box ${className}`} 
      style={{
        fontStyle: 'italic',
        ...style
      }}
      {...other} />
  )
}

function App() {
  return (
    <div>
      <Box size="small" style={{ backgroundColor: 'lightblue' }}>
        small lightblue box
      </Box>
      <Box size='medium' style={{ backgroundColor: 'pink' }}>
        medium pink box
      </Box>
      <Box size='large' style={{ backgroundColor: 'orange' }}>
        large orange box
      </Box>
    </div>
  )
}

export default App
