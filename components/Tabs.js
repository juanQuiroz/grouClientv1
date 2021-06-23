import React from 'react'

const Tabs = () => {
    return (
        <div className="bg-gray-200 m-2 rounded-lg h-9">
        <nav className="flex flex-col sm:flex-row justify-center items-between h-9 ">
            
            <button className="shadow text-gray-900 font-bold m-1 flex-grow bg-gray-100 rounded-lg   px-3 focus:outline-none">
                Tab 1
            </button>
            <button className="m-1 flex-grow bg-gray-200 rounded-lg text-gray-600 px-3  focus:outline-none">
                Tab 2
            </button>
        </nav>
    </div>
    )
}

export default Tabs
