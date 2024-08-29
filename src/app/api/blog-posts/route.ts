import { NextResponse } from 'next/server';
import { getBlogPosts } from '@/src/services/github';
import { parseReadme } from '@/src/lib/utils';
import { IPost, TPostTag } from '@/src/types';

export async function GET() {
  try {
    const rawPosts = await getBlogPosts();

    const posts: IPost[] = Object.entries(rawPosts).map(([filename, content]) => {
      const { metadata, content: postContent } = parseReadme(content);

      const title = metadata.title || filename.replace(/\.md$/, '');
      const summary = metadata.summary || '';
      const tag = (metadata.tag as TPostTag) || 'Altres';
      const date = metadata.date || new Date().toISOString();

      const post: IPost = {
        slug: filename.replace(/\.md$/, ''),
        title,
        summary,
        tag,
        date,
        content: postContent,
      };
      return post;
    });

    posts.sort((a, b) => new Date(b.date!).getTime() - new Date(a.date!).getTime());

    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch blog posts' }, { status: 500 });
  }
}