import React from "react";
import SignUp from "@/pages/SignUp";
import Login from "@/pages/Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter([
 {
  path: "/",
  element: <SignUp/>,
 },
 {
  path: "/login",
  element: <Login/>,
 },
]);

const Wrapper = () => {
 const queryClient = new QueryClient();
 return (
  <>
   <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}></RouterProvider>
   </QueryClientProvider>
  </>
 );
};

export default Wrapper;