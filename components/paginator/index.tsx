import styles from "../../styles/components/Paginator.module.scss";

export const Pagination = ({
  counts,
  diven,
  onUpdate,
}: {
  counts: number;
  diven: number;
  onUpdate?: () => void;
}) => {
  const params = new URLSearchParams(window.location.search),
    generatePageButton = () => {
      const page = params.get("page") || 1;

      if (counts <= diven) {
        return null;
      }

      let buttons = [],
        currentPage = Number(page),
        skip = 5,
        pageSizes = Math.ceil(counts / diven);

      if (currentPage > 1) {
        buttons.push({
          id: currentPage + 1,
          value: "<",
          page: currentPage - 1,
        });
      }
      if (currentPage > skip) {
        buttons.push({ id: 0, value: 1, page: 1 });
        buttons.push({ id: null, value: "...", page: null });
      }

      if (currentPage < pageSizes - skip) {
        const start = currentPage > skip ? currentPage - skip : 0;
        const last = currentPage < pageSizes - skip ? currentPage + skip : 0;

        for (let i = start; i < last; i++) {
          buttons.push({ id: i, value: i + 1, page: i + 1 });
        }
      } else {
        const start = currentPage - skip;
        // const last = currentPage < pageSizes - skip ? currentPage + skip : 0;

        for (let i = start; i < pageSizes; i++) {
          buttons.push({ id: i, value: i + 1, page: i + 1 });
        }
      }

      if (currentPage < pageSizes - skip) {
        buttons.push({ id: null, value: "...", page: null });
        buttons.push({ id: 0, value: pageSizes, page: pageSizes });
      }
      if (currentPage < pageSizes) {
        buttons.push({
          id: currentPage + 1,
          value: ">",
          page: currentPage + 1,
        });
      }

      return buttons.map((el: any, key: number) => (
        <button
          key={key}
          onClick={() => clickPage(el.page)}
          className={`${styles.pageButton} ${
            Number(el.page) === Number(page) ? styles.active : ""
          }`}
        >
          <span>{el.value}</span>
        </button>
      ));
    },
    goToPage = (e: any) => {
      e.preventDefault();

      const pageValue = Number(e.target.page.value),
        url = new URL(window.location.href);

      if (pageValue && pageValue !== Number(params.get("page"))) {
        url.searchParams.set("page", pageValue.toString());

        let { origin, search } = url;
        window.history.pushState({ path: origin }, "", search);

        onUpdate();
      }
    },
    clickPage = (value: number) => {
      const pageValue = Number(value),
        url = new URL(window.location.href);

      if (pageValue && pageValue !== Number(params.get("page"))) {
        url.searchParams.set("page", pageValue.toString());

        let { origin, search } = url;
        window.history.pushState({ path: origin }, "", search);

        onUpdate();
      }
    };

  return (
    <div className={styles.paginationLine}>
      {generatePageButton()}
      {Math.ceil(counts / diven) > 5 && (
        <form className={styles.goToPage} onSubmit={goToPage}>
          <input
            type="number"
            name="page"
            min="1"
            max={Math.ceil(counts / diven)}
            placeholder={params.get("page") || "1"}
          />
          <button type="submit">Перейти</button>
        </form>
      )}
    </div>
  );
};
