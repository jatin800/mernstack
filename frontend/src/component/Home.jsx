import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CiRead } from "react-icons/ci";
import { FaUserEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import axios from "axios";

export default function Home() {
  const [userData, setUserData] = useState([]);
  const [inputUser, setInputUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    fetchAll();
  }, []);

  const fetchAll = async () => {
    const res = await axios.get("http://localhost:5000/readalluser");
    setUserData(res.data);
  };

  const handleChange = (event) => {
    setInputUser({
      ...inputUser,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await axios.post("http://localhost:5000/createuser", inputUser);

    fetchAll();
  };

  const handleDelete = async (id) => {
    const res = await axios.delete(`http://localhost:5000/deleteuser/${id}`);
    if (res.status === 200) {
      fetchAll();
    }
  };

  return (
    <div>
      <div className='w-2/3 mx-auto mt-5'>
        {/* creating form */}
        <form onSubmit={handleSubmit}>
          <h1 className="text">Create User</h1>
          <div className=''>
            <label className=' text-sm text-gray-500 '>Name</label>
            <input
              type='text'
              name='name'
              className='block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent  border-2 border-gray-300'
              placeholder='Enter name'
              required
              value={inputUser.name}
              onChange={handleChange}
            />
          </div>
          <div className=''>
            <label className=' text-sm text-gray-500 '>Email</label>
            <input
              type='text'
              name='email'
              className='block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent  border-2 border-gray-300'
              placeholder='Enter email '
              required
              value={inputUser.email}
              onChange={handleChange}
            />
          </div>
          <div className=''>
            <label className=' text-sm text-gray-500 '>Password</label>
            <input
              type='password'
              name='password'
              className='block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent  border-2 border-gray-300'
              placeholder='Enter Password '
              required
              value={inputUser.password}
              onChange={handleChange}
            />
          </div>

          <div className='flex justify-center my-4'>
            <button
              type='submit'
              className='px-4 py-2 bg-yellow-400 rounded-sm'>
              Add User
            </button>
          </div>
        </form>
        <div className='relative overflow-x-auto shadow-md'>
          <table className='w-full text-lg text-center text-gray-500 '>
            <thead className='text-[17px] text-gray-700 uppercase bg-gray-500'>
              <tr>
                <th scope='col' className='text px-6 py-3'>
                  SN.
                </th>
                <th scope='col' className='text px-6 py-3'>
                  Name
                </th>
                <th scope='col' className='text px-6 py-3'>
                  Email
                </th>
                <th scope='col' className='text px-6 py-3'>
                  Password
                </th>
                <th scope='col' className='text px-6 py-3'>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {userData.map((item, i) => (
                <tr className='border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700'>
                  <th
                    scope='row'
                    className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                    {i + 1}
                  </th>
                  <th
                    scope='row'
                    className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                    {item?.name}
                  </th>
                  <td className='px-6 py-4'>{item.email}</td>
                  <td className='px-6 py-4'> {item.password}</td>
                  <td className='px-6 py-4'>
                    <div className='flex gap-x-4 justify-center'>
                      <NavLink
                        to={`/readuser/${item._id}`}
                        className='btn font-medium text-green-600 dark:text-blue-500 hover:underline'>
                        <CiRead />
                      </NavLink>
                      <NavLink
                        to={`/updateuser/${item._id}`}
                        className='btn font-medium text-yellow-400 dark:text-blue-500 hover:underline'>
                        <FaUserEdit />
                      </NavLink>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className='btn font-medium text-red-500  hover:underline'>
                        <MdDeleteForever />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
