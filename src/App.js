import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from 'react-router-dom'
import TopBar from './scenes/global/topBar'
import Dashboard from './scenes/dashboard';
import Sidebar from './scenes/global/sideBar'
import Team from './scenes/team'
import Invoices from './scenes/invoices'
import Contacts from './scenes/contacts'
import Bar from './scenes/bar'
import Form from './scenes/form'
import Line from './scenes/line'
import Pie from './scenes/pie'
import FAQ from './scenes/faq'
import Geography from './scenes/geography'
import Calendar from './scenes/calendars'

function App() {
  const [theme, colorMode] = useMode()
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <div className="app">
            <Sidebar />
            <main className="content">
              <TopBar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contact" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/barChart" element={<Bar />} />
                <Route path="/form" element={<Form />} />
                <Route path="/lineChart" element={<Line />} />
                <Route path="/pieChart" element={<Pie />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/geography" element={<Geography />} />
                <Route path="/calendar" element={<Calendar />} />
              </Routes>
            </main>
          </div>
        </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
