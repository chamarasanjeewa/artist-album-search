import { Routes, Route, Navigate } from "react-router-dom";
import { ListArtists, Artist } from "./pages";
import BaseLayout from "./components/BaseLayout";
import { ThemeProvider } from "styled-components";
import { Info, theme } from "./utils";
import { Provider } from "react-redux";
import { Store } from "./redux/store";
import { AlbumDetails } from "./pages/AlbumDetails";
import "antd/dist/antd.css";

function App() {
  return (
    <Provider store={Store}>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/*" element={<BaseLayout />}>
            <Route>
              <Route path="search" element={<ListArtists />} />
              <Route path={"artist"} element={<Artist />} />
              <Route path={"album"} element={<AlbumDetails />} />
              <Route path="*" element={<Navigate to={Info.search} />} />
            </Route>
          </Route>
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}
export default App;
