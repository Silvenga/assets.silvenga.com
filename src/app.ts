function setupContent() {
    const phoneNumberText = "KDg1OCkgMjI1LTczODg=";
    const phoneNumberLink = "dGVsOjg1ODIyNTczODg=";
    let telTag = document.getElementById("tel") as HTMLAnchorElement;
    if (telTag) {
        telTag.textContent = atob(phoneNumberText);
        telTag.href = atob(phoneNumberLink);
    }

    const emailText = "bUBzaWx2ZW5nYS5jb20=";
    const emailLink = "bWFpbHRvOm1Ac2lsdmVuZ2EuY29t";
    let emailTag = document.getElementById("email") as HTMLAnchorElement;
    if (emailTag) {
        emailTag.textContent = atob(emailText);
        emailTag.href = atob(emailLink);
    }
}

function setupTag() {
    const urlParams = new URLSearchParams(window.location.search);
    const tag = urlParams.get('tag');

    if (tag) {
        let tagDiv = document.getElementById("tag");
        if (tagDiv) {
            tagDiv.textContent = tag;
            for (let element of document.getElementsByClassName("tag")) {
                element.classList.remove("hidden");
            }
        }
    }
}

setupContent();
setupTag();
