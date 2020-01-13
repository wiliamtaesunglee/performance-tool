mport { useState, useEffect } from 'react';

import { firebase } from '../firebase';

const collatedTasksExist = () => {};

export const useTasks = selectedProject => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection('tasks')
      .where('userId', '==', 'Lv90Lp6GYAKadcJo9m');

    unsubscribe = selectedProject && !collatedTasksExist(selectedProject)
      ? (unsubscribe = unsubscribe.where('projectId', '==', selectedProject))
      : selectedProject == 'TODAY'
      ? (unsubscribe = unsubscribe.where(
        'date',
        '==',
        moment().format('DD/MM/YYYY')
      ))
      : selectedProject == 'INBOX' || selectedProject == 0
      ? (unsubscribe = unsubscribe.where('date', '==', ''))
      : unsubscribe;
  }, [selectedProject])
}
