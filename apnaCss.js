
const apnaClass = document.querySelectorAll(".chai");

apnaClass.forEach(element => {
    const classArray = element.getAttribute("class").split(" ");

    const classFilter = classArray.filter((ele) => ele.trim() !== "");

    classFilter.forEach(x => {
        element.style.color = x; // color

        if (x.startsWith("bg-"))
            element.style.backgroundColor = x.slice(3);  // background color

        if (x.startsWith("p-"))
            element.style.padding = x.slice(2)
        if (x.startsWith("pt-"))
            element.style.paddingTop = x.slice(3)
        if (x.startsWith("pb-"))
            element.style.paddingBottom = x.slice(3)    // padding
        if (x.startsWith("pl-"))
            element.style.paddingLeft = x.slice(3)
        if (x.startsWith("pr-"))
            element.style.paddingRight = x.slice(3)

        if (x.startsWith("m-"))
            element.style.margin = x.slice(2)
        if (x.startsWith("mt-"))
            element.style.marginTop = x.slice(3)
        if (x.startsWith("mb-"))
            element.style.marginBottom = x.slice(3)     // magin
        if (x.startsWith("ml-"))
            element.style.marginLeft = x.slice(3)
        if (x.startsWith("mr-"))
            element.style.marginRight = x.slice(3)

    });
});


console.log("End of Code")