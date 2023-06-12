import React from "react";
import { blogPosts } from "./BlogPostsContent";
import { Link } from "react-router-dom";

interface BlogPageProps {
  selectedId: string;
  blog_title: string;
  image: string;
  description: string;
  date: string;
}

const BlogCard: React.FC<BlogPageProps> = ({
  selectedId,
  blog_title,
  image,
  description,
  date,
}) => {
  const selectedPost = blogPosts.find((post) => post.id === selectedId);

  if (!selectedPost) {
    return <div>Post not found!</div>;
  } else {
    return (
      <>
        <Link to={`/blog/${selectedPost.id}`}>
          <div className="mx-auto" key={selectedPost.id}>
            <div className="relative group text-white">
              <div className="absolute -inset-1 bg-gradient-to-r from-secondaryColor_lilac to-secondaryColor_purple rounded-3xl blur opacity-25"></div>
              <div className="relative group px-7 py-6">
                <div
                  className="absolute -inset-1 bg-cover brightness-75 bg-center bg-no-repeat ring-1 ring-gray-900/5 rounded-3xl leading-none flex items-top justify-start space-x-6"
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
                <div className="relative group whitespace-wrap font-manrope space-y-2 grid grid-cols-1 lg:grid-cols-2 items-start py-5 gap-5">
                  <div className="col-span-1 flex flex-col ml-0 lg:ml-10 gap-6">
                    <div className="flex flex-row justify-between">
                      <h1 className="font-bold">{blog_title}</h1>
                      <span>{date}</span>
                    </div>
                    <p>{description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </>
    );
  }
};

export default BlogCard;
