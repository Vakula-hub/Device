    var link = document.querySelector(".login-link");
    var popup = document.querySelector(".modal-login");
    var overlay = document.querySelector(".modal-overlay");
    var close = document.querySelector(".modal-close");
    var login = popup.querySelector("[name=login]");
    var password = popup.querySelector("[name=password]");
    var form = popup.querySelector("form");
    var isStorageSupport = true;
    var storage = " "

    try {
        storage = localStorage.getItem("login");
        } catch (err) {
            isStorageSupport = false;
        }
    
        link.addEventListener("click", function (evt) {
        evt.preventDefault();
        console.log ("Клик по ссылке вход");
        popup.classList.add("modal-show");
        overlay.classList.add("modal-show");
        
        if (storage) {
            login.value = storage;
        } else {
            login.focus();
        }
    });

    close.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.remove("modal-show");
        overlay.classList.remove("modal-show");
        popup.classList.remove("modal-error");
    });
    
    form.addEventListener("submit", function(evt) {
        if (!login.value || !password.value) {
            evt.preventDefault();
            popup.classList.remove("modal-error");
            popup.offsetWidth = popup.offsetWidth;
            popup.classList.add("modal-error");
        } else {
            localStorage.setItem("login", login.value);
        }
    });
    window.addEventListener("keydown", function(evt) {
        if (evt.keyCode === 27) {
            evt.preventDefault();
            if (popup.classList.contains("modal-show")) {
                popup.classList.remove("modal-show");
            }
            if (overlay.classList.contains("modal-show")) {
                overlay.classList.remove("modal-show");
            }
        }
    });

    var mapLink = document.querySelector(".big-map");
    var mapPopup = document.querySelector(".modal-map");
    var mapOverlay = document.querySelector(".modal-overlay");
    var mapClose = mapPopup.querySelector(".modal-close");

    mapLink.addEventListener("click", function (evt) {
        evt.preventDefault();
        mapPopup.classList.add("modal-show");
        mapOverlay.classList.add("modal-show");
    });
    mapClose.addEventListener("click", function (evt) {
        evt.preventDefault();
        mapPopup.classList.remove("modal-show");
        mapOverlay.classList.remove("modal-show");
    });
    window.addEventListener("keydown", function(evt) {
        if (evt.keyCode === 27) {
            evt.preventDefault();
            if (mapPopup.classList.contains("modal-show")) {
                mapPopup.classList.remove("modal-show");
            }
            if (mapOverlay.classList.contains("modal-show")) {
                mapOverlay.classList.remove("modal-show");
            }
        }
    });