import labradorContent from '@/content/blog/whats-it-like-living-with-a-labrador.md?raw'
import remoteWorkContent from '@/content/blog/what-i-like-the-most-about-remote-work-and-why-you.md?raw'
import awsS3DjangoContent from '@/content/blog/setting-aws-s3-as-the-default-file-storage-in-a-dj.md?raw'
import vueHeroCarouselContent from '@/content/blog/smooth-slides-with-vue-building-a-hero-carousel.md?raw'

export const blogPosts = [
  {
    title: 'Smooth Slides with Vue: Building a Hero Carousel',
    slug: 'smooth-slides-with-vue-building-a-hero-carousel',
    description: 'How to do sliding animations for a Hero section carousel, as well as a little hack.',
    author: 'Bayardo Lopez',
    updated_at: '2026-07-10',
    published: true,
    spotlight: false,
    preview_image: '/blog/vue-hero-carousel.png',
    cover_image: '/blog/vue-hero-carousel.png',
    content: vueHeroCarouselContent,
  },
  {
    title: 'Setting AWS S3 as the Default File Storage in a Django Project',
    slug: 'setting-aws-s3-as-the-default-file-storage-in-a-dj',
    description:
      "Don't use DEFAULT_FILE_STORAGE. I will teach you the right way if you go right this way...",
    author: 'Bayardo Lopez',
    updated_at: '2026-07-09',
    published: true,
    spotlight: false,
    preview_image: '/blog/aws-s3-django-preview.png',
    cover_image: '/blog/aws-s3-django-cover.png',
    content: awsS3DjangoContent,
  },
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
