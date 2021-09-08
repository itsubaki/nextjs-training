import style from "styles/header.module.css";

export function Header() {
  return (
    <div className={style.container}>
      <div className={style.menu}>MENU</div>
      <div className={style.item}>
        <input
          className={style.search}
          id="header-search"
          name="header-search"
          type="text"
          placeholder="Search or jump to..."
          autoComplete="off"
        />
      </div>
      <div className={style.item}>Pull Requests</div>
      <div className={style.item}>Issues</div>
      <div className={style.item}>Marketplace</div>
      <div className={style.item}>Explore</div>
    </div>
  );
}
