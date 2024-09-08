import { useState } from 'react';

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div className="w-screen h-screen duration-75" style={{ backgroundColor: color }}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-9 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button onClick={() => setColor("red")} className='outline-none py-1 rounded-full text-white shadow-lg px-4' style={{ backgroundColor: "red" }}>Red</button>
            <button onClick={() => setColor("green")} className='outline-none py-1 rounded-full text-white shadow-lg px-4' style={{ backgroundColor: "green" }}>Green</button>
            <button onClick={() => setColor("blue")} className='outline-none py-1 rounded-full text-white shadow-lg px-4' style={{ backgroundColor: "blue" }}>Blue</button>
            <button onClick={() => setColor("black")} className='outline-none py-1 rounded-full text-white shadow-lg px-4' style={{ backgroundColor: "black" }}>Black</button>
            <button onClick={() => setColor("pink")} className='outline-none py-1 rounded-full text-white shadow-lg px-4' style={{ backgroundColor: "pink" }}>Pink</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
// import { useState } from 'react';

// function App() {
//   const [color, setColor] = useState("olive");

//   const colors = [
//     { name: 'Red', value: 'red' },
//     { name: 'Green', value: 'green' },
//     { name: 'Blue', value: 'blue' },
//     { name: 'Black', value: 'black' },
//     { name: 'Pink', value: 'pink' },
//     { name: 'Yellow', value: 'yellow' },
//     { name: 'Purple', value: 'purple' },
//     { name: 'Orange', value: 'orange' },
//     { name: 'Brown', value: 'brown' },
//     { name: 'Gray', value: 'gray' },
//   ];

//   return (
//     <>
//       <div className="w-screen h-screen" style={{ backgroundColor: color }}>
       
//         <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
//           <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
//             {colors.map((col) => (
//               <button key={col.value} onClick={() => setColor(col.value)}
//                 className='outline-none py-1 rounded-full text-white shadow-lg px-4'
//                 style={{ backgroundColor: col.value }} >
//                 {col.name}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
