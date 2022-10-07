import React from 'react';
import './TaskListLoader.css';

const TaskList = () => {
  return (
    <div className="task-container">
      <li className="TodoItem-loading">
        <div className="LoaderBalls">
          <span className="LoaderBalls__item"></span>
          <span className="LoaderBalls__item"></span>
          <span className="LoaderBalls__item"></span>
        </div>
      </li>
    </div>
  );
};
export { TaskList };
