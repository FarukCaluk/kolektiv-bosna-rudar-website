import React from "react";
import Link from "next/link";
import client from "../../../sanityClient";
import { urlFor } from "../../../sanityClient";

type Blog = {
  _id: string;
  title: string;
  description: string;
  mainImage: any;
  slug: { current: string };
  categories: string[];
  publishedAt: string;
};

const truncateText = (text: string | null | undefined, wordLimit: number) => {
  if (!text) return ""; // Return an empty string if text is null or undefined
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return (
      words.slice(0, wordLimit).join(" ") +
      ' <span style="color: #f45b44; font-weight: bold;">...find out more</span>'
    );
  }
  return text;
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export default async function Page() {
  const blogs: Blog[] = await client.fetch(`*[_type == "post"]{
    _id,
    title,
    description,
    mainImage,
    slug,
    "categories": categories[]->title,
    publishedAt
  }`);

  const ultrahighlighted = blogs.filter((blog) =>
    blog.categories.includes("ultrahighlighted")
  );
  const highlightedBlogs = blogs.filter((blog) =>
    blog.categories.includes("highlighted")
  );
  const otherBlogs = blogs.filter(
    (blog) =>
      !blog.categories.includes("highlighted") &&
      !blog.categories.includes("ultrahighlighted")
  );

  return (
    <div className="mt-16 mx-4 sm:mx-8">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 h-auto">
        {/* Ultrahighlighted Blogs Section */}
        <section className="basis-full lg:basis-[45%] flex flex-col justify-between">
          {ultrahighlighted.map((blog) => (
            <div key={blog._id}>
              <Link href={`/blog/${blog.slug.current}`}>
                <div className="hover:underline decoration-[#f45b44] underline-offset-4">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black font-li">
                    {blog.title}
                  </h1>
                  <p
                    className="text-xs sm:text-sm text-gray-300 mt-4 sm:mt-6"
                    dangerouslySetInnerHTML={{
                      __html: truncateText(blog.description, 10),
                    }}
                  />
                </div>
              </Link>
              {blog.mainImage && (
                <Link href={`/blog/${blog.slug.current}`}>
                  <div className="mt-4 relative w-full h-[300px] sm:h-[400px] lg:h-[510px] overflow-hidden rounded-lg group">
                    <img
                      className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                      src={urlFor(blog.mainImage).url()}
                      alt={blog.title}
                    />
                  </div>
                </Link>
              )}
              <div className="text-right mt-2 text-xs sm:text-sm">
                {formatDate(blog.publishedAt)}
              </div>
            </div>
          ))}
        </section>

        {/* Highlighted Blogs Section */}
        <section className="basis-full lg:basis-[55%] flex flex-col justify-between">
          {highlightedBlogs.map((blog, index) => (
            <div
              key={blog._id}
              className={`flex flex-col lg:flex-row gap-4 ${
                index === highlightedBlogs.length - 1 ? "items-start" : ""
              }`}
            >
              <div className="flex-1">
                <Link href={`/blog/${blog.slug.current}`}>
                  <div className="hover:underline decoration-[#f45b44] underline-offset-4">
                    <h1 className="text-lg sm:text-xl lg:text-2xl font-bold">
                      {blog.title}
                    </h1>
                    <p
                      className="text-xs sm:text-sm text-gray-300 mt-4 sm:mt-6"
                      dangerouslySetInnerHTML={{
                        __html: truncateText(blog.description, 25),
                      }}
                    />
                  </div>
                </Link>
              </div>
              <div>
                {blog.mainImage && (
                  <Link href={`/blog/${blog.slug.current}`}>
                    <div className="relative w-full sm:w-[300px] lg:w-[380px] h-[150px] sm:h-[160px] lg:h-[180px] overflow-hidden rounded-lg group">
                      <img
                        className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                        src={urlFor(blog.mainImage).url()}
                        alt={blog.title}
                      />
                    </div>
                  </Link>
                )}
                <div className="text-right mt-2 text-xs sm:text-sm">
                  {formatDate(blog.publishedAt)}
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>

      {/* All Blogs Section */}
      <section>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl mt-16 mb-8">
          Sve Objave
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 max-h-[500px] overflow-hidden">
          {otherBlogs.slice(0, 6).map((blog) => (
            <div key={blog._id} className="relative flex flex-col">
              {blog.mainImage && (
                <div className="relative">
                  <Link href={`/blog/${blog.slug.current}`}>
                    <img
                      src={urlFor(blog.mainImage).width(550).height(230).url()}
                      alt={blog.title}
                      className="object-cover w-full h-[150px] sm:h-[200px] lg:h-[230px] opacity-50 rounded-lg"
                    />
                  </Link>
                  <p className="absolute bottom-0 left-0 text-white text-lg sm:text-xl lg:text-2xl px-2 py-1 w-full text-left">
                    {blog.title}
                  </p>
                </div>
              )}
              <div className="text-right mt-2 text-xs sm:text-sm">
                {formatDate(blog.publishedAt)}
              </div>
            </div>
          ))}
        </div>
        {otherBlogs.length > 6 && (
          <button className="mt-8 px-4 py-2 text-sm sm:text-base bg-blue-500 text-white rounded">
            Load More
          </button>
        )}
      </section>
    </div>
  );
}
