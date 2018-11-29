(function scope() {
    const E360 = window.E360;

    const modal = document.getElementById('simple_modal');
    const close = document.getElementsByClassName("modal-close")[0];
    
    function launch_modal(content) {
        const content_node = document.getElementById('modal_content');
        content_node.innerHTML = content;
        
        modal.style.display = "block";
    }
    E360.launch_modal = launch_modal;
    
    close.onclick = function() {
        modal.style.display = "none";
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}());
