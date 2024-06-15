"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/Components/ui/3d-card";
import Link from "next/link";
import CourseData from "@/Components/Our_Courses/course_data.json";
import { Course } from "@/Interface/Interface";
const page = () => {
  return (
    // <div className=" w-full h-full">
    //   <h2 className="font-extrabold mt-40 text-3xl text-white text-center">
    //     All Courses({CourseData.courses.length})
    //   </h2>
    //   <div className="cardsMain flex flex-wrap justify-center items-center gap-2">
    //     {CourseData.courses?.map((course: Course) => (
    //       <CardContainer key={course.id} className="inter-var">
    //         <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
    //           <CardItem
    //             translateZ="50"
    //             className="text-xl font-bold text-neutral-600 dark:text-white"
    //           >
    //             {course.title}
    //           </CardItem>
    //           <CardItem
    //             as="p"
    //             translateZ="60"
    //             className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
    //           >
    //             {course.description}
    //           </CardItem>
    //           <CardItem translateZ="100" className="w-full mt-4">
    //             <Image
    //               src={course.image}
    //               height="1000"
    //               width="1000"
    //               className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
    //               alt="thumbnail"
    //             />
    //           </CardItem>
    //           <div className="flex justify-between items-center mt-20">
    //             <CardItem
    //               translateZ={20}
    //               as={Link}
    //               href="https://twitter.com/mannupaaji"
    //               target="__blank"
    //               className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
    //             >
    //               Try now →
    //             </CardItem>
    //             <CardItem
    //               translateZ={20}
    //               as="button"
    //               className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
    //             >
    //               Enroll Now
    //             </CardItem>
    //           </div>
    //         </CardBody>
    //       </CardContainer>
    //     ))}
    //   </div>
    // </div>
    <h2 className="text-white">Course Page</h2>
  );
};

export default page;
