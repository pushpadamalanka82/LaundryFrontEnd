let StartFunc = () => {
    let jVarLocalBranchName = localStorage.getItem("BranchName");
    let jVarLocalBranchButtonId = document.getElementById("BranchButtonId");
    jVarLocalBranchButtonId.innerText = jVarLocalBranchName;
    jVarLocalBranchButtonId.addEventListener('click', function() {
        window.location.href = "../../../../LaundryPos/BranchSelect.html";
    });
};

export { StartFunc }