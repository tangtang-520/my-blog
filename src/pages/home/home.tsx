import { useNavigate } from "react-router-dom";
// import React from "react";
import { Button } from "@nextui-org/react";

function Home() {
  const navigate = useNavigate()
  const goArticle = () => {
    navigate('/Article')
  }

  return (
    <div className="w-full bgheight">
      <div className=" bgheight w-full relative bgImg bg-[url('/src/assets/beams-basic-transparent.png')] bg-cover bg-no-repeat bg-center">
        <div className="absolute top-2/4 left-1/2 -translate-y-2/4 -translate-x-2/4 text-center">
          <div className="font-title text-[clamp(1.5rem,6vw,3rem)] font-black leading-none">
            Tang's Blog
          </div>
          <div className="h-4"></div>
          <p className="font-title font-light md:text-3xl lg:text-4xl">
            水寒江静，满目青山，载月明归。
          </p>
          <div className="h-4"></div>
          <p className="text-base-content/80 mx-auto max-w-lg font-sans text-sm font-light">
            为什么细菌不会去旅行？因为它们觉得自己已经在培养皿里过得很“盘”了！
          </p>
          <div className="h-4"></div>
          <div>
            {/* <Link className="btn btn-wide btn-primary" to={"/Article"}>
             
            </Link> */}
            <Button color="primary" onClick={goArticle}>随便看看</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
