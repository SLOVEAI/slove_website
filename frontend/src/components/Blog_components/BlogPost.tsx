import React from "react";
import { blogPosts } from "./BlogPostsContent";
import { HashLink as Link } from "react-router-hash-link";
import { useParams } from "react-router-dom";

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const selectedPost = blogPosts.find((post) => post.id === id);

  if (!selectedPost) {
    return (
      <React.Fragment key="undefined_post">
        <div className="">Not found!</div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment key={selectedPost.id}>
        <div>
          <div>
            <img
              src={selectedPost.blog_img}
              alt="hero_img"
              className="object-cover h-[25rem] sm:h-[35rem] w-full"
            />
          </div>

          <div className="flex flex-col items-center gap-5 mt-10">
            <section className="flex flex-row gap-5 text-secondaryColor_darkPurple">
              <h4>{selectedPost.blogAuthor}</h4>
              <h4>{selectedPost.blogDate}</h4>
              <h4>{selectedPost.blogTime}</h4>
            </section>

            <h1 className="font-clashDisplay tracking-wide text-[2rem] sm:text-[2.6rem] mx-[3rem] text-white">
              {selectedPost.blogTitle}
            </h1>

            <section className="flex flex-row flex-wrap justify-center mx-[2rem] gap-5">
              {selectedPost.tags.map((tag, i) => (
                <div
                  key={i}
                  className="border py-2 px-5 border-secondaryColor_purple rounded-xl"
                >
                  {tag}
                </div>
              ))}
            </section>

            <section className="flex-1 md:hidden grow py-4 px-7 border border-secondaryColor_purple rounded-xl">
              {selectedPost.sections.map((section, index) => (
                <ul
                  key={index}
                  className="text-left text-sm w-auto text-secondaryColor_lilac"
                >
                  <Link smooth to={"#" + section.header}>
                    <li className="hover:text-secondaryColor_darkPurple transition ease-in-out cursor-pointer mb-2">
                      {section.header}
                    </li>
                  </Link>
                </ul>
              ))}
            </section>
          </div>

          <div className="flex mx-[3rem] gap-[4rem] mt-10">
            <section className="flex flex-col ml-0 md:ml-[10rem]">
              <div className="flex flex-col text-justify leading-7 gap-5">
                {selectedPost.postSummary.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}

                {selectedPost.sections.map((section, index) => (
                  <div id={section.header} className="flex flex-col gap-5">
                    <h2
                      key={index}
                      className="font-clashDisplay tracking-widest text-[1.4rem] sm:text-[2rem] mt-10"
                    >
                      {section.header}
                    </h2>
                    {section.content.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                ))}
              </div>
            </section>

            <section className="hidden sticky h-full top-0 md:block flex-none py-4 px-7 border border-secondaryColor_purple rounded-xl">
              {selectedPost.sections.map((section, index) => (
                <ul
                  key={index}
                  className="text-left text-sm w-[15rem] text-secondaryColor_lilac"
                >
                  <Link smooth to={"#" + section.header}>
                    <li className="hover:text-secondaryColor_darkPurple transition ease-in-out cursor-pointer mb-2">
                      {section.header}
                    </li>
                  </Link>
                </ul>
              ))}
            </section>
          </div>
        </div>
      </React.Fragment>
    );
  }
};

export default BlogPost;
