import { useForm } from "../hooks/useForm"

export const Forms = () => {
  const {email, password, form, onChange} = useForm({
    email: 'tes@tes.com',
    password: '12345'
  })
  return (
    <>
      <h3>Froms</h3>
      <input 
        className="form-control"
        type="text"
        value={email}
        placeholder="email"
        onChange={({target}) => {onChange(target.value , 'email')}}
      />
      <input 
        className="form-control mt-2 mb-2"
        type="text"
        value={password}
        placeholder="Password"
        onChange={({target}) => {onChange(target.value , 'password')}}
      />
      <code>
        <pre>
          {
            JSON.stringify(form)
          }
        </pre>
      </code>
    </>
  )
}
