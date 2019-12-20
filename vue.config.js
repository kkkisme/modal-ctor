module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/modal-ctor/dist/'
    : '/'
}
