// components/ResumeCard.js
import React from 'react';

const Resume = () => {
  return (
    <div
      className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse w-64 h-24"
    >
      <a download href="./resume.pdf" className="w-full sm:w-auto bg-slate-800 hover:border-purple-500 focus:ring-4 focus:outline-none focus:ring-purple-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5">
        <div className="mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
        </svg>
        </div>
        <div>

            <div className="text-lg font-semibold">Resume</div>
            {/* <div className="text-sm">website.com/resume</div> */}
        
        </div>
      </a>
    </div>
  );
};

export default Resume;
