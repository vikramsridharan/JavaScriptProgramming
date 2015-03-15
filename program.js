var MYAPP = {};
//Comment
MYAPP.employee = {
  first_name: "Vikram",
  last_name: "Sridharan",
  age: 28,
  salary: 40000,
  increment: function(val) {
    var that = this;
    this.salary += typeof val === 'number' ? val : 10000;
    var print_salary = function() {
      document.writeln('Salary: ' + that.salary + ' after incrementing ' + val);
    };
    print_salary();
  }
};
MYAPP.employee.increment(10000);
/*for ( MYAPP.p in MYAPP.employee ) {
  if ( typeof MYAPP.employee[MYAPP.p] !== 'function' ) {
    document.writeln(MYAPP.p + ': ' + MYAPP.employee[MYAPP.p]);
  }
}*/

