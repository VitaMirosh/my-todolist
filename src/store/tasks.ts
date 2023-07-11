export const sum = (salary:number,n:number)=>salary + n
export const sub = (salary:number,n:number)=>salary - n
export const din = (salary:number,n:number)=>salary/n
export const umn = (salary:number,n:number)=>salary*n

export type ActionType={
    type:"SUM" | "TEST" | "SUB" | "DIN" | "UMN",
    n:number
}

export type StateType = number


export const salaryReducer = (state:StateType, action:ActionType):StateType => {
 switch (action.type){
     case "SUM":
         return state + action.n
     case "SUB" :
         return state - action.n
     case "DIN":
         return state / action.n
     case "UMN":
         return state * action.n

     default:
 return state
 }

}