import { ItemCard } from "../../components/card";

function Article() {
  return (
    <>
      <div className="container mx-auto  min-h-svh h-auto pt-6 pb-6 flex flex-wrap justify-center gap-5">
        <ItemCard></ItemCard>
        <ItemCard></ItemCard> <ItemCard></ItemCard>
        <ItemCard></ItemCard> <ItemCard></ItemCard> <ItemCard></ItemCard>
        <ItemCard></ItemCard> <ItemCard></ItemCard> <ItemCard></ItemCard>
      </div>
    </>
  );
}

export default Article;
