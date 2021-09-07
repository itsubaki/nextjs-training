import style from 'styles/profile/search.module.css'

export function Search({ setSearch }: any) {
    return (
        <div className={style.container}>
            <div className={style.item}>
                <div className={style.search}>
                    <input
                        className={style.input}
                        id="search"
                        name="search"
                        type="text"
                        placeholder="Find a repository..."
                        autoComplete="off"
                        onChange={(e) => {
                            setSearch(e.target.value)
                        }}
                    />
                </div>
                <div className={style.filter}>
                    Type
                </div>
                <div className={style.filter}>
                    Language
                </div>
                <div className={style.filter}>
                    Sort
                </div>
            </div>

            <div className={style.new}>
                🔖{" "}New
            </div>
        </div>
    )
}
