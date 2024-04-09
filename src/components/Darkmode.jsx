// import React, { useState, useEffect } from 'react';
// import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs';

// export default function DarkModeToggle() {
//   const [isLightMode, setIsLightMode] = useState(true);

//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme === 'dark') {
//       setIsLightMode(false);
//     }
//   }, []);

//   const toggleMode = () => {
//     const newMode = !isLightMode;
//     setIsLightMode(newMode);
//     localStorage.setItem('theme', newMode ? 'light' : 'dark');
//     document.documentElement.classList.toggle('dark', !newMode);
//   };

//   return (
//     <div className='flex items-center text-base p-1 rounded ' onClick={toggleMode}>
//       {isLightMode ? (
//         <div className='w-10 h-10 grid place-items-center justify-center items-center rounded-full drop-shadow-lg shadow-gray-900 bg-white text-gray-700'>
//           <BsSunFill className='mr-1 ' />
//           {/* Light */}
//         </div>
//       ) : (
//         <div className='w-10 h-10 grid place-items-center justify-center items-center rounded-full drop-shadow-lg shadow-gray-900 bg-white text-gray-700'>
//           <BsMoonStarsFill className='mr-1' />
//           {/* Dark */}
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs';

export default function DarkModeToggle() {
  const [isLightMode, setIsLightMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsLightMode(false);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleMode = () => {
    const newMode = !isLightMode;
    setIsLightMode(newMode);
    localStorage.setItem('theme', newMode ? 'light' : 'dark');
    document.documentElement.classList.toggle('dark', !newMode);
  };

  return (
    <div className='flex items-center text-base p-1 rounded ' onClick={toggleMode}>
      {isLightMode ? (
        <div className='w-10 h-10 grid place-items-center justify-center items-center rounded-full drop-shadow-lg shadow-gray-900 bg-white text-gray-700'>
          <BsSunFill className='mr-1 ' />
          {/* Light */}
        </div>
      ) : (
        <div className='w-10 h-10 grid place-items-center justify-center items-center rounded-full drop-shadow-lg shadow-gray-900 bg-white text-gray-700'>
          <BsMoonStarsFill className='mr-1' />
          {/* Dark */}
        </div>
      )}
    </div>
  );
}
