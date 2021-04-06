import { useUser } from '../hooks/useUser';
import { User } from '../interfaces/reqRes';
export const Users = () => {
  const { users, prevPage, nextPage} = useUser()
  const renderItem = (user: User) => {
    return (
      <tr key={user.id}>
        <th><img src={user.avatar} alt={user.first_name} style={{width:35, borderRadius: 50}}/></th>
        <th>{user.first_name} {user.last_name}</th>
        <th>{user.email}</th>
      </tr>
    )
  }
  return (
    <div>
      <h3>Users</h3>
      <table className="table">
        <thead>
          <tr>
            
            <th>Avatar</th>
            <th>Name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
            {
              users.map((user) => renderItem(user))
            }
        </tbody>
      </table>
      <button
        onClick={prevPage}
        className="btn btn-primary"
      >
        Prev
      </button>
      <button
        onClick={nextPage}
        className="btn btn-primary"
      >
        Next
      </button>
    </div>
  )
}
