import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className='footer'>
        <p>&copy; {currentYear} Copyright: NovaTask</p>
    </div>
  )
}

export default Footer
