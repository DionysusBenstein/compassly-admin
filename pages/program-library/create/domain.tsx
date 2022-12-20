import { PageTitle } from "../../../components";
import { Layout, PageContainer, Table } from "../../../containers";
import { loginMiddleware } from "../../../middlewares";

const CreateDomain = () => {
  const layoutProps: any = {
    title: "Adding new domain | Compass",
    description: "Adding new domain",
  };
  return (
    <Layout {...layoutProps}>
      <PageContainer
        links={[
          { name: "Domains", link: "/program-library/domains", active: true },
          { name: "Subdomains", link: "/program-library/subdomains" },
          { name: "Target skills", link: "/program-library/target-skills" },
        ]}
      >
        <PageTitle title="Adding new domain" />
      </PageContainer>
    </Layout>
  );
};

export const getServerSideProps = async (context: any) => {
  return await loginMiddleware(context, () => {
    return { props: {} };
  });
};

export default CreateDomain;
