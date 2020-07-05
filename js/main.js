'use strict';

const tasks = ['掃除','買い物','散歩'];

function todoList() {
  console.log('=========================');
  console.log('現在持っているタスク一覧');
  console.log('=========================');
  
  tasks.forEach((task, index) => {
    console.log(`${index}: ${task}`);
  });
}

todoList();

const addTask = prompt('タスクを入力してください');

if (addTask) {
  alert('新しいタクスを追加しました。');
  tasks.push(addTask);
  todoList();
  const input = prompt('「確認,追加,削除,終了」の4つのいずれかを入力してください');
}