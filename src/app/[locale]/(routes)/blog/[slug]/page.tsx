import BlogPost from './components/blog-post';

type Props = {
  params: {
    slug: string;
  };
};

export default function BlogPostContent({ params }: Props) {
  const { slug } = params;
  return <BlogPost slug={slug} />;
}
