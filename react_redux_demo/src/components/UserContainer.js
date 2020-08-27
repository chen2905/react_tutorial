import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import {fetchUsers} from '../redux'
function UserContainer({usersData,fetchUsers}) {

useEffect(()=>{
fetchUsers()
}
,[]
)
return usersData.loading ?(
<h5>loading</h5>
):usersData.error?(
<h5>{usersData.error}</h5>
):( <div>
    <h5>User List</h5>
    <div>
        {
         usersData&&  usersData.users && usersData.users.map(user=><p>{user.name }</p>)
        }
    </div>
    </div>
)
}

const mapStateToProps =(state)=>{
    return {
        usersData:state.user
    }
}
const mapDispatchToProps = dispatch=>{
    return {
        fetchUsers : ()=>dispatch(fetchUsers())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserContainer) 
