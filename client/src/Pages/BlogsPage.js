import React from 'react';
import Blogs from '../Components/Blogs';
import Title from "../Components/Title"


function BlogsPage() {
  return (
    <div className="blogsPage" >

      <div className="blogsPage__blog-title" >
        <Title title={"My Blogs"} span={"My Blogs"} />
      </div>

      <div className="blogsPage__blog"  >
        {Blogs.map((blog) => {
          return (
            <div className="blogsPage__content-item" key={blog.id} >
              <img className="blogsPage__content-image" src={blog.image} alt="" />
              <div className="blogsPage__link-title-container" >
                <a href={blog.link} className="blogsPage__content-link-title" >{blog.title}</a>
              </div>
              <div className="blogsPage__date-container" ></div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default BlogsPage;
