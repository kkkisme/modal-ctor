import Vue from 'vue'

export const modalCtor = function(component) {
  let instance
  let destroy = () => {
    if(instance) {
      document.body.removeChild(instance.$el)
      instance = null
    }
  }
  return {
    create(options, cb) {
      if(typeof options === 'function') {
        cb = options
        options = {}
      }
      if(!instance) {
        const Ctor = Vue.extend(component)
        instance = new Ctor(options)
        instance.$mount()
        const owner = this
        if(owner && owner._isVue) {
          // eslint-disable-next-line no-console
          let d = owner.$options.beforeDestroy
          owner.$options.beforeDestroy = d ? Array.isArray(d) ? d.concat(destroy) : [d, destroy] : [destroy]
        }
        document.body.append(instance.$el)
      }

      Vue.nextTick(() => {
        if(options.propsData) {
          Object.keys(options.propsData).forEach(key => {
            instance.$props[key] = options.propsData[key]
          })
        }
        instance.visible = true
        cb(instance)
      })
    },
    destroy
  }
}
