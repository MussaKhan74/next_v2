const getData = async (slug) => {
  const post = await getDataFromCMS(slug);
  return post;
};

export default async function BlogPost({ params }) {
  const { slug } = params;
  const post = await getData(slug);
  return <div>post</div>;
}

// export function getServerSideProps() {

// }
