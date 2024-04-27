var xhr = new XMLHttpRequest();
xhr.open('GET', 'student.json', true);
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var jsonData = JSON.parse(xhr.responseText);
        let userName = document.querySelector(".input100");
        let pas = document.getElementById("pas");
        let button = document.querySelector(".login100-form-btn");
        button.addEventListener("click", () => {
            let found = false;
            for (let i = 0; i < Object.keys(jsonData.level3).length; i++) {
                let user = jsonData.level3[`user${i+1}`];
                if (user && user.username === userName.value.trim() && user.password === pas.value.trim()) {
                    window.localStorage.setItem("name", JSON.stringify(user.name));
                    window.localStorage.setItem("group", JSON.stringify(user.group));
                    window.localStorage.setItem("password", JSON.stringify(user.password));
                    window.localStorage.setItem("username", JSON.stringify(user.username));   
                    window.alert(`مرحبا بعودتك يا ${user.name}`);
                    window.open("mm.html");
                    window.close("index.html");
                    found = true;
                    break;
                }
            }
            if (!found) {
                window.alert("كلمة المرور غير صحيحة");
            }
        });
    }
};
xhr.send();
