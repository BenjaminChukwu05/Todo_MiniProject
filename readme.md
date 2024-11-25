# **Todo List App with API Integration**

## **Project Overview**

The **Todo List App** is a simple, interactive web application that lets users:
1. Fetch and display a list of tasks (todos) from an external API.
2. Add new tasks to the list.
3. Mark tasks as completed.
4. Delete tasks, either individually or all at once.

This app uses **vanilla JavaScript** and focuses on teaching the following concepts:
- API integration with `fetch()`.
- Dynamic DOM manipulation.
- Event delegation and handling.
- CRUD (Create, Read, Update, Delete) operations on tasks.

---

## **Features**

### **1. Fetch Todos from API**
- The app retrieves tasks from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/todos), which provides mock data for testing.
- It limits the results to **10 tasks** using a query parameter in the URL: `?_limit=10`.

### **2. Add New Todos**
- Users can add new tasks to the list by typing in the input field and submitting the form.
- The app sends the new task to the API using a `POST` request, ensuring it’s stored.

### **3. Mark Tasks as Completed**
- Clicking on a task toggles its "completed" state (e.g., from incomplete to done).
- This visual change is achieved using CSS classes.

### **4. Delete Tasks**
- **Single Task Deletion**:
  - Double-clicking a task deletes it from both the DOM and the API using a `DELETE` request.
- **Potential Enhancement**:
  - Add a "Clear All" button to remove all tasks at once.

---

## **How It Works**

### **Step-by-Step Explanation**

1. **Fetching Todos**:
   - The `getTodos()` function fetches the first 10 tasks from the API using:
     ```javascript
     fetch(apiURL + '?_limit=10')
       .then((response) => response.json())
       .then((data) => {
         data.forEach((todo) => addTodoToDOM(todo));
       });
     ```
   - The data is processed into individual task elements and displayed dynamically.

2. **Adding New Tasks**:
   - The `createTodo()` function listens for form submissions and sends a `POST` request:
     ```javascript
     fetch(apiURL, {
       method: 'POST',
       body: JSON.stringify(newTodo),
       headers: {
         'Content-Type': 'application/json',
       },
     })
       .then((response) => response.json())
       .then((data) => addTodoToDOM(data));
     ```
   - After a task is added, it’s appended to the DOM.

3. **Marking Tasks as Completed**:
   - Clicking a task toggles its "done" class using:
     ```javascript
     e.target.classList.toggle('done');
     updateTodo(e.target.dataset.id, e.target.classList.contains('done'));
     ```
   - The state is updated in the API with a `PUT` request.

4. **Deleting Tasks**:
   - Double-clicking a task triggers the `deleteTodo()` function, which sends a `DELETE` request:
     ```javascript
     fetch(`${apiURL}/${id}`, { method: 'DELETE' })
       .then(() => e.target.remove());
     ```

---

## **Why I Did What I Did**

1. **API Integration**:
   - Using `fetch()` to work with external APIs is an essential skill for dynamic web development.
   - JSONPlaceholder provides a mock API, making it ideal for practice.

2. **Dynamic DOM Manipulation**:
   - The app dynamically creates, updates, and deletes elements, reflecting changes in real-time.

3. **Event Delegation**:
   - Efficiently handles events on multiple dynamic elements, such as tasks.

4. **Reusability**:
   - Functions like `addTodoToDOM()` and `updateTodo()` are modular and reusable.

---

## **Challenges and Solutions**

1. **Issue**: Errors when elements were not found in the DOM.
   - **Solution**: Ensure the script runs after the DOM is fully loaded using:
     ```javascript
     document.addEventListener('DOMContentLoaded', init);
     ```

2. **Issue**: Typos like `toogle` and `dbclick`.
   - **Solution**: Fixed these to `toggle` and `dblclick`.

3. **Issue**: Tasks not rendering due to invalid HTML structure.
   - **Solution**: Verified the HTML includes required IDs like `todo-form` and `todo-list`.

---

## **Future Enhancements**

1. **Search and Filter**:
   - Add a search bar to filter tasks by keywords.

2. **Pagination**:
   - Fetch and display tasks in smaller chunks for better performance.

3. **Error Handling**:
   - Show user-friendly error messages when API requests fail.

4. **Offline Mode**:
   - Cache tasks locally using **localStorage** or **IndexedDB** for offline functionality.

5. **Responsiveness**:
   - Optimize styles for mobile devices.

---

## **How to Run**

1. Clone the repository:
   ```bash
   git clone https://github.com/BenjaminChukwu05/todo-app.git
   ```
2. Open the `index.html` file in your browser.

3. Enjoy managing your tasks!
