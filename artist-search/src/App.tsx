import { Routes, Route, Navigate } from "react-router-dom";
import { SearchArtist, Artist } from "./pages";
import "antd/dist/antd.css";
import BaseLayout from "./components/BaseLayout";
import { ThemeProvider } from "styled-components";
import { Info, theme } from "./utils";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/*" element={<BaseLayout />}>
          <Route>
            <Route path="search" element={<SearchArtist />} />
            <Route path={"artist"} element={<Artist />} />
            <Route path="*" element={<Navigate to={Info.search} />} />
          </Route>
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
