import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2"; // ✅ Import SweetAlert2
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const SignUp = () => {
  const [role, setRole] = useState("student");
  const [skills, setSkills] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const payload = {
      name: fullName.trim(),
      email: email.trim(),
      password: password.trim(),
      role,
      ...(role === "student" && { skills: skills.trim() }),
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/signup",
        payload
      );
      console.log(response.data);

      // ✅ Sweet confirmation popup
      MySwal.fire({
        icon: "success",
        title: "Signup Successful!",
        text: "You can now log in.",
      }).then(() => {
        navigate("/auth/login");// <-- this is the redirect
      });

     navigate("/auth/login");
    } catch (err: any) {
      console.error("Signup Error:", err);

      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else if (err.message === "Network Error") {
        setError(
          "Cannot connect to server. Please check your internet or try again later."
        );
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  // ... keep the rest of your JSX the same

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-white p-4">
      <Link
        to="/"
        className="absolute top-7 left-44 text-[#266464] hover:underline text-sm sm:text-base font-medium"
      >
        ← Back Home
      </Link>

      <div className="w-full max-w-6xl bg-gray-50 rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden relative">
        <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            Sign Up
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-950"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-950"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-950"
              required
            />

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-950"
            >
              <option value="student">Student</option>
              <option value="client">Client</option>
            </select>

            {role === "student" && (
              <input
                type="text"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                placeholder="Skills (e.g., JavaScript, Python)"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-950"
              />
            )}

            {error && (
              <p className="text-red-500 text-sm font-medium">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#266464] text-white rounded-lg hover:bg-green-900 transition disabled:opacity-50"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>

            <p className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-[#266464] hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>

        <div className="hidden md:flex flex-col items-center justify-center gap-6 px-2 bg-[#f3f4f6] relative">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="w-2 h-8 bg-black rounded-full shadow-sm" />
          ))}

          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow" />
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-yellow-400 text-xl rotate-[15deg]">
            ⭐
          </div>
          <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-32 h-20 bg-green-700 text-sm text-gray-800 font-medium rounded-sm shadow-md p-2 rotate-[-6deg] flex items-center justify-center">
            Don’t forget to <br /> sign up! 💬
          </div>
        </div>

        <div className="w-full md:w-1/2 relative flex items-center justify-center bg-white min-h-[300px] md:min-h-0">
          <img
            src="/images/signupimage.jpg"
            alt="Top Left"
            className="absolute top-4 left-4 w-[70px] h-[70px] md:w-[100px] md:h-[100px] object-cover rounded-full shadow-md border-2 border-white rotate-3"
          />
          <img
            src="/images/signupimage.jpg"
            alt="Top Right"
            className="absolute top-6 right-4 w-[60px] h-[60px] md:w-[90px] md:h-[90px] object-cover rounded-xl shadow-lg border-2 border-white rotate-[-6deg]"
            style={{
              clipPath:
                "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
            }}
          />
          <img
            src="/images/signupimage.jpg"
            alt="Bottom Left"
            className="absolute bottom-6 left-6 w-[60px] h-[60px] md:w-[90px] md:h-[90px] object-cover shadow-md border-2 border-white rotate-[8deg]"
            style={{
              clipPath:
                "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
              borderRadius: "8px",
            }}
          />
          <img
            src="/images/signupimage.jpg"
            alt="Bottom Right"
            className="absolute bottom-4 right-6 w-[70px] h-[70px] md:w-[110px] md:h-[110px] object-cover shadow-md border-2 border-white rotate-[-10deg]"
            style={{ clipPath: "circle(40% at 60% 40%)" }}
          />
          <div className="relative z-10 w-[110px] h-[130px] md:w-[190px] md:h-[200px] bg-white shadow-lg border border-gray-200 p-1 flex items-center justify-center rotate-[18deg]">
            <img
              src="/images/signupimage.jpg"
              alt="Center"
              className="w-full h-full object-cover rounded-md"
            />
            <span className="absolute bottom-1 left-1/2 -translate-x-1/2 text-xs text-black-500 font-semibold">
              Class of 2025 📸
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
