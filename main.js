// аккордеон секции "команда"

const items = document.querySelectorAll(".team__item");


for (item of items) {
    item.addEventListener("click", handleAccoOpening);
}

    function handleAccoOpening(e) {
        const curItem = e.currentTarget;
        const isClosedItem = curItem.classList.contains("active")
        // как не получилось:
        // const textBlock = content.firstElementChild;
        // const reqHeight = textBlock.getBoundingClientRect().height;
        // content.style.height = `${reqHeight}px`;

        if (isClosedItem) {
            // пункт открыт
            closeItemsAndRemoveActive(items);
        } else {
            closeItemsAndRemoveActive(items);
            openItem(curItem);
        }

}

function closeItemsAndRemoveActive(items) {
    Array.from(items).forEach(elem => {
                elem.classList.remove("active");
                elem.querySelector(".team__description").style.height = 0;
            });
}

function openItem(item) {
    const content = item.querySelector(".team__description");
    item.classList.add('active');
    content.style.height = "100%";
}

 
jQuery(document).ready(function ($) {
    $("#fullpage").fullpage({
        anchors: ['', '', '', '', '', '', '', '']
    })
})