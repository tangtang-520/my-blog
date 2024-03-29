import { Card, CardBody } from "@nextui-org/react";
import myPng from '@/assets/me.png'

export function Me() {
  const sty = {
    height: `calc(100vh - 168px)`,
  };
  return (
    <>
      <div className="sm:container mx-auto relative" style={sty}>
        <Card className="h-auto w-[406px] lg:card-side bg-base-100 shadow-xl absolute  top-2/4 left-1/2 -translate-y-1/2 -translate-x-1/2">
          <CardBody>
            <div className="flex justify-between ">
              <h2 className="card-title font-bold">ABMOUT ME</h2>
              <img
                className="meImg border w-10 rounded-full cursor-pointer"
                src={myPng}
                alt="Me"
              />
            </div>
            <p>
              My name is Tang, and I have two years of experience in front-end
              development, primarily using the Vue tech stack. In my spare time,
              I have a passion for gaming and various sports activities, which
              keep me energized and foster innovative thinking. If you resonate
              with my skills or interests, feel free to reach out to me through
              the contact information below. I look forward to sharing the joy
              of technology and life with you.
            </p>
          </CardBody>
        </Card>
      </div>
    </>
  );
}
