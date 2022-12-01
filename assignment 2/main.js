function submit() {
    var input=document.querySelector("[data-input]");
    var value=input.value;
    var ul=document.querySelector("[data-list]");

    var li=document.createElement("li");
    li.textContent=value;
    ul.appendChild(li);
    // I have copied the already added var and then assigned it a blank value so that when the page user adds an item to there list the type text field will be blank again
    document.querySelector("[data-input]").value=""
}