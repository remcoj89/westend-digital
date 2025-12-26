type SlugValue = string | { rendered?: string; current?: string } | Array<string | undefined> | null;

type PostNode = {
  id?: string;
  slug?: SlugValue;
  title?: string;
  content?: any;
  featuredImage?: any;
  excerpt?: string;
  seo?: any;
  [key: string]: any;
};

type PostEdge = {
  node: PostNode;
};

declare global {
  interface ImportMeta {
    readonly env: {
      WP_URL: string;
      [key: string]: any;
    };
  }
}

export default async function fetchBlogArticles(): Promise<PostEdge[]> {
  const query = `
    query GetlBlog {
      posts(where: {categoryId: 1}) {
        edges {
          node {
            id
            slug
            title
            content(format: RENDERED)
            featuredImage {
              node {
                altText
                mediaItemUrl
                description(format: RENDERED)
              }
            }
            excerpt
            seo {
              title
              metaDesc
              opengraphTitle
              opengraphDescription
              opengraphImage {
                altText
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  `
  const res = await fetch(import.meta.env.WP_URL, {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify({ query }),
  })


  if (!res.ok) {
    throw new Error(`Network response was not ok: ${res.statusText}`);
  }

  const json = await res.json();
  const data = json.data as { posts: { edges: PostEdge[] } };

  function normalizeSlug(slug: SlugValue): string {
    if (typeof slug === "string") return slug;
    if (Array.isArray(slug)) return slug[0] || "";
    if (typeof slug === "object" && slug !== null) {
      return slug.rendered || slug.current || "";
    }
    return "";
  }



return data.posts.edges.map((edge: PostEdge) => ({
  ...edge,
  node: {
    ...edge.node,
    slug: normalizeSlug(edge.node.slug ?? null),
  },
}));
}
