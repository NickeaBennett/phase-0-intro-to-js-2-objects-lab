// Write your solution in this file!
const employee = {
    name: "",
    streetAddress: "",
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const employeeUpdate = {...employee};
    employeeUpdate[key] = value;
    return employeeUpdate;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    const employeeHardUpdate = (employee);
    employeeHardUpdate[key] = value;
    return employeeHardUpdate;
}
function deleteFromEmployeeByKey(employee, key) {
    const deletEmployeeKey = {...employee};
    delete deletEmployeeKey[key];
    return deletEmployeeKey;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    const hardDeleteKey = employee;
    delete hardDeleteKey[key];
    return hardDeleteKey;
}
