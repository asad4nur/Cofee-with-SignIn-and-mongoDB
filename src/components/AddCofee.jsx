import NavBar from "./NavBar";
import Swal from 'sweetalert2'

const AddCofee = () => {

    const handleAddCofee = e => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCofee = { name, chef, supplier, taste, category, details, photo };

        console.log(newCofee);

        fetch('http://localhost:5000/cofee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCofee),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Cofee Added Succesfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }

            })

    }

    return (
        <div>
            <NavBar />
            <div className="bg-[#F4F3F0] min-h-screen py-12">
                <div className="max-w-7xl mx-auto px-4 md:px-10">
                    {/* Centered Heading & Paragraph */}
                    <div className="text-center max-w-3xl mx-auto mb-8">
                        <h3 className="text-3xl font-bold text-[#374151] mb-4">Add New Coffee</h3>
                        <p className="text-[#6B7280]">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here'.
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleAddCofee} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block mb-1 font-medium text-gray-700">Name</label>
                            <input type="text" name="name" placeholder="Enter Coffee Name" className="input input-bordered w-full" />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium text-gray-700">Chef</label>
                            <input type="text" name="chef" placeholder="Enter Coffee Chef" className="input input-bordered w-full" />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium text-gray-700">Supplier</label>
                            <input type="text" name="supplier" placeholder="Enter Coffee Supplier" className="input input-bordered w-full" />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium text-gray-700">Taste</label>
                            <input type="text" name="taste" placeholder="Enter Coffee Taste" className="input input-bordered w-full" />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium text-gray-700">Category</label>
                            <input type="text" name="category" placeholder="Enter Coffee Category" className="input input-bordered w-full" />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium text-gray-700">Details</label>
                            <input type="text" name="details" placeholder="Enter Coffee Details" className="input input-bordered w-full" />
                        </div>

                        <div className="md:col-span-2">
                            <label className="block mb-1 font-medium text-gray-700">Photo</label>
                            <input type="text" name="photo" placeholder="Enter Coffee Photo URL" className="input input-bordered w-full" />
                        </div>

                        <div className="md:col-span-2">
                            <button className="btn bg-[#E3B577] hover:bg-[#8d6c4d] text-black w-full">Add Coffee</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCofee;
