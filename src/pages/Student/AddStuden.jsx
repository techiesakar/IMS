import DataLayout from "components/ui/DataLayout";
import React, {  useState,useCallback,useMemo } from "react";
// import { AiFillDelete } from "react-icons/ai";
// import { BsPencilFill } from "react-icons/bs";
import {Formik, Form,ErrorMessage,Field} from 'formik'
import axios from 'axios'
const AddStudent = () => {
  const [Status, setStatus] = useState(false);
//   const [customerPhone, setCustomerPhone] = useState(null);
  const [Coures, setCourses] = useState([]);



  let data = [
    {
      name: "name",
      label:'Name'
    },
    {
      name: "contact_no",
      label: 'Contact No',
      
    },
    {
      name: "address",
      label: 'Address',
    },
    {
      name: "email",
      label: 'Email',
    },
    {
      name: "gurdain_name",
      label: 'Guardain Name',
    },
    {
      name: "gurdain_no",
      label:'Guardian Number',
    },
    {
      name: "Gender",
      label:'Gender',
      type: "select",
      options: [
        {
            id: "",
            value: "select gender",
          },
        {
          id: "male",
          value: "Male",
        },
        {
          id: "female",
          value: "Female",
        }, 
      ]
    },
    {
      name: "Date",
      type:"date",
    label: 'Joining Date'
    },
    {
      name: "Course",
      type: "select",
      label: 'Course',
      options: [
        {
          id: "1",
          value: "Office Administrative Package",
        },
        {
          id: "1",
          value: "Accounting Package",
        },
        {
            id: "1",
            value: "Digital marketing",
          },
          {
            id: "1",
            value: "Advance Excel",
          },
          {
            id: "1",
            value: "Python",
          },
          {
            id: "1",
            value: "Autocad(2d/3d)",
          },
          {
            id: "1",
            value: "Web Designing",
          },
          {
            id: "1",
            value: "Python with django",
          },
          {
            id: "1",
            value: "Flutter",
          },
          {
            id: "1",
            value: "Basic Hardware and Networking",
          },
          {
              id: "1",
              value: "Mobile repairing",
            },
            {
              id: "1",
              value: "CCNA",
            },
            {
              id: "1",
              value: "Python",
            },
            {
              id: "1",
              value: "Autocad(2d/3d)",
            },
            {
              id: "1",
              value: "Cyber Security",
            },
            {
              id: "1",
              value: "Mern",
            },
            {
                id: "1",
                value: "Web Designing and Development",
              },
              {
                id: "1",
                value: "Linux",
              },
              {
                id: "1",
                value: "Banking Training",
              },
        
      ],
    },
    {
      name: "Shift",
      type: "select",
      label: 'Shift',
      options: [
        {
            id: "",
            value: "select shift",
          },
        {
          id: "morning",
          value: "Morning",
        },
        {
          id: "evening",
          value: "Evening",
        },
        
      ],
    },
  
    {
      name: "SourceOfInformation",
      label: 'Source Of Information',
    },
      
    
    {
        name: "Level_Of_Education",
        type: "select",
        label: 'Level Of Education',
        options: [
          {
            id: "",
            value: "select level of education",
          },
          {
            id: "see",
            value: "see",
          },
          {
            id: "+2",
            value: "+2",
          },
          {
              id: "bachelor",
              value: "bachelor",
            },
            {
                id: "masters",
                value: "masters",
              },
        ],
      }, {
        name: "schoolName",
        label: 'School Name',
      },
      {
        name: "refered_by",
        label: 'Referred By',
      },
      {
        name: "referal_contact_no",
        label: 'Referral Contact No',
      },
      {
        name: "discount",
        label:'Discount',
      },
      {
        name: "Stage",
        label: 'Stage',
      },
      {
        name: "status",
        label: 'Status',
        type: "select",
        options: [
          {
            id: "",
            value: "select status",
          },
          {
            id: "active",
            value: "Active",
          },
          {
            id: "completed",
            value: "Completed",
          },
          {
              id: "canceled",
              value: "Canceled",
            },
          
        ],
      },
  ];

//   const getCustomerData = () => {
//     setCustomerProfile(!customerProfile);
//   };

//   const handleNumberChange = (e) => {
//     setCustomerPhone(e.target.value);
//   };
//   useEffect(() => {
//     getCustomerData();
//   }, [customerPhone]);



const getCourse=useCallback(
  () => {
    try{
        axios.get('https://hubitbackend.onrender.com/course').then(res=>{
            if(res.status===200){
                setCourses([...res.data.data])
            }
        }).catch(err=>{
            console.log(err)
        })
    }catch(err){
        console.log(err)
    }
  },
  [Status],
)
let datas=[]
Coures.map((val,i)=>{
    let data={
        id:val.course_name,
        value:val.course_name
    };
    return datas.push(data)
})

useMemo(() =>getCourse() , [Status])


data[8].options=[{id:'',value:"select course"},...datas]
const postdata=(values)=>{
    try {

        const formdata=new FormData();
        formdata.append('name',values.name);
        formdata.append("contact_no",values.contact_no);
        formdata.append("address",values.address);
        formdata.append("email",values.email);
        formdata.append("gurdain_name",values.gurdain_name);
        formdata.append("gurdain_no",values.gurdain_no);
        formdata.append("Course",values.Course);
        formdata.append("Date",values.Date);

        formdata.append("status",values.status);
        formdata.append("Stage",values.Stage);
        formdata.append("Shift",values.Shift);
        formdata.append("Level_Of_Education",values.Level_Of_Education);
        formdata.append("refered_by",values.refered_by);
        formdata.append("referal_contact_no",values.referal_contact_no);
        formdata.append("SourceOfInformation",values.SourceOfInformation);
        formdata.append("Category_name",values.Category_name);
        formdata.append("schoolName",values.schoolName);
        formdata.append("schoolCourseTaken",values.schoolCourseTaken);
        formdata.append("discount",values.discount);
        formdata.append("Gender",values.Gender);
        formdata.append("image",values.Image);

        axios.post('https://hubitbackendstudentltd.onrender.com/studentinfo',formdata).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    } catch (error) {
        
    }
}

  return (
    <DataLayout
      title="students"
      showFilter={false}
    //   showEdit={true}
      showViewAll={true}
    //   addItemLink="/sales/add"
      viewAllLink="/students"
    >
      <div>
        <Formik
        initialValues={{
            name: "",
            contact_no: "",
            address: "",
            email: "",
            gurdain_name: "",
            gurdain_no: "",
            Course: "",
            status: "",
            Stage: "",
            shift:"",
            Level_Of_Education: "",
            refered_by: "",
            referal_contact_no:"",
            SourceOfInformation: "",
            Category_name: "",
            schoolName: "",
            schoolCourseTaken: "",
            discount:'',
            Gender:"",
            Image:"",
            Date:""
        }}
        onSubmit={(values)=>{
            alert('fd')
            postdata(values)
        }}
        >
{({handleSubmit,setFieldValue})=>{
    return <Form onSubmit={handleSubmit} className=''  >
<div className='capitalize grid py-6 grid-cols-2 gap-6'>
{
    data.map((val,i)=>{
      if(val.type==='select'){
        return(
            <div key={i} className='flex flex-col justify-start  gap-3 w-full '>
            <label className=' flex  w-full '>{val.label}</label>
            <Field as={val.type} placeholder={val.name} name={val.name} 
            className='px-2 py-2 w-full border border-gray-300 rounded-md' >
                {
                    val.options.map((item,index)=>{
                        return <option kwy={index} value={item.id}>{item.value}</option>
                    })
                }
            </Field>
            <ErrorMessage name={val.name} component={'div'} className='text-sm text-red-500'/>
        </div>
        )
      }else{
       return <div key={i} className='flex flex-col justify-start  gap-3 w-full '>
        <label className=' flex w-full '>{val.label}</label>
        <Field type={val.type} placeholder={val.name} name={val.name} 
        className='px-2 py-2 w-full border border-gray-300 rounded-md' />
        <ErrorMessage name={val.name} component={'div'} className='text-sm text-red-500' />
    </div>
      }
    })
}
</div>
<div className='flex flex-col justify-start  gap-3 w-full '>
    <label htmlFor="image" className=' flex w-full '>Image</label>
    <input onChange={(e)=>{
setFieldValue('Image',e.target.files[0])
    }} id="image" type="file"  className='px-2 py-2 w-full border border-gray-300 rounded-md'/>
</div>
<div className='flex w-full justify-start mt-4'>
<button type="submit" className='px-12  text-white py-4 bg-green-400 w-fit h-fit rounded-md'>Submit</button>

</div>
    </Form>
}}
        </Formik>
      </div>
    </DataLayout>
  );
};

export default AddStudent;
