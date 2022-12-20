import { loginMiddleware } from "../middlewares";

const Index = () => {
  return <b>load...</b>;
};

export const getServerSideProps = async (context: any) => {
  return await loginMiddleware(context, async () => {
    return {
      redirect: {
        permanent: false,
        destination: "/program-library/domains",
      },
      props: {},
    };
  });
};
export default Index;
