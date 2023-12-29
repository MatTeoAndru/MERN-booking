import { Link } from "react-router-dom";

export default function IndexPage() {
    return (
        <div>
      <header className='p-4 flex justify-between'>
        <a href="" className='flex items-center gap-1'> 
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
        <span className='font-bold text-xl '>Progetto</span>
        </a>
        <div className='flex gap-2 border border-gray-300 round-full py-2 px-4 shadow-md shadow-gray-300'>
          <div>Anywhere </div>
          <div className='border-l border-gray-300'></div>
          <div>Any week </div>
          <div className='border-l border-gray-300'></div>
          <div>Addd guests </div>
          <div className='border-l border-gray-300'></div>
          <button className='bg-primary text-white p-2 rounded-full'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          </button>
        </div>
        <Link to={"/login"}className='flex items-center gap-2 border border-gray-300 round-full py-2 px-4'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <div className='bg-gray-500 text-white border border-gray-500 overflow-hidden'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 relative top-1"   fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        </div>
        </Link>
      </header>
    </div>
    );
}