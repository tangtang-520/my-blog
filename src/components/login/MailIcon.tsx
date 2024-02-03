import React from "react";
interface loginComponent {
  className?: string;
}

export const MailIcon: React.FC<loginComponent> = () => (
  <img src="/src/assets/svgs/author.svg" style={{width:"1em"}} alt="" />
);
