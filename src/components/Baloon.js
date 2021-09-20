import ReactDom from 'react-dom'

const Baloon = (props) => {

    return ReactDom.createPortal(props.children, document.body);
}

export default Baloon;