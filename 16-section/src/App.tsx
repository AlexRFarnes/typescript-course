import { useState } from "react";
import { type Goal } from "./components/CourseGoals.tsx";
import Header from "./components/Header.tsx";
import image from "./assets/goals.jpg";
import CourseGoals from "./components/CourseGoals.tsx";
import NewGoal from "./components/NewGoal.tsx";

function App() {
  const [goals, setGoals] = useState<Goal[]>([
    {
      id: 1,
      title: "Learn React",
      description: "Learn React to build web applications",
    },
    {
      id: 2,
      title: "Learn TypeScript",
      description: "Learn TypeScript to build web applications",
    },
    {
      id: 3,
      title: "Learn Python",
      description: "Learn Python to build web applications",
    },
  ]);

  const handleDeleteGoal = (id: number) => {
    setGoals(prevGoals => prevGoals.filter(goal => goal.id !== id));
  };

  const handleAddGoal = (goal: string, description: string) => {
    setGoals(prevGoals => [
      ...prevGoals,
      { id: prevGoals.length + 1, title: goal, description: description },
    ]);
  };

  return (
    <main>
      <Header image={{ src: image, alt: "A list of goals" }}>
        <h1>Your Learning Goals</h1>
      </Header>
      <CourseGoals goals={goals} onDelete={handleDeleteGoal} />
      <NewGoal onAddGoal={handleAddGoal} />
    </main>
  );
}

export default App;
