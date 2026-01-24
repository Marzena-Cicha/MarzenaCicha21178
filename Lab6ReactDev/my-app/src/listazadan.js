import React, { useState } from 'react';
const tasks = [
 { id: 1, title: 'Zadanie 1', completed: true },
 { id: 2, title: 'Zadanie 2', completed: false },
 { id: 3, title: 'Zadanie 3', completed: true },
 { id: 4, title: 'Zadanie 4: Przygotowanie obiadu', completed: true },
 { id: 5, title: 'Zadanie 5: Karmienie zwierząt domowych', completed: true },
 { id: 6, title: 'Zadanie 6: Mycie samochodu', completed: false },
 { id: 7, title: 'Zadanie 7: Pranie', completed: false },
 { id: 8, title: 'Zadanie 8: Odkurzanie', completed: true },
 { id: 9, title: 'Zadanie 9: Podlewanie kwiatków', completed: false },
];
function TaskList() {
 const [filter, setFilter] = useState('all');
 const filteredTasks = tasks.filter(task => {
 if (filter === 'all') return true;
 return filter === 'completed' ? task.completed :
!task.completed;
 });
 return (
 <div>
 <select onChange={e => setFilter(e.target.value)}>
 <option value="all">Wszystkie</option>
 <option value="completed">Ukończone</option>
 <option
value="incomplete">Nieukończone</option>
 </select>
 <ul>
 {filteredTasks.map(task => (
 <li key={task.id}>{task.title}</li>
 ))}
 </ul>
 </div>
 );
}
export default TaskList;