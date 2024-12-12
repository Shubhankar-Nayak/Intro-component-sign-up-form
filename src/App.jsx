import { useFormik } from 'formik';
import * as Yup from 'yup';
import './App.css';
import err from './images/icon-error.svg'

function App() {

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name cannot be empty'),
    lastName: Yup.string().required('Last Name cannot be empty'),
    email: Yup.string().email('Looks like this is not an email').required('Looks like this is not an email'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password cannot be empty'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('Form values:', values);
      alert('Form submitted successfully!');
    },
  });

  return (
    <div className='w-[100%] h-[100vh] flex flex-col tablet:flex-row justify-center items-center font-Poppins'>
      <div className='w-[100%] tablet:w-[40%] text-white flex flex-col items-center'>
        <h1 className='w-[60%] tablet:w-[70%] text-[26px] tablet:text-[45px] font-extrabold text-center leading-8 tablet:leading-10'>
          Learn to code by watching others
        </h1>
        <p className='w-[90%] text-[15px] text-center tablet:text-left my-5'>
          See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.
        </p>
      </div>

      <div className='w-[90%] tablet:w-[40%] flex flex-col items-center'>
        <div className='trial w-[100%] tablet:w-[80%] px-10 py-3 tablet:py-5 my-5 bg-Blue text-white rounded-lg'>
          <p className='w-[80%] tablet:w-[90%] text-center mx-auto'>
            <span className='font-bold'>Try it free 7 days</span> then $20/mo. thereafter
          </p>
        </div>

        <div className='form tablet:w-[80%] tablet:min-h-[50vh] tablet:max-h-[60vh] flex flex-col items-center py-5 tablet:py-8 tablet:px-5 bg-white rounded-lg'>
          <form onSubmit={formik.handleSubmit} className='w-[100%] flex flex-col items-center'>

            <div className='w-[90%] mb-3 tablet:mb-5 relative'>
              <input
                className={`w-full px-4 py-2 font-semibold rounded-md text-[14px] border-2 ${
                  formik.touched.firstName && formik.errors.firstName ? 'border-red-500' : ''
                }`}
                type="text"
                placeholder="First Name"
                name="firstName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <p className="text-red-500 text-[12px]">{formik.errors.firstName}</p>
              )} 
              {formik.touched.firstName && formik.errors.firstName && (
                <img className='absolute top-[8px] right-[5px]' src={err} alt="error logo" />
              )}
            </div>

            <div className='w-[90%] mb-3 tablet:mb-5 relative'>
              <input
                className={`w-full px-4 py-2 font-semibold rounded-md text-[14px] border-2 ${
                  formik.touched.lastName && formik.errors.lastName ? 'border-red-500' : ''
                }`}
                type="text"
                placeholder="Last Name"
                name="lastName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <p className="text-red-500 text-[12px]">{formik.errors.lastName}</p>
              )}
              {formik.touched.lastName && formik.errors.lastName && (
                <img className='absolute top-[8px] right-[5px]' src={err} alt="error logo" />
              )}
            </div>

            <div className='w-[90%] mb-3 tablet:mb-5 relative'>
              <input
                className={`w-full px-4 py-2 font-semibold rounded-md text-[14px] border-2 ${
                  formik.touched.email && formik.errors.email ? 'border-red-500' : ''
                }`}
                type="email"
                placeholder="Email Address"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-[12px]">{formik.errors.email}</p>
              )}
              {formik.touched.email && formik.errors.email && (
                <img className='absolute top-[8px] right-[5px]' src={err} alt="error logo" />
              )}
            </div>

            <div className='w-[90%] mb-3 tablet:mb-5 relative'>
              <input
                className={`w-full px-4 py-2 font-semibold rounded-md text-[14px] border-2 ${
                  formik.touched.password && formik.errors.password ? 'border-red-500' : ''
                }`}
                type="password"
                placeholder="Password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-500 text-[12px]">{formik.errors.password}</p>
              )}
              {formik.touched.password && formik.errors.password && (
                <img className='absolute top-[8px] right-[5px]' src={err} alt="error logo" />
              )}
            </div>

            <button
              type="submit"
              className="w-[90%] py-2 bg-Green text-white rounded uppercase mb-3"
            >
              Claim your free trial
            </button>
          </form>
          <p className='w-[85%] text-[12px] text-GrayishBlue text-center'>
            By clicking the button, you are agreeing to our{' '}
            <a className='text-Red font-bold' href="#">
              Terms and Services
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

