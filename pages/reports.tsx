import { Layout, PageContainer } from "../containers";
import { loginMiddleware } from "../middlewares";

const Reports = () => {
  const layoutProps: any = {
    title: "Reports | Compass",
    description: "Reports",
  };
  return (
    <Layout {...layoutProps}>
      <PageContainer>
        <div>Reports</div>
      </PageContainer>
    </Layout>
  );
};

export const getServerSideProps = async (context: any) => {
  return await loginMiddleware(context, () => {
    return { props: {} };
  });
};

export default Reports;
