import { FaEye } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";



const Cofee = ({ cofee, cofees, setCofees }) => {
    const { _id, name, chef, category, photo } = cofee;

    console.log(cofee);

    const handleDelteCofee = (_id) => {
        console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/cofee/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('Delete response:', data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            })
                            const remaining = cofees.filter(singleCofee => singleCofee._id !== _id);
                            setCofees(remaining);
                        }
                    })
            }
        });


    }
    return (
        <div>
            <div className="card card-side shadow-sm bg-[#F5F4F1]/70">
                <figure>
                    <img
                        src={photo}
                        alt="Movie" className="rounded bg-white" />
                </figure>
                <div className="card-body items-start space-y-1">
                    <p>
                        <span className="font-bold">Name:</span>{" "}
                        <span className="font-normal">{name}</span>
                    </p>
                    <p>
                        <span className="font-bold">Chef:</span>{" "}
                        <span className="font-normal">{chef}</span>
                    </p>
                    <p>
                        <span className="font-bold">Category:</span>{" "}
                        <span className="font-normal">{category}</span>
                    </p>
                </div>
                <div className="card-actions justify-end p-10 text-2xl flex flex-col">
                    <button className="bg-[#D2B48C] p-3 rounded"> <FaEye className="text-white" /> </button>
                    <Link to={`updatecofee/${_id}`} className="bg-[#3C393B] p-3 rounded"> <FaPencilAlt className="text-white" /> </Link>
                    <button onClick={() => handleDelteCofee(_id)} className="bg-[#EA4744] p-3 rounded"> <MdDelete className="text-white" /> </button>
                </div>
            </div>
        </div>
    );
};

export default Cofee;