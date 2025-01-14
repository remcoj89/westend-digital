export default async function fetchBlogArticles() {
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

  const { data } = await res.json() // Destructure the data from the response

  return data.posts.edges // Return the posts from the response
}
