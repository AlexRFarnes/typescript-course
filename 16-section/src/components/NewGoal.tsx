export default function NewGoal() {
  return (
    <form>
      <p>
        <label htmlFor="goal">Your new goal</label>
        <input type="text" placeholder="Your new goal" id="goal" />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <input type="text" placeholder="Describe your goal" id="description" />
      </p>
      <p>
        <button type="submit">Add Goal</button>
      </p>
    </form>
  );
}
