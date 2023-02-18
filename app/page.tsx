import fs from "fs";

const getPostMetaData = () => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const slugs = markdownPosts.map((file) => file.replace(".md", ""));
  return slugs;
};
const Homepage = () => {
  const postMetaData = getPostMetaData();
  const postPreviews = postMetaData.map((slug) => (
    <div>
      <h2>{slug}</h2>
    </div>
  ));
  return <div>{postPreviews}</div>;
};

export default Homepage;
