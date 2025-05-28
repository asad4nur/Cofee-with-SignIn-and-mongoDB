import { Link, useLoaderData } from "react-router";
import Cofee from "./components/Cofee";
import { useState } from "react";

const Cofees = () => {

    const allCofee = useLoaderData();

    const [cofees, setCofees] = useState(allCofee);

    return (

        <div>
            <div className="my-20">
                <div className="max-w-11/12 mx-auto flex flex-col items-center justify-center text-center space-y-4 px-4">
                    <p className="text-[#331A15]/70">--- Sip & Savor ---</p>
                    <h2 className="text-[#331A15] font-bold text-4xl">Our Popular Products</h2>
                    <Link to='/addcofee' className=" bg-[#E3B577] hover:bg-[#c59e50] text-white text-2xl font-bold p-3 rounded">Add Coffee</Link>

                    <div className="grid grid-cols-2 gap-5 ">
                        {
                            allCofee.map((cofee, idx) => <Cofee key={idx} cofee={cofee} cofees={cofees} setCofees={setCofees}></Cofee>)
                        }
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Cofees;