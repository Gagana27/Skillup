import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function ErrorHandling(props) {
    const [show, setShow] = useState(true);
    const { errorMessage, dialogMessage } = props;

    if (show) {
        return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>{props.dialogMessage}!</Alert.Heading>
                <p>
                    {errorMessage}
                </p>
            </Alert>
        );
    }
    return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

export default ErrorHandling;