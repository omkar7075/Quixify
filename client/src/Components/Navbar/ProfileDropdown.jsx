import React, { useRef, useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { VscDashboard, VscSignOut } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import {logout} from '../../services/operations/authAPI'

function ProfileDropdown() {
  const { user } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useOnClickOutside(ref, () => setOpen(false));

  return (
    <button className="relative border-none -ml-10 bg-none" onClick={() => setOpen(true)}>
      <div className="flex items-center gap-2">
        <img src={user?.image} alt={`profile-${user?.userName}`} className="w-8 h-8 rounded-full object-cover" />
        <span className="sm:block hidden text-lg text-gray-700">{user?.userName}</span>
        <AiOutlineCaretDown className="text-xl text-gray-700" />
      </div>
      {open && (
        <div onClick={(e) => e.stopPropagation()} className="absolute top-9 right-0 z-50 overflow-hidden border border-solid border-gray-700 rounded bg-gray-700 bg-opacity-90 shadow-xl backdrop-blur-3xl" ref={ref}>
          <Link to="/Dashboard" onClick={() => setOpen(false)}>
            <div className="flex items-center gap-2 px-3 py-2 text-sm text-white">
              <VscDashboard className="text-lg" />
              Dashboard
            </div>
          </Link>
          <div onClick={() => { dispatch(logout(navigate)); setOpen(false); }} className="flex items-center gap-2 px-3 py-2 text-sm text-white">
            <VscSignOut className="text-lg" />
            Logout
          </div>
        </div>
      )}
    </button>
  );
}

export default ProfileDropdown;
