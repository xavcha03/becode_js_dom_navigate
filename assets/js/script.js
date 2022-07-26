//Select the last child of the <ol> tag and put it at the beginning of the list
let ulElt = document.querySelector("ol");
ulElt.prepend(ulElt.lastElementChild)


//Move the <h2> of the third section in the second one and vice-versa
let sections = document.querySelectorAll("section");

//Select titles
let title_1Elt = sections[2].querySelector("h2");
let title_2Elt = sections[1].querySelector("h2");

//switch titles
sections[1].prepend(title_1Elt);
sections[2].prepend(title_2Elt);

//Delete the last section from the DOM, we don't need it anyways
sections[sections.length-1].remove();

