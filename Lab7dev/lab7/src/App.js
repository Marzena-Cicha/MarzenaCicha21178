import ClickCounter from "./ClickCounter";
import PrimeCalculator from "./PrimeCalculator";
import FormReducer from "./FormReducer";
import { ThemeProvider } from "./ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher";
import LayoutEffectExample from "./LayoutEffectExample";

function App() {
  return (
    <div>
      <ClickCounter />
      <PrimeCalculator />
      <FormReducer />

      <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider>

      <LayoutEffectExample />
    </div>
  );
}

export default App;
