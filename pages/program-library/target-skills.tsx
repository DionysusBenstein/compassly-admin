import { NextButton, PageTitle } from "../../components";
import { Layout, PageContainer, Table } from "../../containers";
import { loginMiddleware } from "../../middlewares";

const TargetSkills = () => {
  const layoutProps: any = {
    title: "Program library | Compass",
    description: "Program library",
  };
  return (
    <Layout {...layoutProps}>
      <PageContainer
        links={[
          { name: "Domains", link: "/program-library/domains" },
          { name: "Subdomains", link: "/program-library/subdomains" },
          { name: "Target skills", link: "/program-library/target-skills", active: true },
        ]}
      >
        <PageTitle title="Target skills" />
        <NextButton title="Add new" click={() => console.log(123)} />
        <Table header="search" searchAction={() => console.log("search")} />
      </PageContainer>
    </Layout>
  );
};

export const getServerSideProps = async (context: any) => {
  return await loginMiddleware(context, () => {
    return { props: {} };
  });
};

export default TargetSkills;
