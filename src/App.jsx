import './App.css';
import MainRouter from './routers/MainRouter';
import 'primeicons/primeicons.css';
import { userAuth } from './utils/atomsAndSelectors/userAtoms';
import { useRecoilState } from 'recoil';
import ButtonComp from './components/ButtonComp';
import { useEffect, useState } from 'react';
import { authenticateUser, signAdminIn } from './utils/apiCalls/users';

function App() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [getUser, setGetUser] = useRecoilState(userAuth);
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loadingAuth, setLoadingAuth] = useState(true);

  const adminLoginHandler = async (e) => {
    e.preventDefault();
    try {
      if (!email || !password) {
        alert("All fields are required");
        return;
      }

      setLoading(true);
      const payload = { email, password };
      const res = await signAdminIn(payload);

      if (res) {
        setGetUser({
          token: res.data.token,
          user: res.data.user,
        });
        alert(res.data.message);
        setIsAuthenticated(true); // ✅ Set auth true after login
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const verifyTokenAndAuth = async () => {
      if (!getUser.token) {
        setLoadingAuth(false);
        return;
      }

      try {
        const response = await authenticateUser({ token: getUser.token });
        if (response) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          setGetUser({ token: null, user: null });
        }
      } catch (error) {
        console.error("Initial auth failed:", error);
        setIsAuthenticated(false);
        setGetUser({ token: null, user: null });
      } finally {
        setLoadingAuth(false);
      }
    };

    verifyTokenAndAuth();

    const interval = setInterval(async () => {
      if (!getUser.token) return;

      try {
        const response = await authenticateUser({ token: getUser.token });
        if (!response) {
          setGetUser({ token: null, user: null });
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Auth error:", error);
        setGetUser({ token: null, user: null });
        setIsAuthenticated(false);
      }
    }, 1920000); //reauthenticates every 32minutes

    return () => clearInterval(interval);
  }, [getUser.token]);

  // Loader
  if (loadingAuth) {
    return (
      <div className='w-full h-[100vh] bg-gray-300 flex justify-center items-center'>
        <p className='text-xl'>Checking authentication...</p>
      </div>
    );
  }

  // Login page
  if (!getUser?.token || !isAuthenticated) {
    return (
      <div className='w-full h-[100vh] bg-gray-300 flex justify-center items-center'>
        <form onSubmit={adminLoginHandler} className='flex flex-col gap-2 min-w-[300px]'>
          <label>
            <p>Email:</p>
            <input
              type="email"
              className='border w-full px-3'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
          <label>
            <p>Password:</p>
            <input
              type="password"
              className='border w-full px-3'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </label>
          <ButtonComp
            text={loading ? "Logging in..." : "Login"}
            bground={"bg-[#ec8951]"}
            textFill={"text-white"}
            type="submit"
          />
        </form>
      </div>
    );
  }

  // Main app
  return <MainRouter />;
}

export default App;
