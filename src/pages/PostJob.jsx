import { useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from 'react-select/creatable';


const PostJob = () => {
   const [selectedOption, setSelectedOption]=useState(null);
    const {
        register,
        handleSubmit,reset,
       
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) =>{ 
         data.skills= selectedOption;
         // console.log(data);
         fetch("http://localhost:3000/post-job",{ 
            method: "POST",
            headers :{'content-type':'application/json'},
            body: JSON.stringify(data)
         })
         .then((res)=>res.json())
         .then((result) => { 
            console.log(result);
            if(result.acknowledged === true){ 
               alert("Job Posted successfuly!!!")
            }
            reset()
         });
      };

      const options =[
         {value:"JavaScript",label:"JavaScript"},
         {value:"C++",label:"C++"},
         {value:"HTML",label:"HTML"},
         {value:"CSS",label:"CSS"},
         {value:"ReactJS",label:"ReactJS"},
         {value:"NodeJS",label:"NodeJS"},
         {value:"MongoDB",label:"MongoDB"},
         {value:"Redux",label:"Redux"},
      ]
  return (
    <div className='max-w-screen-2xl container mx-auto  xl:px-20 px-6 md:'>
      {/* form */}
      <div className='bg-[#FAFAFA] py-10 px-4 lg:px-16'>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

        {/* first row */}

        <div className="create-job-flex">
               <div className="lg:w-1/2 w-full">
                  <label className="block mb-2 text-lg">Job Title</label>
                  <input type="text" defaultValue={"wev Developer"} 
                  {...register("jobTitle")} className="create-job-input"/>
               </div>
               <div className="lg:w-1/2 w-full">
                  <label className="block mb-2 text-lg">Company Name</label>
                  <input type="text" placeholder="Ex: Google"
                  {...register("companyName")} className="create-job-input"/>
               </div>
        </div>

            {/* 2nd row */}
            <div className="create-job-flex">
               <div className="lg:w-1/2 w-full">
                  <label className="block mb-2 text-lg">Minimum Salary</label>
                  <input type="text"placeholder="$20k" 
                  {...register("minPrice")} className="create-job-input"/>
               </div>
               <div className="lg:w-1/2 w-full">
                  <label className="block mb-2 text-lg">Maximum Salary</label>
                  <input type="text" placeholder="$120k"
                  {...register("maxPrice")} className="create-job-input"/>
               </div>
        </div>
       
       {/* 3rd row */}

       <div className="create-job-flex">
               <div className="lg:w-1/2 w-full">
                   <label className="block mb-2 text-lg">Salary Type</label>
                 <select {...register("salaryType")} className="create-job-input">
                     <option value="">Choose your salary</option>
                     <option value="Hourly">Hourly</option>
                     <option value="Monthly">Monthly</option>
                     <option value="Yearly">Yearly</option>
                 </select>

               </div>
               <div className="lg:w-1/2 w-full">
                  <label className="block mb-2 text-lg">Job Location</label>
                  <input type="text" placeholder="Ex: Noida"
                  {...register("jobLocation")} className="create-job-input"/>
               </div>
        </div>

        {/* 4th row */}
        <div className="create-job-flex">
        <div className="lg:w-1/2 w-full">
                  <label className="block mb-2 text-lg">Job Posting Date</label>
                  <input type="date" placeholder="Ex: 2024-08-10"
                  {...register("postingDate")} className="create-job-input"/>
               </div>
               <div className="lg:w-1/2 w-full">
                   <label className="block mb-2 text-lg">Experance Level</label>
                 <select {...register("experienceLevel")} className="create-job-input">
                     <option value="">Choose your experance</option>
                     <option value="NoExperience">Fresher</option>
                     <option value="Internship">Internship</option>
                     <option value="Work remotely">Work remotely</option>
                 </select>

               </div>
              
        </div>
       
       {/* 5th row */}
        <div>
        <label className="block mb-2 text-lg">Required Skill Sets:</label>
               <CreatableSelect
               defaultValue={selectedOption}
               onChange={setSelectedOption}
               options={options}
               isMulti
               className="create-job-input py-4"/>
        </div>

        {/* 6th row */}
        <div className="create-job-flex">
        <div className="lg:w-1/2 w-full">
                  <label className="block mb-2 text-lg">Company Logo</label>
                  <input type="url" placeholder="Ex: Paste your company logo URL: https://weshare.com/img1"
                  {...register("companyLogo")} className="create-job-input"/>
               </div>
               <div className="lg:w-1/2 w-full">
                   <label className="block mb-2 text-lg">Employment Type</label>
                 <select {...register("emloymentType")} className="create-job-input">
                     <option value="">Choose your employment type</option>
                     <option value="Full-time">Full-time</option>
                     <option value="Part-time">Part-time</option>
                     <option value="Temporary">Temporary</option>
                 </select>

               </div>
              
        </div>
        {/* 7th row */}
        <div className="w-full">
        <label className="block mb-2 text-lg">Job Description</label>
        <textarea className="w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-700" 
        rows={6}
        placeholder="Write Here.."
        {...register("description")}/>
        </div>
          {/* 8th ror */}
          <div className="w-full">
          <label className="block mb-2 text-lg">Job Posted By:</label>
          <input type="email" placeholder=" Your email"
                  {...register("postedBy")} className="create-job-input"/>
          </div>

      <input type="submit"  className="block  mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer"/>
    </form>
      </div>
    </div>
  )
}

export default PostJob
