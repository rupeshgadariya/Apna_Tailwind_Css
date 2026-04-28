const apnaClass = document.querySelectorAll(".chai");

apnaClass.forEach(element => {
    const classArray = element.getAttribute("class").split(" ");
    const classFilter = classArray.filter((ele) => ele.trim() !== "");

    const transforms = [];

    const textAlignValues = ["center", "left", "right", "justify"];
    const textSizeValues = ["sm", "base", "lg", "xl", "2xl"];

    classFilter.forEach(x => {

        // ===== TEXT COLOR =====
        if (x.startsWith("text-")) {
            const colorValue = x.slice(5);
            if (!textAlignValues.includes(colorValue) && !textSizeValues.includes(colorValue)) {
                element.style.color = colorValue;
            }
        }

        // ===== BACKGROUND COLOR =====
        if (x.startsWith("bg-")) {
            element.style.backgroundColor = x.slice(3);
        }

        // ===== PADDING =====
        if (x.startsWith("p-") && !x.startsWith("pl-") && !x.startsWith("pr-") && !x.startsWith("pt-") && !x.startsWith("pb-"))
            element.style.padding = x.slice(2);
        if (x.startsWith("pt-"))
            element.style.paddingTop = x.slice(3);
        if (x.startsWith("pb-"))
            element.style.paddingBottom = x.slice(3);
        if (x.startsWith("pl-"))
            element.style.paddingLeft = x.slice(3);
        if (x.startsWith("pr-"))
            element.style.paddingRight = x.slice(3);

        // ===== MARGIN =====
        if (x.startsWith("m-") && !x.startsWith("ml-") && !x.startsWith("mr-") && !x.startsWith("mt-") && !x.startsWith("mb-"))
            element.style.margin = x.slice(2);
        if (x.startsWith("mt-"))
            element.style.marginTop = x.slice(3);
        if (x.startsWith("mb-"))
            element.style.marginBottom = x.slice(3);
        if (x.startsWith("ml-"))
            element.style.marginLeft = x.slice(3);
        if (x.startsWith("mr-"))
            element.style.marginRight = x.slice(3);

        // ===== WIDTH & HEIGHT =====
        if (x.startsWith("w-") && !x.startsWith("min-w-") && !x.startsWith("max-w-"))
            element.style.width = x.slice(2);
        if (x.startsWith("h-") && !x.startsWith("min-h-") && !x.startsWith("max-h-"))
            element.style.height = x.slice(2);
        if (x.startsWith("min-w-"))
            element.style.minWidth = x.slice(6);
        if (x.startsWith("max-w-"))
            element.style.maxWidth = x.slice(6);
        if (x.startsWith("min-h-"))
            element.style.minHeight = x.slice(6);
        if (x.startsWith("max-h-"))
            element.style.maxHeight = x.slice(6);

        // ===== BORDER =====
        if (x.startsWith("border-") && !x.startsWith("border-color-") && !x.startsWith("border-width-")) {
            const borderValue = x.slice(7);
            element.style.borderWidth = borderValue;
            element.style.borderStyle = "solid";
        }
        if (x.startsWith("border-color-"))
            element.style.borderColor = x.slice(13);
        if (x.startsWith("border-width-"))
            element.style.borderWidth = x.slice(13);
        if (x.startsWith("rounded-"))
            element.style.borderRadius = x.slice(8);

        // ===== DISPLAY =====
        if (x === "flex") element.style.display = "flex";
        if (x === "grid") element.style.display = "grid";
        if (x === "block") element.style.display = "block";
        if (x === "inline") element.style.display = "inline";
        if (x === "inline-block") element.style.display = "inline-block";
        if (x === "hidden") element.style.display = "none";

        // ===== POSITIONING =====
        if (x === "absolute") element.style.position = "absolute";
        if (x === "relative") element.style.position = "relative";
        if (x === "fixed") element.style.position = "fixed";
        if (x === "sticky") element.style.position = "sticky";

        // ===== POSITION PROPERTIES =====
        if (x.startsWith("top-"))
            element.style.top = x.slice(4);
        if (x.startsWith("bottom-"))
            element.style.bottom = x.slice(7);
        if (x.startsWith("left-"))
            element.style.left = x.slice(5);
        if (x.startsWith("right-"))
            element.style.right = x.slice(6);

        // ===== Z-INDEX & OPACITY =====
        if (x.startsWith("z-"))
            element.style.zIndex = x.slice(2);
        if (x.startsWith("opacity-"))
            element.style.opacity = x.slice(8);

        // ===== FONT SIZE =====
        if (x.startsWith("text-")) {
            const textValue = x.slice(5);
            if (textValue === "sm") element.style.fontSize = "0.875rem";
            else if (textValue === "base") element.style.fontSize = "1rem";
            else if (textValue === "lg") element.style.fontSize = "1.125rem";
            else if (textValue === "xl") element.style.fontSize = "1.25rem";
            else if (textValue === "2xl") element.style.fontSize = "1.5rem";
        }

        // ===== FONT WEIGHT =====
        if (x === "font-bold") element.style.fontWeight = "bold";
        if (x === "font-normal") element.style.fontWeight = "normal";
        if (x === "font-light") element.style.fontWeight = "300";
        if (x.startsWith("font-weight-"))
            element.style.fontWeight = x.slice(12);

        // ===== FONT STYLE =====
        if (x === "italic") element.style.fontStyle = "italic";
        if (x === "not-italic") element.style.fontStyle = "normal";

        // ===== TEXT ALIGNMENT =====
        if (x === "text-center") element.style.textAlign = "center";
        if (x === "text-left") element.style.textAlign = "left";
        if (x === "text-right") element.style.textAlign = "right";
        if (x === "text-justify") element.style.textAlign = "justify";

        // ===== TEXT DECORATION =====
        if (x === "underline") element.style.textDecoration = "underline";
        if (x === "line-through") element.style.textDecoration = "line-through";
        if (x === "no-underline") element.style.textDecoration = "none";

        // ===== TEXT TRANSFORM =====
        if (x === "uppercase") element.style.textTransform = "uppercase";
        if (x === "lowercase") element.style.textTransform = "lowercase";
        if (x === "capitalize") element.style.textTransform = "capitalize";

        // ===== FLEX PROPERTIES =====
        if (x === "flex-row") element.style.flexDirection = "row";
        if (x === "flex-col") element.style.flexDirection = "column";
        if (x === "flex-wrap") element.style.flexWrap = "wrap";
        if (x === "flex-nowrap") element.style.flexWrap = "nowrap";

        if (x === "justify-center") element.style.justifyContent = "center";
        if (x === "justify-between") element.style.justifyContent = "space-between";
        if (x === "justify-start") element.style.justifyContent = "flex-start";
        if (x === "justify-end") element.style.justifyContent = "flex-end";

        if (x === "items-center") element.style.alignItems = "center";
        if (x === "items-start") element.style.alignItems = "flex-start";
        if (x === "items-end") element.style.alignItems = "flex-end";
        if (x === "items-stretch") element.style.alignItems = "stretch";

        if (x.startsWith("gap-"))
            element.style.gap = x.slice(4);

        // ===== OVERFLOW =====
        if (x === "overflow-auto") element.style.overflow = "auto";
        if (x === "overflow-hidden") element.style.overflow = "hidden";
        if (x === "overflow-visible") element.style.overflow = "visible";
        if (x === "overflow-scroll") element.style.overflow = "scroll";
        if (x === "overflow-x-auto") element.style.overflowX = "auto";
        if (x === "overflow-y-auto") element.style.overflowY = "auto";

        // ===== CURSOR =====
        if (x === "cursor-pointer") element.style.cursor = "pointer";
        if (x === "cursor-default") element.style.cursor = "default";
        if (x === "cursor-not-allowed") element.style.cursor = "not-allowed";

        // ===== SHADOW =====
        if (x.startsWith("shadow-")) {
            const shadowValue = x.slice(7);
            if (shadowValue === "sm") element.style.boxShadow = "0 1px 2px 0 rgba(0, 0, 0, 0.05)";
            else if (shadowValue === "md") element.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
            else if (shadowValue === "lg") element.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1)";
        }

        // ===== TRANSFORM =====
        if (x.startsWith("rotate-")) {
            const rotateVal = x.slice(7).replace("deg", "");
            transforms.push("rotate(" + rotateVal + "deg)");
        }
        if (x.startsWith("scale-")) {
            transforms.push("scale(" + x.slice(6) + ")");
        }

        // ===== TRANSITION =====
        if (x === "transition")
            element.style.transition = "all 0.3s ease";
        if (x.startsWith("duration-"))
            element.style.transitionDuration = x.slice(9) + "ms";

        // ===== FLOAT & CLEAR =====
        if (x === "float-left") element.style.float = "left";
        if (x === "float-right") element.style.float = "right";
        if (x === "float-none") element.style.float = "none";
        if (x === "clear-both") element.style.clear = "both";

    });

    if (transforms.length > 0) {
        element.style.transform = transforms.join(" ");
    }

});

console.log("End of Code");