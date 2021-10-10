export function TaskForm({ task }) {
  /** @param {SubmitEvent} event */
  function submissionHandler(event) {
    event.preventDefault();
    task(
      event.target.elements.taskName.value,
      event.target.elements.date.value
    );
  }

  return (
    <form onSubmit={submissionHandler}>
      <label>
        Task Name:&nbsp;
        <input type="text" placeholder="Do the laundry" name="taskName"></input>
      </label>
      <br />
      <label>
        Date:&nbsp;<input type="date" name="date"></input>
      </label>
      <input type="submit"></input>
    </form>
  );
}
