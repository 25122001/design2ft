/* import React from "react";
import { useEffect } from "react";
import {  Users } from "lucide-react";
import { Plus } from "lucide-react";
import StatsCard from "./Components/StatusCard";
import SearchBar from "./Components/SearchBar";
import UserTable from "./Components/UserTable";
import UserModel from "./Components/UserModel";
import { getUsers,searchUsers,getStats,addUser,updateUser,deleteUser, } from "./api/userApi";

function App() {

const[users,setUsers] = React.useState([]);
const[totalUsers,setTotalUsers] = React.useState(0);
const[stats,setStats] = React.useState({total:0,active:0,inactive:0});
const[searchTerm,setSearchTerm] = React.useState("");
 const[isModalOpen,setIsModalOpen] = React.useState(false);
const[formData,setFormData] = React.useState({name:"",email:"",status:"Active"});

const[editingItem,setEditingItem] = React.useState(null);
 const[loading,setLoading] = React.useState(false);
const[currentPage,setCurrentPage] = React.useState(1);
const[itemsPerPage,setItemsPerPage] = React.useState(5);
const[totalPages,setTotalPages] = React.useState(0);
const status = ["Active","Inactive"];
 

useEffect(() => {
  fetchUsers();
}, [currentPage,itemsPerPage]);

 useEffect(() => {
  if(searchTerm) handleSearch();
  else fetchUsers();
}, [searchTerm]); 

const fetchStats = async () => {
  const data = await getStats();
  setStats(data);
};

const fetchUsers = async () => {
  const data = await getUsers(currentPage,itemsPerPage);
  setUsers(data.users);   
  setTotalPages(data.totalPages);
  setTotalUsers(data.totalUsers);
  fetchStats();

};


const handleSearch = async () => {
  const data = await searchUsers(searchTerm,currentPage,itemsPerPage);
  setUsers(data.users);
  setTotalUsers(data.totalUsers);
  setTotalPages(data.totalPages);
} 



 const handleSubmit = async () => {
  if(!formData.name || !formData.email || !formData.phone)
     return alert("Please fill all fields");
    setLoading(true);

    try{
      if(editingItem) await updateUser(editingItem._id,formData); 
      else await addUser(formData);
      fetchUsers();
      closeModel();
    }catch(err){
      console.error(err);
      alert("An error occurred. Please try again.");
    }
setLoading(false);
    
  };

  const handleDelete = async (id) => { 
    if(!window.confirm("Are you sure you want to delete this tenant?"))
    {await deleteUser(id);
      fetchUsers();
      }
    }; 

    const openModel = (item = null) => {
      if(item){
        setEditingItem(item);
        setFormData(item);
      }
      else{
        setEditingItem(null);
        setFormData({name:"",email:"",status:"Active"});
      }
      setIsModalOpen(true);
    };

    const closeModel = () => {
      setIsModalOpen(false);
      setEditingItem(null);
      setFormData({name:"",email:"",status:"Active"});
    };
  
 




  return (
    <div className="min-h-screen bg-gray-950">
      <header className="bg-gray-900 shadow-xl border border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex  justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-500 rounded-lg">
              <Users size={28} className="text-gray-900" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Tenant List</h1>
              <p className="text-gray-400">Manage your tenants efficiently</p>
            </div>
          </div>
          <button className="flex items-center gap-2 bg-green-500 text-gray-900 px-5 py-2.5 rounded-lg
          //  hover:bg-green-400 transition-colors shadow-lg font semibold" onClick={() => openModel}>
            <Plus size={20} />
            Add Tenant
          </button>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatsCard />
        </div>
        <SearchBar />
        <UserTable /> */
          {/* <UserModel />  */} 
           {/*   <UserModel  isOpen={isModalOpen} onClose={closeModel}  />   
      </main>
    </div>
  );
}

export default App; */}


