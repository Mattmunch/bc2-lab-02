import Component from '../Component.js';

class Header extends Component {
    renderHTML(){
        return `
        <header>
        <img src="./assets/awesome-logo.png" alt="Awesome Logo">
        <h1>Photo Gallery</h1>
        </header>
        `;
    }
}


export default Header;
