const employeeCtrl = {};

employeeCtrl.getEmployees = (req, res) => {
    res.json({
        status: 'Employees goes here'
    })
}

module.exports = employeeCtrl;