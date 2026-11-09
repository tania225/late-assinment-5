import toast from "react-hot-toast";
import "./App.css";

function App() {
 

  return (
    <div>
      <h1 className="bg-blue-500 or text-xl">hellow react</h1>
      <h2 onclick={() => toast('hellow')} >navbar</h2>
      <body>body</body>
      <h4>Footer</h4>
      {/* <Toaster /> */}
    </div>
  )
}

export default App
