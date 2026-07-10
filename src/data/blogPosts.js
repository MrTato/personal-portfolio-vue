import labradorContent from '@/content/blog/whats-it-like-living-with-a-labrador.md?raw'
import remoteWorkContent from '@/content/blog/what-i-like-the-most-about-remote-work-and-why-you.md?raw'

export const blogPosts = [
  {
    title: 'What I like the most about Remote Work and why you should try it too',
    slug: 'what-i-like-the-most-about-remote-work-and-why-you',
    description:
      'A personal look at how remote work brings freedom, focus, and flexibility—why it might be the upgrade your workday needs.',
    author: 'Marian Lopez',
    updated_at: '2026-07-09',
    published: true,
    spotlight: true,
    preview_image: '/blog/remote-work.png',
    cover_image: '/blog/remote-work.png',
    content: remoteWorkContent,
  },
  {
    title: 'What’s it like Living with a Labrador',
    slug: 'whats-it-like-living-with-a-labrador',
    description:
      'Thinking of getting a Labrador? From endless energy to heart-melting loyalty (and fur everywhere), prepare to laugh, nod, and fall in love.',
    author: 'Marian Lopez',
    updated_at: '2026-07-05',
    published: true,
    spotlight: true,
    preview_image: '/blog/labrador.jpeg',
    cover_image: '/blog/labrador.jpeg',
    content: labradorContent,
  },
]

export function getPublishedBlogPosts() {
  return blogPosts.filter((post) => post.published)
}

export function getBlogPostBySlug(slug) {
  return getPublishedBlogPosts().find((post) => post.slug === slug)
}
