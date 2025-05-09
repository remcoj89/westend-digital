import createDOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);

export default async function fetchProjects() {
  const query = `
    query getProjects {
      posts(where: {categoryId: 3}) {
        edges {
          node {
            id
            title
            content(format: RENDERED)
            featuredImage {
              node {
                altText
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  `;

  const res = await fetch(import.meta.env.WP_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  if (!res.ok) {
    throw new Error(`Network response was not ok: ${res.statusText}`);
  }

  const { data } = await res.json(); // Destructure the data from the response


  // Sanitize de content van elk project
  const sanitizedProjects = data.posts.edges.map(edge => ({
    ...edge,
    node: {
      ...edge.node,
      content: DOMPurify.sanitize(edge.node.content || '')
    }
  }));

  return sanitizedProjects;
}
