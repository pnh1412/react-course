import React from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

function CommentList() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [comments, setCommnets] = React.useState([]);
  const [page, setPage] = React.useState(Number(searchParams.get("page")) || 1);

  React.useEffect(() => {
    async function fetchComments() {
      const res = await fetch(`https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=3`);
      const data = await res.json();
      setCommnets(data);
      
      // initialize query string
      navigate(`${location.pathname}?page=${page}`)
    }
    fetchComments();
  }, [page])

  function gotoDetail(commentId) {
    navigate(`/comment/${commentId}`)
  }

  function gotoPrevious() {
    if(page === 1) return;
    if(page <= 3) {
      setPage(prevState => prevState - 1)
    }
  }
  function gotoNext() {
    if(page === 3) return;
    if(page >= 1) {
      setPage(prevState => prevState + 1)
    }
  }
  function changePage(page) {
    setPage(page);
  }

  return (
    <div>
      {comments.map(comment => {
        return (
          <div key={comment.id} className='rounded-sm w-full grid grid-cols-12 mb-4 bg-white shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform'>
            <div className="col-span-12 md:col-span-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="#2563eb">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
              </svg>
            </div>
            <div className="col-span-11 xl:-ml-5">
              <p className="text-blue-600 font-semibold">{comment.name}</p>
            </div>
            
            <div className="md:col-start-2 col-span-11 xl:-ml-5">
              <p className="text-sm text-gray-800 font-light">{comment.body}</p>
            </div>
            <div className='md:col-start-2 col-span-11 xl:-ml-5 text-right'>
              <button 
                type="button" 
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                onClick={() => gotoDetail(comment.id)}
              >
                View detail
              </button>
            </div>
            
          </div>
        )
      })}

    <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
      <div>
        <p class="text-sm text-gray-700">
          Showing {' '}
          <span class="font-medium">1</span>  {' '}
          to  {' '}
          <span class="font-medium">10</span>  {' '}
          of  {' '}
          <span class="font-medium">97</span>  {' '}
          results
        </p>
      </div>
      <div>
        <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
          <button 
            class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            onClick={gotoPrevious}
          >
            <span class="sr-only">Previous</span>
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
            </svg>
          </button>
          {/* bg-indigo-600 text-white */}
          <button 
            onClick={() => changePage(1)} 
            class={`relative inline-flex items-center  px-4 py-2 text-sm font-semibold ${page === 1 ? "text-white bg-indigo-600" : "ring-1 ring-inset ring-gray-300"} `}
          >
            1
          </button>
          <button 
            onClick={() => changePage(2)}
            class={`relative inline-flex items-center  px-4 py-2 text-sm font-semibold ${page === 2 ? "text-white bg-indigo-600" : "ring-1 ring-inset ring-gray-300"} `} 
            >
            2
          </button>
          <button 
            onClick={() => changePage(3)} 
            class={`relative inline-flex items-center  px-4 py-2 text-sm font-semibold ${page === 3 ? "text-white bg-indigo-600" : "ring-1 ring-inset ring-gray-300"} `}
            >
            3
          </button>
          <button onClick={gotoNext} class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
            <span class="sr-only">Next</span>
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
            </svg>
          </button>
        </nav>
      </div>
      </div>
      
    </div>
  )
}

export default CommentList