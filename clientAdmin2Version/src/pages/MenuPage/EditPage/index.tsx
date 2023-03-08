import React, { ReactElement } from 'react'
import { useNavigate, useParams } from 'react-router-dom';




 function EditPage(): ReactElement {
    const {id} = useParams()
    const navigate = useNavigate();
    console.log(id);
    return (
        <div>
            EditPage
        </div>
    )
}
export default EditPage