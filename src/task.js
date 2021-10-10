import React from "react";
import humanizeDuration from "humanize-duration";
export function Task({ task, onChange }) {
  return (
    <label className="task">
      {task.name},{" "}
      {humanizeDuration(new Date(task.date).valueOf() - Date.now())}
      <input type="checkbox" checked={task.checked} onChange={onChange} />
    </label>
  );
}