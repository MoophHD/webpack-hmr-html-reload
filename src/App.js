import './scss/main.scss'
if (process.env.NODE_ENV !== 'production') {
    require('./index.html');
}

if (module.hot) {
    module.hot.accept()
  }