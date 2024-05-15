import { useState, useEffect } from "react";
import Header from "./assets/Header";
import Search from "./assets/Search";
import Profile from "./assets/Profile";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState("");

  useEffect(() => {
    const preferedColorScheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setDarkMode(preferedColorScheme ? true : false);
  }, []);

  async function defaultUser() {
    const url = `https://api.github.com/users/octocat`;

    const res = await fetch(url);

    const user = await res.json();
    setUser(user);
  }

  if (!user) {
    defaultUser();
  }

  return (
    <div className={!darkMode ? "container" : "container dark-mode"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Search setUser={setUser} />
      <Profile user={user} />
    </div>
  );
}

export default App;
