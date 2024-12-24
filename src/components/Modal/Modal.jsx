import React from 'react'

const Modal = ({isOpen, onClose}) => {
    const handleLogin = (event) => {
        event.preventDefault(); // Prevent form submission
        onClose(); // Close the modal and update login state
      };
  return (
    <div className={`fixed top-28 left-0 w-full h-full flex item-center justify-center ${isOpen ? "" : "hidden"}`}>
        <div className='modal-container'>
            <div className='bg-purple-800 text-center p-5 h-96 lg:w-[500px] rounded shadow-md'>
                {/*Modal Content */}
                <h2 className='text-xl font-semibold mb-5 mt-6 uppercase'>Please Login Here!</h2>
                <form className='px-4'>
                    {/*Email */}
                    <div className='mb-4'>
                        <input type="email" name='email' placeholder='example@gmail.com' className='w-full rounded-md border border-purple-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-600 focus:shadow-md'/>
                    </div>
                     {/*password */}
                     <div className='mb-4'>
                        <input type="password" name='password' placeholder='Enter a password' className='w-full rounded-md border border-purple-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-600 focus:shadow-md'/>
                    </div>
                    <div>
                        <button onClick={handleLogin} className='hover:shadow-md rounded-md bg-purple-900 hover:bg-purple-400 py-3 px-8 text-base font-semibold text-white' type='button'>Login</button>
                    </div>
                </form>

                {/* Modal Close btn */}
                <button onClick={onClose} className='bg-gray-300 hover:bg-gray-500 text-gray-800 font-semibold py-2 px-8 rounded inline-flex items-center mt-8'>Close</button>
            </div>
        </div>
    </div>
  )
}

export default Modal