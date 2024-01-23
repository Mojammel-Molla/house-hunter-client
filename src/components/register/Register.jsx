import { Link, useNavigate } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';

const Register = () => {
  const axios = useAxios();
  const navigate = useNavigate();
  const handleRegister = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);
    const user = {
      name: name,
      email: email,
      phone: phone,
      password: password,
      role: 'renter',
    };

    axios.post('/users', user).then(res => {
      console.log(res.data);
      if (res.data.insertedId) {
        alert('user added successfully');
        navigate('/');
      }
    });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content w-full">
        <div className="card shadow-2xl w-1/3 mx-auto bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                name="phone"
                type="number"
                placeholder="phone number"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <p>
                Already have account please{' '}
                <Link to="/login" className="text-blue-600 font-medium text-sm">
                  Log In
                </Link>
              </p>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
