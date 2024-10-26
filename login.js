
function validateForm() { 
    let email = document.getElementById('email').value; 
    let password = document.getElementById('password').value; 
    let errorMsg = ''; // Validar que el campo de email no esté vacío y sea válido 
    if (email === '') { 
        errorMsg += 'El campo de email es obligatorio.\n'; 
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) { 
        errorMsg += 'Por favor, ingrese un email válido.\n'; } 
        
        // Validar que el campo de contraseña no esté vacío 
        if (password === '') { 
            errorMsg += 'El campo de contraseña es obligatorio.\n'; 
        } 
        
        // Mostrar los mensajes de error si hay 
        if (errorMsg !== '') { 
            document.getElementById('error-message').innerText = errorMsg; 
            return false; // No enviar el formulario si hay errores } 
            
            //return true; // Enviar el formulario si todo está correcto 
        }

        // Si la validación es exitosa, redigir al la pagina de "envia flores"
        window.location.href = "index.html";
        return false;
}