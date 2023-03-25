import { Header, Products, Summary } from "./components";

function App() {
  return (
    <div className="grid grid-cols-3 gap-5 w-[1020px] mx-auto py-10">
      <Header />
      <Products />
      <Summary />
    </div>
  );
}

export default App;
