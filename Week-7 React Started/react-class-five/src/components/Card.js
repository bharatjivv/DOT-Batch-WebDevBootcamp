import React from "react";
import {FcLike, FcLikePlaceHolder} from "react-icons"

const Card = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;
    
    function clickHandler() {
        // logic
        if(likedCourses.includes(course.id)) {
            //pehle se like kiya hua hai
            setLikedCourses( (prev) => prev.filter((cid) => (cid!== course.id) ) );
            toast.warning("Like removed");
        }
        else{
            // pehle se like nahi hai ye course
            // insert karna hai ye course liked courses me 
            if(likedCourses.length === 0) {
                setLikedCourses([course.id]);
            }
            else{
                //non-empty 
                setLikedCourses( (prev) => [...prev. course.id]);
            }
            toast.success("Liked");
        }
    }
    return (
        <div className="w-[300px] bg-bgDark rounded-md overflow-hidden bg-opacity-80">

            <div className="relative">
                <img src={course.img.url}/>
            </div>


            <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-0.52] grid place-items-center">
                <button onClick={clickHandler}>

                    {
                        !likedCourses.includes(course.id) ?
                        (<FcLikePlaceHolder fontSize="1.75rem" />) :
                        (<FcLike fontSize="1.75rem" />)
                    }
                   
                </button>
            </div>


            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6"> {course.title} </p>
                <p className="mt-2 text-white">
                    {
                        course.description.length > 100 ?
                        (course.description.substr(0, 100)) + "..." : 
                        (course.description)
                    }
                </p>
            </div>


        </div>
    )

}

export default Card;