import { useContext } from "react";
import { Login } from "./components/login";
import { Register } from "./components/register";
import { Api } from "./components/api";
import { AuthContext } from "./context/authContext";
import { Button } from "flowbite-react";

const App = () => {
  const { status, userId } = useContext(AuthContext);

  if (status === 'checking') return <p className="loading"><span>Checking credentials, wait a moment...</span></p>;

  return (
    <main className="flex justify-center items-center h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="text-center">
        {
          (status === 'authenticated' && userId)
            ? <HomePage />
            : <AuthPage />
        }
      </div>
    </main>
  );
};

const HomePage = () => {
  const { userId, handleLogOut } = useContext(AuthContext);
  return (
    <><Api /><Button pill gradientMonochrome="cyan" className="btn-logout inline-block mx-auto" onClick={handleLogOut}>Log out</Button></>
  );
};

const AuthPage = () => {
  return (
    <section>
      <Login />
      <Register />
    </section>
  );
};

export default App;
export { HomePage, AuthPage };