export function Footer() {
  return (
    <>
      <div className="w-full h-auto px-5 py-5 bg-white border" >

        <div className="flex justify-center">
          <img src="/src/assets/svgs/qq.svg" className="w-6 " alt="my qq" />
          <img src="/src/assets/svgs/wechat.svg" className="w-6 mx-3" alt="my wechat" />
          <img src="/src/assets/svgs/github.svg" className="w-6" alt="my github" />
        </div>

        <div className="text-center mt-2">
          <span>Tang's Blog|蜀ICP备2023039901号-1</span>
        </div>
      </div>
    </>
  );
}
