// import React from 'react'

// function Button() {
//   return (
//     <div>
//         <button className='border border-red-900'>
//             Hello
//         </button>
//     </div>
//   )
// }

// export default Button

import React from 'react';

const Button = ({ text , onClick }) => {
  return <button   onClick={onClick} >{text}</button>;
};

export default Button;