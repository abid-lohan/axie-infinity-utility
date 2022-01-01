import {Modal, Table} from "react-bootstrap";

export default function SlpModal(props){
    return(
        <Modal {...props}>
            <Modal.Header closeButton>
                <Modal.Title>Tokens prices</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Table striped bordered hover size="sm">
                    <thead>
                    <tr>
                        <th>Currency</th>
                        <th>SLP</th>
                        <th>AXS</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>R$</td>
                        <td>{props.brl}</td>
                        <td>{props.brlAxs}</td>
                    </tr>
                    <tr>
                        <td>US$</td>
                        <td>{props.usd}</td>
                        <td>{props.usdAxs}</td>
                    </tr>
                    </tbody>
                </Table>
            </Modal.Body>
        </Modal>
    )
}