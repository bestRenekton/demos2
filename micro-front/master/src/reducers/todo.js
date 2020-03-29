let initialStgate = {
    num: 11,
}

const todos = (state = initialStgate, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return { ...state, num: state.num + 1 }
            break;
        // case 'ADD_TODO':
        //     if(state.input){
        //         let {list,input}= state;
        //         let index=list.length+1;
        //         list=list.concat({ id: index, title: input, status: 1 })
        //         return { ...state,list} 
        //     }else{
        //         alert('不能为空')
        //         return state
        //     }
        //     break;
        // case 'TOGGLE_TODO':
        //     let {id, status}=action;
        //     let list=JSON.parse(JSON.stringify(state.list));

        //     list.find(data=>data.id==id).status=status;
        //     return {...state,list}
        default:
            return state
    }
}

export default todos