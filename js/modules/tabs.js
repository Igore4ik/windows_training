const tab = (headerSelector, tabsSelector, contentSelector, activeSelector, display = 'block') => {
    const header = document.querySelector(headerSelector),
        tabs = document.querySelectorAll(tabsSelector),
        content = document.querySelectorAll(contentSelector);

    function hide() {
        tabs.forEach(item => {
            item.classList.remove(activeSelector);
        });
        content.forEach(item => {
            item.style.display = 'none';
        });
    }
    function show(i = 0) {
        content[i].style.display = display;
        tabs[i].classList.add(activeSelector);
    }
    header.addEventListener('click', (e) => {
        const target = e.target;
        if (target &&
            (target.classList.contains(tabsSelector.replace(/\./, "")) ||
                target.parentNode.classList.contains(tabsSelector.replace(/\./, "")))) {
            tabs.forEach((item, i) => {
                if (target === item || target.parentNode === item) {
                    hide();
                    show(i);
                }
            })
        }
    });
    hide();
    show();
};

export default tab;