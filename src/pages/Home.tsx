import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task
    const task:Task = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    }

    setTasks(oldState => [...oldState, task])
  }

  function handleToggleTaskDone(id: number) {
    //TODO - toggle task done if exists
    let new_task_tobble: Task[] | undefined = tasks.map(task => ({ ...task }));
    new_task_tobble.find(task => task.id === id)!.done = true;
 
    setTasks(new_task_tobble);
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    let new_tasks_list = tasks.filter(task => task.id !== id);
    setTasks(new_tasks_list);
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})