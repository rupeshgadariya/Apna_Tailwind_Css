
const apnaClass = document.querySelectorAll(".chai");

apnaClass.forEach(element => {
    const classArray = element.getAttribute("class").split(" ");

    const classFilter = classArray.filter((ele) => ele.trim() !== "");

    classFilter.forEach(x => {
        element.style.color = x; // color

        if (x.startsWith("bg"))
            element.style.backgroundColor = x.slice(2);  // background color



    });
});


console.log("End of Code")