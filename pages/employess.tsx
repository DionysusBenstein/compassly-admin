import { useEffect, useState } from "react";
import { NextButton, PageTitle } from "../components";
import { Layout, PageContainer, Table } from "../containers";
import { UserAPI } from "../fetch";
import { loginMiddleware } from "../middlewares";

const Employess = () => {
  const layoutProps: any = {
      title: "Employess | Compass",
      description: "Employess",
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
        type: "group",
        value: "Group",
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
            value: key,
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
            type: "group",
            value: el.group || "not group",
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
        `/admin/get-data?table=users&page=${page}`
      );

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
        <PageTitle title="Employess" />
        <NextButton title="Add new" click={() => setAddModal(true)} />
        <Table
          header="classic"
          headerData={tableHeadData}
          data={listData}
          searchAction={() => console.log("search")}
          page={page}
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

export default Employess;
