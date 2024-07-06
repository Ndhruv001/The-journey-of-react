//rrd library
import { RouterProvider, createBrowserRouter } from "react-router-dom"

//Layout
import Main , { mainLoader } from "./Layout/Main"

//pages
import Error from "./pages/Error";
import Dashboard, { dashboardAction, dashboardLoader } from "./pages/Dashboard";
import Expenses, { expenseAction, expenseLoader } from "./pages/Expenses";
import BudgetPage, { budgetAction, budgetLoader } from "./pages/BudgetPage";

//actions 
import { logoutAction } from "./actions/logout";
import { deleteBudget } from "./actions/deleteBudget";

//react-toastify library
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const router = createBrowserRouter([
  {
    path : '/',
    element : <Main/>,
    loader : mainLoader,
    errorElement : <Error/>,
    children : [
      {
        index : true ,
        element : <Dashboard/>,
        loader : dashboardLoader,
        action : dashboardAction,
        errorElement : <Error/>
      },
      {
        path : "expenses",
        element : <Expenses/>,
        loader : expenseLoader,
        action : expenseAction,
        errorElement : <Error/>
      },
      {
        path : "budget/:id",
        element : <BudgetPage/>,
        loader : budgetLoader,
        action : budgetAction,
        errorElement : <Error/>,
        children : [
          {
            path : 'delete',
            action : deleteBudget,
          }
        ]
      },
      {
        path : 'logout',
        action : logoutAction,
        errorElement : <Error/>
      },
    ]
  }
])

function App() {

  return (
    <div className="App">
      <RouterProvider  router={router} />
      <ToastContainer/>
    </div>

  )
}

export default App
