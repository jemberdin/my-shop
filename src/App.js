import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { Home, About, Cart, Products, SingleProduct, Error, Checkout, Auth } from './pages';

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about' >
          <About />
        </Route>
        <Route path='/auth'>
          <Auth />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
        <Route exact path='/products'>
          <Products />
        </Route>
        <Route path='/products/:id' children={<SingleProduct />} />
        <Route path='/checkout' >
          <Checkout />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
