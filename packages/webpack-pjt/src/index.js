import { add } from "@common/core";

window.onload = () => {
  const root = document.querySelector("#root");
  const title = document.createElement("h1");
  title.innerText = "yarn berry workspace로 모노레포 구축하기" + `${add(1, 2)}`;
  root.appendChild(title);
};
