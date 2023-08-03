import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import publicRoutes, { RouteType } from "../../routes/public.route";

const ReactRouter: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((publicRoute: RouteType) => {
          const { Layout, Page, path, title, children } = publicRoute;
          return (
            <Route
              key={path}
              element={
                <Layout title={title} key={title}>
                  <Page />
                </Layout>
              }
              path={path}
            >
              {children &&
                children.map(({ path: nestedPath, Component }) => {
                  return (
                    <Route
                      key={nestedPath}
                      path={`${path}${nestedPath}`}
                      element={<Component />}
                    />
                  );
                })}
            </Route>
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default ReactRouter;
