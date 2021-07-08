import { reactive } from 'vue'

function useRem(){
  let list = reactive({
    stus:[
      {id:1,name:'1s'},
      {id:2,name:'2s'},
      {id:3,name:'3s'}
    ]
  });

  function remStu(index){
    list.stus = list.stus.filter((item,id) => id !==index)
  }

  return{list,remStu}
}

export default useRem;