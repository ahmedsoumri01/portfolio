import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
  
  import RootLayout from "./layouts/RootLayout";
  import Home from "./pages/Home";
  import Login from "./pages/auth/Login";
  import Resetpassword from "./pages/auth/Resetpassword";
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/resetpassword" element={<Resetpassword />} />

     
  
      </Route>
    )
  );
  
  export default router;