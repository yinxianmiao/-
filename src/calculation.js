import { reactive } from 'vue'

function calculation(list){
  let state2 = reactive({
    stu:{
      id:"",
      name:"",
      age:""
    }
  });

  function addStu(e){
    e.preventDefault();
    // const stu = Object.assign({},state2.stu);
    list.stus.push(state2.stu);
    state2.stu = {};
  }

  return{state2,addStu}
}

export default calculation;