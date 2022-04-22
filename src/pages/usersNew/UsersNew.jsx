import React ,{useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom';

//redux actions

const {createNewUserAction} = require('../../redux/actions/usersActions');

export const UsersNew = () => {
  let navigate = useNavigate();
  //state del componente
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('---');
  const [status, setStatus] = useState('---');
  //utilizar use dispatch y te crea una funcion
  const dispatch = useDispatch();
  //Acceder al state del store
  const loadingUsers = useSelector(state => state.users.loading);
  const error  = useSelector(state => state.users.error);
  console.log(loadingUsers);
  //mandar llamar el action de patientAction
  const addUser=user=>dispatch(createNewUserAction(user));



  const submitNewUser = e=>{
    let imageId="1";
    e.preventDefault()
    //Validar formulario
    if(fullName.trim==='' || address.trim==='' || gender.trim==='' || status.trim===''){
      return alert('All fields are required');
    }
    //Si no hay errores
    // crear el nuevo producto
    addUser({
      fullName,
      address,
      gender,
      status,
      imageId
    });
    navigate('/users');
  }

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Create a new user
            </h2>
            <form onSubmit={submitNewUser}>
              <label>Full Name</label>
              <input 
                type="text"
                className="form-control"
                placeholder="Full Name"
                value={fullName}
                onChange={e=> setFullName(e.target.value)}
              />
              <label>Address</label>
              <input 
                type="text"
                className="form-control"
                placeholder="Address Name"
                value={address}
                onChange={e=> setAddress(e.target.value)}
              />
              <label>Gender</label>
              <select className="form-select" value={gender} onChange={e=>setGender(e.target.value)} >
                <option value="---">---</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <label>Status</label>
              <select className="form-select" value={status} onChange={e=>setStatus(e.target.value)}>
                <option value="---">---</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="other">Other</option>
              </select>
              <br />
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              > 
                Add User
              </button>
            </form>
            {loadingUsers ? <p>Loading....</p>:null}
            {error ? <p className="alert alert-danger p2 mt-4 text-center">Something went wrong!</p>:null}
          </div>
        </div>
      </div>
    </div>   
  )
}
