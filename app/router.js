import EmberRouter from '@ember/routing/router';
import config from 'tds/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('index', { path: '/' });
  this.route('board');
  this.route('logout');
  this.route('order', { path: 'order/:order_id' });
  this.route('section', function () {
    this.route('add');
    this.route('delete', { path: 'delete/:section_id' });
    this.route('edit', { path: 'edit/:section_id' });
    this.route('products', { path: 'products/:section_id' , function(){
        this.route('addproduct',{path:'addproduct/:section_id'});
      } });
    this.route('addproduct');
  });
  this.route('product', function () {
    this.route('addproduct');
  });
  this.route('myOrders');
});
