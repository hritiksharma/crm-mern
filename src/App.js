import "./App.css";
import { DefaultLayout } from "./layout/DefaultLayout";
import Entry from "./pages/entry/EntryPage";
import { DashboardPage } from "./pages/dashboard/DashboardPage";
function App() {
  return (
    <div>
      {/* <Entry /> */}

      <DefaultLayout>
        <DashboardPage />
      </DefaultLayout>
    </div>
  );
}

export default App;