/* import React, { useEffect, useState } from "react";
import { Users, Plus } from "lucide-react";

import StatsCard from "./Components/StatusCard";
import SearchBar from "./Components/SearchBar";
import UserTable from "./Components/UserTable";
import UserModel from "./Components/UserModel";

import {
  getUsers,
  searchUsers,
  getStats,
  addUser,
  updateUser,
  deleteUser,
} from "./api/userApi";

function App() {
  const [users, setUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [stats, setStats] = useState({ total: 0, active: 0, inactive: 0 });

  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    status: "active",
  });

  const [editingItem, setEditingItem] = useState(null);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [totalPages, setTotalPages] = useState(0);
 */
  /* ================= FETCH USERS ================= */

  /* useEffect(() => {
    fetchUsers();
  }, [currentPage, itemsPerPage]);

  useEffect(() => {
    if (searchTerm) {
      handleSearch();
    } else {
      fetchUsers();
    }
  }, [searchTerm]);

  const fetchStats = async () => {
    const data = await getStats();
    setStats(data);
  };

  const fetchUsers = async () => {
    const data = await getUsers(currentPage, itemsPerPage);
    setUsers(data.users);
    setTotalPages(data.totalPages);
    setTotalUsers(data.totalUsers);
    fetchStats();
  };

  const handleSearch = async () => {
    const data = await searchUsers(searchTerm, currentPage, itemsPerPage);
    setUsers(data.users);
    setTotalUsers(data.totalUsers);
    setTotalPages(data.totalPages);
    fetchStats();
  };
 */
  /* ================= ADD / UPDATE ================= */

  /* const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      if (editingItem) {
        await updateUser(editingItem._id, formData);
      } else {
        await addUser(formData);
      }

      fetchUsers();
      closeModel();
    } catch (err) {
      console.error(err);
      alert("An error occurred. Please try again.");
    }

    setLoading(false);
  };
 */
  /* ================= DELETE ================= */

  /* const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this tenant?")) {
      await deleteUser(id);
      fetchUsers();
    }
  }; */

  /* ================= MODAL CONTROL ================= */

  /* const openModel = (item = null) => {
    if (item) {
      setEditingItem(item);
      setFormData(item);
    } else {
      setEditingItem(null);
      setFormData({
        name: "",
        email: "",
        phone: "",
        status: "active",
      });
    }

    setIsModalOpen(true);
  };

  const closeModel = () => {
    setIsModalOpen(false);
    setEditingItem(null);
    setFormData({
      name: "",
      email: "",
      phone: "",
      status: "active",
    });
  };
 */
  /* ================= UI ================= */

  /* return (
    <div className="min-h-screen bg-gray-950">
      <header className="bg-gray-900 shadow-xl border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-500 rounded-lg">
              <Users size={28} className="text-gray-900" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Tenant List</h1>
              <p className="text-gray-400">
                Manage your tenants efficiently
              </p>
            </div>
          </div>
 */
          {/* FIXED BUTTON */}
         /*  <button
            onClick={() => openModel()}
            className="flex items-center gap-2 bg-green-500 text-gray-900 px-5 py-2.5 rounded-lg hover:bg-green-400 transition-colors shadow-lg font-semibold"
          >
            <Plus size={20} />
            Add Tenant
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
 */
        {/* Stats */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatsCard 
          title="Total Tenants" value={{number: stats.total} }
          icon={<Users  />}
          bgIcon="bg-indigo-500"
          iconColor="text-white"
          gradientFrom="from-indigo-500"
          gradientTo="to-indigo-700" 

          
          stats={stats} totalUsers={totalUsers} />

          <StatsCard 
          title="Active Tenants" value={{number: stats.active} }
          icon={<Users  />}
          bgIcon="bg-green-500"
          iconColor="text-white"
          gradientFrom="from-green-500"
          gradientTo="to-green-700" />

          <StatsCard 
          title="Inactive Tenants" value={{number: stats.inactive} }
          icon={<Users  />}
          bgIcon="bg-red-500"
          iconColor="text-white"
          gradientFrom="from-red-500"
          gradientTo="to-red-700" />

          

        </div> */}

        {/* Search */}
       /*  <SearchBar
value={searchTerm}
onChange ={setSearchTerm}
onClear={() => {setSearchTerm("");setCurrentPage(1);}}
itemsPerPage={itemsPerPage}
onItemsPerPageChange={(val)=> {setItemsPerPage(val);setCurrentPage(1);}}

currentPage={currentPage}
totalUsers={totalUsers}

        /> */

        {/* Table */}
        {/* <UserTable
          users={users}
          onEdit={openModel}
          onDelete={handleDelete}
          currentPage ={currentPage}
          totalPages={totalPages}   
          onPageChange={(page) => setCurrentPage(page)}
        />
 */}
        {/* Modal */}
       /*   <UserModel
         isOpen={isModalOpen}
          onClose={closeModel}
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleSubmit}
          editingItem={editingItem}
          loading={loading}
           
        />

      </main>   
    </div>
  );
}

export default App; */


