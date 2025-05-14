import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import client from "../../../../sanityClient";
import Link from "next/link";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    await params,
    options
  );
  const postImageUrl = post.mainImage ? urlFor(post.mainImage)?.url() : null;

  console.log(post);

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col">
      <Link href="/blog" className="hover:underline">
        ← Back to posts
      </Link>
      <h1 className="text-4xl font-bold my-8 text-center">{post.title}</h1>
      {postImageUrl && (
        <img
          src={postImageUrl}
          alt={post.title}
          className="aspect-video rounded-xl mb-2"
        />
      )}
      <div className="mb-8">
        <p className="text-right">{formatDate(post.publishedAt)}</p>
      </div>
      <div className="prose">
        {Array.isArray(post.body) && <PortableText value={post.body} />}
      </div>
    </main>
  );
}
