import{_ as d,o as u,c,a as m,d as s,e as i,v as l,f as p,F as f}from"./index-e2563998.js";const{VITE_APP_URL:_}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"ching",BASE_URL:"/vue-week6/",MODE:"production",DEV:!1,PROD:!0},h={data(){return{user:{username:"",password:""}}},methods:{login(){this.$http.post(`${_}/admin/signin`,this.user).then(o=>{alert(o.data.message);const{token:e,expired:a}=o.data;document.cookie=`hexschool=${e}; expires=${new Date(a)}`,this.$router.push("/admin/products")}).catch(o=>{alert(o.response.data.message)})}}},w={id:"form",class:"form-signin"},g={class:"form-floating mb-3"},x=s("label",{for:"username"},"Email address",-1),P={class:"form-floating"},v=s("label",{for:"password"},"Password",-1);function V(o,e,a,b,r,n){return u(),c(f,null,[m(" 這是登入頁面 "),s("form",w,[s("div",g,[i(s("input",{type:"email",class:"form-control",id:"username",placeholder:"name@example.com",required:"",autofocus:"","onUpdate:modelValue":e[0]||(e[0]=t=>r.user.username=t)},null,512),[[l,r.user.username]]),x]),s("div",P,[i(s("input",{type:"password",class:"form-control",id:"password",placeholder:"Password",required:"","onUpdate:modelValue":e[1]||(e[1]=t=>r.user.password=t)},null,512),[[l,r.user.password]]),v]),s("button",{class:"btn btn-lg btn-primary w-100 mt-3",type:"submit",onClick:e[2]||(e[2]=p((...t)=>n.login&&n.login(...t),["prevent"]))},"登入")])],64)}const k=d(h,[["render",V]]);export{k as default};
