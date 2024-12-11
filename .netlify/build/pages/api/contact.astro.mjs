export { renderers } from '../../renderers.mjs';

const Post = async ({ request }) => {

  const data = await request.formData();
  data.get("name");
  data.get("email");
  data.get("message");

  return  console.log(data)
  // Validate the data - you'll probably want to do more than this
  // if (!name || !email || !message) {
  //   return new Response(
  //     JSON.stringify({
  //       message: "Missing required fields",
  //     }),
  //     { status: 400 }
  //   );
  // }
  // // Do something with the data, then return a success response
  // return new Response(
  //   JSON.stringify({
  //     message: "Success!"
  //   }),
  //   { status: 200 }
  // );
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Post
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
