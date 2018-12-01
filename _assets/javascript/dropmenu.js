(function scope() {
    const E360 = new Function();

    const DropMenu = {
        init: () => {
            DropMenu.watchMobileTrigger();
            return DropMenu.watchPrimaryLinks();
        },
        watchMobileTrigger: () => {
            const nav_node = document.getElementById('nav');
            const nav_icon = document.getElementById('nav_icon');

            nav_icon.onclick = function click() {
                nav_node.classList.toggle('open');
                nav_icon.classList.toggle('open');
            }
        },
        watchPrimaryLinks: () => {
            const openMenu = (e) => {
                if (e.target.classList.contains('top-level-link')) {
                    const navListElement = e.target.closest('.nav-item');

                    // always close anything open
                    DropMenu.closeAllSections(primayLinks);

                    // open the specific set of links, if they exist
                    if (!navListElement.classList.contains('no-secondary')) {
                        const navListClass = navListElement.getAttribute('data-nav-class');
                        navElement.classList.add('expanded');
                        navElement.classList.add(navListClass);
                        DropMenu.openPrimarySection(navListElement);
                    }
                }
            }

            const closeMenu = (e) => {
                navElement.setAttribute('class', 'main-nav');
                DropMenu.closeAllSections(primayLinks);
            }

            const navElement = document.getElementById('nav');
            const primayLinks = navElement.querySelectorAll('.primary')[0];

            primayLinks.addEventListener('mouseover', openMenu, false);
            primayLinks.addEventListener('touchenter', openMenu, false);
            navElement.addEventListener('mouseleave', closeMenu, false);
            navElement.addEventListener('touchleave', closeMenu, false);
        },
        openPrimarySection: (navListElement) => {
            navListElement.classList.add('open');
        },
        closeAllSections: (primayLinks) => {
            // close link sets that might be currently open
            const navListElements = primayLinks.querySelectorAll('.nav-item');
            if (navListElements) {
                Array.prototype.forEach.call(navListElements, (el) => {
                    el.classList.remove('open');
                });
            }
            const nav_node = document.getElementById('nav');
            nav_node.setAttribute('class', 'main-nav');
        }
    };

    const service_card_links = document.querySelectorAll('.services-card a.learn-more');
    for (let i = 0; i < service_card_links.length; i++) {
        service_card_links[i].onclick = handle_service_card_click;
    }
    function handle_service_card_click(e) {
        const card_node = this.parentNode;
        const excerpt = card_node.querySelector('p');
        const content_node = card_node.querySelectorAll('div.hidden');
        E360.launch_modal(content_node[0].innerHTML);
    }

    window.E360 = E360;
    window.DropMenu = DropMenu;
}());

ready(DropMenu.init);
