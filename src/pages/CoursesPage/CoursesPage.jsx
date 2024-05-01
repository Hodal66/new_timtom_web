// import { useState } from "react";
// import CoursesCard from "../../components/Cards/CoursesCard";
// import HeadingOne from "../../components/Headings/HeadingOne";
// import { CourseData } from "../../database/static/CoursesData";

// function CoursesPage() {
  
//   return (
//     <main>
//       <HeadingOne headingTitle={"Courses Offered at Timtom Aviation"} />
//       <section className="grid grid-cols-2 gap-4 py-8">
//         {CourseData.map((course) => {
//           return (
//             <div key={course.id}>
//               <CoursesCard
//                 content={course.contents}
//                 image={course.image}
//                 imageAlt={course.imageAlt}
//                 link={course.link}
//                 title={course.courseName}
//                 key={course.id}
//                 money={course.money}
//               />
//             </div>
//           );
//         })}
//       </section>
//     </main>
//   );
// }

// export default CoursesPage;
