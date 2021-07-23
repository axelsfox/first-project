export default {
    install(Vue){
        if(this.installed) {
            return
        }
    
        this.installed = true;

        Vue.prototype.$credact = {
            EventBus: new Vue(),

            show(id, settings){
                this.EventBus.$emit('show', {id, x, y, settings})
               
            },
            hide(){
                this.EventBus.$emit('hide');
            }

        }
    }
}