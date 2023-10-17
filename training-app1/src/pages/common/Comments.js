import React , {useState} from 'react'
import { Button, Input } from 'antd';
import axios from 'axios';


const { TextArea } = Input;

function Comments(props) {
    // const user = useSelector(state => state.user)
    const [Comment, setComment] = useState("")

    const handleChange = (e) => {
        setComment(e.currentTarget.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const variables = { 
            content: Comment,
            writer: user.userData._id,
            postId: props.postId   
         }

        axios.post('/api/comment/saveComment', variables)
        .then(response=> {
            if(response.data.success) {
                setComment("")
                props.refreshFunction(response.data.result)
            } else {
                alert('Failed to save Comment')
            }
        })
    }

    return (
        <div>
            <br />
            <p> Comments Section</p>
            <hr />
            {/* Comment Lists  */}
            

            {/* Root Comment Form */}
            <form style={{ display: 'flex' }} onSubmit={onSubmit}>
                <TextArea
                    style={{ width: '80%', borderRadius: '5px' }}
                    onChange={handleChange}
                    value={Comment}
                    placeholder="write some comments"
                />
                <br />
                <Button style={{ width: '20%', height: '52px' }} onClick={onSubmit}>Submit</Button>
            </form>

        </div>
    )
}

export default Comments