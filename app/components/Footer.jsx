import React from 'react'

const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
        <div className="container p-12 flex justify-between">
            {/* <span>Portfolio</span> */}
            <p className="text-slate-600">Built with Next.js</p>
            <p className="text-slate-600">View the source code <a 
                href="https://github.com/Shardul2003/Portfolio-Website" 
                className="font-bold text-decoration-line: underline ">here
              </a>
            </p>
        </div>
    </footer>
  )
}

export default Footer;