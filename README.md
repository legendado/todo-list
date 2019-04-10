# TODO-app
* Test task: TODO-list by Alexey Dmitriev
* Using stack: Adonis.js + Vue.js + SQLite3
* Try it here: https://client-todo.herokuapp.com

## SQL Task:

### Given tables:

* Tasks (id, name, status, project_id)
* Projects (id, name)

### Technical requirements:

Get all statuses, not repeating, alphabetically ordered:
```sql
SELECT DISTINCT status FROM Tasks ORDER BY status
```

Get the count of all tasks in each project, order by tasks count descending:
```sql
SELECT p.name as [name], COUNT(t.id) as [count] FROM Projects as p LEFT JOIN Tasks as t ON t.project_id = p.id GROUP BY name ORDER BY count DESC
```

Get the count of all tasks in each project, order by project names:
```sql
SELECT COUNT(t.id), p.name FROM Tasks as t JOIN Projects as p ON p.id = t.project_id GROUP BY project_id ORDER BY p.name
```

Get the tasks for all projects having the name beginning with “N” letter:
```sql
SELECT t.name as [task], p.name as [project] FROM Tasks as t INNER JOIN Projects as p ON t.project_id = p.id WHERE p.name LIKE "N%" AND 
```

Get the list of all projects containing the “a” letter in the middle of the name, and show the tasks count near each project. Mention that there can exist projects without tasks and tasks with project_id=NULL:
```sql
SELECT p.name as [project], COUNT(t.id) as [count] FROM Projects as p LEFT JOIN Tasks as t on t.project_id = p.id WHERE p.name LIKE "%a%" AND p.name NOT LIKE "a%" AND p.name NOT LIKE "%a" GROUP BY project
```

Get the list of tasks with duplicate names. Order alphabetically:
```sql
SELECT name FROM Tasks GROUP BY name HAVING COUNT(*) > 1 ORDER BY name
```

Get the list of tasks having several exact matches of both name and status, from the project Garage. Order by matches count:
```sql
SELECT t.name, t.status, COUNT(*) as [count] FROM Tasks as t, Projects as p WHERE p.name="Garage" AND t.project_id = p.id GROUP BY t.name, t.status HAVING COUNT(*) > 1 ORDER BY [count]
```

Get the list of project names having more than 10 tasks in status completed. Order by project_id:
```sql
SELECT p.name FROM Projects as p WHERE p.id IN (SELECT t.project_id FROM Tasks as t Where t.status = 0 HAVING COUNT(*) > 10) ORDER BY p.id
