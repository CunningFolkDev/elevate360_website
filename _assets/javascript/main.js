(function scope() {
    const nav_node = document.getElementById('nav');
    const nav_icon = document.getElementById('nav_icon');
    // const nav_items = document.querySelectorAll('nav > a.nav-item');

    nav_icon.onclick = function click() {
        nav_node.classList.toggle('collapsed')
        nav_icon.classList.toggle('open')
        // for (let i = nav_items.length - 1; i >=0; i--) {
        //     nav_items[i].classList.toggle('')
        // }
    }
}());
