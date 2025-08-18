fetch('header.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('header').innerHTML = data;
});
fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
        const correctPin = ['8', '9', '3'];
        let inputPin = [];
        document.querySelectorAll('#pinPad button').forEach(btn => {
            btn.addEventListener('click', () => {
                inputPin.push(btn.textContent);
                btn.classList.add('active');
                if (inputPin.length === correctPin.length) {
                    if (inputPin.join('') === correctPin.join('')) {
                        const contactContainer = document.getElementById('contactContainer');
                        const user = String.fromCharCode(...[100,99,97,119,107,100,116,114,97,100,105,111,115,116,97,116,105,111,110]);
                        const domain = String.fromCharCode(...[119,101,115,116,112,111,105,110,116,46,101,100,117]);
                        const email = `${user}@${domain}`;
                        const phoneChars = [40,48,48,48,41,32,48,48,48,45,48,48,48,48];
                        const phonePretty = String.fromCharCode(...phoneChars);
                        const phoneDigits = phonePretty.replace(/\D/g, '');
                        [['Email', `mailto:${email}`, email], ['Phone', `tel:${phoneDigits}`, phonePretty]].forEach(([label, href, text]) => {
                            const li = document.createElement('li');
                            li.textContent = `${label}: `;
                            const a = document.createElement('a');
                            a.href = href;
                            a.textContent = text;
                            li.appendChild(a);
                            contactContainer.appendChild(li);
                        });
                        document.getElementById('CAPTCHA').remove();
                    } else {
                        inputPin = [];
                        document.querySelectorAll('#pinPad button').forEach(b => b.classList.remove('active'));
                    }
                }
            });
        });
    })
fetch('radioPopout.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('radioPopout').innerHTML = data;
});
window.onscroll = function() {
    checkHeader();
    document.getElementById("radioPopoutToggle").classList.add("rotate");
    document.getElementById("radioPopout").classList.add("radioPopoutOffscreen");
};
function checkHeader() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        shrinkHeader();
    } else {
        growHeader();
    }
}
function shrinkHeader() {
    document.getElementsByClassName("headImage")[0].classList.add("shrink");
    document.getElementsByClassName("parentImage")[0].classList.add("shrink");
}
function growHeader() {
    document.getElementsByClassName("headImage")[0].classList.remove("shrink");
    document.getElementsByClassName("parentImage")[0].classList.remove("shrink");
}
function togglePopout() {
    document.getElementById("radioPopoutToggle").classList.toggle("rotate");
    document.getElementById("radioPopout").classList.toggle("radioPopoutOffscreen");
}
function dropdown() {
    document.getElementsByClassName("nav-menu")[0].classList.toggle("dropdown");
    shrinkHeader();
}
