/* eslint-disable */
export default function createIteratorObject(report) {
   let employee = [];
   for (let [depts, emplys] of Object.entries(report.allEmployees)){
        for (let emp of emplys){
            employee.push(emp);
        }
   }
   return employee;
}
