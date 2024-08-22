document.addEventListener('DOMContentLoaded', () => {
    // Fonction pour afficher le tableau de bord après la connexion
    document.getElementById('loginForm').addEventListener('submit', function (e) {
        e.preventDefault();
        document.getElementById('login').style.display = 'none';
        document.getElementById('dashboard').style.display = 'flex';
        // Initialiser les statistiques ici si nécessaire
    });

    // Gestion des onglets
    document.querySelectorAll('.sidebar a').forEach(tabLink => {
        tabLink.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelectorAll('.tab-content').forEach(tabContent => {
                tabContent.classList.remove('active');
            });
            document.getElementById(this.getAttribute('data-tab')).classList.add('active');
        });
    });

    // Gestion des formulaires CRUD
    // Élèves
    document.getElementById('addStudentButton').addEventListener('click', () => {
        document.getElementById('addStudentFormContainer').style.display = 'block';
    });

    document.getElementById('addStudentForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('studentName').value;
        const firstName = document.getElementById('studentFirstName').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const matricule = document.getElementById('studentMatricule').value;
        const dob = document.getElementById('studentDOB').value;
        const studentClass = document.getElementById('studentClass').value;
        const phone = document.getElementById('studentPhone').value;
        const city = document.getElementById('studentCity').value;

        // Ajouter l'élève à la liste (simulation)
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${name}</td>
            <td>${firstName}</td>
            <td>${gender}</td>
            <td>${studentClass}</td>
            <td>${matricule}</td>
            <td>${dob}</td>
            <td>${phone}</td>
            <td>${city}</td>
            <td>
                <button class="edit">Modifier</button>
                <button class="delete">Supprimer</button>
            </td>
        `;
        document.getElementById('studentsList').appendChild(row);

        // Réinitialiser le formulaire
        this.reset();
        document.getElementById('addStudentFormContainer').style.display = 'none';
    });

    // Professeurs
    document.getElementById('addTeacherButton').addEventListener('click', () => {
        document.getElementById('addTeacherFormContainer').style.display = 'block';
    });

    document.getElementById('addTeacherForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('teacherName').value;
        const firstName = document.getElementById('teacherFirstName').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const matricule = document.getElementById('teacherMatricule').value;
        const subject = document.getElementById('teacherSubject').value;
        const phone = document.getElementById('teacherPhone').value;
        const city = document.getElementById('teacherCity').value;

        // Ajouter le professeur à la liste (simulation)
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${name}</td>
            <td>${firstName}</td>
            <td>${gender}</td>
            <td>${subject}</td>
            <td>${matricule}</td>
            <td>${phone}</td>
            <td>${city}</td>
            <td>
                <button class="edit">Modifier</button>
                <button class="delete">Supprimer</button>
            </td>
        `;
        document.getElementById('teachersList').appendChild(row);

        // Réinitialiser le formulaire
        this.reset();
        document.getElementById('addTeacherFormContainer').style.display = 'none';
    });

    // Utilisateurs
    document.getElementById('addUserButton').addEventListener('click', () => {
        document.getElementById('addUserFormContainer').style.display = 'block';
    });

    document.getElementById('addUserForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const pseudo = document.getElementById('userPseudo').value;
        const password = document.getElementById('userPassword').value;

        // Ajouter l'utilisateur à la liste (simulation)
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${pseudo}</td>
            <td>
                <button class="edit">Modifier</button>
                <button class="delete">Supprimer</button>
            </td>
        `;
        document.getElementById('usersList').appendChild(row);

        // Réinitialiser le formulaire
        this.reset();
        document.getElementById('addUserFormContainer').style.display = 'none';
    });

    // Gestion de la déconnexion
    document.getElementById('logoutButton').addEventListener('click', () => {
        document.getElementById('dashboard').style.display = 'none';
        document.getElementById('login').style.display = 'flex';
    });
});
