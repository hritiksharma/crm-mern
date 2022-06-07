import "./App.css";
import { DefaultLayout } from "./layout/DefaultLayout";
import Entry from "./pages/entry/EntryPage";
import { DashboardPage } from "./pages/dashboard/DashboardPage";
import { AddTicket } from "./pages/newTicket/AddTicket";
function App() {
  return (
    <div>
      {/* <Entry /> */}

      <DefaultLayout>
        {/* <DashboardPage /> */}
        <AddTicket />
      </DefaultLayout>
    </div>
  );
}

export default App;
