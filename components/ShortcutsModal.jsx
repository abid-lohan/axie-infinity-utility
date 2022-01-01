import {Modal} from 'react-bootstrap'

export default function ShortcutsModal(props){
    return(
        <Modal {...props}>
            <Modal.Header closeButton>
                <Modal.Title>Keyboard shortcuts</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <strong>A</strong>: Decrement energy <br/>
                <strong>S</strong>: Increment energy <br/>
                <strong>D</strong>: New turn <br/>
                <strong>R</strong>: Reset counter
            </Modal.Body>
        </Modal>
    )
}