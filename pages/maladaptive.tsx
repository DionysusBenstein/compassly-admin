import { Layout, PageContainer } from "../containers";
import { loginMiddleware } from "../middlewares";

const MaladaptiveBehaviour = () => {
  const layoutProps: any = {
    title: "Maladaptive behaviour | Compass",
    description: "Maladaptive behaviour",
  };
  return (
    <Layout {...layoutProps}>
      <PageContainer>
        <div>Maladaptive</div>
      </PageContainer>
    </Layout>
  );
};

export const getServerSideProps = async (context: any) => {
  return await loginMiddleware(context, () => {
    return { props: {} };
  });
};

export default MaladaptiveBehaviour;
