const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        const target = tab.getAttribute('data-tab');
        tabContents.forEach(content => {
            content.classList.remove('active');
            if (content.getAttribute('data-content') === target) {
                content.classList.add('active');
            }
        });
    });
});

const subTabs = document.querySelectorAll('.sub-tab');
const subTabContents = document.querySelectorAll('.sub-tab-content');

subTabs.forEach(subTab => {
    subTab.addEventListener('click', function() {
        const target = subTab.getAttribute('data-sub-tab');
        subTabContents.forEach(content => {
            content.classList.remove('active');
            if (content.getAttribute('data-sub-content') === target) {
                content.classList.add('active');
            }
        });
    });
});
