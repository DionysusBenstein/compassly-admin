import { useEffect, useState } from "react";
import { NextButton, PageTitle } from "../../components";
import { Layout, PageContainer, Table } from "../../containers";
import { UserAPI } from "../../fetch";
import { loginMiddleware } from "../../middlewares";
import { AddDomain } from "../../modals";

const Domains = () => {
  const layoutProps: any = {
    title: "Program library | Compass",
    description: "Program library",
  };

  const [addModal, setAddModal] = useState<boolean>(false),
    [page, setPage] = useState<number>(1),
    [listData, setListData] = useState<any>([]),
    formatDataByTable = (data: any) => {
      console.log(data);
    },
    initData = async () => {
      const { data } = await UserAPI(
        "get",
        `/admin/get-data?table=domains&page=${page}`
      );

      formatDataByTable(data);
    };

  useEffect(() => {
    initData();
  }, []);

  return (
    <Layout {...layoutProps}>
      <PageContainer
        links={[
          { name: "Domains", link: "/program-library/domains", active: true },
          { name: "Subdomains", link: "/program-library/subdomains" },
          { name: "Target skills", link: "/program-library/target-skills" },
        ]}
      >
        <PageTitle title="Domains" />
        <NextButton title="Add new" click={() => setAddModal(true)} />
        <Table header="search" searchAction={() => console.log("search")} />
      </PageContainer>
      {/* modals */}
      <AddDomain show={addModal} onClose={() => setAddModal(false)} />
    </Layout>
  );
};

export const getServerSideProps = async (context: any) => {
  return await loginMiddleware(context, () => {
    return { props: {} };
  });
};

export default Domains;
