import { Task } from "@/state/api";
import React from "react";
import { format } from "date-fns";
import Image from "next/image";

type Props = {
  task: Task;
};

const TaskCard = ({ task }: Props) => {
  return (
    <div className="mb-3 flex flex-col gap-2 rounded-3xl bg-white p-4 shadow hover:bg-gray-200 hover:shadow-xl dark:bg-dark-seconday dark:text-white dark:hover:bg-dark-bg">
      {task.attachments && task.attachments.length > 0 && (
        <div>
          <strong>Attachments:</strong>
          <div className="flex flex-wrap">
            {task.attachments && task.attachments.length > 0 && (
              <Image
                src={`/${task.attachments[0].fileURL}`}
                alt={task.attachments[0].fileName}
                width={400}
                height={200}
                className="my-2 rounded-md"
              />
            )}
          </div>
        </div>
      )}
      <p className="text-base">
        <strong>Task ID:</strong> {task.id}
      </p>
      <p className="text-base">
        <strong>Title:</strong> {task.title}
      </p>
      <p className="text-base">
        <strong>Description:</strong>{" "}
        {task.description || "No Description provided."}
      </p>
      <p className="text-base">
        <strong>Status:</strong> {task.status}
      </p>
      <p className="text-base">
        <strong>Priority:</strong> {task.priority}
      </p>
      <p className="text-base">
        <strong>Tags:</strong> {task.tags || "No Tags"}
      </p>
      <p className="text-base">
        <strong>Start Date:</strong>{" "}
        {task.startDate ? format(new Date(task.startDate), "P") : "Not Set"}
      </p>
      <p className="text-base">
        <strong>Due Date:</strong>{" "}
        {task.dueDate ? format(new Date(task.dueDate), "P") : "Not Set"}
      </p>
      <p className="text-base">
        <strong>Author:</strong>{" "}
        {task.author ? task.author.username : "Unknown"}
      </p>
      <p className="text-base">
        <strong>Assignee:</strong>{" "}
        {task.assignee ? task.assignee.username : "Unassigned"}
      </p>
    </div>
  );
};

export default TaskCard;
