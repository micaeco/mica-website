import { NextResponse } from 'next/server';
import { getBlogPosts } from '@/lib/github';
import { parseReadme } from '@/lib/utils';
import { BlogPost, BlogPostTag } from '@/types';

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

    const posts: BlogPost[] = Object.entries(rawPosts).map(([filename, body]) => {
      const { metadata, content } = parseReadme(body);

      return {
        lang: (metadata.lang || 'ca').toLowerCase(),
        slug: filename.replace(/\.md$/, ''),
        title: metadata.title || filename.replace(/\.md$/, ''),
        cover: metadata.cover || '',
        summary: metadata.summary || '',
        tag: (metadata.tag?.toLowerCase() as BlogPostTag) || 'others',
        date: metadata.date || new Date().toISOString(),
        author: metadata.author || '',
        content,
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
    return NextResponse.json(
      { error: 'INTERNAL_ERROR' },
      { status: 500 }
    );
  }
}