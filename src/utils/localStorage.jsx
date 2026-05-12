// localStorage.clear()
const employees = [
    {
        id: 101,
        firstName: "Shaik Aftab",
        email: "aftab1@example.com",
        password: "123",

        taskNumber: 3,
        taskStats: {
            active: 0,
            newTask: 0,
            completed: 0,
            failed: 0
        },

        tasks: []
    },

    {
        id: 102,
        firstName: "Ahmad",
        email: "aftab2@example.com",
        password: "123",

        taskNumber: 3,
        taskStats: {
            active: 0,
            newTask: 0,
            completed: 0,
            failed: 0
        },

        tasks: []
    }
]

const admin = [
    {
        id: 1,
        firstName: "Aftab",
        email: "admin@aftab.com",
        password: "123"
    },
    {
        id: 2,
        firstName: "R.Ali",
        email: "ali@admin.com",
        password: "1234"
    }
]
export const setLocalStorage = () => {

    localStorage.setItem(
        'employees',
        JSON.stringify(employees)
    )

    localStorage.setItem(
        'admin',
        JSON.stringify(admin)
    )

}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees')) || []
    const admin = JSON.parse(localStorage.getItem('admin')) || []

    return { employees, admin }
}