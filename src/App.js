import React, { useState } from "react"

import "./App.css"
import GoalList from "./components/GoalList/GoalList"
import NewGoal from "./components/NewGoals/NewGoal"

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { id: "cg1", text: "Finish the Course" },
    { id: "cg2", text: "Learn all about Course Main Topic" },
    { id: "cg3", text: "Help other students in the Course O&A" }
  ])
  const addNewGoalHandler = newGoal => {
    // use prevCourseGoals to make sure that React update state in the right order that depend on the previous state
    // setCourseGoals(courseGoals.concat(newGoal))
    setCourseGoals(prevCourseGoals => {
      return prevCourseGoals.concat(newGoal)
    })
  }

  return (
    <div className='course-goals'>
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  )
}

export default App
