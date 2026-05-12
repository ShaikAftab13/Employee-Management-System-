import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

function TaskList({ data }) {

    return (
        <div id='tasklist' className='w-full mt-10 px-4 sm:px-6 lg:px-10'>

            <div className='flex gap-4 sm:gap-5 overflow-x-auto pb-4 scroll-smooth'>

                {data?.tasks?.map((task) => {

                    if (task.newTask) {
                        return (
                            <NewTask
                                key={task.id}
                                data={task}
                                employee={data}
                            />
                        )
                    }

                    if (task.active) {
                        return (
                            <AcceptTask
                                key={task.id}
                                data={task}
                                employee={data}
                            />
                        )
                    }

                    if (task.completed) {
                        return (
                            <CompleteTask
                                key={task.id}
                                data={task}
                                employee={data}
                            />
                        )
                    }

                    if (task.failed) {
                        return (
                            <FailedTask
                                key={task.id}
                                data={task}
                                employee={data}
                            />
                        )
                    }

                    return null
                })}

            </div>
        </div>
    )
}

export default TaskList