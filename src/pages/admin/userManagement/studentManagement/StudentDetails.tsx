import { useParams } from "react-router-dom";

const StudentDetails = () => {
  const { studentId } = useParams();
  return (
    <div>
      <p>this is student details of {studentId}</p>
    </div>
  );
};

export default StudentDetails;

//TODO: Ei page e a student er sob data information show kore update korte hobe
