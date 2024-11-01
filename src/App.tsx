import { GitHubBanner, Refine, WelcomePage } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import {
  LightTheme,
  notificationProvider,
  RefineSnackbarProvider,
  RefineThemes,
} from "@refinedev/mui";

import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import routerBindings, {
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ColorModeContextProvider } from "./contexts/color-mode";
import Login from "./pages/login";
import { ThemeProvider } from "@mui/material";
import Dashboard from "./pages/dashboard";
import NotFound from "./pages/404";
import Courses from "./pages/dashboard/courses";
import Translate from "./pages/dashboard/translate";
import News from "./pages/dashboard/news";
import Balance from "./pages/dashboard/balance";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={LightTheme}>
        <RefineKbarProvider>
          <ColorModeContextProvider>
            <CssBaseline />
            <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
            <RefineSnackbarProvider>
              <DevtoolsProvider>
                <Refine
                  dataProvider={dataProvider(
                    "https://api.fake-rest.refine.dev"
                  )}
                  routerProvider={routerBindings}
                  options={{
                    syncWithLocation: true,
                    warnWhenUnsavedChanges: true,
                    useNewQueryKeys: true,
                    projectId: "7kdcIr-VVTDnu-Wf4lvz",
                  }}
                >
                  <Routes>
                    <Route path="/" element={<h1>salom</h1>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/dashboard/courses" element = {<Courses/>} />
                    <Route path="/dashboard/translate" element = {<Translate/>} />
                    <Route path="/dashboard/news" element = {<News/>} />
                    <Route path="/dashboard/balance" element = {<Balance/>} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>

                  <RefineKbar />
                  <UnsavedChangesNotifier />
                  <DocumentTitleHandler />
                </Refine>
                <DevtoolsPanel />
              </DevtoolsProvider>
            </RefineSnackbarProvider>
          </ColorModeContextProvider>
        </RefineKbarProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
