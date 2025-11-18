import { type FormEvent, useRef } from "react";

type NewGoalProps = {
  onAddGoal: (goal: string, description: string) => void;
};

export default function NewGoal({ onAddGoal }: NewGoalProps) {
  const goalRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredGoal = goalRef.current!.value;
    const enteredDescription = descriptionRef.current!.value;

    // validation
    if (
      enteredGoal.trim().length === 0 ||
      enteredDescription.trim().length === 0
    ) {
      return;
    }

    onAddGoal(enteredGoal, enteredDescription);

    goalRef.current!.value = "";
    descriptionRef.current!.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your new goal</label>
        <input
          type="text"
          placeholder="Your new goal"
          id="goal"
          ref={goalRef}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          placeholder="Describe your goal"
          id="description"
          ref={descriptionRef}
        />
      </p>
      <p>
        <button type="submit">Add Goal</button>
      </p>
    </form>
  );
}
