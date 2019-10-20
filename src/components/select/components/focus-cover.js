import ReactDOM from 'react-dom';

export default function FocusCover({children}) {  
  return ReactDOM.createPortal(
    children,
    document.body
  )
}
