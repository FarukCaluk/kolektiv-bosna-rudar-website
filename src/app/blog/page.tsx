import React from "react";
import Link from "next/link";
import client from "../../../sanityClient";
import { urlFor } from "../../../sanityClient";

type Blog = {
  _id: string; title: string; description: string; mainImage: any;
  slug: { current: string }; categories: string[]; publishedAt: string;
};

const truncate = (text: string | null | undefined, limit: number) => {
  if (!text) return "";
  const words = text.split(" ");
  return words.length > limit
    ? words.slice(0, limit).join(" ") + ' <span style="color:#D42020;font-weight:600">...više</span>'
    : text;
};

const fmtDate = (d: string) => {
  const dt = new Date(d);
  return dt.toLocaleDateString("bs-BA", { day: "2-digit", month: "long", year: "numeric" });
};

export default async function BlogPage() {
  const blogs: Blog[] = await client.fetch(`*[_type == "post"]{
    _id, title, description, mainImage, slug,
    "categories": categories[]->title, publishedAt
  }`);

  const ultra       = blogs.filter(b => b.categories.includes("ultrahighlighted"));
  const highlighted = blogs.filter(b => b.categories.includes("highlighted"));
  const others      = blogs.filter(b => !b.categories.includes("highlighted") && !b.categories.includes("ultrahighlighted"));

  return (
    <div className="bg-[#07090F] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-24">

        {/* Page header */}
        <div className="mb-16">
          <span className="block w-10 h-[2px] bg-[#D42020] mb-5" />
          <h1 className="bebas text-[clamp(3rem,8vw,7rem)] leading-none text-white">Novosti</h1>
        </div>

        {/* Featured layout */}
        {(ultra.length > 0 || highlighted.length > 0) && (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-px bg-white/[0.04] mb-20">
            {/* Hero post */}
            {ultra.map(blog => (
              <Link key={blog._id} href={`/blog/${blog.slug.current}`}
                className="lg:col-span-3 block group bg-[#07090F] p-0 overflow-hidden">
                {blog.mainImage && (
                  <div className="relative h-[340px] lg:h-[480px] overflow-hidden">
                    <img src={urlFor(blog.mainImage).url()} alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07090F] via-transparent to-transparent" />
                  </div>
                )}
                <div className="p-7">
                  <p className="text-xs uppercase tracking-widest text-[#D42020] mb-2">{fmtDate(blog.publishedAt)}</p>
                  <h2 className="bebas text-3xl lg:text-4xl text-white leading-tight group-hover:text-[#D42020] transition-colors">
                    {blog.title}
                  </h2>
                  <p className="text-white/45 text-sm mt-3 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: truncate(blog.description, 20) }} />
                </div>
              </Link>
            ))}

            {/* Side posts */}
            <div className="lg:col-span-2 flex flex-col divide-y divide-white/[0.04] bg-[#07090F]">
              {highlighted.map(blog => (
                <Link key={blog._id} href={`/blog/${blog.slug.current}`}
                  className="group flex gap-4 p-6 hover:bg-white/[0.02] transition-colors">
                  {blog.mainImage && (
                    <div className="relative w-24 h-20 shrink-0 overflow-hidden">
                      <img src={urlFor(blog.mainImage).width(200).url()} alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] uppercase tracking-widest text-[#D42020] mb-1">{fmtDate(blog.publishedAt)}</p>
                    <h3 className="text-sm font-semibold leading-snug text-white group-hover:text-[#D42020] transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* All other posts */}
        {others.length > 0 && (
          <>
            <div className="flex items-center gap-4 mb-8">
              <span className="bebas text-2xl text-white">Sve objave</span>
              <div className="flex-1 h-px bg-white/[0.06]" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04]">
              {others.slice(0, 9).map(blog => (
                <Link key={blog._id} href={`/blog/${blog.slug.current}`}
                  className="group block bg-[#07090F] p-6 hover:bg-[#0C1020] transition-colors">
                  {blog.mainImage && (
                    <div className="relative h-44 overflow-hidden mb-4">
                      <img src={urlFor(blog.mainImage).width(550).height(230).url()} alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 opacity-70 group-hover:opacity-100" />
                    </div>
                  )}
                  <p className="text-[10px] uppercase tracking-widest text-[#D42020] mb-1">{fmtDate(blog.publishedAt)}</p>
                  <h3 className="text-base font-semibold text-white group-hover:text-[#D42020] transition-colors leading-snug">
                    {blog.title}
                  </h3>
                </Link>
              ))}
            </div>
          </>
        )}

        {blogs.length === 0 && (
          <div className="text-center py-32">
            <p className="bebas text-4xl text-white/20">Uskoro novi sadržaj</p>
          </div>
        )}
      </div>
    </div>
  );
}