import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Examples from "./pages/Examples";
import New from "./pages/New";
import Show from "./pages/Show";
import { examplesLoader, showLoader } from "./Loaders";
import { createAction, updateAction, deleteAction } from "./Actions";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="" element={<Home />} />
        <Route
          path="coverletters"
          element={<Examples />}
          loader={examplesLoader}
        />
        <Route path="coverletters/:id" element={<Show />} loader={showLoader} />
        <Route path="coverletters/new" element={<New />} />
        <Route path="coverletters/create" action={createAction}/>
        <Route path="coverletters/update/:id" action={updateAction}/>
        <Route path="coverletters/delete/:id" action={deleteAction}/>
      </Route>
    </>
  )
);

export default Router;
