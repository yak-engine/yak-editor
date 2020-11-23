class Tree {
    generate(hierarchy) {
        let ul = this.generateLevel(hierarchy);
        console.log(ul);
        let tree = document.querySelector('.tree');
        tree.appendChild(ul);
    }

    generateLevel(entities) {
        let ul = document.createElement('ul');
        
        entities.forEach((entity) => {
            let li = document.createElement('li');

            let name;

            if (entity.cameraComponent) {
                name = 'Camera';
            }
            else {
                name = entity.tagComponent.name.charAt(0).toUpperCase() + entity.tagComponent.name.slice(1);
            }

            li.innerHTML = `<i class="fa fa-cube"></i>&nbsp;${name}`;

            // TODO: How to handle nested entities.
            if (entity.children) {
                li.classList.add('node-has-children');
                li.innerHTML = `<i class="fa fa-caret-right"></i>&nbsp;${li.innerHTML}`;

                li.addEventListener('click', (event) => {
                    if (event.target === event.currentTarget) {
                        if (li.classList.contains('expanded')) {
                            li.classList.remove('expanded');
                        }
                        else {
                            li.classList.add('expanded');
                        }
                    }
                })

                li.appendChild(this.generateLevel(entity.children));
            }

            ul.appendChild(li);
        });

        return ul;
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    if (!window.tree) {
        window.tree = new Tree();
    }
});