import React, { useEffect, useState } from "react";
import { Users, Plus } from "lucide-react";
import Swal from "sweetalert2";

import StatsCard from "./Components/StatusCard";
import SearchBar from "./Components/SearchBar";
import UserTable from "./Components/UserTable";
import UserModel from "./Components/UserModel";

import {
  getUsers,
  searchUsers,
  getStats,
  addUser,
  updateUser,
  deleteUser,
} from "./api/userApi";

function App() {
  const [users, setUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [stats, setStats] = useState({ total: 0, active: 0, inactive: 0 });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    aadhar: "",
    working: "",
    portion: "",
    status: "active",
  });

  const [editingItem, setEditingItem] = useState(null);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ NEW: toggle state
  const [showSensitive, setShowSensitive] = useState(false);

  /* ================= MASK FUNCTIONS ================= */

  const maskAadhar = (aadhar) => {
    if (!aadhar) return "";
    return "XXXX XXXX " + aadhar.slice(-4);
  };

  const maskPhone = (phone) => {
    if (!phone) return "";
    return phone.slice(0, 2) + "XXXXXX" + phone.slice(-2);
  };

  const maskEmail = (email) => {
    if (!email) return "";
    const [name, domain] = email.split("@");
    return name.slice(0, 2) + "****@" + domain;
  };

  // ✅ NEW: masked users (NO UI CHANGE)
  const displayedUsers = users.map((user) => ({
    ...user,
    phone: showSensitive ? user.phone : maskPhone(user.phone),
    email: showSensitive ? user.email : maskEmail(user.email),
    aadhar: showSensitive ? user.aadhar : maskAadhar(user.aadhar),
  }));

  /* ================= EMAIL VALIDATION ================= */

  const validateEmail = (email) => {
    if (!email || !email.trim()) return "Email is required";

    const cleanedEmail = email.trim();

    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!emailRegex.test(cleanedEmail)) {
      return "Please enter a valid email address (example: name@gmail.com)";
    }

    return "";
  };

  /* ================= FETCH USERS ================= */

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchTerm.trim()) {
        handleSearch();
      } else {
        fetchUsers();
      }
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchTerm, currentPage, itemsPerPage]);

  const fetchStats = async () => {
    try {
      const data = await getStats();
      setStats({
        total: data?.total || 0,
        active: data?.active || 0,
        inactive: data?.inactive || 0,
      });
    } catch (error) {
      console.error("Stats error:", error);
    }
  };

  const fetchUsers = async () => {
    try {
      setLoading(true);

      const data = await getUsers(currentPage, itemsPerPage);

      setUsers(data?.users || []);
      setTotalUsers(data?.totalUsers || 0);
      setTotalPages(data?.totalPages || 0);

      await fetchStats();
    } catch (error) {
      console.error("Fetch users error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    try {
      setLoading(true);

      const data = await searchUsers(
        searchTerm,
        currentPage,
        itemsPerPage
      );

      setUsers(data?.users || []);
      setTotalUsers(data?.totalUsers || 0);
      setTotalPages(data?.totalPages || 0);

      await fetchStats();
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setLoading(false);
    }
  };

  /* ================= ADD / UPDATE ================= */

  const handleSubmit = async () => {
    const { name, email, phone, aadhar, working, portion } = formData;

    if (
      !name?.trim() ||
      !email?.trim() ||
      !phone?.trim() ||
      !aadhar?.trim() ||
      !working?.trim() ||
      !portion?.trim()
    ) {
      Swal.fire({
        icon: "warning",
        title: "Missing Fields",
        text: "Please fill all fields",
      });
      return;
    }

    const emailError = validateEmail(email);
    if (emailError) {
      Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: emailError,
      });
      return;
    }

    if (!/^\d{12}$/.test(aadhar)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Aadhar",
        text: "Aadhar must be 12 digits",
      });
      return;
    }

    try {
      setLoading(true);

      if (editingItem && editingItem._id) {
        await updateUser(editingItem._id, formData);

        await Swal.fire({
          icon: "success",
          title: "Tenant Updated",
          text: "Tenant updated successfully",
          timer: 2000,
          showConfirmButton: false,
        });
      } else {
        await addUser(formData);

        await Swal.fire({
          icon: "success",
          title: "Tenant Added",
          text: "Tenant added successfully",
          timer: 2000,
          showConfirmButton: false,
        });
      }

      await fetchUsers();
      closeModel();
    } catch (error) {
      console.error("Submit error:", error);

      Swal.fire({
        icon: "error",
        title: "Operation Failed",
        text: "Duplicate email, phone, or aadhar detected, or another error occurred. Please try again with unique values.",
      });
    } finally {
      setLoading(false);
    }
  };

  /* ================= DELETE ================= */

  const handleDelete = async (id) => {
    if (!id) return;

    const confirmDelete = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this tenant deletion!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });

    if (!confirmDelete.isConfirmed) return;

    try {
      await deleteUser(id);

      await Swal.fire({
        icon: "success",
        title: "Deleted!",
        text: "Tenant deleted successfully.",
        timer: 2000,
        showConfirmButton: false,
      });

      await fetchUsers();
    } catch (error) {
      console.error("Delete error:", error);

      Swal.fire({
        icon: "error",
        title: "Delete Failed",
        text: "Something went wrong while deleting.",
      });
    }
  };

  /* ================= MODAL CONTROL ================= */

  const openModel = (item = null) => {
    if (item) {
      setEditingItem(item);
      setFormData({
        name: item.name || "",
        email: item.email || "",
        phone: item.phone || "",
        aadhar: item.aadhar || "",
        working: item.working || "",
        portion: item.portion || "",
        status: item.status || "active",
      });
    } else {
      setEditingItem(null);
      setFormData({
        name: "",
        email: "",
        phone: "",
        aadhar: "",
        working: "",
        portion: "",
        status: "active",
      });
    }

    setIsModalOpen(true);
  };

  const closeModel = () => {
    setIsModalOpen(false);
    setEditingItem(null);
    setFormData({
      name: "",
      email: "",
      phone: "",
      aadhar: "",
      working: "",
      status: "active",
      portion: "",
    });
  };

  /* ================= UI ================= */

  return (
    <div className="min-h-screen bg-gray-950">
      <header className="bg-gray-900 shadow-xl border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-cyan-500  rounded-lg">
              <Users size={28} className="text-gray-900" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Tenant List</h1>
              <p className="text-gray-400">
                Manage your tenants efficiently
              </p>
            </div>
          </div>
<div className="flex gap-2">

          {/* ✅ Toggle button (no UI break) */}
          <button
            onClick={() => setShowSensitive(!showSensitive)}
            className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold"
          >
            {showSensitive ? "Hide Sensitive" : "Show Sensitive"}
          </button>

          <button
            onClick={() => openModel()}
            className="flex items-center gap-2 bg-green-500 text-gray-900 px-5 py-2.5 rounded-lg hover:bg-green-400 transition-colors shadow-lg font-semibold"
          >
            <Plus size={20} />
            Add Tenant
          </button>


</div>

        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
  <StatsCard
    title="Total Tenants"
    value={{ number: totalUsers }}
    icon={<Users />}
    bgIcon="bg-purple-750"
    iconColor="text-white"
    gradientFrom="from-purple-500"
    gradientTo="to-purple-700"
  />

  <StatsCard
    title="Active Tenants"
    value={{ number: stats.active }}
    icon={<Users />}
    bgIcon="bg-yellow-750"
    iconColor="text-white"
    gradientFrom="from-yellow-400"
    gradientTo="to-yellow-600"
  />

  <StatsCard
    title="Inactive Tenants"
    value={{ number: stats.inactive }}
    icon={<Users />}
    bgIcon="bg-orange-750"
    iconColor="text-white"
    gradientFrom="from-orange-500"
    gradientTo="to-orange-700"
  />
</div>

        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          onClear={() => {
            setSearchTerm("");
            setCurrentPage(1);
          }}
          itemsPerPage={itemsPerPage}
          onItemsPerPageChange={(val) => {
            setItemsPerPage(val);
            setCurrentPage(1);
          }}
          currentPage={currentPage}
          totalUsers={totalUsers}
        />

        {/* ✅ Pass masked users */}
        <UserTable
          users={displayedUsers}
          onEdit={openModel}
          onDelete={handleDelete}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />

        <UserModel
          isOpen={isModalOpen}
          onClose={closeModel}
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleSubmit}
          editingItem={editingItem}
          loading={loading}
        />
      </main>
    </div>
  );
}

export default App;