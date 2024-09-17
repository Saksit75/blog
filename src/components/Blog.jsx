import { Link } from "react-router-dom";
import blog from "../assets/blog.js";
import { useState, useEffect } from "react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBlog, setFilteredBlog] = useState(blog);
  useEffect(() => {
    const result = blog.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
    setFilteredBlog(result);
    
  },[searchTerm]);
  return (
    <>
      <div className="container mx-auto py-6">
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="text-2xl font-bold font-sans">Blog</p>
          <label className="input input-bordered flex items-center gap-2 w-1/2">
            <input
              type="text"
              className="grow"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {filteredBlog.map((item) => (
              <Link to={`/blog/${item.id}`} key={item.id}>
                <div className="card card-compact bg-base-100 w-full  shadow-xl">
                  <figure>
                    <img
                      className="h-[200px] object-cover"
                      src={item.image_url}
                      alt=""
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{item.title}</h2>
                    <p className="line-clamp-2">{item.content}</p>
                    <div className="card-actions justify-end">
                      <div className="btn btn-primary text-black btn-xs glass">
                        {item.author}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </article>
        </div>
      </div>
    </>
  );
};

export default Blog;
