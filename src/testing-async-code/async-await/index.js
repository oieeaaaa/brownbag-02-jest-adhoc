export const getPostComments = async (postId) => {
  try {
    const rawRes = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    const res = await rawRes.json();

    if (!res.length) {
      throw 'Error!';
    }

    return res;
  } catch (err) {
    throw 'Error!';
  }
}
