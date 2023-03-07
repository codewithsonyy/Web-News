
import React from "react";

const NewsItem=(props)=> {
  
    let { title, description, imageUrl, newsUrl, author, date } = props;
    return (
      <div>
        <div className="max-w-full sm:overflow-hidden bg-white rounded-lg border  border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="/">
            <img
              className="rounded-t-lg "
              src={
                !imageUrl
                  ? "https://ichef.bbci.co.uk/news/1024/branded_news/6B90/production/_127063572_ss22_lpu_rpt-02_sol_nightgrey_story04_env_02.jpg"
                  : imageUrl
              }
              alt=""
            />
          </a>
          <div className="p-5">
          <p className="text-gray-400 text-sm">By {!author? "Unknown": author} on {new Date(date).toGMTString()}</p>
            <a href="/">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
              </h5>
            </a>
            <p className="mb-3 font-normal sm:h-9   text-gray-700 dark:text-gray-400">
              {description}
            </p>
           
            <a
              href={newsUrl}
              target="_blank"
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                aria-hidden="true"
                className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
