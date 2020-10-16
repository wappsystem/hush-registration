(function(){
    var modules={
        "registration-data": {url:"$H/m/registration-data.html",Table:"hush-registration",form_module:"registration-form",router:1},
        "registration-form": {url:"$H/m/registration-form.html",Table:"hush-registration"},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p];
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //if(window.location.toString().indexOf('tb=demo')!=-1){
        for(p in $vm.module_list){
            $vm.module_list[p].Table="demo-"+$vm.module_list[p].Table;
        }
    //}
})();
