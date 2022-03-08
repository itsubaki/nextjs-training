import Image from "next/image";
import style from "styles/profile/stats.module.css";

export function Stats({ login }: { login: string }) {
  const url = `https://github-readme-stats.vercel.app/api?username=${encodeURI(
    login
  )}&count_private=true&show_icons=true&include_all_commits=true&hide_title=true&theme=react`;

  return (
    <div className={style.container}>
      <p>
        <span className={style.name}>{login}/README</span>
        <span className={style.extension}>.md</span>
      </p>
      <h3>Hi there 👋</h3>
      <Image
        src={url}
        width={495}
        height={165}
        alt={login + "'s github stats"}
      />
    </div>
  );
}
