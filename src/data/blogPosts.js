import labradorContent from '@/content/blog/whats-it-like-living-with-a-labrador.md?raw'

export const blogPosts = [
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
