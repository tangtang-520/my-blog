import { Tooltip } from "@nextui-org/react";
import qqImg from "@/assets/images/meqq.jpg";
import qqSvg from "@/assets/svgs/qq.svg";
import weiXinImg from '@/assets/images/meweixin.jpg';
import wechatSvg from "@/assets/svgs/wechat.svg";
import gitHubSvg from "@/assets/svgs/github.svg";

export function Footer() {
  return (
    <>
      <div className="w-full h-auto px-5 py-5 bg-white border">
        <div className="flex justify-center">
          <Tooltip
            content={
              <img
                src={qqImg}
                className="w-32"
                alt="my qq"
              />
            }
          >
            <img src={qqSvg} className="w-6 " alt="my qq" />
          </Tooltip>
          <Tooltip
            content={
              <img
                src={weiXinImg}
                className="w-32"
                alt="my qq"
              />
            }
          >
            <img
              src={wechatSvg}
              className="w-6 mx-3"
              alt="my wechat"
            />
          </Tooltip>

          <img
            src={gitHubSvg}
            className="w-6"
            alt="my github"
          />
        </div>

        <div className="text-center mt-2">
          <span>Tang's Blog|蜀ICP备2023039901号-1</span>
        </div>
      </div>
    </>
  );
}
