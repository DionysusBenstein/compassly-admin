import { Layout, FlexContainer } from "../containers";
import { loginMiddleware } from "../middlewares";
import { LoginBack, LoginForm } from "../components";

const Login = ({ type }: { type: number | null }) => {
  const layoutProps: any = {
    title: "Login | Compass",
    description: "Login in app",
  };
  return (
    <Layout {...layoutProps}>
      <FlexContainer>
        <LoginForm />
        <LoginBack />
      </FlexContainer>
    </Layout>
  );
};

export const getServerSideProps = async (context: any) => {
  return await loginMiddleware(context, () => {
    return { props: {} };
  });
};

export default Login;
