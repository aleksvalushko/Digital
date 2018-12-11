opMenu:boolean = true;

function toggle() {
    let list = document.getElementById('list');
    if(this.opMenu){
        list.className = "header-menu__list-mobile";
        this.opMenu = false;
    } else {
        list.className = "header-menu__list";
        this.opMenu = true;
    }
}