import React from 'react'

const TabButton = ({ active, selectTab, icon: Icon, children }) => {

    const buttonClasses = active
        ? "text-white border-purple-500"
        : "text-[#ADB7BE] border-transparent hover:text-white hover:border-[#33353F]"

  return (
    <button
        onClick={selectTab}
        className={`flex items-center gap-2 pb-3 border-b-2 font-semibold transition-colors duration-200 ${buttonClasses}`}
    >
        {Icon && <Icon className="h-5 w-5" />}
        {children}
    </button>
  )
}

export default TabButton