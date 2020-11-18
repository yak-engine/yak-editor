import { ComponentDecorator } from "../../decorators/component-decorator";

@ComponentDecorator({
    tagName: 'main-menu',
    templateUrl: './src/editor/components/main-menu/main-menu.component.html'
})
export default class MainMenuComponent {
    constructor() {
 
    }

    onActivate(): void {
        /* When the user clicks on the button, 
        toggle between hiding and showing the dropdown content */
        function myFunction() {
            document.getElementById("myDropdown").classList.toggle("show");
        }

        document.querySelectorAll('.dropdown-toggle').forEach((dropdownToggle) => {
            dropdownToggle.addEventListener('click', (event) => {
                dropdownToggle.parentElement.classList.add('expanded');
            });
        });
        
        // Close the dropdown if the user clicks outside of it
        window.onclick = function(event) {
            if (!event.target.matches('.dropdown-toggle')) {
                var dropdowns = document.getElementsByClassName("dropdown-content");

                var i;

                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    
                    if (openDropdown.classList.contains('expanded')) {
                        openDropdown.classList.remove('expanded');
                    }
                }
            }
        }

        document.querySelector('.btn-play').addEventListener('click', (event) => {
            alert('test');
            window.open('http://localhost:9000/play', '_blank');
        });
    }
} 