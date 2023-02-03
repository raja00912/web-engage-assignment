document.getElementById("submit_btn").addEventListener("click", () => {
    event.preventDefault()
    let email = document.getElementById("emailbox").value
    let num = document.getElementById("numberInput").value
    let code = document.getElementById("select_box").value
    let obj = {
        email: email,
        number: num,
        country: code,
    }
    let flag = false;
    for (let i = 0; i < email.toString().length; i++) {
        if (email[i] == '@') {
            flag = true;
        }
    }
    if (!flag) {
        alert("Enter valid email");
    }
    if (num.toString().length != 10) {
        alert("Enter valid mobile number")
    }
    if (num.toString().length == 10 && flag) {
        localStorage.setItem("userdata", JSON.stringify(obj));
        location.href = "thankyou.html"
    }
})