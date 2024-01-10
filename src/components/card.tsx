function IconInfo() {
  const iconObj = [
    {
      name: "作者",
      iconSrc: "/src/assets/svgs/author.svg",
    },
    {
      name: "创建时间",
      iconSrc: "/src/assets/svgs/creatTime.svg",
    },
    {
      name: "更新时间",
      iconSrc: "/src/assets/svgs/renewalTime.svg",
    },
    {
      name: "",
      iconSrc: "/src/assets/svgs/praise.svg",
    },
    {
      name: "浏览量",
      iconSrc: "/src/assets/svgs/browse.svg",
    },
  ];

  return (
    <>
      {iconObj.map((item) => (
        <span className="mx-1.5 flex items-center">
          <img src={item.iconSrc} alt="" className="w-5 mr-1" />
          {item.name}
        </span>
      ))}
    </>
  );
}

export function Card() {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl my-8">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">标题</h2>
        <p>
          随随便便一句话随随便便一句话随随便便一句话随随便便一句话随随便便一句话随随便便一句话随随便便一句话随随便便一句话随随便便一句话
          随随便便一句话随随便便一句话随随便便一句话
        </p>
        <div className="text-right w-full flex  flex-wrap">
          <IconInfo></IconInfo>
        </div>
      </div>
    </div>
  );
}
