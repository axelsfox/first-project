export default {
    install(Vue){
        if(this.installed) {
            return
        }
    
        this.installed = true;

        Vue.prototype.$modal = {
            EvenBus: new Vue(),

            show(name, settings){
                this.EvenBus.$emit('show', {name, settings})
               
            },
            hide(){
                this.EvenBus.$emit('hide');
            }

        }
    }
}