fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => {
        // Guardamos los datos en constantes
        const userIdVal = json.userId;
        const idVal = json.id;
        const titleVal = json.title;
        const completedVal = json.completed;

        // "Empujamos" las constantes al HTML usando los IDs
        document.getElementById('userid').textContent = userIdVal;
        document.getElementById('id1').textContent = idVal;
        document.getElementById('title').textContent = titleVal;
        document.getElementById('completed').textContent = completedVal ? "Sí ✅" : "No ❌";

        console.log("Datos cargados en el HTML");
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('title').textContent = "Error al cargar datos";
    });