/**

 * @file login.js 
 * @author Teleaga Alexandru - student master RCC, grupa 31111a
 * @date 30.05.2018
 * @description Fisierul este folosit la login-ul paginii HTML
 * @function validare
 * @param username {var} stocare username
 * @param password {var} stocare password
 * @description Functia validare testeaza user si parola introdusa de catre utilizator
 * @return In cazul in care conditia se indeplineste se face redirectarea catre pagina principala
 * In caz contrar se returneaza un mesaj de eroare de autentificare
 */
 
function validate(){
    var username = document.getElementById("username").value; //preluăm username
    var password = document.getElementById("password").value; //preluăm parolă
    if ( username == "Alex" && password == "admin"){ //dacă user-ul şi parola corespund cu "Alex" şi "admin"
        alert ("Logare cu succes!"); //alertă de succes
        location = "index.html"; // Pagina de redirectare
        return false; //return
    }
    else
    {
        alert ("Logare eşuată!!!"); //alertă pentru eşuare
    }
}