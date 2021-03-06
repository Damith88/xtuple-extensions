/*jshint bitwise:true, indent:2, curly:true eqeqeq:true, immed:true,
latedef:true, newcap:true, noarg:true, regexp:true, undef:true,
trailing:true white:true*/
/*global XT:true, XV:true, enyo:true*/

(function () {

  XT.extensions.timeExpense.initPostbooks = function () {
    var relevantPrivileges,
      projectPanels,
      setupPanels;

    // ..........................................................
    // APPLICATION
    //

    setupPanels = [
      {name: "departmentList", kind: "XV.DepartmentList"},
      {name: "expeneseCategoryList", kind: "XV.ExpenseCategoryList"},
      {name: "shiftList", kind: "XV.ShiftList"}
    ];
    XT.app.$.postbooks.appendPanels("setup", setupPanels);

    projectPanels = [
      {name: "worksheets", kind: "XV.WorksheetList"},
      {name: "employees", kind: "XV.EmployeeList"},
      {name: "employeeGroups", kind: "XV.EmployeeGroupList"}
    ];

    XT.app.$.postbooks.appendPanels("project", projectPanels);
    
    relevantPrivileges = [
      "MaintainDepartments",
      "MaintainEmployees",
      "MaintainShifts",
      "ViewEmployees",
      "MaintainTimeExpenseOthers",
      "MaintainTimeExpenseSelf",
      "MaintainTimeExpense",
      "CanViewRates",
      "MaintainEmpCostAll",
      "MaintainEmpCostSelf",
      "CanApprove",
      "allowInvoicing",
      "allowVouchering",
      "PostTimeSheets",
      "ViewTimeExpenseHistory"
    ];
    XT.session.addRelevantPrivileges("setup", relevantPrivileges);

  };

}());
