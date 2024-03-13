import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { Contact } from './pages/Contact';
import { CreateAccountClient } from './pages/CreateAccountClient';
import { CreateAccountSeller } from './pages/Create_Account_Seller';
import { AccountSelection } from './pages/Account_Selection';
import { CatalogueFlowerShops } from './pages/Catalogue_Flower_Shops';
import { MyAccount } from './pages/My_Account';
import { FlowerShopCreation } from './pages/Flower_Shop_Creation';
import { Login } from './pages/Login';
import { InventorySeller } from './pages/Inventory_Seller';
import { AddFlowerToInventory } from './pages/Add_FLower_To_Inventoty';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/Home',
    element: <Home/>,
  },
  {
    path: '/login',
    element: <Login/>
  },

  {
    path: '/Cart',
    element: <Cart/>,

  },
  {
    path: '/Contact',
    element: <Contact/>
  },
  {
    path: '/CreateAccountClient',
    element: <CreateAccountClient/>
  },
  {
    path: '/CreateAccountSeller',
    element: <CreateAccountSeller/>
  },
  {
    path: '/AccountSelection',
    element: <AccountSelection/>
  },
  {
    path: '/CatalogueFlowerShops',
    element: <CatalogueFlowerShops/>
  },
  {
  path: '/MyAccount',
  element: <MyAccount/>
  },
  {
    path: '/FlowerShopCreation',
    element: <FlowerShopCreation/>
  },
  {
    path: '/inventorySeller',
    element: <InventorySeller/>

  },
  {
    path: '/AddFlowerToInventory',
    element: <AddFlowerToInventory/>
  },


]);
const root = document.getElementById('root');
if (root) {
  const rootElement = createRoot(root);

  rootElement.render(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  );
} else {
  console.error("El elemento con id 'root' no fue encontrado en el DOM.");
}