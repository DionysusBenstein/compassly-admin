import { useEffect, useState } from "react";
import { NextButton, PageTitle } from "../components";
import { Layout, PageContainer, Table } from "../containers";
import { UserAPI } from "../fetch";
import { loginMiddleware } from "../middlewares";

const Clients = () => {
  const layoutProps: any = {
      title: "Clients | Compass",
      description: "Clients",
    },
    tableHeadData = [
      {
        type: "numberic",
        value: "#",
      },
      {
        type: "name",
        value: "First name",
      },
      {
        type: "name",
        value: "Last name",
      },
      {
        type: "number",
        value: "Number",
      },
      {
        type: "email",
        value: "Email",
      },
      {
        type: "actions",
        value: "Action",
      },
    ];

  const [addModal, setAddModal] = useState<boolean>(false),
    [page, setPage] = useState<number>(0),
    [count, setCount] = useState<number>(0),
    [listData, setListData] = useState<any>([]),
    formatDataByTable = (data: any) => {
      const result = data.map((el: any, key: number) => {
        return [
          {
            type: "numberic",
            value: page + key + 1,
          },
          {
            type: "name",
            value: el.name,
          },
          {
            type: "name",
            value: el.surname,
          },
          {
            type: "number",
            value: el.number || "not number",
          },
          {
            type: "email",
            value: el.email,
          },
        ];
      });

      setListData(result);
    },
    initData = async () => {
      const { data } = await UserAPI(
        "get",
        `/admin/get-data?table=clients&page=${page}`
      );

      console.log(data)
      const { list, counts } = data;

      formatDataByTable(list);
      setCount(counts);
    };

  useEffect(() => {
    initData();
  }, []);

  return (
    <Layout {...layoutProps}>
      <PageContainer>
        <PageTitle title="Clients" />
        <NextButton title="Add new" click={() => setAddModal(true)} />
        <Table
          counts={count}
          page={page}
          header="classic"
          headerData={tableHeadData}
          data={listData}
          searchAction={() => console.log("search")}
          updateAction={() => console.log("search")}
        />
      </PageContainer>
    </Layout>
  );
};

export const getServerSideProps = async (context: any) => {
  return await loginMiddleware(context, () => {
    return { props: {} };
  });
};

export default Clients;
