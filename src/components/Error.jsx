import { useState, useEffect } from "react"

const Error = ({children}) => {
  return (
    <div className="bg-gradient-to-r from-red-300 to-red-700 border border-red-600 text-white px-4 py-3 relative rounded-3xl" role="alert">
        <strong className="font-bold">Error:</strong>
        <span className="block sm:inline"> {children}</span>
    </div>
  )
}

export default Error