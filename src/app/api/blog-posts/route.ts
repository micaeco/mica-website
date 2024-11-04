import { NextResponse } from 'next/server';
import { getBlogPosts } from '@/lib/github';
import { parseReadme } from '@/lib/utils';
import { IPost, TPostTag } from '@/types';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const rawPosts = await getBlogPosts();

    if (!rawPosts) {
      return NextResponse.json(
        { error: 'POSTS_NOT_FOUND' },
        { status: 404 }
      );
    }

    const posts: IPost[] = Object.entries(rawPosts).map(([filename, content]) => {
      const { metadata, content: postContent } = parseReadme(content);

      return {
        lang: (metadata.lang || 'ca').toLowerCase(),
        slug: filename.replace(/\.md$/, ''),
        title: metadata.title || filename.replace(/\.md$/, ''),
        cover: metadata.cover || '',
        summary: metadata.summary || '',
        tag: (metadata.tag?.toLowerCase() as TPostTag) || 'others',
        date: metadata.date || new Date().toISOString(),
        author: metadata.author || '',
        content: postContent,
      };
    });

    posts.sort((a, b) => new Date(b.date!).getTime() - new Date(a.date!).getTime());

    return NextResponse.json(
      { posts: posts },
      {
        status: 200,
        headers: {
          'Cache-Control': 'no-store, max-age=0',
        }
      }
    );
  } catch (error) {
    console.error('Blog posts error:', error);
    return NextResponse.json(
      { error: 'INTERNAL_ERROR' },
      { status: 500 }
    );
  }
}