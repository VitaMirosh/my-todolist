import {ActionType, din, salaryReducer, StateType, sub, sum, umn} from "./tasks";


test("sum", () =>{
    //1.тестовые данные:
    const salary:number = 800
    const n: number = 200
    //2.выполнить тестируемый код:
    const result = sum(salary,n)
    //3.Проверка результата:
    expect(result).toBe(1000)

})

test ("sub", ()=>{
  expect(sub (1200,200)).toBe(1000)
})

test ("din",()=>{
    const salary:number=100
    const n:number=4
    const result=din(salary,n)
    expect(result).toBe(25)
})
 test ("umn",()=>{
     expect(umn(0,0)).toBe(0)
     expect(umn(4,4)).toBe(16)
 })

test ("case SUM salary reducer",()=>{
    const salary: StateType = 800
    const action:ActionType ={
        type:"SUM",
        n:200
    }
    const testAction:ActionType ={
        type:"TEST",
        n:200
    }
    const result = salaryReducer(salary,action)
    expect(result).toBe(1000)
    expect(salaryReducer(salary, testAction)).toBe(800)
})